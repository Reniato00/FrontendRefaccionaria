import { useEffect, useState } from "react";
import { getAllModelo } from "../../models/auto.api";
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

export default function FilterModelos(props) {
  const [Modelos, setModelos] = useState([]);
  const [selectedModelo, setSelectedModelo] = useState('');

  useEffect(() => {
    async function loadModelos() {
      const res = await getAllModelo();
      setModelos(res.data);
    }
    loadModelos();
  }, []);

  const handleDropdownChange = (event) => {
    const selectedModeloId = event.target.value;
    setSelectedModelo(selectedModeloId);
    props.setModelo(selectedModeloId);
  };

  return (
    <div>
      <FormControl style={{ minWidth: '200px' }}>
        <InputLabel>Modelo</InputLabel>
        <Select
          value={selectedModelo}
          onChange={handleDropdownChange}
        >
          <MenuItem value="">Seleccione un modelo</MenuItem>
          {Modelos.map((modelo) => (
            <MenuItem key={modelo.idAuto} value={modelo.idAuto}>
              {modelo.modelo}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
