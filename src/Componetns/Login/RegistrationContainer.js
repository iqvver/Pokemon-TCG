import { connect } from 'react-redux';
import { newUserAC, } from "../../redux/auth-reducer";
import Registration from './Registration';


let mapStateToProps = (state) => {
    return {
        isAuth: state.isAuth,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addUser: (newUser) => {
            dispatch(newUserAC(newUser));
        }
    }
}

const RegistrationContainer = (props) => {
    return (
        <div>
            <Registration />
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationContainer);