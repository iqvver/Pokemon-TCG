import { connect } from 'react-redux';
import { newUserAC, } from "../../../redux/auth-reducer";
import Registration from './Registration';

let mapStateToProps = (state) => {
    return {
        isAuth: state.isAuth,
        loginAndPassword: state.isAuth.loginAndPassword,
        newUserName: state.isAuth.newUserName,
        newUserLogin: state.isAuth.newUserLogin,
        newUserPass: state.isAuth.newUserPass,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addUser: (newUserName, newUserLogin, newUserPass, newId) => {
            dispatch(newUserAC(newUserName, newUserLogin, newUserPass, newId));
        }
    }
}
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
