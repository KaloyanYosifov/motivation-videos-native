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

class RegisterForm extends React.Component {
    render() {
        return (
            <View style={this.props.style}>
                <Text style={BaseFormStyles.title}>
                    Register
                </Text>

                <View style={BaseFormStyles.inputsContainer}>
                    <Input
                        style={BaseFormStyles.input}
                        label="Name:"
                        inputProps={{
                            autoCompleteType: 'name',
                        }}
                    />

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
                    <Button style={BaseFormStyles.button} text="Register" />

                    <Text
                        style={BaseFormStyles.additionalText}
                        onPress={() => Navigator.navigate('Login')}
                    >
                        Have an account?
                    </Text>
                </View>
            </View>
        );
    }
}

export default RegisterForm;
