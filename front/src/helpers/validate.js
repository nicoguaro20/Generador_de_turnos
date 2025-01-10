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
    }

    if (!values.password) {
        errors.password = 'Password is required';
    }
    
    return errors;
};

export const isWeekDay = (dateString) => {
    const date = new Date(dateString);
    const dayOfWeek = date.getDay();

    return dayOfWeek !== 5 && dayOfWeek !== 6 //5 Domingo, 6 Sabado//
}


export const isValidTime = (timeString) => {
    const [hour, minutes] = timeString.split(':').map(Number);
    if (hour < 8 || (hour >= 17 && minutes >= 0) || hour > 17) {
        return false;
    }
    return true;
}