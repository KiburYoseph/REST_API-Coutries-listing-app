import '../Components/Content.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect, useRef } from 'react';

const Content = (props) => {

    const [searchTerm, setSearchTerm] = useState('')
    const [menuState, setMenuState] = useState(false)
    const [filterState, setFilterState] = useState('none')
    const [detailState, setDetailState] = useState(false)
    const [countryList, setCountryList] = useState([])
    const [display, setDisplay] = useState(true)
    const [countryDetails, setCountryDetails] = useState([])
    const [searchResults, setSearchResults] = useState(true)
    const focusedRef = useRef(null)

    const URL = 'https://restcountries.com/v3.1/independent?status=true'
    

   useEffect(() => {
        fetch(URL)
        .then(response => response.json())
        .then(data => {
            
            let fullCountriesData

            fullCountriesData = data.map(item => 
                {
                    let individualLanguages
                    
                    for (const key in item.languages) {
                        individualLanguages = item.languages[key]
                    }

                    let individualCurrencies

                    for (const key in item.currencies) {
                        individualCurrencies = key
                    }

                    let nativeNameString = ""
                    
                    for (const key in item.name.nativeName) {
                        nativeNameString += `${item.name.nativeName[key].official}, `
                    }

                    let nativeNames

                    nativeNames = nativeNameString.slice(0, -2);

                    return ({
                commonName: item.name.common,
                officialName: item.name.official,
                nativeName: nativeNames,
                population: item.population.toLocaleString(),
                capital: item.capital[0],
                region: item.region,
                subRegion: item.subregion,
                topLevelDomain: item.tld[0],
                languages: individualLanguages,
                currencies: individualCurrencies,
                flag: item.flag,
                id: crypto.randomUUID(),
                detialsid: crypto.randomUUID(),
                borders: item.borders,
                accronym: item.cca3
            })}
            )
            setCountryList(fullCountriesData)
        })
    }, [])

    const scrollToTop = () => {
        focusedRef.current.scrollTo({
            top:0,
            behavior: "auto"
        })
    }

    const handleMainClick = (country) => {
        let detailContainer = []

        detailContainer = ({
            commonName: country.commonName,
            officialName: country.officialName,
            nativeName: country.nativeName,
            population: country.population,
            capital: country.capital,
            region: country.region,
            subRegion: country.subRegion,
            topLevelDomain: country.topLevelDomain,
            languages: country.languages,
            currencies: country.currencies,
            flag: country.flag,
            detialsid: crypto.randomUUID(),
            id: crypto.randomUUID(),
            borders: country.borders
        })

        setCountryDetails(detailContainer)
        setDetailState(!detailState)
        handleDisplay()
        scrollToTop()
    }


    const handleDisplay = () => {
        setTimeout(() => {
            setDisplay(!display)
        }, 200);
    }

    const handleBorders = (items) => {
        let detailContainer = []
        countryList.map(country => {
            if (country.accronym == items) {
                detailContainer = ({
                    commonName: country.commonName,
                    officialName: country.officialName,
                    nativeName: country.nativeName,
                    population: country.population,
                    capital: country.capital,
                    region: country.region,
                    subRegion: country.subRegion,
                    topLevelDomain: country.topLevelDomain,
                    languages: country.languages,
                    currencies: country.currencies,
                    flag: country.flag,
                    id: crypto.randomUUID(),
                    detialsid: crypto.randomUUID(),
                    borders: country.borders
                })
                return setCountryDetails(detailContainer)
            }

            else {
                return null
            }
        })
    }

    useEffect(() => {
        if(searchTerm == "") {
            fetch(URL)
        .then(response => response.json())
        .then(data => {
            
            let fullCountriesData

            fullCountriesData = data.map(item => 
                {
                    let individualLanguages
                    
                    for (const key in item.languages) {
                        individualLanguages = item.languages[key]
                    }

                    let individualCurrencies

                    for (const key in item.currencies) {
                        individualCurrencies = key
                    }

                    let nativeNameString = ""
                    
                    for (const key in item.name.nativeName) {
                        nativeNameString += `${item.name.nativeName[key].official}, `
                    }

                    let nativeNames

                    nativeNames = nativeNameString.slice(0, -2);

                    return ({
                commonName: item.name.common,
                officialName: item.name.official,
                nativeName: nativeNames,
                population: item.population.toLocaleString(),
                capital: item.capital[0],
                region: item.region,
                subRegion: item.subregion,
                topLevelDomain: item.tld[0],
                languages: individualLanguages,
                currencies: individualCurrencies,
                flag: item.flag,
                id: crypto.randomUUID(),
                detialsid: crypto.randomUUID(),
                borders: item.borders,
                accronym: item.cca3
            })}
            )
            setCountryList(fullCountriesData)
        })
        }

        else {
            fetch(`https://restcountries.com/v3.1/name/${searchTerm}`)
            .then(response => response.json())
            .then(data => {
                
                if(data.status == 404) {
                    let searchCountriesData
                    searchCountriesData = []
                    setCountryList(searchCountriesData)
                    setSearchResults(false)
                }
                else {               
                    setSearchResults(true)
                    let searchCountriesData
                    searchCountriesData = data.map(item => 
                        {
                            let capital
                            if(item.capital === undefined) {
                                capital = "None"
                            }
                            else {
                                capital = item.capital
                            }

                            let tld
                            if(item.tld === undefined) {
                                tld = "None"
                            }
                            else {
                                tld = item.tld[0]
                            }

                            let individualLanguages
                            
                            for (const key in item.languages) {
                                individualLanguages = item.languages[key]
                            }
        
                            let individualCurrencies
        
                            for (const key in item.currencies) {
                                individualCurrencies = key
                            }
        
                            let nativeNameString = ""
                            
                            for (const key in item.name.nativeName) {
                                nativeNameString += `${item.name.nativeName[key].official}, `
                            }
        
                            let nativeNames
        
                            nativeNames = nativeNameString.slice(0, -2);
        
                            return ({
                        commonName: item.name.common,
                        officialName: item.name.official,
                        nativeName: nativeNames,
                        population: item.population.toLocaleString(),
                        capital: capital,
                        region: item.region,
                        subRegion: item.subregion,
                        topLevelDomain: tld,
                        languages: individualLanguages,
                        currencies: individualCurrencies,
                        flag: item.flag,
                        id: crypto.randomUUID(),
                        detialsid: crypto.randomUUID(),
                        borders: item.borders,
                        accronym: item.cca3
                    })}
                    )
                    setCountryList(searchCountriesData)
                    
                }
            })
        }
    }, [searchTerm])

    return (
        <>
        <main className={`allContent details${detailState} dark${props.dark}`}>
            <div className={`fullView details${detailState} none${!display}`}>
                <section className='menuSection'>
                    <div className={`search dark${props.dark}`}>
                    {props.dark ? <FontAwesomeIcon icon={faMagnifyingGlass} style={{color: "hsl(0, 0%, 100%)"}} className='magnifyingGlass'/> : <FontAwesomeIcon icon={faMagnifyingGlass} style={{color: "hsl(0, 0%, 52%)"}} className='magnifyingGlass'/>}
                        <input value={searchTerm} onChange={(e) => {setSearchTerm(e.target.value)}} placeholder='Search for a country...' />
                    </div>
                    <button className={`dropDownBtn dark${props.dark}`} onClick={() => setMenuState(!menuState)}>{(filterState == 'none') ?  "Filter by Region" : filterState}{props.dark ? <FontAwesomeIcon icon={faCaretDown} style={{color: "#ffffff"}} className={`caretDown rotate${!menuState}`}/> : <FontAwesomeIcon icon={faCaretDown} style={{color: "#111517"}} className={`caretDown rotate${!menuState}`}/>}
                    { menuState ? 
                    <ul className={`dropDownMenu dark${props.dark}`}>
                        {!(filterState == 'none') ? <li onClick={() => setFilterState('none')}>All</li> : null} 
                            <li onClick={() => setFilterState('Africa')}>Africa</li>
                            <li onClick={() => setFilterState('Americas')}>America</li>
                            <li onClick={() => setFilterState('Asia')}>Asia</li>
                            <li onClick={() => setFilterState('Europe')}>Europe</li>
                            <li onClick={() => setFilterState('Oceania')}>Oceania</li>
                        
                    </ul>
                        : null}    
                        
                    </button>
                </section>
                {!(searchResults) ? <h1 className={`noResults dark${props.dark}`}>No Country Found...</h1> : null}
                {(filterState == "none") ? <ul className={`listSection dark${props.dark}`}>
                    
                        
                    {countryList.map(country => {
                        return (<li key={country.id} onClick={() => handleMainClick(country)}>
                        <div className='flagsContainer'><div className='innerFlags'>{country.flag}</div></div>
                        <div className='countryInfo'>
                            <h2>{country.commonName}</h2>
                            <p><strong>Population:</strong> {country.population}</p>
                            <p><strong>Region:</strong> {country.region}</p>
                            <p><strong>Capital:</strong> {country.capital}</p>
                        </div>
                    </li>)
                    })}
                </ul>
                : null}


                {(filterState == "Africa") ? <ul className={`listSection dark${props.dark}`}>
                    

                    {countryList.map(country => {
                        if (country.region == "Africa"){
                            return (<li key={country.id} onClick={() => handleMainClick(country)}>
                            <div className='flagsContainer'><div className='innerFlags'>{country.flag}</div></div>
                            <div className='countryInfo'>
                                <h2>{country.commonName}</h2>
                                <p><strong>Population:</strong> {country.population}</p>
                                <p><strong>Region:</strong> {country.region}</p>
                                <p><strong>Capital:</strong> {country.capital}</p>
                            </div>
                        </li>)
                        }

                        else {
                            return null
                        }
                        
                    })}
                </ul>
                : null}


                {(filterState == "Americas") ? <ul className={`listSection dark${props.dark}`}>
                    

                    {countryList.map(country => {
                        if (country.region == "Americas"){
                            return (<li key={country.id} onClick={() => handleMainClick(country)}>
                            <div className='flagsContainer'><div className='innerFlags'>{country.flag}</div></div>
                            <div className='countryInfo'>
                                <h2>{country.commonName}</h2>
                                <p><strong>Population:</strong> {country.population}</p>
                                <p><strong>Region:</strong> {country.region}</p>
                                <p><strong>Capital:</strong> {country.capital}</p>
                            </div>
                        </li>)
                        }

                        else {
                            return null
                        }
                        
                    })}
                </ul>
                : null}
                

                {(filterState == "Europe") ? <ul className={`listSection dark${props.dark}`}>
                    

                    {countryList.map(country => {
                        if (country.region == "Europe"){
                            return (<li key={country.id} onClick={() => handleMainClick(country)}>
                            <div className='flagsContainer'><div className='innerFlags'>{country.flag}</div></div>
                            <div className='countryInfo'>
                                <h2>{country.commonName}</h2>
                                <p><strong>Population:</strong> {country.population}</p>
                                <p><strong>Region:</strong> {country.region}</p>
                                <p><strong>Capital:</strong> {country.capital}</p>
                            </div>
                        </li>)
                        }

                        else {
                            return null
                        }
                        
                    })}
                </ul>
                : null}


                {(filterState == "Asia") ? <ul className={`listSection dark${props.dark}`}>
                    

                    {countryList.map(country => {
                        if (country.region == "Asia"){
                            return (<li key={country.id} onClick={() => handleMainClick(country)}>
                            <div className='flagsContainer'><div className='innerFlags'>{country.flag}</div></div>
                            <div className='countryInfo'>
                                <h2>{country.commonName}</h2>
                                <p><strong>Population:</strong> {country.population}</p>
                                <p><strong>Region:</strong> {country.region}</p>
                                <p><strong>Capital:</strong> {country.capital}</p>
                            </div>
                        </li>)
                        }

                        else {
                            return null
                        }
                        
                    })}
                </ul>
                : null}



                {(filterState == "Oceania") ? <ul className={`listSection dark${props.dark}`}>
                    

                    {countryList.map(country => {
                        if (country.region == "Oceania"){
                            return (<li key={country.id} onClick={() => handleMainClick(country)}>
                            <div className='flagsContainer'><div className='innerFlags'>{country.flag}</div></div>
                            <div className='countryInfo'>
                                <h2>{country.commonName}</h2>
                                <p><strong>Population:</strong> {country.population}</p>
                                <p><strong>Region:</strong> {country.region}</p>
                                <p><strong>Capital:</strong> {country.capital}</p>
                            </div>
                        </li>)
                        }

                        else {
                            return null
                        }
                        
                    })}
                </ul>
                : null}


            </div>
            {(countryDetails == "") ? null : 
            <div ref={focusedRef} className={`focusedView details${detailState} none${display}`}>
            <button className={`backBtn dark${props.dark}`} onClick={() => {
                        setDetailState(!detailState)
                        handleDisplay()
                    }}>{props.dark ? <FontAwesomeIcon style={{color: "#ffffff"}}  icon={faArrowLeft} className='leftArrow'/> : <FontAwesomeIcon style={{color: "hsl(200, 15%, 8%)"}}  icon={faArrowLeft} className='leftArrow'/>}Back</button>
            <section className='detailsSection'>
                <div className='detailImageSection'><div className='detailInnerImage'>{countryDetails.flag}</div></div>
                <div className={`detailContentSection dark${props.dark}`}>
                    <h1>{countryDetails.commonName  }</h1>
                    <div className='detailedInfo'>
                        <div className='detailPart1'>
                            <p><strong>Native Name:</strong> {countryDetails.nativeName}</p>
                            <p><strong>Population:</strong> {countryDetails.population}</p>
                            <p><strong>Region:</strong> {countryDetails.region}</p>
                            <p><strong>Sub Region:</strong> {countryDetails.subRegion}</p>
                            <p><strong>Capital:</strong> {countryDetails.capital}</p>
                        </div>
                        <div className='detailPart2'>
                            <p><strong>Top Level Domain:</strong> {countryDetails.topLevelDomain}</p>
                            <p><strong>Currencies:</strong> {countryDetails.currencies}</p>
                            <p><strong>Languages:</strong> {countryDetails.languages}</p>
                        </div>
                    </div>
                    <div className='extraDetail'>
                        <p><strong>Border Countries:</strong></p>
                       {(countryDetails.borders === undefined) ? null : 
                       <div className='bordersContainer'>
                       {countryDetails.borders.map(items => {
                          return <button key={countryDetails.detailsid} onClick={() => handleBorders(items)} className={`borderCountries dark${props.dark}`}>{items}</button>
                       })}
                       </div>} 
                    </div>
                </div>
            </section>
        </div>
            }
            
            
        </main>
        </>
    )
}

export default Content