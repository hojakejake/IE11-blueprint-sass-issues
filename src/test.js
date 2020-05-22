import React from 'react';
import { connect } from "react-redux";
class Test extends React.PureComponent {
	render() {
		const { increment, decrement, count } = this.props;
		console.log('render');
		return (
			<div>
				<button onClick={increment}>
					+
				</button>
				<button onClick={decrement}>
					-
				</button>
				<h1>{count}</h1>
			</div >
		);
	}
}

const mapStateToProps = state => ({
	count: state.vehicle
});

const mapDispatchToProps = dispatch => {
	return {
		// dispatching plain actions
		increment: () => dispatch({ type: 'Car' }),
		decrement: () => dispatch({ type: 'Bike' }),
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(Test)