import * as React from 'react';
import { useState,useEffect } from 'react';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import { Link } from 'react-router-dom';



import ResponsiveAppBar from './navbar';
import FilterMarcas from './FiltersComponents/filterMarcas';
import FilterModelos from './FiltersComponents/filterModelos';
import FilterAnos from './FiltersComponents/filterAnos';



const defaultTheme = createTheme();

const linkStyles = {
    textDecoration: 'none', // Elimina la subrayado del enlace
    color: 'inherit', // Cambia el color del texto del enlace
    // Agrega otros estilos según tus preferencias
  };



export default function FilterMain() {
    const [Marca,setMarca] = useState(0);
    const [Modelo,setModelo] = useState();
    const [Ano,setAno] =useState()

const urlWithParameters = `/gridFilterAdvanced?marca=${Marca}&modelo=${Modelo}&year=${Ano}`;
    return(
        <ThemeProvider theme={defaultTheme}>
            
                <CssBaseline />
                    <Grid 
                        container
                        direction="column"
                        justifyContent="space-around"
                        alignItems="stretch"
                    >
                        <ResponsiveAppBar/>
                        <Container maxWidth="">
                            <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
                                
                                <Box mt={2} mb={2} gridColumn={"span 12"} >
                                    <Box mt={2} mb={2} gridColumn={"span 12"} >
                                        <h1>Año</h1>
                                        <FilterAnos setAno={setAno}/>
                                    </Box>
                                    
                                    <Divider />
                                    <Box mt={2} gridColumn={"span 12"} >
                                        <h1>Marcas</h1>
                                        <FilterMarcas setMarca = {setMarca} />
                                    </Box>
                                    <Divider />
                                    <Box mt={2} mb={2} gridColumn={"span 12"} >
                                        <h1>Modelos</h1>
                                        <FilterModelos setModelo = {setModelo}/>
                                    </Box>
                                    <Grid container justifyContent="flex-end">
                                        <Box mt={2} >
                                            <Button variant="contained">
                                                <Link to={urlWithParameters} style={linkStyles}>Buscar</Link>
                                            </Button>
                                        </Box>
                                    </Grid>
                                    
                                    
                                    
                                    

                                    
                                    
                                </Box>
                            </Box>
                        </Container>
                        
                            
                        
                            
                        
                        
                        

                    </Grid>
            
        </ThemeProvider>
    )
}

