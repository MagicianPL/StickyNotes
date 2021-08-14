const addBtn = document.querySelector(".add");
const removeAllBtn = document.querySelector(".delete-all");

const noteArea = document.querySelector(".note-area");

const notePanel = document.querySelector(".note-panel");
const categoryInput = document.querySelector("#category");
const textInput = document.querySelector("#text");
const error = document.querySelector(".error");
const saveBtn = document.querySelector(".save");
const cancelBtn = document.querySelector(".cancel");

let noteDiv;
let noteBody;
let selectedValue;

const addNewNote = () => {
    if (textInput.value !== "" && categoryInput.options[categoryInput.selectedIndex].value !== "0") {
        selectValue(); // przypisuję do zmiennej selecta
        creatingNoteDiv(); // już mam body notatki bez contentu

    const content = textInput.value;
    noteBody.textContent = content;
    setColor(noteDiv);
    noteArea.append(noteDiv);

    textInput.value = "";
    notePanel.style.display = "none";
    error.style.visibility = "hidden";
    textInput.value = "";
    categoryInput.selectedIndex = 0;
    } else {
        error.style.visibility = "visible";
    };
};

const creatingNoteDiv = () => { //without text inside, just a body
    noteDiv = document.createElement("div");
    noteDiv.classList.add("note");

    //note header
    const noteHeader = document.createElement("div");
    noteHeader.classList.add("note-header");
    const h3 = document.createElement("h3");
    h3.textContent = selectedValue;
    const button = document.createElement("button");
    button.classList.add("delete-note");
    button.innerHTML = '<i class="fas fa-times icon"></i>';
    noteHeader.append(h3, button);
    noteDiv.append(noteHeader);

    //note body
    noteBody = document.createElement("div");
    noteBody.classList.add("note-body");
    noteDiv.append(noteBody);
};


const removeNote = e => {
    if (e.target.closest(".delete-note")) {
        e.target.closest(".note").remove();
    };
};

const removeAllNotes = () => {
    noteArea.innerHTML = "";
};

const showNotePanel = () => {
    notePanel.style.display = "flex";
};

const hideNotePanel = () => {
    notePanel.style.display = "none";
    error.style.visibility = "hidden";
    textInput.value = "";
    categoryInput.selectedIndex = 0;
};

const selectValue = () => { //przypisuję wybraną kategorię
    selectedValue = categoryInput.options[categoryInput.selectedIndex].textContent;
};

const setColor = note => {
    switch(selectedValue) {
        case "Zakupy":
            note.style.backgroundColor = "rgb(72, 255, 0)";
            break;
		case "Zwierzaki":
            note.style.backgroundColor = "rgb(188, 32, 131)";
            break;
        case "Praca":
            note.style.backgroundColor = "rgb(255, 243, 0)";
            break;
        case "Inne":
            note.style.backgroundColor = "rgb(0, 170, 255)";
            break;
    };
};

noteArea.addEventListener("click", removeNote);
removeAllBtn.addEventListener("click", removeAllNotes);
addBtn.addEventListener("click", showNotePanel);
cancelBtn.addEventListener("click", hideNotePanel);
saveBtn.addEventListener("click", addNewNote);
