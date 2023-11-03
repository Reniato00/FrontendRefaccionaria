import axios from 'axios'

export const getAllModelo = () => {
    return axios.get('http://localhost:5182/api/Auto/ListaAuto');
}