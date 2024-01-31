import { addProject } from "./project";

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
    const projectTitle = document.createElement('input');
    const projectTitleLabel = document.createElement('label');
    const projectDialogDiv = document.createElement('div');
    const projectDialogAddButton = document.createElement('button');

    projectTitle.id = 'project-title-input'
    projectTitle.type = "text";
    projectTitleLabel.textContent = "Project Name: "
    projectDialogAddButton.innerText = "add";

    projectDialogAddButton.addEventListener('click', () => { addProject( projectTitle.value ); closeProjectDialog(); });

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

    noteTitleLabel.textContent = "Note Title: "
    noteDescLabel.textContent = "Note Description: "
    noteTitle.type = 'text';
    noteDialogAddButton.innerText = 'add';

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