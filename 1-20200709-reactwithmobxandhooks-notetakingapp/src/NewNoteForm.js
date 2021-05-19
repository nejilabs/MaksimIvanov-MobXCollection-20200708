import React from 'react'
import { useNotesStore } from './NotesContext'

export const NewNoteForm = () => {
  // START: STATES
  const [noteText, setNoteText] = React.useState("");
  const notesStore = useNotesStore();
  // END: STATES

  // START: TEMPLATE
  return (
    <div>
      <input type="text" value={noteText} onChange={(e) => setNoteText(e.target.value)} />
      <button onClick={() => notesStore.addNote(noteText)}>Add note</button>
    </div>
  )
  // END: TEMPLATE
}