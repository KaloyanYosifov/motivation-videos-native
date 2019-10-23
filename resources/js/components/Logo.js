/**
 * External dependencies.
 */
import React from 'react';
import { View, Image } from 'react-native';

/**
 * Internal dependencies.
 */
import LogoStyles from '@/styles/LogoStyles';
import LogoImage from '@images/Logo.png';

class Logo extends React.Component {
    render() {
        return (
            <View style={{ ...LogoStyles.default, ...this.props.style }}>
                <Image style={LogoStyles.image} source={LogoImage} />
            </View>
        );
    }
}

export default Logo;
