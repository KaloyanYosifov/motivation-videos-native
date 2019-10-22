/**
 * External dependencies.
 */
import React from 'react';
import { SafeAreaView } from 'react-native';

/**
 * Internal dependencies.
 */
import BaseViewStyles from '@/styles/BaseViewStyles';

class BaseView extends React.Component {
    render() {
        return (
            <SafeAreaView style={BaseViewStyles.default}>
                {this.props.children}
            </SafeAreaView>
        );
    }
}

export default BaseView;
