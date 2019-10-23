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
        const { label = '', inputProps = {} } = this.props;
        const showLabel = label ? (
            <Text style={InputElementStyles.label}>{label}</Text>
        ) : null;

        return (
            <View style={[InputElementStyles.default, this.props.style]}>
                {showLabel}
                <TextInput style={InputElementStyles.input} {...inputProps} />
            </View>
        );
    }
}

export default Input;
