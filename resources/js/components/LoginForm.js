/**
 * External dependencies.
 */
import React from 'react';
import { View, Text } from 'react-native';

/**
 * Internal dependencies.
 */
import LoginFormStyles from '@/styles/LoginFormStyles';
import Input from '@/components/form-elements/Input';

class LoginForm extends React.Component {
    render() {
        return (
            <View style={[LoginFormStyles.default, this.props.style]}>
                <Text style={LoginFormStyles.title}>
                    Login
                </Text>

                <Input />
            </View>
        );
    }
}

export default LoginForm;
