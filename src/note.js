export function noteInit() {
    const content = document.getElementById('content')
    const noteTitleDiv = document.createElement('div');
    const noteContentDiv = document.createElement('div');
    const noteButtonDiv = document.createElement('div');

    noteTitleDiv.id = 'note-title-div';
    noteContentDiv.id = 'note-content-div';
    noteButtonDiv.id = 'note-button-div';

    content.appendChild(noteTitleDiv);
    content.appendChild(noteContentDiv);
    content.appendChild(noteButtonDiv);
    
    
    createNoteTitle();
    createNoteAddButton();
}

function createNoteTitle() {
    const noteTitleDiv = document.getElementById('note-title-div');
    const noteTitle = document.createElement('h3');

    noteTitle.id = 'note-title';
    noteTitle.innerText = '-Notes-';

    noteTitleDiv.appendChild(noteTitle);
}

function createNoteAddButton() {
    const noteButtonDiv = document.getElementById('note-button-div');
    const noteButton = document.createElement('button');

    noteButton.id = 'note-button';
    noteButton.innerText = 'Add Note';

    noteButtonDiv.appendChild(noteButton);

}