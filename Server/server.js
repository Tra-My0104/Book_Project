const express = require("express");
const server = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const connection = require("./Utils/connection");

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(cors());

// lấy sản phẩm từ api
server.get("/api/v1/products", (req, res) => {
  const query = "SELECT * FROM bookstore_schema.products";
  connection
    .execute(query)
    .then(([rows, fields]) => {
      res.status(200).json({
        status: 200,
        message: "OK",
        data: rows,
      });
    })
    .catch((error) => {
      console.error("Lỗi truy vấn: ", error);
      res.status(500).json({
        status: 500,
        message: "Lỗi server",
      });
    });
});



server.listen(4000, () => {
  console.log("http://localhost:4000");
});
