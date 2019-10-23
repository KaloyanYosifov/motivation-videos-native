/**
 * External dependencies.
 */
import React from 'react';
import { View, Text } from 'react-native';

/**
 * Internal dependencies.
 */
import LoginFormStyles from '@/styles/LoginFormStyles';

class LoginForm extends React.Component {
    render() {
        return (
            <View style={{ ...LoginFormStyles.default, ...this.props.style }}>
                <Text style={LoginFormStyles.title}>
                    Login
                </Text>
            </View>
        );
    }
}

export default LoginForm;
