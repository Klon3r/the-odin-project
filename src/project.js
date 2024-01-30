export function addProject(title) {
    localStorage.setItem(title, "")

    // Add the title to project side bar
    reloadProjectSidebar();
}

function reloadProjectSidebar() {
    removeProjectSidebarContent();
    const project = document.getElementById('project-title-div');

    // loop through local storage
    for (const [key] of Object.entries(localStorage)) {
        const projectNames = document.createElement('h4');
        projectNames.id = key;
        projectNames.className = "project-title-list"
        projectNames.innerText = key;
        project.appendChild(projectNames)
     }
}

function removeProjectSidebarContent() {
    document.querySelectorAll('.project-title-list').forEach(e => e.remove());
}