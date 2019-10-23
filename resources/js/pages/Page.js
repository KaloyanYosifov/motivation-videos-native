/**
 * External dependencies.
 */
import React from 'react';

/**
 * Internal dependencies.
 */
import Navigator from '@/classes/Navigator';

/**
 * This is an abstract component
 * and should be use in any rendering
 */
class Page extends React.Component {
    constructor(props) {
        super(props);

        Navigator.setNavigation(props.navigation);
    }
}

export default Page;
