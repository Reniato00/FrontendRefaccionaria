import * as React from 'react';
import { useState } from 'react';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';

import GridFilter from './FiltersComponents/gridFilter';



import ResponsiveAppBar from './navbar';
import FilterMarcas from './FiltersComponents/filterMarcas';
import FilterModelos from './FiltersComponents/filterModelos';
import FilterAnos from './FiltersComponents/filterAnos';



const defaultTheme = createTheme();



export default function FilterMain() {
    const [Marca,setMarca] = useState(0);
    const [Modelo,setModelo] = useState();
    const [Ano,setAno] =useState()
    const [showComponent,setShowComponent] =useState(false);

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
                                            <Button  variant="contained" onClick={()=>setShowComponent(false)} style={{marginRight:'10px'}}>Reiniciar</Button>
                                            <Button variant="contained" onClick={()=> setShowComponent(!showComponent)}>
                                                Buscar
                                                
                                            </Button>
                                        </Box>
                                    </Grid>
                                    {showComponent && (
                                        <Box mt={2} mb={2} gridColumn={"span 12"} >
                                            <GridFilter marca={Marca} modelo={Modelo} year = {Ano} />
                                        
                                        </Box>
                                    )}
                                    
                                    
                                    
                                    
                                    

                                    
                                    
                                </Box>
                            </Box>
                        </Container>
                        
                            
                        
                            
                        
                        
                        

                    </Grid>
            
        </ThemeProvider>
    )
}

