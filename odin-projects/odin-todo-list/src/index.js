import css from "./style.css";
import { addHeaderTitle, addProjectButton } from "./dom";
import {
  createProjectDialog,
  createNoteDialog,
  createNoteEditDialog,
} from "./dialog";
import { reloadProjectSidebar, addProject } from "./project";
import noteClass from "./class";

function init() {
  const root = document.createElement("div");
  const header = document.createElement("div");
  const container = document.createElement("div");
  const project = document.createElement("div");
  const projectTitleDiv = document.createElement("div");
  const projectTitleHeading = document.createElement("h3");
  const projectListDiv = document.createElement("div");
  const projectButtonDiv = document.createElement("div");
  const content = document.createElement("div");

  root.id = "root";
  container.id = "container";
  project.id = "project";
  projectTitleDiv.id = "project-title-div";
  projectButtonDiv.id = "project-button-div";
  projectListDiv.id = "project-list-div";
  header.id = "header";
  content.id = "content";

  document.body.appendChild(root);
  root.appendChild(header);
  root.appendChild(container);
  container.appendChild(project);
  project.appendChild(projectTitleDiv);
  projectTitleDiv.appendChild(projectTitleHeading);
  project.appendChild(projectListDiv);
  project.appendChild(projectButtonDiv);
  container.appendChild(content);

  addHeaderTitle();
  addProjectButton();
  createProjectDialog();
  createNoteDialog();
  createNoteEditDialog();
  checkLocalStorage();
}

function checkLocalStorage() {
  if (localStorage.length === 0) {
    addProject("Today");
    addProject("Tomorrow");
    addProject("Food to Buy");
    initLocalStorage("Today", "Brush Teeth", false);
    initLocalStorage("Today", "Go shopping for food", false);
    initLocalStorage("Today", "Go wash my car", true);
    initLocalStorage("Today", "Buy inflatable pool", false);
    initLocalStorage(
      "Today",
      "Keep on progressing through TheOdinProject!",
      true,
    );
    initLocalStorage("Tomorrow", "Book a doctors appointment", true);
    initLocalStorage("Tomorrow", "Read a book", false);
    initLocalStorage("Tomorrow", "Take a nap", false);
    initLocalStorage("Food to Buy", "3 x Avocado", false);
    initLocalStorage("Food to Buy", "4 x Apples", false);
    initLocalStorage("Food to Buy", "2 x Chicken Breast", false);
    initLocalStorage("Food to Buy", "3 x Mince", false);
    initLocalStorage("Food to Buy", "1 x Rice", false);
    initLocalStorage("Food to Buy", "10 x Potato Chips", false);
  }
}

function initLocalStorage(key, desc, checked) {
  const note = new noteClass(key, desc, checked);
  note.setNoteToStorage(key);
}

init();
reloadProjectSidebar();

