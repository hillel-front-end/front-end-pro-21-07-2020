const url = 'http://mydomain.log';

function log(message) {
  // Send http request
  console.log(url, message);
}

// module.exports.log = log;
module.exports = {
  log: log,
};
