import '../Components/Content.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';

const Content = () => {

    const [searchTerm, setSearchTerm] = useState('')
    const [menuState, setMenuState] = useState(false)
    const [filterState, setFilterState] = useState('none')
    const [detailState, setDetailState] = useState(false)

    return (
        <>
            <div className='fullView'>
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
                        {!(filterState == 'none') ? <li onClick={() => setFilterState('none')}>No Filter</li> : null} 
                    </ul>
                        : null}    
                        
                    </button>
                </section>

                <ul className='listSection'>
                    <li onClick={() => setDetailState(!detailState)}>
                        <div className='flags'></div>
                        <div className='countryInfo'>
                            <h2>Country Name</h2>
                            <p><strong>Population:</strong> 123345436</p>
                            <p><strong>Region:</strong> Place</p>
                            <p><strong>Capital:</strong> Another Place</p>
                        </div>
                    </li>
                    <li onClick={() => setDetailState(!detailState)}>
                        <div className='flags'></div>
                        <div className='countryInfo'>
                            <h2>Country Name</h2>
                            <p><strong>Population:</strong> 123345436</p>
                            <p><strong>Region:</strong> Place</p>
                            <p><strong>Capital:</strong> Another Place</p>
                        </div>
                    </li>
                    <li onClick={() => setDetailState(!detailState)}>
                        <div className='flags'></div>
                        <div className='countryInfo'>
                            <h2>Country Name</h2>
                            <p><strong>Population:</strong> 123345436</p>
                            <p><strong>Region:</strong> Place</p>
                            <p><strong>Capital:</strong> Another Place</p>
                        </div>
                    </li>
                    <li onClick={() => setDetailState(!detailState)}>
                        <div className='flags'></div>
                        <div className='countryInfo'>
                            <h2>Country Name</h2>
                            <p><strong>Population:</strong> 123345436</p>
                            <p><strong>Region:</strong> Place</p>
                            <p><strong>Capital:</strong> Another Place</p>
                        </div>
                    </li>
                    <li onClick={() => setDetailState(!detailState)}>
                        <div className='flags'></div>
                        <div className='countryInfo'>
                            <h2>Country Name</h2>
                            <p><strong>Population:</strong> 123345436</p>
                            <p><strong>Region:</strong> Place</p>
                            <p><strong>Capital:</strong> Another Place</p>
                        </div>
                    </li>
                    <li onClick={() => setDetailState(!detailState)}>
                        <div className='flags'></div>
                        <div className='countryInfo'>
                            <h2>Country Name</h2>
                            <p><strong>Population:</strong> 123345436</p>
                            <p><strong>Region:</strong> Place</p>
                            <p><strong>Capital:</strong> Another Place</p>
                        </div>
                    </li>
                    <li onClick={() => setDetailState(!detailState)}>
                        <div className='flags'></div>
                        <div className='countryInfo'>
                            <h2>Country Name</h2>
                            <p><strong>Population:</strong> 123345436</p>
                            <p><strong>Region:</strong> Place</p>
                            <p><strong>Capital:</strong> Another Place</p>
                        </div>
                    </li>
                    <li onClick={() => setDetailState(!detailState)}>
                        <div className='flags'></div>
                        <div className='countryInfo'>
                            <h2>Country Name</h2>
                            <p><strong>Population:</strong> 123345436</p>
                            <p><strong>Region:</strong> Place</p>
                            <p><strong>Capital:</strong> Another Place</p>
                        </div>
                    </li>
                </ul>
            </div>
            <div className='focusedView'>
                <button className='backBtn'><FontAwesomeIcon style={{color: "hsl(200, 15%, 8%)"}}  icon={faArrowLeft} className='leftArrow'/>Back</button>
                <section className='detailsSection'>
                    <div className='detailImageSection'></div>
                    <div className='detailContentSection'>
                        <h1>Country Name</h1>
                        <div className='detailedInfo'>
                            <div className='detailPart1'>
                                <p><strong>Native Name:</strong> something</p>
                                <p><strong>Population:</strong> something</p>
                                <p><strong>Region:</strong> something</p>
                                <p><strong>Sub Region:</strong> something</p>
                                <p><strong>Capital:</strong> something</p>
                            </div>
                            <div className='detailPart2'>
                                <p><strong>Top Level Domain:</strong> something</p>
                                <p><strong>Currencies:</strong> something</p>
                                <p><strong>Languages:</strong> something</p>
                            </div>
                        </div>
                        <div className='extraDetail'>
                            <p><strong>Border Countries:</strong></p>
                            <button className='borderCountries'>Country 1</button>
                            <button className='borderCountries'>Country 1</button>
                            <button className='borderCountries'>Country 1</button>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Content