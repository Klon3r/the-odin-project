import { createNoteTitle } from "./note";

export function addProject(title) {
    localStorage.setItem(title, "")
    reloadProjectSidebar();
}

function reloadProjectSidebar() {
    removeProjectSidebarContent();
    const project = document.getElementById('project-list-div');

    // loop through local storage
    for (const [key] of Object.entries(localStorage)) {
        const projectNames = document.createElement('h4');
        projectNames.id = key;
        projectNames.className = "project-title-list"
        projectNames.innerText = key;

        projectNames.addEventListener('click', () => { createNoteTitle(); console.log(projectNames.id)})

        project.appendChild(projectNames)
     }
}

function removeProjectSidebarContent() {
    document.querySelectorAll('.project-title-list').forEach(e => e.remove());
}