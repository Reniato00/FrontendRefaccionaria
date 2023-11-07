import { useEffect, useState } from "react";
import { getAllAnos } from "../../models/auto.api";
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

export default function FilterAnos(props) {
  const [Anos, setAnos] = useState([]);
  const [selectedAno, setSelectedAno] = useState('');

  useEffect(() => {
    async function loadAnos() {
      const res = await getAllAnos();
      console.log(res.data);
      setAnos(res.data);
    }
    loadAnos();
  }, []);

  const handleDropdownChange = (event) => {
    const selectedYear = event.target.value;
    setSelectedAno(selectedYear);
    props.setAno(selectedYear);
    console.log(selectedYear);
  };

  return (
    <div>
      <FormControl>
        <InputLabel>Año</InputLabel>
        <Select
          value={selectedAno}
          onChange={handleDropdownChange}
          style={{ minWidth: '200px' }} // Establece el ancho deseado
        >
          <MenuItem value="">Seleccione un año</MenuItem>
          {Anos.map((ano) => (
            <MenuItem key={ano} value={ano}>
              {ano}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
