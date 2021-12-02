const fs = require('fs');

function addNote(title, body) {
  console.log('Title: ', title);
  console.log('Body: ', body);
}

module.exports = {
  addNote: addNote
}