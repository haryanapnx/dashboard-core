import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";

import NotFound from "../components/notFound";
import Login from "../pages/authentication/login";
import Register from "../pages/authentication/register";
// import Home from '../pages/home';
import Fulllayout from "../layouts/fullLayout";
import Orders from "../components/triplogistic/orders";
import AuthRoutes from "./src/authLayoutRoutes";
import DashboardRoutes from "./src/dashboardLayoutRoutes";
import ModalContainer from "../components/modal";

class IndexRouter extends PureComponent {
	state = { isToken: false };

	componentWillMount() {
		const { token } = this.props;
		if (token !== null) {
			this.setState({
				isToken: token !== null,
			});
		}
	}
	render() {
		const { isToken } = this.state;
		return (
			<>
				<Switch>
					<AuthRoutes path="/" exact component={Login} isToken={!isToken} />
					<AuthRoutes path="/register" component={Register} isToken={!isToken} />

					<DashboardRoutes path="/home" exact component={Fulllayout} isToken={isToken} />
					<DashboardRoutes path="/orders" exact component={Orders} isToken={isToken} />
					<Route component={NotFound} />
				</Switch>
				<ModalContainer />
			</>
		);
	}
}

const mapStateToProps = (state) => ({
	token: state.auth.token,
});

export default connect(mapStateToProps)(IndexRouter);
