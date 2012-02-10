var rest = require('restler');

var baseURL = "http://wio-service.heroku.com/";

exports.get = function(id) {
  if (typeof id !== "undefined") {
    return rest.get(baseURL + '/wio');  
  } else {
    return rest.get(baseURL + '/wio/' + id);  
  }
}

exports.add = function(userInfo) {
  if (typeof userInfo == "object") {
    var id = userInfo.nickName;  
  } else if (typeof userInfo == "string") {
    var id = userInfo;
  }
  return rest.post(baseURL + '/wio/' + id, { data: { userInfo: JSON.stringify(userInfo) } });  
};

exports.del = function(id) {
  return rest.del(baseURL + '/wio/' + id);  
}

exports.flush = function() {
  return rest.get(baseURL + '/flush');  
}
