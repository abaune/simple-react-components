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
                icon: <i className='fa fa-bars' />,
                onClickCallback: () => {},
                orientation: 'vertical'
            }
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
