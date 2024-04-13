export default class noteClass {
  constructor(project, desc, checked) {
    this.project = project;
    this.desc = desc;
    this.checked = checked;
  }

  setNoteToStorage(key) {
    const existingNotesJSON = localStorage.getItem(key);
    let existingNotes = existingNotesJSON ? JSON.parse(existingNotesJSON) : {};

    if (!existingNotes[this.project]) {
      existingNotes[this.project] = [];
    }

    existingNotes[this.project].push({
      todo: this.desc,
      checked: this.checked,
    });

    localStorage.setItem(key, JSON.stringify(existingNotes));
  }
}

