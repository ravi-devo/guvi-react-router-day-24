import './navbar.css';
import {Link} from 'react-router-dom';

const navBar = () => {
    return (
        <div className="container">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <Link className='navbar-brand' to="/">TechEd</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navBarTop" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse heading-nav" id="navBarTop">
                    <div class="navbar-nav">
                    <Link className='blogs-route nav-item nav-link'>COURSES</Link>
                    <Link className='blogs-route nav-item nav-link'>LIVE CLASSES</Link>
                    <Link className='blogs-route nav-item nav-link'>PRACTISE</Link>
                    <Link className='blogs-route nav-item nav-link'>RESOURCE</Link>
                    <Link className='blogs-route nav-item nav-link'>OUR PRODUCTS</Link>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default navBar;