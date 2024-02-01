import { showNoteDialog } from "./dialog";
import noteClass from "./class";

export function noteInit(projectId) {
    clearNoteContent()

    const content = document.getElementById('content')
    const noteTitleDiv = document.createElement('div');
    const noteContentDiv = document.createElement('div');
    const noteButtonDiv = document.createElement('div');

    noteTitleDiv.id = 'note-title-div';
    noteContentDiv.id = 'note-content-div';
    noteButtonDiv.id = 'note-button-div';

    content.appendChild(noteTitleDiv);
    content.appendChild(noteContentDiv);
    content.appendChild(noteButtonDiv);
    
    
    createNoteTitle(projectId);
    createNoteAddButton();
    reloadNoteContent();
}

function clearNoteContent() {
    document.querySelectorAll('#note-title-div').forEach(e => e.remove());
    document.querySelectorAll('#note-content-div').forEach(e => e.remove());
    document.querySelectorAll('#note-button-div').forEach(e => e.remove());
}

function createNoteTitle(projectId) {
    const noteTitleDiv = document.getElementById('note-title-div');
    const noteTitle = document.createElement('h3');

    noteTitle.id = 'note-title';
    noteTitle.innerText = `-Notes for ${projectId}-`;
    noteTitle.value = projectId;

    noteTitleDiv.appendChild(noteTitle);
}

function createNoteAddButton() {
    const noteButtonDiv = document.getElementById('note-title-div');
    const noteButton = document.createElement('button');

    noteButton.id = 'note-button';
    noteButton.innerText = 'Add Note';

    noteButton.addEventListener('click', () => { showNoteDialog();})

    noteButtonDiv.appendChild(noteButton);
}

export function addNote(title, desc) {
    const findProjectKey = document.getElementById('note-title');
    const note = new noteClass(findProjectKey.value, title, desc)
    // set storage with note
    note.setNoteToStorage(findProjectKey.value);

}

function reloadNoteContent() {
    const findProjectKey = document.getElementById('note-title');

    const noteObjJSON = localStorage.getItem(findProjectKey.value);
    let noteObj = noteObjJSON ? JSON.parse(noteObjJSON) : {};
    
    for (let objects in noteObj) {
        const currentNote = noteObj[objects];
        const desc = currentNote[0].desc;
        console.log(`Title: ${objects}\nDesc: ${desc}`);
        updateNoteContent(objects, desc);
    }
}

function updateNoteContent(title, desc) {
    const noteDiv = document.getElementById('note-content-div');
    const noteInfoDiv = document.createElement('div');
    const noteTitleDiv = document.createElement('div');
    const noteTitle = document.createElement('h4');
    const noteDesc = document.createElement('p');

    const noteButtonDiv = document.createElement('div');
    const deleteButton = document.createElement('button');

    noteTitleDiv.id = 'note-obj-div';
    noteInfoDiv.id = 'note-info-div';
    noteButtonDiv.id = 'note-button-div';
    deleteButton.id = 'note-delete-button'

    noteTitle.innerText = title;
    noteDesc.innerText = `- ${desc}`;

    deleteButton.innerText = "-"

    noteTitleDiv.appendChild(noteTitle);
    noteTitleDiv.appendChild(deleteButton);

    noteInfoDiv.appendChild(noteDesc);

    noteDiv.appendChild(noteTitleDiv)
    noteDiv.appendChild(noteInfoDiv);
}
