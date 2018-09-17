import _ from 'lodash';
import React, { Component } from 'react';

interface Props {
    style?: {
        backgroundColor?: string
        height?: string;
        width?: string;
        toggleColor? : string;
        toggleHeight?: string;
        toggleWidth?: string;
        onBackgroundColor?: string;
    }
    onClickCallback();
    toggled: boolean;
};

interface DefaultProps {
    style: {
        backgroundColor: string;
        height: string;
        width: string;
        toggleColor: string;
        toggleHeight: string;
        toggleWidth: string;
        onBackgroundColor: string;
    }
}

class Toggle extends Component<Props, null> {
    static defaultProps: DefaultProps = {
        style: {
            backgroundColor: '#aeaeae',
            toggleColor: '#1e1e1e',
            height: '35px',
            width: '60px',
            toggleHeight: '30px',
            toggleWidth: '30px',
            onBackgroundColor: '#808080'
        }
    }
    render() {
        // Not happy with this styling. Need to address later.
        const wrapperStyle = _.merge({}, Toggle.defaultProps.style, this.props.style);
        if(this.props.toggled) {
            wrapperStyle.backgroundColor = _.get(this.props.style, 'onBackgroundColor', Toggle.defaultProps.style.onBackgroundColor);
        }
        const toggleStyle = {
            backgroundColor: _.get(this.props.style, 'toggleColor', Toggle.defaultProps.style.toggleColor),
            height: _.get(this.props.style, 'toggleHeight', Toggle.defaultProps.style.toggleHeight),
            width: _.get(this.props.style, 'toggleWidth', Toggle.defaultProps.style.toggleWidth),
        }
        _.forEach(['toggleColor', 'toggleHeight', 'toggleWidth'], (key) => delete wrapperStyle[key]);

        return (
            <div className='simple-rc-toggle' style={wrapperStyle} onClick={this.props.onClickCallback}>
                <div className={`switch ${this.props.toggled ? 'on' : 'off'}`} style={toggleStyle} />
            </div>
        );
    }
}

export default Toggle;
