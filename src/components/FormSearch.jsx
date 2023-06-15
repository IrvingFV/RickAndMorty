import { useRef, useState } from "react"

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
        <input
        placeholder="Enter id location"
        type= "text"
        ref={idLocationValue}
        />
        <button>Search</button>
    </form>
    {
      inputIsEmpty && <h3>This field is required. 👀</h3>
    }
  
    </>
  )
}

export default FormSearch