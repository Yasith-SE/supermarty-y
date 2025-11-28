import { Link } from "react-router-dom";
import "./navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Navbar() {
    return (
        <>
            <div class="container">
                <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
                    <Link to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none" />
                        <svg class="bi me-2" width="40" height="32" aria-hidden="true">
                            <use xlink:href="#bootstrap"></use>
                        </svg>
                      
                    <ul class="nav nav-pills">
                        <li class="nav-item"><Link to="/" className="nav-link active" aria-current="page" />Home</li>
                        <li class="nav-item"><Link to="/products" className="nav-link" />Features</li>
                        <li class="nav-item"><Link to="/pricing" className="nav-link" />Pricing</li>
                        <li class="nav-item"><Link to="/addToCart" className="nav-link" />FAQs</li>
                        <li class="nav-item"><Link to="/about" class="nav-link" />About us</li>
                    </ul>
                </header>
            </div>
        </>
    );
}

export default Navbar;
