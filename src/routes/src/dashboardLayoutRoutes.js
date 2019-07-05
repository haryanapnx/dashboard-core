import React from "react";
import { Redirect, Route } from "react-router-dom";

const DashboardRoutes = ({ component: Component, isToken, ...rest }) => {
	return (
		<Route
			{...rest}
			render={(props) =>
				isToken ? (
					<Component {...props} />
				) : (
					<Redirect
						to={{
							pathname: "/",
							state: { from: props.location },
						}}
					/>
				)
			}
		/>
	);
};
export default DashboardRoutes;
