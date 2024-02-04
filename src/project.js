import { noteInit } from "./note";
import { clearNoteContent } from "./note";

export function addProject(title) {
    localStorage.setItem(title, "")
    reloadProjectSidebar();
}

export function reloadProjectSidebar() {
    const project = document.getElementById('project-list-div');
    project.innerHTML = '';

    // loop through local storage
    for (const [key] of Object.entries(localStorage)) {
        const projectNames = document.createElement('h4');
        projectNames.id = key;
        projectNames.className = "project-title-list"
        projectNames.innerText = key;

        projectNames.addEventListener('click', () => { noteInit(projectNames.id);})

        project.appendChild(projectNames)
     }
}

export function deleteProject(projectId) {
    localStorage.removeItem(projectId);
    reloadProjectSidebar();
    clearNoteContent()
}