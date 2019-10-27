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

class LoginForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
        };
    }

    handleSubmit = () => {
        api.post('login', {
            email: this.state.email,
            password: this.state.password,
        })
            .then(response => {
                console.log(response);
            });
    }

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
                </View>

                <View style={BaseFormStyles.buttonContainer}>
                    <Button
                        style={BaseFormStyles.button}
                        text="Login"
                        onPress={this.handleSubmit}
                    />

                    <Text
                        style={BaseFormStyles.additionalText}
                        onPress={() => Navigator.navigate('Register')}
                    >
                        Don't have an account?
                    </Text>
                </View>
            </View>
        );
    }
}

export default LoginForm;
