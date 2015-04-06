#! /usr/bin/env node
var clone = require('git-clone');
var replace = require('replace');

console.log(' --- Dino tools running --- ')

var userArgs = process.argv.splice(2);
var firstArg = userArgs[0];

var rename = function(){
  console.log('changing appName to ' + userArgs[1] + ' in files:')
  replace({
    regex: "appName",
    replacement: userArgs[1],
    paths: [String(userArgs[1])],
    recursive: true,
  });
}


switch (userArgs[0]) {
  case 'start':
    if(userArgs[1]){
      console.log('Dino tools starting project: ', userArgs[1])
      clone('git@github.com:ErikSvedin/svdn-djangular.git', userArgs[1], {}, rename)
    }
    else {
      console.log('Dino tools starting project');
      clone('git@github.com:ErikSvedin/svdn-djangular.git', 'svdn_djangular')
    }
    break;
  case 'greet':
    console.log('Hello sir! You are beautiful!')
    break;
  default:
    console.log('Dino says: You must specify an argument, such as start or greet');
}
