import React from 'react';
import { Field, reduxForm, InjectedFormProps } from 'redux-form'

type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}


let LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={"email"} component={"input"} placeholder={"email"}/>
            </div>
            <div>
                <Field name={"password"} component={"input"} placeholder={"password"}/>
            </div>
            <div>
                <Field name={"rememberMe"} component={"input"} type="checkbox"/> remember me
            </div>
            <div>
                <button>Submit</button>
            </div>
        </form>
    );
}

let ReduxLoginForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)



export const Login = () => {

    const onSubmit = (formData: FormDataType) => {
        console.log(formData)
    }

    return (
        <div>
            <h1>Login</h1>
            <ReduxLoginForm onSubmit={onSubmit}/>
        </div>
    );
};