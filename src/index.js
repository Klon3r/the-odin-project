import css from './style.css';
import { addHeaderTitle, addProjectButton } from './dom';
import { createProjectDialog } from './dialog';

function init() {
    const root = document.createElement('div');
    const header = document.createElement('div');
    const container = document.createElement('div');
    const project = document.createElement('div');
    const projectTitleDiv = document.createElement('div');
    const projectButtonDiv = document.createElement('div');
    const content = document.createElement('div');

    root.id = 'root';
    container.id = 'container';
    project.id = 'project';
    projectTitleDiv.id = 'project-title-div';
    projectButtonDiv.id = 'project-button-div';
    header.id = 'header';
    content.id = 'content';
    
    document.body.appendChild(root);
    root.appendChild(header);
    root.appendChild(container);
    container.appendChild(project);
    project.appendChild(projectTitleDiv);
    project.appendChild(projectButtonDiv);
    container.appendChild(content)

    
    addHeaderTitle();
    addProjectButton();
    createProjectDialog()
}

init();
// For testing remove localStorage
localStorage.clear()