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
        return 'Не корректно введен email' }
    else if (value) return undefined;
        return 'Поле пусто'
    }