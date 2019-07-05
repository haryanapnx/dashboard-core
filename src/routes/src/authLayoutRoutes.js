import React from "react";
import { Redirect, Route } from "react-router-dom";

const AuthRoutes = ({ component:Component, isToken, ...rest }) => {
  return(
	<Route
		{...rest}
		render={props =>
			isToken ? (
				<Component {...props} />
			) : (
				<Redirect
					to={{
						pathname: "/home",
						state: { from: props.location },
					}}
				/>
			)
		}
	/>
)};
export default AuthRoutes