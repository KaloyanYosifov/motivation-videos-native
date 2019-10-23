/**
 * External dependencies.
 */
import React from 'react';
import { View, TextInput, Text } from 'react-native';

/**
 * Internal dependencies.
 */
import InputElementStyles from '@/styles/InputElementStyles';

class Input extends React.Component {
    render() {
        return (
            <View style={[InputElementStyles.default, this.props.style]}>
                <Text stlye={InputElementStyles.placeholder}>Placeholder</Text>
                <TextInput style={InputElementStyles.input} palceholder="text" />
            </View>
        );
    }
}

export default Input;
