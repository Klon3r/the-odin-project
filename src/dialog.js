import { addProject } from "./project";
import { addNote } from "./note";

export function createProjectDialog() {
    const projectDialog = document.createElement('dialog');
    projectDialog.id = 'project-dialog'
    document.body.appendChild(projectDialog);

    addInputProjectDialog()
}

export function showProjectDialog() {
    const projectDialog = document.getElementById('project-dialog');
    const projectTitle = document.getElementById('project-title-input');
    projectTitle.value = '';
    projectDialog.showModal();
}

function closeProjectDialog() {
    const projectDialog = document.getElementById('project-dialog');
    projectDialog.close();
}

function addInputProjectDialog() {
    const projectDialog = document.getElementById('project-dialog');
    const projectTitleTop = document.createElement('h3');
    const projectTitle = document.createElement('input');
    const projectTitleLabel = document.createElement('label');
    const projectDialogDiv = document.createElement('div');
    const projectDialogAddButton = document.createElement('button');

    projectTitle.id = 'project-title-input'
    projectTitle.type = "text";
    projectTitleLabel.textContent = "Project Name: "
    projectDialogAddButton.innerText = "add";
    projectTitleTop.innerText = "-Project-"

    projectDialogAddButton.addEventListener('click', () => { addProject( projectTitle.value ); closeProjectDialog(); });

    projectDialog.appendChild(projectTitleTop);
    projectDialog.appendChild(projectTitleLabel)
    projectDialog.appendChild(projectTitle);
    projectDialog.appendChild(projectDialogDiv);
    projectDialog.appendChild(projectDialogAddButton);
}

export function createNoteDialog() {
    const noteDialog = document.createElement('dialog');
    noteDialog.id = 'note-dialog'
    document.body.appendChild(noteDialog);
    addInputNoteDialog()
}

export function showNoteDialog() {
    const noteDialog = document.getElementById('note-dialog');
    const noteTitle = document.getElementById('note-title-input');
    const noteDesc = document.getElementById('note-desc-input');
    noteTitle.value = '';
    noteDesc.value = '';

    noteDialog.showModal();
}

function addInputNoteDialog() {
    const noteDialog = document.getElementById('note-dialog');
    const noteTitleDiv = document.createElement('div');
    const noteTitle = document.createElement('input');
    const noteTitleLabel = document.createElement('label');
    const noteDescDiv = document.createElement('div');
    const noteDesc = document.createElement('input');
    const noteDescLabel = document.createElement('label');
    const noteDialogDiv = document.createElement('div');
    const noteDialogAddButton = document.createElement('button');

    noteTitle.id = 'note-title-input';
    noteDesc.id = 'note-desc-input';

    noteTitleLabel.textContent = "Note Title: "
    noteDescLabel.textContent = "Note Description: "
    noteTitle.type = 'text';
    noteDesc.type = 'text';
    noteDialogAddButton.innerText = 'add';

    noteDialogAddButton.addEventListener('click', () => { addNote(noteTitle.value, noteDesc.value); closeNoteDialog() })

    noteTitleDiv.appendChild(noteTitleLabel);
    noteTitleDiv.appendChild(noteTitle);
    noteDescDiv.appendChild(noteDescLabel);
    noteDescDiv.appendChild(noteDesc);

    noteDialog.appendChild(noteTitleDiv);
    noteDialog.appendChild(noteDescDiv);

    // button    
    noteDialog.appendChild(noteDialogDiv);
    noteDialogDiv.appendChild(noteDialogAddButton);
}

function closeNoteDialog() {
    const noteDialog = document.getElementById('note-dialog');
    noteDialog.close();
}