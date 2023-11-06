import { useEffect, useState } from "react";
import { getAllAnos } from "../../models/auto.api";
import Grid from '@mui/material/Grid';
import { Button } from "@mui/material";

export default function FilterAnos(props) {
    const [Anos, setAnos] = useState([]); // Inicializa como un array vacío

    useEffect(() => {
        async function loadAnos() {
            const res = await getAllAnos();
            console.log(res.data);
            setAnos(res.data);
        }
        loadAnos();
    }, []);

    function handleButtonClick(id) {
        props.setAno(id);
        console.log(id);
    }

    return (
        <div>
            <Grid container justifyContent="space-around">
                {Anos.map((ano) => (
                    <Grid item key={ano} xs={12} sm={6} md={4} lg={3}>
                        {/* Renderiza cada marca como un rectángulo */}
                        <div style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
                            <h3>{ano}</h3>
                            <Button onClick={()=> handleButtonClick(ano)}>Aqui Año</Button>
                            
                        </div>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}
