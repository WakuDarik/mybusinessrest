import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { registrationUserTC } from '../../redux/auth-reducer';

const SignupForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field placeholder='email' name='email' component='input' />
        </div>
        <div>
            <Field placeholder='phone' name='phone' component='input' />
        </div>
        <button>Signup</button>
    </form>
}

const ReduxSignupForm = reduxForm({
    form: 'signup',
})(SignupForm);

class SignupPage extends React.Component {

    submitForm = (formData) => {
        //this.props.registrationUserTC(formData)
        console.log(formData)
    }


    render () {
        return <>
            <ReduxSignupForm onSubmit={this.submitForm} />
        </>
    }

}



export default connect(null, { registrationUserTC })(SignupPage)