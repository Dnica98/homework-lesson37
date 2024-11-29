import { createSlice } from "@reduxjs/toolkit"



const initialState = {
    form: {
        name: '',
        email: '',
        username: '',
        password: ''
    }
}

const formSlice = createSlice({
    name: 'Form',
    initialState,
    reducers: {
        updateField: (state, action) => {
            const {field, value} = action.payload
            state.form[field] = value
        },
        submitForm: (state) =>{
            state.submittedData = { ... state.form}
            state.form = { name: '', email: '', username: '', password:''}
        }
    }

})

export const {updateField, submitForm} = formSlice.actions;

export default formSlice.reducer;


