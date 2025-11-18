const simpleLogger = (req, res, next) => {
  console.log("------------new request------------");
  console.log("Type: ", req.method);
  console.log("URL: ", req.url);
  const date = new Date();
  console.log("Time: ", date.toLocaleDateString());
  console.log("-----------------------------------");
  next();
};
module.exports = simpleLogger;
