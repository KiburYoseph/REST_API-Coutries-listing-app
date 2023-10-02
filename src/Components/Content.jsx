import '../Components/Content.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';

const Content = () => {

    const [searchTerm, setSearchTerm] = useState('')
    const [menuState, setMenuState] = useState(true)
    const [filterState, setFilterState] = useState('none')

    return (
        <>
            <section className='menuSection'>
                <div className='search'>
                <FontAwesomeIcon icon={faMagnifyingGlass} style={{color: "hsl(0, 0%, 52%)"}} className='magnifyingGlass'/>
                    <input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value )} placeholder='Search for a country...' />
                </div>
                <button className='dropDownBtn' onClick={() => setMenuState(!menuState)}>{(filterState == 'none') ?  "Filter by Region" : filterState}<FontAwesomeIcon icon={faCaretDown} style={{color: "#111517"}} className={`caretDown rotate${!menuState}`}/>
                { menuState ? 
                <ul className='dropDownMenu'>
                        <li onClick={() => setFilterState('Africa')}>Africa</li>
                        <li onClick={() => setFilterState('America')}>America</li>
                        <li onClick={() => setFilterState('Asia')}>Asia</li>
                        <li onClick={() => setFilterState('Europe')}>Europe</li>
                        <li onClick={() => setFilterState('Oceania')}>Oceania</li>
                        <li onClick={() => setFilterState('none')}>No Filter</li>
                </ul>
                    : null}    
                    
                </button>
            </section>

            <ul className='listSection'>
                <li>
                    <div className='flags'></div>
                    <div className='countryInfo'>
                        <h2>Country Name</h2>
                        <p><strong>Population:</strong> 123345436</p>
                        <p><strong>Region:</strong> Place</p>
                        <p><strong>Capital:</strong> Another Place</p>
                    </div>
                </li>
                <li>
                    <div className='flags'></div>
                    <div className='countryInfo'>
                        <h2>Country Name</h2>
                        <p><strong>Population:</strong>123345436</p>
                        <p><strong>Region:</strong>Place</p>
                        <p><strong>Capital:</strong>Another Place</p>
                    </div>
                </li>
                <li>
                    <div className='flags'></div>
                    <div className='countryInfo'>
                        <h2>Country Name</h2>
                        <p><strong>Population:</strong>123345436</p>
                        <p><strong>Region:</strong>Place</p>
                        <p><strong>Capital:</strong>Another Place</p>
                    </div>
                </li>
                <li>
                    <div className='flags'></div>
                    <div className='countryInfo'>
                        <h2>Country Name</h2>
                        <p><strong>Population:</strong>123345436</p>
                        <p><strong>Region:</strong>Place</p>
                        <p><strong>Capital:</strong>Another Place</p>
                    </div>
                </li>
                <li>
                    <div className='flags'></div>
                    <div className='countryInfo'>
                        <h2>Country Name</h2>
                        <p><strong>Population:</strong>123345436</p>
                        <p><strong>Region:</strong>Place</p>
                        <p><strong>Capital:</strong>Another Place</p>
                    </div>
                </li>
                <li>
                    <div className='flags'></div>
                    <div className='countryInfo'>
                        <h2>Country Name</h2>
                        <p><strong>Population:</strong>123345436</p>
                        <p><strong>Region:</strong>Place</p>
                        <p><strong>Capital:</strong>Another Place</p>
                    </div>
                </li>
                <li>
                    <div className='flags'></div>
                    <div className='countryInfo'>
                        <h2>Country Name</h2>
                        <p><strong>Population:</strong>123345436</p>
                        <p><strong>Region:</strong>Place</p>
                        <p><strong>Capital:</strong>Another Place</p>
                    </div>
                </li>
                <li>
                    <div className='flags'></div>
                    <div className='countryInfo'>
                        <h2>Country Name</h2>
                        <p><strong>Population:</strong>123345436</p>
                        <p><strong>Region:</strong>Place</p>
                        <p><strong>Capital:</strong>Another Place</p>
                    </div>
                </li>
            </ul>
        </>
    )
}

export default Content