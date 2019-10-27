/**
 * External dependencies.
 */
import React from 'react';
import { ScrollView, KeyboardAvoidingView } from 'react-native';

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
            <ScrollView>
                <BaseView>
                    <KeyboardAvoidingView>
                        <Logo style={LoginRegisterStyles.logo} />
                        <RegisterForm />
                    </KeyboardAvoidingView>
                </BaseView>
            </ScrollView>
        );
    }
}

export default Login;
