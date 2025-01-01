export const validateRegister = (values) => {
    const errors = {};
    if (!values.email) {
        errors.email = 'Required';
    } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    ) {
        errors.email = 'Invalid email address';
    } else if (!values.password.length > 8){
        errors.password = "Password must be 8 characters"
    }
    
    return errors;
};

export const validateLogin = (values) => {
    const errors = {};
    if (!values.username) {
        errors.username = 'Username is required';
    } else if (values.username && values.password) {
        errors.password = 'Password is required';
    }
    
    return errors;
};