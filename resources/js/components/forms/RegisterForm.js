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
import api from '@/utils/api';

class RegisterForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
        };
    }

    handleSubmit = () => {
        const { name, email, password, confirmPassword: confirm_password } = this.state;

        api.post('register', {
            name,
            email,
            password,
            confirm_password,
        })
            .then(response => {
                console.log(response);
            });
    }

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
                            onChangeText: name => this.setState({ name }),
                            autoCapitalize: 'none',
                        }}
                    />

                    <Input
                        style={BaseFormStyles.input}
                        label="Email:"
                        inputProps={{
                            autoCompleteType: 'email',
                            onChangeText: email => this.setState({ email }),
                            autoCapitalize: 'none',
                        }}
                    />

                    <Input
                        style={BaseFormStyles.input}
                        label="Password:"
                        inputProps={{
                            secureTextEntry: true,
                            autoCompleteType: 'password',
                            textContentType: 'password',
                            onChangeText: password => this.setState({ password }),
                            autoCapitalize: 'none',
                        }}
                    />

                    <Input
                        style={BaseFormStyles.input}
                        label="Password:"
                        inputProps={{
                            secureTextEntry: true,
                            autoCompleteType: 'password',
                            textContentType: 'password',
                            onChangeText: confirmPassword => this.setState({ confirmPassword }),
                            autoCapitalize: 'none',
                        }}
                    />
                </View>

                <View style={BaseFormStyles.buttonContainer}>
                    <Button style={BaseFormStyles.button} text="Register" onPress={this.handleSubmit} />

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
