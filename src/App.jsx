import { useEffect, useState } from 'react'
import './App.css'
import useFetch from './hooks/useFetch'
import getRandomNumber from './utils/getRandomNumber'
import LocationInfo from './components/LocationInfo'
import ResidentCard from './components/ResidentCard.'
import FormSearch from './components/FormSearch'

function App() {

  const randomId = getRandomNumber(126)

  const [idLocation, setIdLocation] = useState(randomId)

   const url = `https://rickandmortyapi.com/api/location/${idLocation
  }`

  const [ location, getApiLocation, hasError ]= useFetch(url) 

  useEffect(() => {
    getApiLocation()
  }, [idLocation])

    return (
      <div className='app'>
        <h1>Rick and morty App</h1>
        <FormSearch 
         setIdLocation={setIdLocation}
         />
         {
          hasError
           ? <h2>❌Hey! you must provide an id from 1 to 126 😟</h2>
           : (
            <>
          <LocationInfo
        location={location}
        />
      
      <div className='resident-container'>
        {
         location?.residents.map(url => (
          <ResidentCard
           url={url}
           key={url}
          />
         ))
      }
      </div>
    </>
    )
    }
 </div>

        
  )
}

export default App
