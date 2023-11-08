
import axios from 'axios';


export const rows = [
  { id: 1,precioNuevoSuelto:3.5,precioNuevoInstalado:5.0,precioReparadoSuelto:1.5,precioReparadoInstalado:15.1,costoProvedor:12.3 ,tipo: 'Radiador',noParte:'MX-124',material: 'plastico',observaciones:'sin comentarios', marca: 'Honda',modelo:'Civic', ano: 2011,inventario:1 ,img:'img.jpg'},
  { id: 2,precioNuevoSuelto:3.5,precioNuevoInstalado:5.0,precioReparadoSuelto:1.5,precioReparadoInstalado:15.1,costoProvedor:12.3, tipo: 'Tapa',noParte:'MX-124',material: 'plastico',observaciones:'sin comentarios', marca: 'Honda',modelo:'City', ano: 2012,inventario:1,img:'img.jpg' },
  { id: 3,precioNuevoSuelto:3.5,precioNuevoInstalado:5.0,precioReparadoSuelto:1.5,precioReparadoInstalado:15.1,costoProvedor:12.3, tipo: 'Tapa',noParte:'MX-124',material: 'plastico',observaciones:'sin comentarios', marca: 'Nissan',modelo:'March', ano: 2013,inventario:1,img:'img.jpg' },
  { id: 4,precioNuevoSuelto:3.5,precioNuevoInstalado:5.0,precioReparadoSuelto:1.5,precioReparadoInstalado:15.1,costoProvedor:12.3, tipo: 'Ventilador/Abanico',noParte:'MX-124',material: 'plastico',observaciones:'sin comentarios', marca: 'Nissan',modelo:'Versa', ano: 2015,inventario:1,img:'img.jpg' },
  { id: 5,precioNuevoSuelto:3.5,precioNuevoInstalado:5.0,precioReparadoSuelto:1.5,precioReparadoInstalado:15.1,costoProvedor:12.3, tipo: 'Ventilador/Abanico',noParte:'MX-124',material: 'plastico',observaciones:'sin comentarios', marca: 'Nissan',modelo:'Tsuru', ano: 2020 ,inventario:1,img:'img.jpg'},
  { id: 6,precioNuevoSuelto:3.5,precioNuevoInstalado:5.0,precioReparadoSuelto:1.5,precioReparadoInstalado:15.1,costoProvedor:12.3, tipo: 'Radiador',noParte:'MX-124',material: 'plastico',observaciones:'sin comentarios', marca: 'Mazda',modelo:'MX-5', ano: 2020 ,inventario:1,img:'img.jpg'},
  { id: 7,precioNuevoSuelto:3.5,precioNuevoInstalado:5.0,precioReparadoSuelto:1.5,precioReparadoInstalado:15.1,costoProvedor:12.3, tipo: 'Ventilador/Abanico',noParte:'MX-124',material: 'plastico',observaciones:'sin comentarios', marca: 'Mazda',modelo:'Mazda 3', ano: 2021,inventario:1 ,img:'img.jpg'},
  { id: 8,precioNuevoSuelto:3.5,precioNuevoInstalado:5.0,precioReparadoSuelto:1.5,precioReparadoInstalado:15.1,costoProvedor:12.3, tipo: 'Accesorios',noParte:'MX-124',material: 'plastico',observaciones:'sin comentarios', marca: 'Honda',modelo:'CR-V', ano: 2018,inventario:1 ,img:'img.jpg'},
  { id: 9,precioNuevoSuelto:3.5,precioNuevoInstalado:5.0,precioReparadoSuelto:1.5,precioReparadoInstalado:15.1,costoProvedor:12.3, tipo: 'Accesorios',noParte:'MX-124',material: 'plastico',observaciones:'sin comentarios', marca: 'Honda',modelo:'HR-V', ano: 2018 ,inventario:1,img:'img.jpg'},
  { id: 10,precioNuevoSuelto:3.5,precioNuevoInstalado:5.0,precioReparadoSuelto:1.5,precioReparadoInstalado:15.1,costoProvedor:12.3, tipo: 'Radiador',noParte:'MX-124',material: 'plastico',observaciones:'sin comentarios', marca: 'Audi',modelo:'A4', ano: 2019 ,inventario:1,img:'img.jpg'},
  { id: 11,precioNuevoSuelto:3.5,precioNuevoInstalado:5.0,precioReparadoSuelto:1.5,precioReparadoInstalado:15.1,costoProvedor:12.3, tipo: 'Accesorios',noParte:'MX-124',material: 'plastico',observaciones:'sin comentarios', marca: 'Audi',modelo:'A4', ano: 2018 ,inventario:1,img:'img.jpg'},
  { id: 12,precioNuevoSuelto:3.5,precioNuevoInstalado:5.0,precioReparadoSuelto:1.5,precioReparadoInstalado:15.1,costoProvedor:12.3, tipo: 'Tapa',noParte:'MX-124',material: 'plastico',observaciones:'sin comentarios', marca: 'Audi',modelo:'A4', ano: 2018 ,inventario:1,img:'img.jpg'},
  { id: 13,precioNuevoSuelto:3.5,precioNuevoInstalado:5.0,precioReparadoSuelto:1.5,precioReparadoInstalado:15.1,costoProvedor:12.3, tipo: 'Radiador',noParte:'MX-124',material: 'plastico',observaciones:'sin comentarios', marca: 'BMW',modelo:'i100', ano: 2015 ,inventario:1,img:'img.jpg'},
  { id: 14,precioNuevoSuelto:3.5,precioNuevoInstalado:5.0,precioReparadoSuelto:1.5,precioReparadoInstalado:15.1,costoProvedor:12.3, tipo: 'Radiador',noParte:'MX-124',material: 'plastico',observaciones:'sin comentarios', marca: 'BMW',modelo:'i100', ano: 2016 ,inventario:1,img:'img.jpg'},
];


 export const columns = [
  { field: 'idProducto', headerName: 'Id', width: 70 ,filterable: true},
  {
    field: 'precioNuevoSuelto',
    headerName: 'Precio Nuevo Suelto',
    type: 'number',
    width: 130,
    filterable: true
  },
  {
    field: 'precioNuevoInstalado',
    headerName: 'Precio Nuevo Instalado',
    type: 'number',
    width: 130,
    filterable: true
  },
  {
    field: 'precioReparadoSuelto',
    headerName: 'Precio Reparado Suelto',
    type: 'number',
    width: 130,
    filterable: true
  },
  {
    field: 'precioReparadoInstalado',
    headerName: 'Precio Reparado Instalado',
    type: 'number',
    width: 130,
    filterable: true
  },
  {
    field: 'costoProveedor',
    headerName: 'Costo Provedor',
    type: 'number',
    width: 130,
    filterable: true
    
  },
  { field: 'idTipoProducto', headerName: 'Tipo', width: 130 ,filterable: true},
  { field: 'noParte', headerName: 'Lote', width: 130,filterable: true },
  { field: 'material', headerName: 'Material', width: 130,filterable: true },
  { field: 'observaciones', headerName: 'Observaciones', width: 130,filterable: true },
  { field: 'marca', headerName: 'Marca', width: 130,filterable: true },
  { field: 'modelo', headerName: 'Modelo', width: 130,filterable: true },
  {
    field: 'ano',
    headerName: 'Año',
    type: 'number',
    width: 90,
    filterable: true
  },
  {
    field: 'inventario',
    headerName: 'Inventario',
    type: 'number',
    width: 100,
    filterable: true
  },
  { field: 'img', headerName: 'Imagen', width: 130,filterable: true },
];



export const getAllProducts = () => {
  return axios.get('http://127.0.0.1:5182/api/Radiadores/ListaRadiadores');
}

export const getProductsByMarcaModeloYear= (marca,modelo,year) => {
  const urlWithParameters = `http://127.0.0.1:5182/api/Radiadores/PorMarcaAutoYear?idMarca=${marca}&idAuto=${modelo}&year=${year}`;
  return axios.get (urlWithParameters);
}

