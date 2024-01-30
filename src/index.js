import css from './style.css';


function init() {
    const root = document.createElement('div');
    const header = document.createElement('div');
    const container = document.createElement('div');
    const projects = document.createElement('div');
    const content = document.createElement('div');

    root.id = 'root';
    container.id = 'container';
    projects.id = 'project';
    header.id = 'header';
    content.id = 'content';
    

    header.innerText = 'header';
    content.innerText = 'content';
    projects.innerText = 'projects';


    document.body.appendChild(root);
    root.appendChild(header);
    root.appendChild(container);
    container.appendChild(projects);
    container.appendChild(content)
}

init();