import '../Components/Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-regular-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
/*<FontAwesomeIcon icon={faMagnifyingGlass} style={{color: "#c0c0c0",}} className='icon' />*/

const Navbar = () => {
    return (
        <nav>
            <h1>Where in the world?</h1>
            <button className='darkModeBtn'><FontAwesomeIcon icon={faMoon} style={{color: "#111517",}} className='moon'/>Dark Mode</button>
        </nav>
    )
}

export default Navbar