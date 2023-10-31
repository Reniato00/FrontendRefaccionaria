


export const rows = [
  { id: 1, tipo: 'Radiador', marca: 'Honda', ano: 2011,inventario:1 ,img:'img.jpg'},
  { id: 2, tipo: 'Tapa', marca: 'Honda', ano: 2012,inventario:1,img:'img.jpg' },
  { id: 3, tipo: 'Tapa', marca: 'Nissan', ano: 2013,inventario:1,img:'img.jpg' },
  { id: 4, tipo: 'Ventilador/Abanico', marca: 'Nissan', ano: 2015,inventario:1,img:'img.jpg' },
  { id: 5, tipo: 'Ventilador/Abanico', marca: 'Nissan', ano: 2020 ,inventario:1,img:'img.jpg'},
  { id: 6, tipo: 'Radiador', marca: 'Mazda', ano: 2020 ,inventario:1,img:'img.jpg'},
  { id: 7, tipo: 'Ventilador/Abanico', marca: 'Mazda', ano: 2021,inventario:1 ,img:'img.jpg'},
  { id: 8, tipo: 'Accesorios', marca: 'Honda', ano: 2018,inventario:1 ,img:'img.jpg'},
  { id: 9, tipo: 'Accesorios', marca: 'Harvey', ano: 2018 ,inventario:1,img:'img.jpg'},
  { id: 10, tipo: 'Radiador', marca: 'Audi', ano: 2019 ,inventario:1,img:'img.jpg'},
  { id: 11, tipo: 'Accesorios', marca: 'Audi', ano: 2018 ,inventario:1,img:'img.jpg'},
  { id: 12, tipo: 'Tapa', marca: 'Audi', ano: 2018 ,inventario:1,img:'img.jpg'},
  { id: 13, tipo: 'Radiador', marca: 'BMW', ano: 2015 ,inventario:1,img:'img.jpg'},
  { id: 14, tipo: 'Radiador', marca: 'BMW', ano: 2016 ,inventario:1,img:'img.jpg'},
];


 export const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'tipo', headerName: 'TIPO', width: 130 },
  { field: 'marca', headerName: 'MARCA', width: 130 },
  {
    field: 'ano',
    headerName: 'AÑO',
    type: 'number',
    width: 90,
  },
  {
    field: 'inventario',
    headerName: 'EXISTENCIA',
    type: 'number',
    width: 100,
  },
  { field: 'img', headerName: 'IMAGEN', width: 130 },
];