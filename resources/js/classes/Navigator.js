class Navigator {
    _navigation = null;

    /**
     * Set the navigation object
     * coming from react navigation
     * @param {Object} navigation
     * @return self
     */
    setNavigation(navigation) {
        this._navigation = navigation;

        return this;
    }

    /**
     * Get the navigation object
     * @return {Object|null}
     */
    getNavigation() {
        return this._navigation;
    }
}

export default new Navigator();
