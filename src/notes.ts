import * as fs from 'fs';
import chalk from 'chalk';

interface Note {
  title: string;
  body: string;
}

const addNote = (title: string, body: string): void => {
  const notes: Array<Note> = loadNotes();
  const newNote: Note = {
    title: title,
    body: body
  };
  const duplicateNote = notes.find((note) => note.title === title);
  if (!duplicateNote) {
    notes.push(newNote);
    console.log(chalk.green.inverse(`Adding note: { "${title}", "${body}" }`));
    saveNotes(notes);
  } else {
    console.log(chalk.red.inverse('Note title already exists'));
  }
};

const deleteNote = (title: string): void => {
  let notes = loadNotes();
  let itemExists = false;
  notes.forEach((note, index) => {
    if (note.title === title) {
      itemExists = true;
      console.log(
        chalk.green.inverse(
          `Deleting note: { "${note.title}", "${note.body}" }`
        )
      );
      notes.splice(index, 1);
      saveNotes(notes);
    }
  });
  if (!itemExists) {
    console.log(chalk.red.inverse('No note with this title exists'));
  }
};

const listNotes = (): void => {
  const notes = loadNotes();
  console.log(chalk.white.inverse('Your notes:'));
  notes.forEach((note) => {
    console.log(note.title);
  });
};

const readNote = (title: string): void => {
  const notes = loadNotes();
  const matchingNote: Note = notes.find((note) => note.title === title);
  if (matchingNote) {
    console.log(chalk.inverse(matchingNote.title));
    console.log(matchingNote.body);
  } else {
    console.log(chalk.red.inverse('Note not found'));
  }
};

const saveNotes = (notes: Array<Note>): void => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync('notes.json', dataJSON);
};

const loadNotes = (): Array<Note> => {
  try {
    const dataBuffer: Buffer = fs.readFileSync('notes.json');
    const dataJSON = dataBuffer.toString();
    const data: Array<Note> = JSON.parse(dataJSON);
    return data;
  } catch (error) {
    return [];
  }
};

export default {
  addNote,
  deleteNote,
  listNotes,
  readNote
};
