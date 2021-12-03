const fs = require('fs');

function addNote(title, body) {
  const notes = loadNotes();
  notes.push({
    title: title,
    body: body
  });
  console.log('Adding note: ', { title, body });
  saveNotes(notes);
}

function saveNotes(notes) {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync('notes.json', dataJSON);
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