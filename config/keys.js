require("dotenv").config();

const password = process.env.PASSWORD

module.exports = {
mongoURI: `mongodb+srv://studentdb:${password}@studentdb.fzvcbxd.mongodb.net/?retryWrites=true&w=majority`,
}