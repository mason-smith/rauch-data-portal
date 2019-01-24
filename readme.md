# Rauch Brands Data Portal

This project is designed to be a portal through which authenticated users can dynamically collect product data from either of Rauch Brands sites, [JayStrongwater](https://www.jaystrongwater.com/), and [ChristopherRadko](https://www.christopherradko.com/)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them

```
Latest versions of Node. This project uses a yarn workspace but npm is also acceptable
```

### Installing

A step by step series of examples that tell you how to get a development env running

Clone or download the project. CD into the folder on your machine and run the following command to install all packages

```
yarn
```

To run client and server concurrently, use

```
yarn dev
```

or

```
npm run dev
```

To run just the server use

```
yarn server
```

or

```
npm run server
```

Likewise, to run just the client either cd into the client directory and run

```
yarn start
```

Or from the root, run

```
yarn client
```

or

```
npm run client
```

Once either or both processes are running, navigate in your browser to [http://localhost:3000](http://localhost:3000) to view the client, and [http://localhost:8081](http://localhost:8081) to view the server

## Run scraper independently

```
node bin/writeJayPepperjamCSV.js
```

To run the other scraper processes, simply change writeJayPepperjamCSV.js to any alternate .js file

## Running the tests

Tests have not yet been implemented in this software

## Deployment

Currently managed by Heroku

## Built With

- [Node](https://nodejs.org/en/) - The as the server framework
- [Cheerio](https://cheerio.js.org/) - For server side scraping
- [React](https://reactjs.org//) - for the frontend

## Authors

- **Mason Smith** - _Initial work_ - [mason-smith](https://github.com/mason-smith)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

- Thanks to Rauch Brands for giving me the opportunity to build this fun project
