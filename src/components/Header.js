import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <Link to={"/cars"}>Cars</Link>
            <Link to={"/add"}>Add</Link> 
        </div>
    )
}

export default Header;

