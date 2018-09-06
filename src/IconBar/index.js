import React, { Component } from 'react';
import propTypes from 'prop-types';

// Utils
import Utils from '../Utils/utils';

const PropTypes = {
    data: propTypes.arrayOf(propTypes.shape({
        icon: propTypes.oneOfType([propTypes.object, propTypes.string]).isRequired,
        onClickCallback: propTypes.func.isRequired
    })).isRequired,
    orientation: propTypes.string,
};

const defaultProps = {
    orientation: 'vertical'
}

class IconBar extends Component {
    constructor() {
        super();

        this.state = {
            activeIndex: null
        };

        Utils.bindFunctions(this, 'handleOnClick');
    }

    handleOnClick(dataItem, index, evt) {
        this.setState({
            activeIndex: index,
        }, dataItem.onClickCallback(dataItem, index, evt));
    }

    render() {
        return (
            <div className={`simple-rc-icon-bar ${this.props.orientation}`}>
                {this.props.data.map((dataItem, index) => {
                    const className = index === this.state.activeIndex ? 'data-item active' : 'data-item';
                    return (
                        <span
                            key={`data-item-${index}`}
                            className={className}
                            onClick={() => this.handleOnClick(dataItem, index)}>
                            {typeof dataItem.icon === 'object' ? dataItem.icon : <i className={dataItem.icon}/>}
                        </span>
                    );
                })}
            </div>
        );
    }
}

IconBar.defaultProps = defaultProps;
IconBar.propTypes = PropTypes;

export default IconBar;
