

function createData(id, name, marca, modelo, ano, inventario ,img) {
    return {
      id,
      name,
      marca,
      modelo,
      ano,
      inventario,
      img,
    };
}

const rows = [
    createData(1, 'Radiador', 'Honda', 'Civic', 2011,3, 'img.jpg'),
    createData(2, 'Bomba de Agua', 'Honda', 'City', 2022,1,'img.jpg'),
    createData(3, 'Radiador', 'Honda', 'Accord', 2020,0, 'img.jpg'),
    createData(4, 'Bomba de Agua', 'Nissan', 'Sentra', 2018,2, 'img.jpg'),
    createData(5, 'Bomba de Agua', 'Nissan', 'Versa', 2019,5, 'img.jpg'),
    createData(6, 'Radiador', 'Nissan', 'March', 2018,0, 'img.jpg'),
    createData(7, 'Bomba de Agua', 'Honda', 'HR-V', 2015,1, 'img.jpg'),
    createData(8, 'Radiador', 'BMW', 'i4', 2012,2, 'img.jpg'),
    createData(9, 'Radiador', 'Audi', 'A4', 2023,1, 'img.jpg'),
    createData(10, 'Radiador', 'Honda', 'CR-V', 2018,3, 'img.jpg'),
    createData(11, 'Radiador', 'Mazda', 'CX-5', 2019,4, 'img.jpg'),
    createData(12, 'Radiador', 'BMW', 'Z4', 2020,1, 'img.jpg'),
    createData(13, 'Bomba de Agua', 'Mazda', 'Mazda 3',0, 2018, 'img.jpg'),
  ];

  const headCells = [
    {
      id: 'name',
      numeric: false,
      disablePadding: true,
      label: 'name',
    },
    {
      id: 'marca',
      numeric: false,
      disablePadding: false,
      label: 'marca',
    },
    {
      id: 'modelo',
      numeric: false,
      disablePadding: false,
      label: 'modelo',
    },
    {
      id: 'ano',
      numeric: true,
      disablePadding: false,
      label: 'año',
    },
    {
      id: 'inventario',
      numeric: true,
      disablePadding: false,
      label: 'inventario',
    },
    {
        id:'img',
        numeric:false,
        disablePadding:false,
        label:'img',
    },
  ];