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

                    <Text style={BaseFormStyles.additionalText}>
                        Have an account?
                    </Text>
                </View>
            </View>
        );
    }
}

export default RegisterForm;
