export default class noteClass {
    constructor(title, desc) {
        this.title = title;
        this.desc = desc;
    //     this.dueDate = dueDate;
    //     this.dateCreated = dateCreated;
    //     this.id = id;
    //     this.checked = checked;
    }

    setNoteToStorage(key) {
        localStorage.setItem(key, `Title: ${this.title} Desc: ${this.desc}`)
    }


}