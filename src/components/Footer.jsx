import '../css/footer.css';
import {Link} from 'react-router-dom';
const Footer = () =>{

    return(
        <footer className="d-flex flex-wrap bg-dark justify-content-evenly align-items-center py-5 ">
            <div className="col-md-4 d-flex align-items-center">
            <a
                href="/"
                className="mb-3 me-2 mb-md-0 py-2 text-muted text-decoration-none lh-1 active"
            >
                <i className="bi bi-calendar4" ></i>
            </a>
            <span className="mb-3 mb-md-0 text-muted">© Procuraduria Fiscal R.D.</span>
            </div>
            <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li className="ms-3">
                <a className="text-muted" rel="noopener noreferrer" target='_blank' href="/">
                    <i className="bi bi-linkedin"></i>
                </a>
            </li>
            <li className="ms-3">
                <a className="text-muted" rel="noopener noreferrer" target="_blank" href="/">
                    <i className="bi bi-github"></i>
                </a>
            </li>
            <li className="ms-3">
                <Link className="text-muted" to='/'><i className="bi bi-envelope"></i></Link>
            </li>
            </ul>
        </footer>
    );
}

export {
    Footer
}