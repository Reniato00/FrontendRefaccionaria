import axios from 'axios'

export const getAllModelo = () => {
    return axios.get('http://localhost:5182/api/Auto/ListaAuto');
}

export const getAllAnos = () => {
    return axios.get('http://localhost:5182/api/Auto/ListaAnos')
}