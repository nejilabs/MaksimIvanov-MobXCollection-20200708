import React from "react";
import { observer } from "mobx-react-lite";
import "./App.css";

import { NewNoteInput } from "./NewNoteInput";
import { useRootStore } from "./RootStateContext";

function App() {
  const { notesStore } = useRootStore();

  // START: TEMPLATE
  return (
    <div>
      <NewNoteInput addNote={notesStore.addNote} />
      <hr />
      <ul>
        {notesStore.notes.map((note) => {
          return <li key={note}>{note}</li>;
        })}
      </ul>
      <button onClick={() => notesStore.saveNotes()}>Save</button>
      <button onClick={() => notesStore.loadNotes()}>Load</button>
    </div>
  );
  // END: TEMPLATE
}

export default observer(App);
