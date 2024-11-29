import { useSelector } from "react-redux"



const PersonalData = () => {
    const formData = useSelector((state) => state.form.submittedData)

    return (
        <div>
            <h3>My Page:</h3>
            
                <ul>
                    <li>Name:{formData.name}</li>
                    <li>Email:{formData.email}</li>
                    <li>Username:{formData.username}</li>
                    <li>Password:{formData.password}</li>
                </ul>
           
        </div>
    )
}

export default PersonalData;