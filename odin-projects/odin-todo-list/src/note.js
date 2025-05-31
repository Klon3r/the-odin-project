import { showNoteDialog, showEditDialog } from "./dialog";
import { deleteProject } from "./project";
import noteClass from "./class";
import binImg from "./img/bin.png";
import editImg from "./img/edit.png";

export function noteInit(projectId) {
  clearNoteContent();

  const getProjectListDiv = document.getElementById("project-button-div");

  const content = document.getElementById("content");
  const noteTitleDiv = document.createElement("div");
  const noteContentDiv = document.createElement("div");
  const noteButtonDiv = document.createElement("div");

  const projectDeleteButton = document.createElement("button");
  projectDeleteButton.addEventListener("click", () => {
    deleteProject(projectId);
  });

  noteTitleDiv.id = "note-title-div";
  noteContentDiv.id = "note-content-div";
  noteButtonDiv.id = "note-button-div";
  projectDeleteButton.id = "project-delete-button";

  projectDeleteButton.innerText = "Delete List";

  content.appendChild(noteTitleDiv);
  content.appendChild(noteContentDiv);
  content.appendChild(noteButtonDiv);

  getProjectListDiv.appendChild(projectDeleteButton);

  createNoteTitle(projectId);
  createNoteAddButton();
  reloadNoteContent(projectId);
}

export function clearNoteContent() {
  document.querySelectorAll("#note-title-div").forEach((e) => e.remove());
  document.querySelectorAll("#note-content-div").forEach((e) => e.remove());
  document.querySelectorAll("#note-button-div").forEach((e) => e.remove());
  document
    .querySelectorAll("#project-delete-button")
    .forEach((e) => e.remove());
}

function createNoteTitle(projectId) {
  const noteTitleDiv = document.getElementById("note-title-div");
  const noteTitle = document.createElement("h3");

  noteTitle.id = "note-title";
  noteTitle.innerText = `-Notes for ${projectId}-`;
  noteTitle.value = projectId;

  noteTitleDiv.appendChild(noteTitle);
}

function createNoteAddButton() {
  const noteButtonDiv = document.getElementById("note-title-div");
  const noteButton = document.createElement("button");

  noteButton.id = "note-button";
  noteButton.innerText = "Add Note";

  noteButton.addEventListener("click", () => {
    showNoteDialog();
  });

  noteButtonDiv.appendChild(noteButton);
}

export function addNote(desc) {
  const findProjectKey = document.getElementById("note-title");
  const note = new noteClass(findProjectKey.value, desc, false);
  // set storage with note
  note.setNoteToStorage(findProjectKey.value);
  setTimeout(() => {
    reloadNoteContent(findProjectKey.value);
  }, 10);
}

function reloadNoteContent(projectId) {
  const findProjectKey = document.getElementById("note-title");
  const noteDiv = document.getElementById("note-content-div");

  // Clear existing content
  noteDiv.innerHTML = "";

  const noteObjJSON = localStorage.getItem(findProjectKey.value);
  let noteObj = noteObjJSON ? JSON.parse(noteObjJSON) : {};

  if (noteObj[projectId]) {
    const projectNotes = noteObj[projectId];
    for (let i = 0; i < projectNotes.length; i++) {
      const desc = projectNotes[i].todo;
      const checked = projectNotes[i].checked;
      updateNoteContent(desc, checked, i);
    }
  }
}

function updateNoteContent(desc, checked, locationIndex) {
  const noteDiv = document.getElementById("note-content-div");
  const noteInfoDiv = document.createElement("div");
  const noteDesc = document.createElement("p");
  const findProjectKey = document.getElementById("note-title");
  const noteButtonDiv = document.createElement("div");
  const deleteButton = document.createElement("img");
  const editButton = document.createElement("img");

  noteInfoDiv.id = "note-info-div";
  noteButtonDiv.id = "note-button-div";
  deleteButton.id = "note-delete-button";
  editButton.id = "note-edit-button";
  // noteButtonDiv.className = 'note-content';

  noteDesc.innerText = `${desc}`;
  deleteButton.src = binImg;
  editButton.src = editImg;

  noteDesc.className = noteDescChecked(checked);
  noteInfoDiv.className = noteDescChecked(checked);

  deleteButton.addEventListener("click", () => {
    deleteNoteFromStorage(
      findProjectKey.value,
      desc,
      reloadNoteContent,
      locationIndex,
    );
  });
  editButton.addEventListener("click", () => {
    showEditDialog(desc, locationIndex);
  });
  noteDesc.addEventListener("click", () => {
    changeCheckedNoteFromStorage(desc, checked, locationIndex);
  });

  noteInfoDiv.appendChild(noteDesc);
  noteInfoDiv.appendChild(noteButtonDiv);
  noteButtonDiv.appendChild(editButton);
  noteButtonDiv.appendChild(deleteButton);
  noteDiv.appendChild(noteInfoDiv);
}

function deleteNoteFromStorage(key, desc, callback, locationIndex) {
  const noteJSON = JSON.parse(localStorage.getItem(key));

  for (let item in noteJSON) {
    const currentNoteArray = noteJSON[item];
    for (let i = 0; i < currentNoteArray.length; i++) {
      const currentNote = currentNoteArray[i];
      const index = i;

      // Remove note from array
      if (currentNote.todo === desc && locationIndex == index) {
        currentNoteArray.splice(i, 1);
      }

      // If the array is empty, remove the key
      if (currentNoteArray.length === 0) {
        delete noteJSON[item];
      }
    }
  }

  localStorage.setItem(key, JSON.stringify(noteJSON));

  // Set a slight delay before reloading
  setTimeout(() => {
    callback(key);
  }, 100);
}

export function editNoteFromStorage(oldDesc, newDesc, locationIndex) {
  console.log(`COUNTER LOCATION: ${locationIndex}`);
  const findProjectKey = document.getElementById("note-title");
  const noteJSON = JSON.parse(localStorage.getItem(findProjectKey.value));

  // Check if noteJSON is not null
  if (noteJSON) {
    for (let item in noteJSON) {
      const currentNoteArray = noteJSON[item];

      for (let i = 0; i < currentNoteArray.length; i++) {
        const note = currentNoteArray[i].todo;
        if (note === oldDesc && i === locationIndex) {
          currentNoteArray[i].todo = newDesc;
          localStorage.setItem(findProjectKey.value, JSON.stringify(noteJSON));
          reloadNoteContent(findProjectKey.value);
        }
      }
    }
  }
}

function changeCheckedNoteFromStorage(desc, checked, locationIndex) {
  const findProjectKey = document.getElementById("note-title");
  const noteJSON = JSON.parse(localStorage.getItem(findProjectKey.value));

  // Check if noteJSON is not null
  if (noteJSON) {
    for (let item in noteJSON) {
      const currentNoteArray = noteJSON[item];

      for (let i = 0; i < currentNoteArray.length; i++) {
        const note = currentNoteArray[i].todo;
        if (note === desc && i === locationIndex) {
          console.log(note);
          if (checked === false) {
            currentNoteArray[i].checked = true;
          } else {
            currentNoteArray[i].checked = false;
          }

          localStorage.setItem(findProjectKey.value, JSON.stringify(noteJSON));
          reloadNoteContent(findProjectKey.value);
        }
      }
    }
  }
}

function noteDescChecked(checked) {
  if (checked === false) {
    return "checked-false";
  } else {
    return "checked-true";
  }
}

