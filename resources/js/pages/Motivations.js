/**
 * External dependencies.
 */
import React from 'react';
import { Text } from 'react-native';

/**
 * Internal dependencies.
 */
import Page from '@/pages/Page';
import BaseView from '@/fragments/BaseView';

class Motivations extends Page {
    render() {
        return (
            <BaseView>
                <Text>
                    Hello Welcome to Motivations
                </Text>
            </BaseView>
        );
    }
}

export default Motivations;
