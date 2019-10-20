/**
 * External dependencies.
 */
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

/**
 * Internal dependencies.
 */
import Home from '@/pages/Home';
import Login from '@/pages/Login';
import Motivations from '@/pages/Motivations';

const guestRoutes = createStackNavigator({
    Login: {
        screen: Login,
    },
});

const loggedInRoutes = createBottomTabNavigator({
    Home: {
        screen: Home,
    },
    Motivations: {
        screen: Motivations,
    },
});

const Router = createStackNavigator({
    Guest: {
        screen: guestRoutes,
    },
    LoggedIn: {
        screen: loggedInRoutes,
        name: 'Register',
    },
}, {
    headerMode: 'none',
});

export default createAppContainer(Router);
