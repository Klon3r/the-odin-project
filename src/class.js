export default class noteClass {
    constructor(project, title, desc) {
        this.project = project;
        this.title = title;
        this.desc = desc;
    //     this.dueDate = dueDate;
    //     this.dateCreated = dateCreated;
    //     this.id = id;
    //     this.checked = checked;
    }

    // setNoteToStorage(key) {
    //     localStorage.setItem(key, `Title: ${this.title} Desc: ${this.desc}`)
    // }

    setNoteToStorage(key) {
        const existingNotesJSON = localStorage.getItem(key);
        let existingNotes = existingNotesJSON ? JSON.parse(existingNotesJSON) : {};

        existingNotes[this.title] = [{
            desc: this.desc
        }]

        localStorage.setItem(key, JSON.stringify(existingNotes))
    }

    retrieveNoteFromStorage(key) {

    }
}