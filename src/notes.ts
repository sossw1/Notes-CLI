import * as fs from 'fs';

interface Note {
  title: string,
  body: string
}

function addNote(title: string, body: string): void {
  const notes: Array<Note> = loadNotes();
  const newNote: Note = {
    title: title,
    body: body
  }
  const duplicateNotes = notes.filter((note) => {
    return note.title === title;
  });

  if(duplicateNotes.length === 0) {
    notes.push(newNote);
    console.log('Adding note: ', newNote);
    saveNotes(notes);
  } else {
    console.log('Note title already exists')
  }
}

function saveNotes(notes: Array<Note>): void {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync('notes.json', dataJSON);
}

function loadNotes(): Array<Note> {
  try {
    const dataBuffer: Buffer = fs.readFileSync('notes.json');
    const dataJSON = dataBuffer.toString();
    const data: Array<Note> = JSON.parse(dataJSON);
    return data;
  } catch(error) {
    return [];
  }
}

export default {
  addNote: addNote,
  loadNotes: loadNotes
}