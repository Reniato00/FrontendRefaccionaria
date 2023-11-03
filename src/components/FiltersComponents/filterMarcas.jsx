import { useEffect, useState } from "react";
import { getAllMarcas } from "../../models/marca.api";

import Grid from '@mui/material/Grid';

import Button from '@mui/material/Button';

export default function FilterMarcas(props) {
    const [Marcas, setMarcas] = useState([]);
    
 

    useEffect(() => {
        async function loadMarcas() {
            const res = await getAllMarcas();
            
            setMarcas(res.data);
        }
        loadMarcas();
    }, []);

    function handleButtonClick(id) {
        console.log(id);
        props.setMarca(id);
        
    }

    return (
        <div>
            <Grid container justifyContent="space-around">
                {Marcas.map((marca) => (
                    <Grid item key={marca.idMarca} xs={12} sm={6} md={4} lg={3}>
                        {/* Renderiza cada marca como un rectángulo */}
                        <div style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
                            <h3>{marca.nombreMarca}</h3>
                            <Button key={marca.idMarca} onClick={()=>handleButtonClick(marca.idMarca)}>Aqui</Button>
                            
                        </div>
                        
                    </Grid>

                ))}
            </Grid>
        </div>
    );
}
