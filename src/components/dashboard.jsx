import * as React from 'react';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';


import ResponsiveAppBar from './navbar';
import DataTable from './tableGrid';


import { rows, columns } from '../models/product.api';


const defaultTheme = createTheme();

const linkStyles = {
    textDecoration: 'none', // Elimina la subrayado del enlace
    color: 'inherit', // Cambia el color del texto del enlace
    // Agrega otros estilos según tus preferencias
  };


export default function Main() {
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
                                
                                <Box gridColumn={"span 12"} >
                                    
                                    <DataTable rows={rows} columns={columns} />
                                    <Grid container justifyContent="flex-end">
                                        <Box mt={2} >
                                            <Button variant="contained">
                                                <Link to="/filter" style={linkStyles}>Busqueda Especifica</Link>
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

