import { useSelector } from "react-redux"



const PersonalData = () => {
    const formData = useSelector((state) => state.form.submittedData)

    return (
        <div>
            <h3>My Page:</h3>
            {formData && Object.keys(formData).length > 0 ? (
                <ul>
                    <li>Name:{formData.name}</li>
                    <li>Email:{formData.email}</li>
                    <li>Username:{formData.username}</li>
                    <li>Password:{formData.password}</li>
                </ul>
            ) :(
                <p>No data submitted</p>
            )}
        </div>
    )
}

export default PersonalData;