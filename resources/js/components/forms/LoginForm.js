/**
 * External dependencies.
 */
import React from 'react';
import { View, Text } from 'react-native';

/**
 * Internal dependencies.
 */
import Button from '@/components/Button';
import Navigator from '@/classes/Navigator';
import Input from '@/components/form-elements/Input';
import BaseFormStyles from '@/styles/BaseFormStyles';

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
                    <Button
                        style={BaseFormStyles.button}
                        text="Login"
                    />

                    <Text
                        style={BaseFormStyles.additionalText}
                        onPress={() => Navigator.getNavigation().navigate('Register')}
                    >
                        Don't have an account?
                    </Text>
                </View>
            </View>
        );
    }
}

export default LoginForm;
