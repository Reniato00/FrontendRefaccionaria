import { useEffect, useState } from "react";
import { getAllMarcas } from "../../models/auto.api";
import Grid from '@mui/material/Grid';

export default function FilterModelos() {
    const [Marcas, setMarcas] = useState([]); // Inicializa como un array vacío

    useEffect(() => {
        async function loadMarcas() {
            const res = await getAllMarcas();
            console.log(res.data);
            setMarcas(res.data);
        }
        loadMarcas();
    }, []);

    return (
        <div>
            <Grid container justifyContent="space-around">
                {Marcas.map((marca) => (
                    <Grid item key={marca.idMarca} xs={12} sm={6} md={4} lg={3}>
                        {/* Renderiza cada marca como un rectángulo */}
                        <div style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
                            <h3>{marca.nombreMarca}</h3>
                            {/* Otros detalles de la marca */}
                        </div>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}
