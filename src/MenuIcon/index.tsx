import _ from 'lodash';
import React, { Component } from 'react';

interface Props {
    style?: {
        backgroundColor?: string
        height?: string;
        width?: string;
    }
    onClickCallback();
};

interface DefaultProps {
    style: {
        backgroundColor: string;
        height: string;
        width: string;
    }
}

class MenuIcon extends Component<Props, null> {
    static defaultProps: DefaultProps = {
        style: {
            backgroundColor: '#1e1e1e',
            height: '5px',
            width: '35px'
        }
    }
    render() {
        const style = _.merge({}, MenuIcon.defaultProps.style, this.props.style);
        return (
            <div className='simple-rc-menu-icon' onClick={this.props.onClickCallback}>
                <div className='icon-row' style={style}/>
                <div className='icon-row' style={style}/>
                <div className='icon-row' style={style}/>
            </div>
        );
    }
}

export default MenuIcon;
