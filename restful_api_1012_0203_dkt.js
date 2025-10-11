// 代码生成时间: 2025-10-12 02:03:22
// restful_api.js

// 使用Express框架来创建RESTful API
const express = require('express');
const app = express();
const port = 3000;

// 使用lodash来处理数据
const _ = require('lodash');

// 模拟数据库
let users = [{
    