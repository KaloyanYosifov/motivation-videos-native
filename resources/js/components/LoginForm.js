/**
 * External dependencies.
 */
import React from 'react';
import { View, Text } from 'react-native';

/**
 * Internal dependencies.
 */
import LoginFormStyles from '@/styles/LoginFormStyles';
import Button from '@/components/Button';
import Input from '@/components/form-elements/Input';

class LoginForm extends React.Component {
    render() {
        return (
            <View style={[LoginFormStyles.default, this.props.style]}>
                <Text style={LoginFormStyles.title}>
                    Login
                </Text>

                <Input
                    style={LoginFormStyles.input}
                    label="Email:"
                    inputProps={{
                        autoCompleteType: 'email',
                    }}
                />

                <Input
                    style={LoginFormStyles.input}
                    label="Password:"
                    inputProps={{
                        secureTextEntry: true,
                        autoCompleteType: 'password',
                        textContentType: 'password',
                    }}
                />

                <Button text="Submit" />
            </View>
        );
    }
}

export default LoginForm;
