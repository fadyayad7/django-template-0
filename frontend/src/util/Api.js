import axios from "axios"


export class Api {

    static getNotes = async () => {
        return await axios.get('/api/note');
    }

    static postNote = async (body) => {
        return await axios.post('/api/note/', body)
    }
    
    static deleteNote = async (noteId) => {
        return await axios.delete('/api/note/' + noteId)
    }
    
    static updateNote = async (noteId, value) => {
        return await axios.patch(`/api/note/${noteId}/`, value)
    }
}