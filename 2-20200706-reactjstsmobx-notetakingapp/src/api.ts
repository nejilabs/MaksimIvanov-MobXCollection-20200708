/**
 * @name getNotes() 
 * @description gets notes from the server saved in our db.json
 */
export const getNotes = () =>{
  console.log('getNotesFromServer')
  return fetch("http://localhost:4000/notes")
  .then(res => {
    console.log(res)
    return res.json()
  });
}


/**
 * @name postNotes()
 * @description post notes data to the server to be stored in db.json
 * @param notes 
 */
export const postNotes = (notes:string[])=>{
  fetch("http://localhost:4000/notes",{
    method:"POST",
    headers:{
      Accept:"application/json",
      "Content-Type":"application/json"
    },
    body:JSON.stringify(notes)
  })
}  