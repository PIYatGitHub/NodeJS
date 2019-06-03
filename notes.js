const fs = require('fs');
const getNotes = function () {
  return 'returning your notes!';
};

const addNote = function (title, body) {
    const notes = loadNotes();
    notes.push({title, body});
    saveNotes(notes);
    console.log('notes: ', notes);
};

const saveNotes = function (notes) {
  const entry = JSON.stringify(notes);
  fs.writeFileSync('notes.json', entry);
};

const loadNotes = function(){
  try{
    const dataBuff = fs.readFileSync('notes.json'),
      dataJSON = dataBuff.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

module.exports = {
  getNotes:getNotes,
  addNote: addNote
};

