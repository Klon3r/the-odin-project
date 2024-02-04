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
    const projectButtonDiv = document.createElement('div');
    const projectDialogAddButton = document.createElement('button');
    const projectDialogCancelButton = document.createElement('button');

    projectTitle.id = 'project-title-input'
    projectButtonDiv.id = 'project-dialog-button-div'
    projectTitle.type = "text";
    projectTitleLabel.textContent = "List Name: "
    projectDialogAddButton.innerText = "Add";
    projectDialogCancelButton.innerText = "Cancel";
    projectTitleTop.innerText = "-List Name-"

    projectDialogAddButton.addEventListener('click', () => { addProject( projectTitle.value ); closeProjectDialog(); });
    projectDialogCancelButton.addEventListener('click', () => { closeProjectDialog()});


    projectDialog.appendChild(projectTitleTop);
    projectDialog.appendChild(projectTitleLabel)
    projectDialog.appendChild(projectTitle);
    projectDialog.appendChild(projectDialogDiv);
    projectButtonDiv.appendChild(projectDialogCancelButton)
    projectButtonDiv.appendChild(projectDialogAddButton);
    projectDialog.appendChild(projectButtonDiv);
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
    const noteTitle = document.createElement('h3');
    const noteDialogDiv = document.createElement('div');
    const noteDesc = document.createElement('input');
    const noteDescLabel = document.createElement('label');
    const noteButtonDiv = document.createElement('div');
    const noteDialogAddButton = document.createElement('button');
    const noteDialogCancelButton = document.createElement('button');

    noteDesc.id = 'note-desc-input';
    noteDialogDiv.id = 'note-dialog-div';
    noteButtonDiv.id = 'note-add-button-div';
    noteDescLabel.id = 'note-desc-label'
    noteDescLabel.textContent = "Todo: "
    noteDesc.type = 'text';
    noteTitle.innerText = "-Note-";
    noteDialogAddButton.innerText = 'Add';
    noteDialogCancelButton.innerText = 'Cancel';

    noteDialogAddButton.addEventListener('click', () => { addNote(noteDesc.value); closeNoteDialog() })
    noteDialogCancelButton.addEventListener('click', () => { closeNoteDialog() })
    
    noteDialog.appendChild(noteTitle);
    noteDialogDiv.appendChild(noteDescLabel);
    noteDialogDiv.appendChild(noteDesc);
    noteDialog.appendChild(noteDialogDiv);

    // button 
    noteButtonDiv.appendChild(noteDialogCancelButton);   
    noteButtonDiv.appendChild(noteDialogAddButton);
    noteDialog.appendChild(noteButtonDiv);

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
    const noteEditTitle = document.createElement('h3');
    const noteEditLabel = document.createElement('label');
    const noteEditInput = document.createElement('input');
    const noteButtonDiv = document.createElement('div');
    const noteEditAddButton = document.createElement('button');
    const noteEditCancelButton = document.createElement('button');
    const noteOldDesc = document.createElement('div');
    const noteLocationCounterDiv = document.createElement('div');

    noteEditDiv.id = 'note-edit-div';
    noteButtonDiv.id = 'note-edit-button-div';
    noteEditInput.id = 'note-edit-input';
    noteOldDesc.id = 'note-old-desc'
    noteEditLabel.id = 'note-edit-label';
    noteLocationCounterDiv.id = 'note-location-counter-div';
    
    noteEditInput.type = 'text';

    noteEditTitle.innerText = '-Title-';
    noteEditLabel.textContent = 'Edit: '
    noteEditAddButton.innerText = "Save"
    noteEditCancelButton.innerText = "Cancel"

    noteEditAddButton.addEventListener('click', () => { editNoteFromStorage(noteOldDesc.value, noteEditInput.value, noteLocationCounterDiv.value); closeEditDialog()});
    noteEditCancelButton.addEventListener('click', () => { closeEditDialog(); });

    noteEditDiv.appendChild(noteEditTitle);
    noteEditDiv.appendChild(noteEditLabel);
    noteEditDiv.appendChild(noteEditInput);
    noteEditDiv.appendChild(noteOldDesc);
    noteEditDiv.appendChild(noteLocationCounterDiv)
    noteButtonDiv.appendChild(noteEditCancelButton);
    noteButtonDiv.appendChild(noteEditAddButton);
    noteEditDiv.appendChild(noteButtonDiv);
    noteEditDialog.appendChild(noteEditDiv);
}

export function showEditDialog(desc, locationIndex) {
    const editDialog = document.getElementById('note-edit-dialog');
    const noteDesc = document.getElementById('note-edit-input');
    const noteOldDesc = document.getElementById('note-old-desc');
    const noteLocationCounter = document.getElementById('note-location-counter-div');

    noteDesc.value = desc;
    noteOldDesc.value = desc;
    noteLocationCounter.value = locationIndex;

    editDialog.showModal();
}

function closeEditDialog() {
    const editDialog = document.getElementById('note-edit-dialog');
    editDialog.close();
}

