import { useEffect, useState } from "react";
import { getAllModelo } from "../../models/auto.api";
import Grid from '@mui/material/Grid';
import { Button } from "@mui/material";

export default function FilterModelos(props) {
    const [Modelos, setModelos] = useState([]); // Inicializa como un array vacío

    useEffect(() => {
        async function loadMarcas() {
            const res = await getAllModelo();
            
            setModelos(res.data);
        }
        loadMarcas();
    }, []);

    function handleButtonClick(id) {
        props.setModelo(id);
        console.log(id);
    }

    return (
        <div>
            <Grid container justifyContent="space-around">
                {Modelos.map((modelo) => (
                    <Grid item key={modelo.idAuto} xs={12} sm={6} md={4} lg={3}>
                        {/* Renderiza cada marca como un rectángulo */}
                        <div style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
                            <h3>{modelo.modelo}</h3>
                            <Button onClick={()=> handleButtonClick(modelo.idAuto)}>Aqui Modelo</Button>
                            
                        </div>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}
