import css from './style.css';
import { addHeaderTitle, addProjectButton } from './dom';
import { createProjectDialog, createNoteDialog, createNoteEditDialog } from './dialog';
import { reloadProjectSidebar } from './project';

function init() {
    const root = document.createElement('div');
    const header = document.createElement('div');
    const container = document.createElement('div');
    const project = document.createElement('div');
    const projectTitleDiv = document.createElement('div');
    const projectTitleHeading = document.createElement('h3');
    const projectListDiv = document.createElement('div');
    const projectButtonDiv = document.createElement('div');
    const content = document.createElement('div');

    root.id = 'root';
    container.id = 'container';
    project.id = 'project';
    projectTitleDiv.id = 'project-title-div';
    projectButtonDiv.id = 'project-button-div';
    projectListDiv.id = 'project-list-div'
    header.id = 'header';
    content.id = 'content';
    
    document.body.appendChild(root);
    root.appendChild(header);
    root.appendChild(container);
    container.appendChild(project);
    project.appendChild(projectTitleDiv);
    projectTitleDiv.appendChild(projectTitleHeading);
    project.appendChild(projectListDiv);
    project.appendChild(projectButtonDiv);
    container.appendChild(content)

    addHeaderTitle();
    addProjectButton();
    createProjectDialog()
    createNoteDialog();
    createNoteEditDialog();
}

init();
reloadProjectSidebar();