

import { useLocation } from "react-router-dom";
import GridFilter from '../components/FiltersComponents/gridFilter';

export default function GridFilterAdvanced() {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const marca = searchParams.get("marca");
    const modelo = searchParams.get("modelo");
    const year = searchParams.get("year");

    return(
        <>
            
                <GridFilter marca={marca} modelo = {modelo} year={year} />
            
        </>
    );
}