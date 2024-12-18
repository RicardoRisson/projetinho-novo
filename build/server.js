"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_1 = require("./routes/index");
const http_status_codes_1 = require("http-status-codes");
require("dotenv/config");
///// imports
const server = (0, express_1.default)();
/////variaveis
server.use(express_1.default.json());
server.use(index_1.router);
/////server uses
server.get("/teste", (req, res) => {
    console.log(req.params);
    res.send("testando");
});
server.get("/", (req, res) => {
    res.status(http_status_codes_1.StatusCodes.PAYMENT_REQUIRED).json(req.body);
});
/////starta server
server.listen(process.env.PORT || 3000, () => {
    return console.log(`software rodando na porta ${process.env.PORT || 3000}`);
});
