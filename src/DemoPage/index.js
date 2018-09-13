import React, { Component } from 'react';

// Components
import MenuIcon from '../MenuIcon';
import IconBar from '../IconBar';

// Utils
import Utils from '../Utils/utils';

class DemoPage extends Component {
    constructor() {
        super();

        this.state = {
            componentIndex: 0,
            expandIconBar: false,
        };

        Utils.bindFunctions(this, 'menuIconOnClickCallback', 'iconBarOnClickCallback');
    }

    /**
     * Returns an array of Icon Bar data objects.
     * @return {Object[]} The Icon Bar data objects
     */
    getIconBarData() {
        return [
            {
                icon: 'fa fa-columns',
                label: 'Column Layout'
            },
            {
                icon: 'fa fa-ellipsis-v',
                label: 'Icon Bar'
            },
            {
                icon: <i className='fa fa-sort' />,
                label: "Scrollable Cards"
            },
            {
                icon: <i className='fa fa-bars' />,
                label: 'Menu Icon'
            },
            {
                icon: 'fa fa-object-ungroup',
                label: 'Off Screen Canvas'
            },
            {
                icon: 'fa fa-book',
                label: 'Pagination Controls'
            },
            {
                icon: 'fa fa-toggle-on',
                label: 'Toggle'
            },
            {
                icon: 'fa fa-caret-down',
                label: 'Accordion Toggle Section'
            },
        ];
    }

    /**
     * Sets the expandIconBar state.
     */
    menuIconOnClickCallback() {
        this.setState({
            expandIconBar: !this.state.expandIconBar
        });
    }

    /**
     * The icon bar on click callback
     */
    iconBarOnClickCallback() {
        return;
    }

    render() {
        return (
            <div className='simple-rc-demo-page'>
                <div className='title'>
                    <MenuIcon onClickCallback={this.menuIconOnClickCallback} />
                    Simple React Components Demo Page
                </div>
                <div className='body'>
                    <div className='content-area'>
                        <IconBar
                            data={this.getIconBarData()}
                            orientation='vertical'
                            onClickCallback={this.iconBarOnClickCallback}
                            expand={this.state.expandIconBar}
                            style={{fontSize: '24px'}}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default DemoPage;
