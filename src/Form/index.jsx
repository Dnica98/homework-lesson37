import { useDispatch, useSelector } from "react-redux";
import { updateField } from "./formSlice";


const Form = () => {
    const dispatch = useDispatch()
    const formData = useSelector((state) => state.form.form)
   
    const handleChange = (e) => {
        const {name, value} = e.target
        dispatch(updateField({ field: name, value}))    
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        dispatch(submitForm())
    }
   
    return(
       <form onChange={handleSubmit}>
            <input 
            type='text'
            name='name'
            value={formData.name}
            onChange={handleChange}
            />
             <input 
            type='text'
            name='email'
            value={formData.email}
            onChange={handleChange}
            />
              <input 
            type='text'
            name='username'
            value={formData.username}
            onChange={handleChange}
            />
             <input 
            type='password'
            name='password'
            value={formData.password}
            onChange={handleChange}
            />

            <button>Submit</button>
           
           
       </form>
    )
}

export default Form;