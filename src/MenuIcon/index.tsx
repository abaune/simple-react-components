import React, { Component } from 'react';

interface Props {
    data: object[];
    style: {
        backgroundColor: string
    }
    onClickCallback();
};

interface DefaultProps {
    style: {
        backgroundColor: string
    }
}

class MenuIcon extends Component<Props, null> {
    static defaultProps: DefaultProps = {
        style: {
            backgroundColor: '#1e1e1e'
        }
    }
    render() {
        return (
            <div className='simple-rc-menu-icon' onClick={this.props.onClickCallback}>
                <div className='icon-row' style={this.props.style}/>
                <div className='icon-row' style={this.props.style}/>
                <div className='icon-row' style={this.props.style}/>
            </div>
        );
    }
}

export default MenuIcon;
