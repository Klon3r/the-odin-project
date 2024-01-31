export function createNoteTitle() {
    const content = document.getElementById('content')
    const noteTitleDiv = document.createElement('div');
    const noteTitle = document.createElement('h4');

    noteTitle.id = 'note-title';
    noteTitleDiv.id = 'note-title-div';

    noteTitle.innerText = '-Notes-';

    content.appendChild(noteTitleDiv);
    noteTitleDiv.appendChild(noteTitle);
}