import { useEffect, useState } from "react";
import { getAll } from "../services/carsService";
import AppCar from "./AppCar";

const AppCars = () => {
    const [cars, setCars] = useState([]);
    useEffect(() => {
        getAll().then(({data}) => setCars(data));
    }, []);

    return (
        <div>
            <ul>
                {cars.map((car, index) => {
                    return (
                        <AppCar
                        key={index}
                        car={car} 
                        />
                    )
                })}
            </ul>
        </div>
    )
}

export default AppCars;


