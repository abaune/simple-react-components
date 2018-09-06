import React, { Component } from 'react';

// Components
import MenuIcon from '../MenuIcon';
import IconBar from '../IconBar';

class DemoPage extends Component {
    constructor() {
        super();

        this.state = {
            componentIndex: 0
        };
    }

    getComponent() {
        const commonProps = {};
        switch(this.state.componentIndex) {
            case 0:
                return <MenuIcon />
            default:
                return null;
        }
    }

    getIconBarData() {
        return [
            {
                icon: 'fa fa-columns', // column layout
                onClickCallback: () => { },
            },
            {
                icon: 'fa fa-ellipsis-v', // iconBar
                onClickCallback: () => { },
            },
            {
                icon: <i className='fa fa-sort' />, // scrollable list
                onClickCallback: () => { },
            },
            {
                icon: <i className='fa fa-bars' />, // menuIcon
                onClickCallback: () => {},
            },
            {
                icon: 'fa fa-object-ungroup', // off screen canvas
                onClickCallback: () => {}
            },
            {
                icon: 'fa fa-book', // pagination
                onClickCallback: () => { },
            },
            {
                icon: 'fa fa-search', // search
                onClickCallback: () => { },
            },
            {
                icon: 'fa fa-toggle-on', // toggle
                onClickCallback: () => { }
            },
            {
                icon: 'fa fa-caret-down', // accordion toggle section
                onClickCallback: () => {}
            },
        ];
    }

    render() {
        return (
            <div className='simple-rc-demo-page'>
                <span className='title'>Simple React Components Demo Page</span>
                <div className='body'>
                    <div className='content-area'>
                        <IconBar
                            data={this.getIconBarData()}
                            orientation='vertical'
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default DemoPage;
