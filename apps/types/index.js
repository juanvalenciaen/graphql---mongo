var path = require("path");
var { fileLoader, mergeTypes } = require("merge-graphql-schemas");
const typesArray = fileLoader(path.join(__dirname , "./"));

module.exports = mergeTypes(typesArray, {all:true});