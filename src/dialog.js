export function createProjectDialog() {
    const projectDialog = document.createElement('dialog');
    projectDialog.id = 'project-dialog'
    document.body.appendChild(projectDialog);
}

export function showProjectDialog() {
    const projectDialog = document.getElementById('project-dialog');
    projectDialog.showModal();
}

export function closeProjectDialog() {
    const projectDialog = document.getElementById('project-dialog');
    projectDialog.close();
}