var scraper = require("scraper");
var jQuery = require("jquery");

exports.handler = function(event, context, callback) {
  try {
    scraper("http://search.twitter.com/search?q=javascript", function(
      error,
      jQuery
    ) {
      if (error) {
        console.log(error);
        callback(error);
      }
      callback(null, {
        statusCode: 200,
        body: jQuery(".msg").length
      });
    });
  } catch (error) {
    callback(error);
  }
};
