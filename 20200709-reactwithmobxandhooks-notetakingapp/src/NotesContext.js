// START: IMPORTS
import React from 'react'
import { createNotesStore } from './notesStore'
import { useLocalStore } from 'mobx-react'
// END: IMPORTS

const NotesContext = React.createContext(null)

export const NotesProvider = ({ children }) => {
  const notesStore = useLocalStore(createNotesStore)

  // START: TEMPLATE
  return <NotesContext.Provider value={notesStore}>
    {children}
  </NotesContext.Provider>
  // END: TEMPLATE
}

export const useNotesStore = () => React.useContext(NotesContext)