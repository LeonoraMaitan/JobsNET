const mongoClient = require("mongodb").MongoClient;
mongoClient.connect("mongodb://localhost:27017")
            .then(conn => global.conn = conn.db("jobs-net"))
            .catch(err => console.log(err));
 
function insert(customer) {
    return global.conn.collection("candidatos").insertOne(customer);
}
 
module.exports = { insert }