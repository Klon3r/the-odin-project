export default class noteClass {
    constructor(project, desc) {
        this.project = project;
        this.desc = desc;
    }

    setNoteToStorage(key) {
        const existingNotesJSON = localStorage.getItem(key);
        let existingNotes = existingNotesJSON ? JSON.parse(existingNotesJSON) : {};

        if(!existingNotes[this.project]) {
            existingNotes[this.project] = []
        }

        existingNotes[this.project].push({
            todo: this.desc
        })

        localStorage.setItem(key, JSON.stringify(existingNotes))
    }
}