import * as React from 'react';
import { useState,useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import {getAllProducts} from '../models/product.api'


const columns = [
  { field: 'idProducto', headerName: 'Id', width: 70 ,filterable: true},
  {
    field: 'nombreMarca',
    headerName: 'Marca',
    width: 130,
    filterable: true
  },
  {
    field: 'modelo',
    headerName: 'Modelo',
    width: 130,
    filterable: true
  },
  {
    field: 'year',
    headerName: 'Año',
    type: 'number',
    width: 130,
    filterable: true
  },
  {
    field: 'nombreProducto',
    headerName: 'Nombre del Producto',
    width: 130,
    filterable: true
  },
  {
    field: 'noParte',
    headerName: 'Lote',
    width: 130,
    filterable: true
    
  },
  { field: 'material', headerName: 'Material', width: 130 ,filterable: true},
  { field: 'precioNuevoInstalado', headerName: 'Precio Nuevo Instalado',type: 'number', width: 130,filterable: true },
  { field: 'precioNuevoSuelto', headerName: 'Precio Nuevo Suelto',type: 'number', width: 130,filterable: true },
  { field: 'precioReparadoInstalado', headerName: 'Precio Reparado Instalado',type: 'number', width: 130,filterable: true },
  { field: 'precioReparadoSuelto', headerName: 'Precio Reparado Suelto',type: 'number', width: 130,filterable: true },
  { field: 'observaciones', headerName: 'Observaciones', width: 130,filterable: true },
  {
    field: 'existencia',
    headerName: 'Existencia',
    type: 'number',
    width: 90,
    filterable: true
  },
  { field: 'img', headerName: 'Imagen', width: 130,filterable: true },
];


export default function DataTable(props) {
  const [Products,setProducts] = useState();

  useEffect(()=>{
    async function loadProducts(){
      const res = await getAllProducts();

      console.log(res.data)
      setProducts(res.data);
    }
    loadProducts();
  },[]);

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={Products || []}
        columns={columns}
        getRowId={(row) => row.idProducto}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
    
    
    
  );
}