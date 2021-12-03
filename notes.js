const fs = require('fs');

function addNote(title, body) {
  console.log('Title: ', title);
  console.log('Body: ', body);
}

function loadNotes() {
  try {
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch(error) {
    return [];
  }
}

module.exports = {
  addNote: addNote,
  loadNotes: loadNotes
}