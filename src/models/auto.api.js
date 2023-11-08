import axios from 'axios'

export const getAllModelo = () => {
    return axios.get('http://127.0.0.1:5182/api/Auto/ListaAuto');
}

export const getAllAnos = () => {
    return axios.get('http://127.0.0.1:5182/api/Auto/ListaAnos')
}