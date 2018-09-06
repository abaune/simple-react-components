import React, { Component } from 'react';
import propTypes from 'prop-types';

const PropTypes = {
    data: propTypes.array.isRequired,
};

class MenuIcon extends Component {
    render() {
        return (
            <div className='simple-rc-menu-icon'>
                <div className='icon-row' />
                <div className='icon-row' />
                <div className='icon-row' />
            </div>
        );
    }
}

MenuIcon.propTypes = PropTypes;

export default MenuIcon;
