
import CartWidget from "./Cart/CartWidget";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="text-white bg-dark">
            <nav className="navbar navbar-expand-lg navbar-dark">
              <div className="container-fluid">
                <Link to="/" style={{textDecoration: "none"}} ><h3 className="fs-2 navbar-brand" >2Fus_Shop</h3></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <Link to="/" className="nav-link">Inicio</Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/category/1" className="nav-link">Buzos</Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/category/2" className="nav-link">Remeras</Link>
                    </li>
                  </ul>
                  <ul className="collapse navbar-collapse px-3 justify-content-end"></ul>
                  <CartWidget/>
                </div>
              </div>
            </nav>
        </div>
    )
}

export default Navbar;