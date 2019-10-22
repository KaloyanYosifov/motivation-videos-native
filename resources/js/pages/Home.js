/**
 * External dependencies.
 */
import React from 'react';
import { Text } from 'react-native';

/**
 * Internal dependencies.
 */
import BaseView from '@/fragments/BaseView';

class Home extends React.Component {
    render() {
        return (
            <BaseView>
                <Text>
                    Hello Welcome to Home
                </Text>
            </BaseView>
        );
    }
}

export default Home;
