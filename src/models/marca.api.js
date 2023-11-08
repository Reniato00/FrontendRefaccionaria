import axios from 'axios'

export const getAllMarcas = () => {
    return axios.get('http://nscco.com.mx/radiadoresDiaz/api2/api/Marca');
}