/**
 * External dependencies.
 */
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

/**
 * Internal dependencies.
 */
import Home from '@/pages/Home';
import Motivations from '@/pages/Motivations';

const Router = createBottomTabNavigator({
    Home: {
        screen: Home,
    },
    Motivations: {
        screen: Motivations,
    },
});

export default createAppContainer(Router);
