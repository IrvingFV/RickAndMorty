import { useRef, useState } from "react"
import './styles/FormSearch.css'
const FormSearch = ( {setIdLocation} ) => {

  const idLocationValue = useRef()

  const [inputIsEmpty, setInputIsEmpty] = useState(false)

  const handleSubmit = e => {
     e.preventDefault()
     const inputValue = idLocationValue.current.value.trim()
   
     if(inputValue ==='') {
        setInputIsEmpty(true)
        setTimeout(() => {
          setInputIsEmpty(false)
        }, 2000)
     } else {
     setIdLocation(inputValue)
  }

  }

  return (
    <>
    <form onSubmit={handleSubmit}>
      
        <input className="input"
        placeholder="Enter id location"
        type= "text"
        ref={idLocationValue}
        />
        <button className="btn">Search</button>
      
    </form>
    {
      inputIsEmpty && <h3>This field is required. 👀</h3>
    }
    
    </>
  )
}

export default FormSearch