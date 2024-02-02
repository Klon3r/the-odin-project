import { addProject } from "./project";
import { addNote, editNoteFromStorage } from "./note";

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
    const noteDesc = document.getElementById('note-desc-input');

    noteDesc.value = '';
    noteDialog.showModal();
}

function addInputNoteDialog() {
    const noteDialog = document.getElementById('note-dialog');
    const noteDescDiv = document.createElement('div');
    const noteDesc = document.createElement('input');
    const noteDescLabel = document.createElement('label');
    const noteDialogDiv = document.createElement('div');
    const noteDialogAddButton = document.createElement('button');

    noteDesc.id = 'note-desc-input';
    noteDescLabel.textContent = "Todo: "
    noteDesc.type = 'text';
    noteDialogAddButton.innerText = 'add';

    noteDialogAddButton.addEventListener('click', () => { addNote(noteDesc.value); closeNoteDialog() })
    
    noteDescDiv.appendChild(noteDescLabel);
    noteDescDiv.appendChild(noteDesc);
    noteDialog.appendChild(noteDescDiv);

    // button    
    noteDialog.appendChild(noteDialogDiv);
    noteDialogDiv.appendChild(noteDialogAddButton);
}

function closeNoteDialog() {
    const noteDialog = document.getElementById('note-dialog');
    noteDialog.close();
}

export function createNoteEditDialog() {
    const noteEditDialog = document.createElement('dialog');
    noteEditDialog.id = 'note-edit-dialog';
    document.body.appendChild(noteEditDialog);
    addInputNoteEditDialog();
}

function addInputNoteEditDialog() {
    const noteEditDialog = document.getElementById('note-edit-dialog');
    const noteEditDiv = document.createElement('div');
    const noteEditLabel = document.createElement('label');
    const noteEditInput = document.createElement('input');
    const noteButtonDiv = document.createElement('div');
    const noteEditAddButton = document.createElement('button');
    const noteOldDesc = document.createElement('div');

    noteEditDiv.id = 'note-edit-div';
    noteEditLabel.textContent = "Edit todo: "
    noteEditInput.id = 'note-edit-input';
    noteEditInput.type = 'text';
    noteOldDesc.id = 'note-old-desc'
    noteEditAddButton.innerText = "Edit"

    noteEditAddButton.addEventListener('click', () => { editNoteFromStorage(noteOldDesc.value, noteEditInput.value); closeEditDialog()});

    noteEditDiv.appendChild(noteEditLabel);
    noteEditDiv.appendChild(noteEditInput);
    noteEditDiv.appendChild(noteOldDesc);
    noteButtonDiv.appendChild(noteEditAddButton);
    noteEditDiv.appendChild(noteButtonDiv);
    noteEditDialog.appendChild(noteEditDiv);
}

export function showEditDialog(desc) {
    const editDialog = document.getElementById('note-edit-dialog');
    const noteDesc = document.getElementById('note-edit-input');
    const noteOldDesc = document.getElementById('note-old-desc')

    noteDesc.value = desc;
    noteOldDesc.value = desc;

    editDialog.showModal();
}

function closeEditDialog() {
    const editDialog = document.getElementById('note-edit-dialog');
    editDialog.close();
}

