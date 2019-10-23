/**
 * External dependencies.
 */
import React from 'react';
import { SafeAreaView, View } from 'react-native';

/**
 * Internal dependencies.
 */
import BaseViewStyles from '@/styles/BaseViewStyles';

class BaseView extends React.Component {
    render() {
        return (
            <SafeAreaView style={[BaseViewStyles.default, this.props.style]}>
                <View style={[BaseViewStyles.view, this.props.viewStyle]}>
                    {this.props.children}
                </View>
            </SafeAreaView>
        );
    }
}

export default BaseView;
