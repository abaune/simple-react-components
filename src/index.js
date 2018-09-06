import React from 'react';
import ReactDOM from 'react-dom';

// Components
import DemoPage from './DemoPage';

// Assets
require('./_index.scss');

ReactDOM.render(
    <DemoPage />,
    document.getElementById('app')
);
