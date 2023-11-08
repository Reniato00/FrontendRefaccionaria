import axios from 'axios'

export const getAllMarcas = () => {
    return axios.get('http://127.0.0.1:5182/api/Marca');
}