/**
 * External dependencies.
 */
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Internal dependencies.
 */
import api from '@/utils/api';

class InternalFetch extends React.Component {
    state = {
        status: 'none',
        error: '',
        loading: false,
    }

    constructor(props) {
        super(props);
    }

    onSubmit = () => {
        if (this.state.loading) {
            return;
        }

        this.setState({
            loading: true,
            error: '',
        });

        return api.post(this.props.endpoint, { ...this.props.data })
            .then(response => {
                this.setState({
                    status: 'success',
                });

                return response;
            })
            .catch(({ response }) => {
                this.setState({
                    status: 'error',
                    error: response.data.message,
                });
            })
            .finally(() => {
                this.setState({
                    loading: false,
                });
            });
    }

    render() {
        return this.props.children({
            submit: this.onSubmit,
            ...this.state,
        });
    }
}

InternalFetch.propTypes = {
    data: PropTypes.object,
    endpoint: PropTypes.string,
};

export default InternalFetch;
