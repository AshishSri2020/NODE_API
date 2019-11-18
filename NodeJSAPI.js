//=====to connect azure database
const { CosmosClient } = require("@azure/cosmos");
const endpoint = "https://sampledb123.documents.azure.com:443/"; // Add your endpoint
const key = "[FhHc2ssWgaENG4IJDGQKGmAG5RYHSy90Gj8U7kFvuP7M31f0WOGR4nEEQHkYBrTEEypzvhGmeQQuv6ujSeCBUw==]"; // Add the masterkey of the endpoint
const client = new CosmosClient({ endpoint, key });

const databaseid = "sample database";
const containerId = "sample collection";

return;

var express = require('express');
var app = express();

//=====end azure database========

