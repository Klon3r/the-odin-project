import { showNoteDialog, showEditDialog } from "./dialog";
import noteClass from "./class";
import binImg from './img/bin.png';
import editImg from './img/edit.png';

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
    reloadNoteContent(projectId);
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

export function addNote(desc) {
    const findProjectKey = document.getElementById('note-title');
    const note = new noteClass(findProjectKey.value, desc)
    // set storage with note
    note.setNoteToStorage(findProjectKey.value);
    setTimeout(() => {
        reloadNoteContent(findProjectKey.value);
    }, 10)
}

function reloadNoteContent(projectId) {
    const findProjectKey = document.getElementById('note-title');
    const noteDiv = document.getElementById('note-content-div');

    // Clear existing content
    noteDiv.innerHTML = '';

    const noteObjJSON = localStorage.getItem(findProjectKey.value);
    let noteObj = noteObjJSON ? JSON.parse(noteObjJSON) : {};
    
    if (noteObj[projectId]) {
        const projectNotes = noteObj[projectId];
        for (let i = 0; i < projectNotes.length; i++) {
            const desc = projectNotes[i].todo;
            updateNoteContent(desc);
        }
    }
}

function updateNoteContent(desc) {
    const noteDiv = document.getElementById('note-content-div');
    const noteInfoDiv = document.createElement('div');
    const noteDesc = document.createElement('p');
    const findProjectKey = document.getElementById('note-title');
    const noteButtonDiv = document.createElement('div');
    const deleteButton = document.createElement('img');
    const editButton = document.createElement('img');

    noteInfoDiv.id = 'note-info-div';
    noteButtonDiv.id = 'note-button-div';
    deleteButton.id = 'note-delete-button'
    editButton.id = 'note-edit-button';
    // noteButtonDiv.className = 'note-content';

    noteDesc.innerText = `${desc}`;
    deleteButton.src = binImg;
    editButton.src = editImg;

    deleteButton.addEventListener("click", () => { deleteNoteFromStorage(findProjectKey.value ,desc, reloadNoteContent)} );
    editButton.addEventListener("click", () => {showEditDialog(desc);});
    
    noteInfoDiv.appendChild(noteDesc);
    noteInfoDiv.appendChild(noteButtonDiv)
    noteButtonDiv.appendChild(editButton);
    noteButtonDiv.appendChild(deleteButton);
    noteDiv.appendChild(noteInfoDiv);
}

function deleteNoteFromStorage(key, desc, callback) {
    const noteJSON = JSON.parse(localStorage.getItem(key));
    
    for (let item in noteJSON) {
        const currentNoteArray = noteJSON[item];
        for (let i = 0; i < currentNoteArray.length; i++) {
            const currentNote = currentNoteArray[i];
            
            // Remove note from array
            if (currentNote.todo === desc) {
                currentNoteArray.splice(i, 1);
            }

            // If the array is empty, remove the key
            if (currentNoteArray.length === 0) {
                delete noteJSON[item];
            }            
        }
    }

    localStorage.setItem(key, JSON.stringify(noteJSON));

    // Set a slight delay before reloading
    setTimeout(() => {
        callback(key);
    }, 100)
}

export function editNoteFromStorage(oldDesc, newDesc) {
    const findProjectKey = document.getElementById('note-title');
    const noteJSON = JSON.parse(localStorage.getItem(findProjectKey.value));

    // Check if noteJSON is not null
    if(noteJSON) {
        for(let item in noteJSON) {
            const currentNoteArray = noteJSON[item];
            const index = currentNoteArray.findIndex(note => note.todo === oldDesc);
            
            if(index !== -1) {
                currentNoteArray[index].todo = newDesc;
                localStorage.setItem(findProjectKey.value, JSON.stringify(noteJSON));
                reloadNoteContent(findProjectKey.value);
            }
        }
    }
}
