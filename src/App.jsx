import axios from 'axios'
import './App.css'
import { useState,useEffect } from 'react'
import getRamdomNumber from './assets/utils/getRamdomNumber'
import LocationInfo from './componets/LocationInfo'
import ResidentsCard from './componets/ResidentsCard'
import FormLocation from './componets/FormLocation'
import Pagination from './componets/Pagination'


function App() {

  const [location, setLocation] = useState()
  const [idLocation, setIdLocation] = useState(getRamdomNumber(126))
  const [hasError, setHasError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [page, setPage]= useState(1)
  const [perPage, setPerPage] = useState(8)
  
  
  useEffect(() => {
    const url = `https://rickandmortyapi.com/api/location/${idLocation}`
    axios.get(url) 
    .then(res => {setLocation(res.data)
      setHasError(false)
    })
    .catch(err => {console.error(err),
      setHasError(true)
    })
    .finally(() => setIsLoading(false))
  }, [idLocation])
  
  const totalCards = location?.residents.length 
  const lastIndex = page * perPage
  const firstIndex =  lastIndex - perPage

  return (
    <>
   <img src="/rick.png" alt="" className='image1'/>
    
      <FormLocation
    setIdLocation={setIdLocation}
    setPage={setPage}
    />
    {
      isLoading
      ? (<h2>...loading</h2>)
      : (
      hasError 
      ? (<h1> X hey! we couldn't find your search remember is with a number</h1>)
      : <>
       <LocationInfo
    location = {location}

    />

    <div className='resident_container'>
      {
        location?.residents.map(url => (
          <ResidentsCard
          key={url}
          url={url}
          />
        )).slice(firstIndex, totalCards <= perPage ? totalCards : lastIndex)
      }
    </div>
    <Pagination
    perPage={perPage}
    page={page}
    setPage={setPage}
    totalCards={totalCards}
   />
      </>
      )
    }
    </>
  )
}

export default App
