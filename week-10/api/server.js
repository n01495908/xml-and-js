// const http = require("http");

// const product = require("./controllers/product");

// const parseParams = (searchParams) => {
//   const params = new URLSearchParams(searchParams);

//   return Array.from(params.entries()).reduce(
//     (acc, [key, value]) => ({ ...acc, [key]: value }),
//     {}
//   );
// };

// const server = http.createServer(async (req, res) => {
//   const [basePath, searchParams] = req.url.split(`?`);

//   if (basePath === `/api/products` && req.method === "GET") {
//     const params = parseURLParams(paramsString);

//     const { data, code } = await product.getAll(params);

//     res.writeHead(code, { "Content-Type": "application/json" });
//     res.end(data);
//   } else if (basePath.match(/\/api\/products\/\w+/) && req.method === "GET") {
//     const id = basePath.split("/")[3];

//     const { data, code } = await product.getById(id);

//     res.writeHead(code, { "Content-Type": "application/json" });
//     res.end(data);
//   } else {
//     res.writeHead(404, { "Content-Type": "application/json" });
//     res.end(JSON.stringify({ message: "Route Not Found" }));
//   }
// });

// const PORT = 8888;

// server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// module.exports = server;

const http = require("http");

const product = require("./controllers/product");

const parseParams = (searchParams) => {
  const params = new URLSearchParams(searchParams);

  return Array.from(params.entries()).reduce(
    (acc, [key, value]) => ({ ...acc, [key]: value }),
    {}
  );
};

const server = http.createServer(async (req, res) => {
  const [basePath, searchParams] = req.url.split(`?`);

  if (basePath === `/api/products`) {

    const { data, code } = await product.getAll(parseURLParams(paramsString));

    res.writeHead(code);
    res.end(data);
  } else if (basePath.match(/\/api\/products\/\w+/)) {
    const id = basePath.split("/")[3];

    const { data, code } = await product.getById(id);

    res.writeHead(code, { "Content-Type": "application/json" });
    res.end(data);
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Route Not Found" }));
  }
});

const PORT = 8888;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = server;