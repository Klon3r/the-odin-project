import css from './style.css';
import { addHeaderTitle, addProjectButton } from './dom';

function init() {
    const root = document.createElement('div');
    const header = document.createElement('div');
    const container = document.createElement('div');
    const project = document.createElement('div');
    const projectButtonDiv = document.createElement('div');
    const content = document.createElement('div');

    root.id = 'root';
    container.id = 'container';
    project.id = 'project';
    projectButtonDiv.id = 'project-button-div';
    header.id = 'header';
    content.id = 'content';
    
    content.innerText = 'content';
    project.innerText = 'projects';

    document.body.appendChild(root);
    root.appendChild(header);
    root.appendChild(container);
    container.appendChild(project);
    project.appendChild(projectButtonDiv);
    container.appendChild(content)

}

init();
addHeaderTitle();
addProjectButton();