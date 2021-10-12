module.exports = {
  DB_CONNECTION: process.env.DB_CONNECTION || "mongodb://user:password@mongo:27017/?authSource=admin",
  PORT: process.env.PORT || 5000,
};
