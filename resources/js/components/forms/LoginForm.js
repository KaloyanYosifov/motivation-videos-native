/**
 * External dependencies.
 */
import React from 'react';
import { View, Text } from 'react-native';

/**
 * Internal dependencies.
 */
import BaseFormStyles from '@/styles/BaseFormStyles';
import Button from '@/components/Button';
import Input from '@/components/form-elements/Input';

class LoginForm extends React.Component {
    render() {
        return (
            <View style={this.props.style}>
                <Text style={BaseFormStyles.title}>
                    Login
                </Text>

                <View style={BaseFormStyles.inputsContainer}>
                    <Input
                        style={BaseFormStyles.input}
                        label="Email:"
                        inputProps={{
                            autoCompleteType: 'email',
                        }}
                    />

                    <Input
                        style={BaseFormStyles.input}
                        label="Password:"
                        inputProps={{
                            secureTextEntry: true,
                            autoCompleteType: 'password',
                            textContentType: 'password',
                        }}
                    />
                </View>

                <View style={BaseFormStyles.buttonContainer}>
                    <Button style={BaseFormStyles.button} text="Login" />

                    <Text style={BaseFormStyles.additionalText}>
                        Don't have an account?
                    </Text>
                </View>
            </View>
        );
    }
}

export default LoginForm;
