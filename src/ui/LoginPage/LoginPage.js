import React from 'react';
import { reduxForm, Field } from 'redux-form';


const LoginForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field placeholder='login' name='email' component='input' />
        </div>
        <div>
            <Field placeholder='passwor' name='password' component='input' />
        </div>
        <button>Login</button>
    </form>
}

const ReduxLoginForm = reduxForm({
    form: 'login'
})(LoginForm);
