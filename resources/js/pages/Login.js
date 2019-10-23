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
import LoginForm from '@/components/forms/LoginForm';

class Login extends React.Component {
    render() {
        return (
            <BaseView>
                <Logo style={LoginRegisterStyles.logo} />
                <LoginForm />
            </BaseView>
        );
    }
}

export default Login;
