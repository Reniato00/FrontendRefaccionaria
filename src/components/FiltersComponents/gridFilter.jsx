import * as React from 'react';
import { useState,useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { getProductsByMarcaModeloYear } from '../../models/product.api';

export default function GridFilter(props) {
    const [Data, setData] =useState();

    useEffect(()=>{
        const res = getProductsByMarcaModeloYear(props.marca,props.modelo,props.year);
        setData(res.data)
        console.log(res.data)
    },[]);


    return(
        <>
            <div style={{ height: 400, width: '100%' }}>
                {/*<DataGrid
                    
                    getRowId={(row) => row.idProducto}
                    initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 5 },
                    },
                    }}
                    pageSizeOptions={[5, 10]}
                    checkboxSelection
                />*/}
            </div>
        </>
    )
}