import { Link,useLocation } from 'react-router-dom';
import { Search as SearchIcon, HelpOutline as HelpIcon } from '@mui/icons-material';
import {IconButton} from '@mui/material';
import './NavBar.css';


const NavBar = ({ searchTerm, setSearchTerm }) =>{
    const location = useLocation();

    return (
        <header>
            <nav>
            <Link to="/" className="nav-link"><h1 className="app-name">Kalvium Books</h1></Link>
            {location.pathname === '/' && (
                <>
                    <div className="search-bar">
                        <SearchIcon />
                        <input
                            type="text"
                            placeholder="Search books..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <Link to="/register" ><button className="reg-btn">Register</button></Link>
                    <IconButton color="inherit">
                        <HelpIcon />
                    </IconButton>
                </> 
                )}
            </nav>
            
        </header>
        );
}

export default NavBar;