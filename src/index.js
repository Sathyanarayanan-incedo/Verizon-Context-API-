import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import {Provider} from './Context'

ReactDOM.render(
<Provider value={{name:"Sathya Narayanan", company:"Verizon", parent:"Incedo"}}>
	<App />
</Provider>,
document.getElementById('root')
);

