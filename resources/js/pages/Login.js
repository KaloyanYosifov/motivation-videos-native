/**
 * External dependencies.
 */
import React from 'react';

/**
 * Internal dependencies.
 */
import Page from '@/pages/Page';
import Logo from '@/components/Logo';
import BaseView from '@/fragments/BaseView';
import LoginForm from '@/components/forms/LoginForm';
import LoginRegisterStyles from '@/styles/LoginRegisterStyles';

class Login extends Page {
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
