import { useState } from "react"

export const useForm = (x) => {
  const [formData, setFormData] = useState(x)

  const reset = () => {
    setFormData(x)
  }

  const handleChange = (e)=> {
    setFormData(prev => ({...prev, [e.target.name]: e.target.value}))
  } 


  return {
    formData,
    reset,
    handleChange
  }


}