import * as React from 'react';
import { useState,useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';

export default function GridFilter() {
    return(
        <>
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    
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
        </>
    )
}