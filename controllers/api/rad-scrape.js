const request = require("request");
const cheerio = require("cheerio");
const fs = require("fs");
// const radkoProduct = require("../../models/radkoProducts");
const writeStream = fs.createWriteStream("data/RadkoProductFeed.csv");

// Write Headers to CSV
writeStream.write(
  `id,title,category,description,link,image_link,availability,price,brand,identifier_exists \n`
);

module.exports = () => {
  const mainURL = "https://www.christopherradko.com";
  const first = mainURL => {
    request(mainURL, (error, response, html) => {
      if (!error && response.statusCode == 200) {
        const $ = cheerio.load(html);
        $(".actuator").each((i, el) => {
          const categoryHref = $(el).attr("href");
          second(categoryHref); //call second function
        });
      }
    });
  };
  const second = categoryHref => {
    request(categoryHref, (error, response, html) => {
      if (!error && response.statusCode == 200) {
        const $ = cheerio.load(html);
        $(".singleprodname").each((i, el) => {
          const subCategoryHref = $(el)
            .find("a")
            .attr("href");
          third(subCategoryHref);
        });
      }
    });
  };
  const third = subCategoryHref => {
    request(subCategoryHref, (error, response, html) => {
      if (!error && response.statusCode == 200) {
        const $ = cheerio.load(html);
        const category = $(".BreadCrumbSpacer")
          .next()
          .text();
        // Product Sku
        const sku = $("#ucContentMiddleCenter_lblSKU").text();
        // Product Name
        const name = $("#ucContentMiddleCenter_lblName")
          .text()
          .replace(/\s*,\s*|\s+,(\r\n\t|\n|\r\t)/g, " - ")
          .replace(/(\r\n\t|\n|\r\t)/g, " ");
        // Product Description
        const description = $("#ucContentMiddleCenter_lblDescription")
          .text()
          .replace(/\s*,\s*|\s+,(\r\n\t|\n|\r\t)/g, " - ")
          .replace(/(\r\n\t|\n|\r\t)/g, " ");
        // Product Link
        const link = subCategoryHref;
        // Image Link
        const image_link = `https://www.christopherradko.com/images/products/${sku}_M.jpg`;
        const price = $("#ucContentMiddleCenter_lblSitePrice")
          .text()
          .replace(",", "")
          .replace("$", "");
        // const products = new radkoProduct({
        //   category: category,
        //   sku: sku,
        //   name: name,
        //   price: price,
        //   description: description,
        //   link: link,
        //   image_link: image_link
        // });
        // products.save();
        // Write Row to CSV
        writeStream.write(
          `${sku},${name},${category},${description},${link},${image_link},In Stock,${price},Christopher Radko,no\n`
        );
      }
    });
  };
  first(mainURL);
};
