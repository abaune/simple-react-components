import _ from 'lodash';
import React, { Component } from 'react';

// Utils
import Utils from '../Utils/utils';

type data = {
    icon: object | string;
    label: string;
};

interface Props {
    data: data[];
    orientation: string;
    onClickCallback(item: object, index: number, evt: object);
    style?: {
        backgroundColor?: string;
        activeBackgroundColor?: string;
        color?: string;
        fontSize?: string;
        padding?: string;
    }
    expand?: boolean
};

type DefaultProps = {
    orientation: string;
    style: {
        backgroundColor: string;
        activeBackgroundColor: string;
        color: string;
        fontSize: string;
        padding: string;
    }
    expand: boolean
}

interface State {
    activeIndex: number | null
}

class IconBar extends Component<Props, State> {
    static defaultProps: DefaultProps = {
        orientation: 'vertical',
        style: {
            backgroundColor: '#aaa',
            activeBackgroundColor: '#929292',
            color: 'black',
            fontSize: '32px',
            padding: '20px'
        },
        expand: false
    };

    constructor(props: Props) {
        super(props);

        this.state = {
            activeIndex: null
        };

        Utils.bindFunctions(this, 'handleOnClick');
    }

    /**
     * Sets state for the active index and calls the dataItem onClickCallback.
     * @param {Object} dataItem The properties pertaining to the item clicked
     * @param {Number} index    The data item's index
     * @param {Object} evt      The click event
     */
    handleOnClick(dataItem: data, index: number, evt: object) {
        this.setState({
            activeIndex: index,
        }, this.props.onClickCallback(dataItem, index, evt));
    }

    render() {
        return (
            <div className={`simple-rc-icon-bar ${this.props.orientation}`}>
                {this.props.data.map((dataItem: data, index: number) => {
                    let classNames = 'data-item';

                    const style = _.merge({}, IconBar.defaultProps.style, this.props.style);

                    if (this.state.activeIndex === index) {
                        classNames += ' active';
                        style.backgroundColor = style.activeBackgroundColor;
                    }

                    delete style.activeBackgroundColor;

                    return (
                        <span
                            key={`data-item-${index}`}
                            style={style}
                            className={classNames}
                            onClick={(evt) => this.handleOnClick(dataItem, index, evt)}>
                            <div className='icon'>
                                {typeof dataItem.icon === 'object' ? dataItem.icon : <i className={dataItem.icon} />}
                            </div>
                            {this.props.expand ? <span className='label'>{dataItem.label}</span> : null}
                        </span>
                    );
                })}
            </div>
        );
    }
}

export default IconBar;
