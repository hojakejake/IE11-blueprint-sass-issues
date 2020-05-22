import React from 'react';
import './App.css';
import Test from './test';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';
class App extends React.Component {
	render() {
		console.log('updated');
		return (
			<Test></Test>
		);
	}
}

export default App;
