import React from 'react'
import getRamdomNumber from '../assets/utils/getRamdomNumber'

const FormLocation = ({setIdLocation, setPage}) => {   
   
    const handleSubmit = e => {
        e.preventDefault()
        const inputValue = e.target.inputId.value.trim()

        if(inputValue === "" || inputValue === "0") {
           setIdLocation(getRamdomNumber(126))
           setPage(1)
        }else{
            setIdLocation(inputValue)
            setPage(1)
        }
       e.target.inputId.value = ""
    }

  return (
    <form onSubmit={handleSubmit} className='id-container'>
        <input id='inputId' style={{boxShadow: "1px 1px 10px"}} type="text"/>
        <button style={{backgroundColor: "green"}} className='btn-id'>search</button>
    </form>
  )
}

export default FormLocation