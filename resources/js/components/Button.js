/**
 * External dependencies.
 */
import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

/**
 * Internal dependencies.
 */
import ButtonStyles from '@/styles/ButtonStyles';

class Button extends React.Component {
    render() {
        const renderContent = this.props.text ? (
            <Text style={ButtonStyles.text}>{this.props.text}</Text>
        ) : (this.props.children);

        return (
            <TouchableOpacity {...this.props} style={[ButtonStyles.default, this.props.style]}>
                {renderContent}
            </TouchableOpacity>
        );
    }
}

export default Button;
