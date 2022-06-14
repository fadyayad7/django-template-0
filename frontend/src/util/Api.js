import axios from "axios"


export class Api {

    static AMAZON_BASE_PATH = '/api/amazon';

    //Products
    static getProducts = async () => {
        return await axios.get(`${this.AMAZON_BASE_PATH}/product`);
    }

    // NOTES
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