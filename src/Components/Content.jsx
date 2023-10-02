import '../Components/Content.css';
import { useState } from 'react';

const Content = () => {

    const [searchTerm, setSearchTerm] = useState('')

    return (
        <>
            <section className='menuSection'>
                <div className='search'>
                    <input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value )} placeholder='Search for a country...' />
                </div>
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