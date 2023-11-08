import axios from 'axios'

export const getAllModelo = () => {
    return axios.get('http://nscco.com.mx/radiadoresDiaz/api2/api/Auto/ListaAuto');
}

export const getAllAnos = () => {
    return axios.get('http://nscco.com.mx/radiadoresDiaz/api2/api/Auto/ListaAnos')
}