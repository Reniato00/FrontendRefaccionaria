import axios from 'axios'

export const getAllMarcas = () => {
    return axios.get('http://localhost:5182/api/Marca');
}