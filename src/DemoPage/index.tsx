import React, { Component } from 'react';

// Components
import MenuIcon from '../MenuIcon';
import IconBar from '../IconBar';

// Utils
import Utils from '../Utils/utils';

interface State {
    componentIndex: number | null;
    expandIconBar: boolean;
}

class DemoPage extends Component<null, State> {
    constructor(props) {
        super(props);

        this.state = {
            componentIndex: null,
            expandIconBar: false,
        };

        Utils.bindFunctions(this, 'menuIconOnClickCallback', 'iconBarOnClickCallback', 'getCurrentComponent');
    }

    /**
     * Returns an array of Icon Bar data objects.
     * @return {Object[]} The Icon Bar data objects
     */
    getIconBarData(): {icon: object | string; label: string;}[]{
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
    menuIconOnClickCallback(): void {
        this.setState({
            expandIconBar: !this.state.expandIconBar
        });
    }

    /**
     * The icon bar on click callback
     */
    iconBarOnClickCallback(datItem: object, index: number, evt: Event): void {
        this.setState({componentIndex: index});
    }

    getCurrentComponent() {
        if (this.state.componentIndex === null) {
            return <span className='center'>To begin select a component from the icon bar on the left.</span>
        }
        switch(this.state.componentIndex) {
            case 3:
                return this.getMenuIconComponent();
            default:
                return null;
        }
    }

    getMenuIconComponent(): JSX.Element {
        return (
            <div className='demo-component'>
                <MenuIcon
                    style={{ height: '15px', width: '70px' }}
                    onClickCallback={this.menuIconOnClickCallback} />
                <span className='description'>
                    This is a basic menu icon. It has a <span className='red'>onClickCallback</span> prop that is triggered on a click.
                    It is the parent's job to decide what happens on that click. In this case, the onClick will expand
                    the icon bar to the left.
                    To change this components style, use the <span className='red'>style</span> prop outlined below:
                        <span className='example-usage'>
                        {'<MenuIcon'} <br />
                        <span className='indent'>
                            {`style={{ backgroundColor: '#000', height: '5px', width: '35px' }}`}<br />
                            {`onClickCallback={function(required) => required} />`}
                        </span>
                        <span className='prop-desc'>
                            The style prop and its contents are optional. The onClickCallback prop is required.
                            </span>
                    </span>
                </span>
            </div>
        )
    }

    render(): JSX.Element {
        return (
            <div className='simple-rc-demo-page'>
                <div className='title'>
                    <MenuIcon onClickCallback={this.menuIconOnClickCallback} />
                    Simple React Components Demo Page
                </div>
                <div className='body'>
                    <IconBar
                        data={this.getIconBarData()}
                        orientation='vertical'
                        onClickCallback={this.iconBarOnClickCallback}
                        expand={this.state.expandIconBar}
                        style={{fontSize: '24px'}}
                    />
                    <div className='content-area'>
                        {this.getCurrentComponent()}
                    </div>
                </div>
            </div>
        );
    }
}

export default DemoPage;
