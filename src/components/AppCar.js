import { Link } from "react-router-dom";

const AppCar = ({car}) => {
    return (
        <li>{car.brand} {car.model} <Link to={`/edit/${car.id}`}><button>Edit</button></Link> </li> 
    )
}

export default AppCar;






