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
            <View style={this.props.style}>
                <Text style={LoginFormStyles.title}>
                    Login
                </Text>

                <View style={LoginFormStyles.inputsContainer}>
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
                </View>

                <View style={LoginFormStyles.buttonContainer}>
                    <Button style={LoginFormStyles.button} text="Submit" />

                    <Text style={LoginFormStyles.additionalText}>
                        Don't have an account?
                    </Text>
                </View>
            </View>
        );
    }
}

export default LoginForm;
