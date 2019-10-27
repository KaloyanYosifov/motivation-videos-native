/**
 * External dependencies.
 */
import React from 'react';
import { KeyboardAvoidingView } from 'react-native';

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
                <KeyboardAvoidingView>
                    <Logo style={LoginRegisterStyles.logo} />
                    <LoginForm />
                </KeyboardAvoidingView>
            </BaseView>
        );
    }
}

export default Login;
