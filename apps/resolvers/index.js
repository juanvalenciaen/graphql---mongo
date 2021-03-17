var path = require("path");
var { fileLoader, mergeResolvers } = require("merge-graphql-schemas");
const typesArray = fileLoader(path.join(__dirname , "./"));

module.exports = mergeResolvers(typesArray, {all:true});