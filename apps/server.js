const mongoose = require('mongoose');
const { ApolloServer, makeExecutableSchema } = require('apollo-server');
var resolvers = require('./resolvers');
var typeDefs = require('./types')


const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})




  const server = new ApolloServer({ schema });

mongoose.connect('mongodb+srv://usuariomongo:contrasenamongo@sistema1.6tfzp.mongodb.net/test', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Mongo conectado')
}).catch(error => console.log(error));

  server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });