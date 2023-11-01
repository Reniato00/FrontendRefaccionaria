import * as React from 'react';
import { useState,useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import {getAllProducts} from '../models/product'





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
        columns={props.columns}
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