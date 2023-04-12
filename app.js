const addbtn = document.querySelector("#addbtn")

const main = document.querySelector("#main")
const saveNotes = () => {
    const notes = document.querySelector(".note textarea");
    const data = [];
    notes.forEach(
        (note) => {
            data.push(note.value)
        }
    )
    if (data.length === 0) {
        localStorage.removeItem("notes")

    } else {


        console.log(data)
        localStorage.setItem("notes", JSON.stringify(data))
    }
}

            
    

}
addbtn.addEventListener(
    "click",
    function () {

        addNote()
    }
)
    (
        function () {
            const lsnotes = JSON.parse(localStorage.getItem("notes"));
            if (lsNotes === null) {
                addNote()

            } else {
                lsnotes.forEach(
                    (lsNNote) =>
                        addNote(lsNote)
        
            }
     )
            
}
             
        }
    ) ()



const addNote = (text = "") => {
    const note = document.createElement("div");
    note.classList.add("note")
    note.innerHTML = `
    <div class="tool">
        <i class="save fa-solid fa-trash"></i>
        <i class=" trash fa-solid fa-floppy-disk"></i>
    </div>
    <textarea></textarea>
    `;
    main.appendChild(note);
}
note.querySelector(".trash").addEventListener(
    "click",
    function () {
        note.remove()
        saveNotes()
    }
)
note.querySelector(".save").addEventListener(
    "click",
    function () {
        saveNotes()
    }

)
note.querySelector("textarea").addEventListener(
    "focusout",
    function () {
        saveNotes()
    }
)
main.appendChild(note);
saveNotes()
}
