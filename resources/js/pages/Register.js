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
import RegisterForm from '@/components/forms/RegisterForm';
import LoginRegisterStyles from '@/styles/LoginRegisterStyles';

class Login extends Page {
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
