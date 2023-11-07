import { useEffect, useState } from "react";
import { getAllMarcas } from "../../models/marca.api";
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

export default function FilterMarcas(props) {
  const [Marcas, setMarcas] = useState([]);
  const [selectedMarca, setSelectedMarca] = useState('');

  useEffect(() => {
    async function loadMarcas() {
      const res = await getAllMarcas();
      setMarcas(res.data);
    }
    loadMarcas();
  }, []);

  const handleDropdownChange = (event) => {
    const selectedMarcaId = event.target.value;
    setSelectedMarca(selectedMarcaId);
    props.setMarca(selectedMarcaId);
  };

  return (
    <div>
      <FormControl style={{ minWidth: '200px' }}>
        <InputLabel>Marca</InputLabel>
        <Select
          value={selectedMarca}
          onChange={handleDropdownChange}
        >
          <MenuItem value="">Seleccione una marca</MenuItem>
          {Marcas.map((marca) => (
            <MenuItem key={marca.idMarca} value={marca.idMarca}>
              {marca.nombreMarca}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
