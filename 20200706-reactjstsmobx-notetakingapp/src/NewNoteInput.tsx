import React from "react";
import { NotesStore } from "./NotesStore";

type NewNoteInputProps = {
  addNote: NotesStore["addNote"];
};

// START: COMPONENT ---
export const NewNoteInput: React.FC<NewNoteInputProps> = ({ addNote }) => {
  // START: STATES
  const [note, setNote] = React.useState("");
  // END: STATES

  // START: METHODS
  const updateNote = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNote(event.target.value);
  };

  const onAddNoteClick = () => {
    console.log("onAddNoteClick");
    addNote(note); // adds inputted note to the notes array
    setNote(""); //clear after adding note to notes array
  };

  // END: METHODS

  // START: TEMPLATE
  return (
    <div>
      <input
        type="text"
        onChange={updateNote}
        value={note}
        name="note"
        placeholder="Note"
      />
      <button onClick={onAddNoteClick}>Add note</button>
    </div>
  );
  // END: TEMPLATE
};
// END: COMPONENT ---
