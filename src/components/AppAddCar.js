import { useEffect, useState } from "react";
import { add, getCar, editCar } from "../services/carsService"; 
import { useNavigate, useParams } from "react-router-dom";

const AppAddCar = () => {
    const [brand, setBrand] = useState("");
    const [model, setModel] = useState("");
    const [year, setYear] = useState(0);
    const [maxSpeed, setMaxSpeed] = useState(0);
    const [numberOfDoors, setNumberOfDoors] = useState(0); 
    const [isAutomatic, setIsAutomatic] = useState(true);
    const [engine, setEngine] = useState("");

    const navigate = useNavigate();

    const {id} = useParams(); 

    useEffect(() => {
        if (id) {
            getCar(id); 
        }
    });

    

    let years = [];
    for (let i = 1990; i <= 2018; i++) {
        years.push(i);
    }

    const handleReset = () => {
        setBrand("");
        setModel("");
        setYear(0);
        setMaxSpeed(0);
        setNumberOfDoors(0);
        setIsAutomatic(true);
        setEngine("");
    }
   
    const handlePreview = () => {
        alert(JSON.stringify({brand, model, year, maxSpeed, numberOfDoors, isAutomatic, engine})); 
    }

    const handleSubmit = e => {
        if (id) {
            e.preventDefault();
            editCar({brand, model, year, maxSpeed, numberOfDoors, isAutomatic, engine}, id);
            navigate("/cars");
            return;
        }

        e.preventDefault();
        add({brand, model, year, maxSpeed, numberOfDoors, isAutomatic, engine});
        navigate("/cars"); 
    }

    return (
        <div>
            <form onSubmit={e => handleSubmit(e)}>
                <label>Brand</label>
                <input type="text" minLength={2} value={brand} onChange={e => setBrand(e.target.value)} required />
                <label>Model</label>
                <input type="text" minLength={2} value={model} onChange={e => setModel(e.target.value)} required />
                <label>Year</label>
                <select onChange={e => setYear(e.target.value)} required>
                    {years.map((year, index) => {
                        return (
                            <option key={index} value={year}>{year}</option> 
                        )
                    })}
                </select>
                <label>Max Speed</label>
                <input type="number" value={maxSpeed} onChange={e => setMaxSpeed(e.target.value)} />
                <label>Number of doors</label>
                <input type="number" value={numberOfDoors} onChange={e => setNumberOfDoors(e.target.value)} required />
                <label>Is automatic</label>
                <input type="checkbox" checked={isAutomatic === true} onChange={e => setIsAutomatic(e.target.checked)} required />
                <label>Diesel</label>
                <input type="radio" name="engine" value={"diesel"} onChange={e => setEngine(e.target.value)} required />
                <label>Petrol</label>
                <input type="radio" name="engine" value={"petrol"} onChange={e => setEngine(e.target.value)} required />
                <label>Electric</label>
                <input type="radio" name="engine" value={"electric"} onChange={e => setEngine(e.target.value)} required />
                <label>Hybrid</label>
                <input type="radio" name="engine" value={"hybrid"} onChange={e => setEngine(e.target.value)} required />
                <button type="submit">Add car</button>
                <button type="reset" onClick={() => handleReset()}>Reset</button> 
                <button onClick={() => handlePreview()}>Preview</button> 
            </form>
        </div>
    )
}

export default AppAddCar;

