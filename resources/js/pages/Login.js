/**
 * External dependencies.
 */
import React from 'react';

/**
 * Internal dependencies.
 */
import LoginStyles from '@/styles/LoginStyles';
import BaseView from '@/fragments/BaseView';
import Logo from '@/components/Logo';
import LoginForm from '@/components/LoginForm';

class Login extends React.Component {
    render() {
        return (
            <BaseView style={LoginStyles.default}>
                <Logo style={LoginStyles.logo} />
                <LoginForm style={LoginStyles.loginForm} />
            </BaseView>
        );
    }
}

export default Login;
