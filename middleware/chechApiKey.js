const checkApiKey = (req, res, next) => {
  const apiKey = req.headers["x-api-key"];
  if (!apiKey) {
    return res.status(401).json({
      success: false,
      message: "You need an API key! Add x-api-key to your headers",
    });
  }
  if (apiKey !== "abcd-0123") {
    return res.status(4.3).json({
      success: false,
      message: "Wrong API key!",
    });
  }
  console.log("API Key Verified: ");
  next();
};
module.exports = checkApiKey;
