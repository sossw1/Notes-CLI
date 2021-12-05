"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
function addNote(title, body) {
    var notes = loadNotes();
    var newNote = {
        title: title,
        body: body
    };
    notes.push(newNote);
    console.log('Adding note: ', newNote);
    saveNotes(notes);
}
function saveNotes(notes) {
    var dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}
function loadNotes() {
    try {
        var dataBuffer = fs.readFileSync('notes.json');
        var dataJSON = dataBuffer.toString();
        var data = JSON.parse(dataJSON);
        return data;
    }
    catch (error) {
        return [];
    }
}
exports.default = {
    addNote: addNote,
    loadNotes: loadNotes
};
