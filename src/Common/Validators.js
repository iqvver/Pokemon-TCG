export const required = value => {
    if (value) return undefined;
    return 'Поле пусто';
}

export const maxLengthCreator = (maxLength) => (value) => {
    if (value && value.length > maxLength) return `Максимальная длинна ${maxLength} символов`;
    return undefined;
}

export const emailValidate = value => {
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        return 'Не корректно введен email'
    }
    else if (value) return undefined;
    return 'Поле пусто'
}


export const emailkode = values => {
    if (!values) {
       return 'The email field is empty!'
    } else if (values != 'kode@kode.ru') {
        return 'Invalid email address! Enter: kode@kode.ru000'
    }
    if (!values) {
        return 'The password field is empty!'
    } else if (values != 'Enk0deng') {
        return 'The password is not correct! Enter: Enk0deng'
    } }