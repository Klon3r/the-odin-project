import { addProject } from "./project";

export function createProjectDialog() {
    const projectDialog = document.createElement('dialog');
    projectDialog.id = 'project-dialog'
    document.body.appendChild(projectDialog);

    addInputProjectDialog()
}

export function showProjectDialog() {
    const projectDialog = document.getElementById('project-dialog');
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

    projectTitle.id = 'projectTitle-input'
    projectTitle.type = "text";
    projectTitleLabel.textContent = "Project Name: "
    projectDialogAddButton.innerText = "add";

    projectDialogAddButton.addEventListener('click', () => { addProject( projectTitle.value ) });

    projectDialog.appendChild(projectTitleLabel)
    projectDialog.appendChild(projectTitle);
    projectDialog.appendChild(projectDialogDiv);
    projectDialog.appendChild(projectDialogAddButton);
}