import { observable, action } from 'mobx'
import { getNotes, postNotes } from './api'

export class NotesStore {
  // START: OBSERVABLES
  @observable notes: string[] = ["hello", "world"]
  // END: OBSERVABLES

  // START: ACTIONS
  /**
   * @name addNote()
   * @description add new note to notes array
   * @param note:string
   */
  @action
  addNote = (note: string) => {
    console.log("addNote")
    this.notes.push(note);
  }

  /**
* @name loadNotes()
* @description loads the notes to the view of the app
* @param 
*/
  @action
  loadNotes = () => {
    console.log('loadNotes');
    getNotes().then(notes => this.notes = notes);
  }

  /**
* @name saveNotes()
* @description save the current notes array to the server / database
* @param 
*/
  @action
  saveNotes = () => {
    console.log('saveNotes');
    postNotes(this.notes);
  }
  // EMD: ACTIONS
}
