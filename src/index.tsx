import React from 'react';
import ReactDOM from 'react-dom';
import Root from 'Root';
import 'dayjs/locale/zh-cn';
import * as serviceWorker from './serviceWorker';
import 'assets/styles/index.less';

ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
