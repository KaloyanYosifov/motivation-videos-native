/**
 * External dependencies.
 */
import React from 'react';
import { Text } from 'react-native';

/**
 * Internal dependencies.
 */
import BaseView from '@/fragments/BaseView';
import Logo from '@/components/Logo';

class Login extends React.Component {
    render() {
        return (
            <BaseView>
                <Logo />
            </BaseView>
        );
    }
}

export default Login;
