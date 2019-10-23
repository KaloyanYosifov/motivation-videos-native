/**
 * External dependencies.
 */
import React from 'react';

/**
 * Internal dependencies.
 */
import LoginRegisterStyles from '@/styles/LoginRegisterStyles';
import BaseView from '@/fragments/BaseView';
import Logo from '@/components/Logo';
import RegisterForm from '@/components/forms/RegisterForm';

class Login extends React.Component {
    render() {
        return (
            <BaseView>
                <Logo style={LoginRegisterStyles.logo} />
                <RegisterForm />
            </BaseView>
        );
    }
}

export default Login;
