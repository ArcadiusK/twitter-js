var _ = require("underscore");
// var io = require("socket.io");
var data = [];
 
module.exports = {
  push: function(name, text){
  var dataobj = {
    "name": name,
    "text": text,
    "id":data.length
  };
  data.push(dataobj);
  return dataobj;
  // io.sockets.emit("new_tweet", dataobj);
},
  list: function(){
  return data;
},
  find: function(properties){
  return _.where(data, properties);
}
}


var randArrayEl = function(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};
 
var getFakeName = function() {
  var fakeFirsts = ['Nimit', 'Dave', 'Will', 'Charlotte', 'Jacob','Ethan','Sophia','Emma','Madison'];
  var fakeLasts = ["Alley", 'Stacky', 'Fullstackerson', 'Nerd', 'Ashby', 'Gatsby', 'Hazelnut', 'Cookie', 'Tilde', 'Dash'];
  return randArrayEl(fakeFirsts) + " " + randArrayEl(fakeLasts);
};
 
var getFakeTweet = function() {
  var awesome_adj = ['awesome','breathtaking','amazing','sexy','sweet','cool','wonderful','mindblowing'];
  return "Fullstack Academy is " + randArrayEl(awesome_adj) + "! The instructors are just so " + randArrayEl(awesome_adj) + ". #fullstacklove #codedreams";
};
 
for(var i=0; i<10; i++) {
  module.exports.push(getFakeName(), getFakeTweet());
}

