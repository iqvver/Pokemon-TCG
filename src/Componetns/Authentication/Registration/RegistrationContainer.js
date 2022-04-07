import { connect } from 'react-redux';
import { newUserAC, } from "../../../redux/auth-reducer";
import Registration from './Registration';

// получение данных из state
let mapStateToProps = (state) => {
    return {
        isAuth: state.isAuth,
        loginAndPassword: state.isAuth.loginAndPassword,
        newUserName: state.isAuth.newUserName,
        newUserLogin: state.isAuth.newUserLogin,
        newUserPass: state.isAuth.newUserPass,
    }
}
// отправка данных в state
let mapDispatchToProps = (dispatch) => {
    return {
        addUser: (newUserName, newUserLogin, newUserPass, newId) => {
            dispatch(newUserAC(newUserName, newUserLogin, newUserPass, newId));
        }
    }
}
// контейнер со страницей регистрации в приложении
// передача нужных переменных
const RegistrationContainer = (props) => {
    return (
        <div>
            <Registration
                loginAndPassword={props.loginAndPassword}
                addUser={props.addUser}
                handleSubmit={props.handleSubmit} />
        </div>
    )
}


export default connect(mapStateToProps, mapDispatchToProps)(RegistrationContainer);
