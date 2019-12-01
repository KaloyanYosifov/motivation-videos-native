/**
 * External dependencies.
 */
import React from 'react';
import { View, Text } from 'react-native';

/**
 * Internal dependencies.
 */
import Form from '@/components/renderless/Form';
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

    getData() {
        return {
            email: this.state.email,
            password: this.state.password,
        };
    }

    handleRender(data) {
        return (
            <View style={this.props.style}>
                <Text style={BaseFormStyles.title}>
                    Login
                </Text>

                {this.handleRenderLogic(data)}
            </View>
        );
    }

    handleRenderLogic = ({ submit, loading, status, error }) => {
        if (loading) {
            return (
                <Text>Loading...</Text>
            );
        }

        const errorMessageSection = () => {
            if (!error) {
                return null;
            }

            return <Text>{error}</Text>;
        };

        return (
            <React.Fragment>
                <View style={BaseFormStyles.inputsContainer}>
                    {errorMessageSection()}
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
                        onPress={() => this.onSubmit(submit)}
                    />

                    <Text
                        style={BaseFormStyles.additionalText}
                        onPress={() => Navigator.navigate('Register')}
                    >
                        Don't have an account?
                    </Text>
                </View>
            </React.Fragment>
        );
    }

    onSubmit = (submitCallback) => {
        submitCallback()
            .then(response => {
                console.log(response);
            });
    }

    render() {
        return (
            <Form data={this.getData()} endpoint="login">
                {data => this.handleRender(data)}
            </Form>
        );
    }
}

export default LoginForm;
