//@flow
import React, { Component } from "react";
import { Alert } from "reactstrap";
import { Offline } from "react-detect-offline";

type Props={}

type State={
	visible:boolean
}

export default class DetectOffline extends Component<Props, State> {
	state = {
		visible: true,
	};

	onDismiss = () => {
		this.setState({ visible: false });
	};

	render() {
		return (
			<Offline>
				<Alert
					color="danger"
					className='offline shadow'
					isOpen={this.state.visible}
					toggle={this.onDismiss}
				>
					Please check your network connection.
				</Alert>
			</Offline>
		);
	}
}
