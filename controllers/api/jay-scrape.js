const request = require("request");
const cheerio = require("cheerio");
const fs = require("fs");
// const jayProduct = require("../../models/jayProducts");
const writeStream = fs.createWriteStream("data/JayProductFeed.csv");

// Write Headers to CSV
writeStream.write(
  `id,title,description,link,image_link,availability,price,brand,identifier_exists,\n`
);

module.exports = () => {
  const mainURL = "https://www.jaystrongwater.com";
  // First function makes request to main Jay URL
  const first = mainURL => {
    request(mainURL, (error, response, html) => {
      if (!error && response.statusCode == 200) {
        const $ = cheerio.load(html);
        // Set up loop through categories
        $(".jaystrongwater-submenu-cat").each((i, el) => {
          // Grab specific href from each category
          const categoryHref = $(el)
            .children("a")
            .attr("href");
          // Append categoryHref to mainURL
          const categoryUrls = `${mainURL}${categoryHref}`;
          second(categoryUrls); //call second function
        });
      }
    });
  };
  const second = categoryUrls => {
    request(categoryUrls, (error, response, html) => {
      if (!error && response.statusCode == 200) {
        const $ = cheerio.load(html);
        $("a", ".product-title").each((i, el) => {
          const subCategoryHref = $(el).attr("href");
          const subCategoryUrls = `${mainURL}${subCategoryHref}`;
          third(subCategoryUrls);
        });
      }
    });
  };
  const third = subCategoryUrls => {
    request(subCategoryUrls, (error, response, html) => {
      if (!error && response.statusCode == 200) {
        const $ = cheerio.load(html);
        // Product Category
        const category = $("ul.breadcrumb li:nth-child(3)")
          .text()
          .replace(">", "");
        // Product Sku
        const sku = $(".product-details-code")
          .text()
          .replace("SKU: ", "");
        // Product Name
        const name = $("li.active")
          .text()
          .replace(/(["])/g, "in")
          .replace(/\s*,\s*|\s+,(\r\n\t|\n|\r\t)/g, " - ")
          .replace(/(\r\n\t|\n|\r\t)/g, " ");
        // Product Price
        const price = $(".price-current")
          .first()
          .text()
          .replace("$", "")
          .replace(",", "")
          .replace(".00", "");
        // Product Description
        let description;
        if ($("div.product-details-desc").find("p")) {
          description = $(".product-details-desc")
            .find("p")
            .text()
            .replace(/(["])/g, "in")
            .replace(/\s*,\s*|\s+,(\r\n\t|\n|\r\t)/g, " - ")
            .replace(/(\r\n\t|\n|\r\t)/g, " ");
        } else {
          description = $("div.product-details-desc")
            .text()
            .replace(/(["])/g, "in")
            .replace(/\s*,\s*|\s+,/g, " - ")
            .replace(/(\r\n\t|\n|\r\t)/g, " ");
        }
        const link = subCategoryUrls;
        const image_link = $("#product-detail-gallery-main-img").attr("src");
        const availability = $(".box-qty")
          .find("li")
          .text()
          .replace("Availability: ", "");
        const brand = "Jay Strongwater";
        const identifier_exists = "no";

        // const products = new jayProduct({
        //   category: category,
        //   sku: sku,
        //   name: name,
        //   price: price,
        //   description: description,
        //   link: link,
        //   image_link: image_link,
        //   availability: availability,
        //   brand: brand,
        // });
        // products.save();

        // Write Row to CSV
        writeStream.write(
          `${sku},${name},${description},${link},https://www.jaystrongwater.com${image_link},${availability},${price},${brand},${identifier_exists},\n`
        );
      }
    });
  };
  first(mainURL);
};
