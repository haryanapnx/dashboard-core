import React from "react";
import {
	InputGroup,
	InputGroupAddon,
	InputGroupText,
	Input,
	CustomInput,
	Form,
	Row,
	Col,
	Label,
	Button,
} from "reactstrap";
import { connect } from "react-redux";
import { login } from "../../stores/actions/index";

import img2 from "../../assets/images/big/auth-bg.jpg";
import { formValidators, validForm, showErrors } from "../../utils/helper";

const sidebarBackground = {
	backgroundImage: "url(" + img2 + ")",
	backgroundRepeat: "no-repeat",
	backgroundPosition: "center center",
};

class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			password: "",
			error: null,
		};
	}

	onInputChange = (e) => {
		const { name, value } = e.target;
		this.setState({ [name]: value });
		formValidators(name, value);
	};

	doLogin = async (e) => {
		const { email, password } = this.state;
		await this.props.dispatch(login(email, password));
		// await this.props.dispatch(modalToggle(true, 'cobabbbdfgdfghg sdgjhskjdfhsdjkf kjsdfshkjdfs l;alksdlhkglsdglks olsdgjs', 'ini cuman coba'));
	};

	render() {
		return (
			<div className="auth-wrapper align-items-center d-flex" style={sidebarBackground}>
				{/*--------------------------------------------------------------------------------*/}
				{/*Login2 Cards*/}
				{/*--------------------------------------------------------------------------------*/}
				<div className="container">
					<div>
						<Row className="no-gutters justify-content-center">
							<Col md="6" lg="4" className="bg-dark text-white">
								<div className="p-4">
									<h2 className="display-5">
										Hi,
										<br /> <span className="text-cyan font-bold">Dude</span>
									</h2>
									<p className="op-5 mt-4">
										This is the Firebase login section. Donec non pharetra ligula, sit amet laoreet arcu.Integer. you
										can use below username password for login
									</p>
									<p className="mt-5">Username: demo@demo.com</p>
									<p className="align-items-end">Password: demo123</p>
								</div>
							</Col>
							<Col md="6" lg="4" className="bg-white">
								<div className="p-4">
									<h3 className="font-medium mb-3">Sign In to Admin</h3>
									<Form className="mt-3">
										<Label for="email" className="font-medium">
											Email
										</Label>
										<InputGroup className="mb-2" size="lg">
											<InputGroupAddon addonType="prepend">
												<InputGroupText>
													<i className="ti-user" />
												</InputGroupText>
											</InputGroupAddon>
											<Input
												type="email"
												id="email"
												name="email"
												value={this.state.email}
												onChange={this.onInputChange}
												placeholder="Email"
											/>
										</InputGroup>
										{showErrors("email")}
										<Label for="password" className="mt-3 font-medium">
											Password
										</Label>
										<InputGroup className="mb-3" size="lg">
											<InputGroupAddon addonType="prepend">
												<InputGroupText>
													<i className="ti-pencil" />
												</InputGroupText>
											</InputGroupAddon>
											<Input
												type="password"
												id="password"
												name="password"
												value={this.state.password}
												onChange={this.onInputChange}
												placeholder="Password"
											/>
										</InputGroup>
										{showErrors("password")}
										<div className="d-flex no-block align-items-center mb-4 mt-4">
											<CustomInput type="checkbox" id="exampleCustomCheckbox" label="Remember Me" />
										</div>
										<Row className="mb-3">
											<Col xs="12">
												<Button
													color="primary"
													onClick={this.doLogin}
													className={`${validForm() ? "" : "disabled"}`}
													disabled={validForm() ? false : true}
													size="lg"
													block
												>
													{this.props.loading ? ". . . ." : "Log In"}
												</Button>
											</Col>
										</Row>
										<div className="text-center">
											Don't have an account?{" "}
											<a href="/register" className="text-info ml-1">
												<b>Sign Up</b>
											</a>
										</div>
									</Form>
								</div>
							</Col>
						</Row>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (store) => ({
	auth: store.auth,
	// success: store.auth.success,
	// message: store.auth.message,
	// loading: store.auth.loading,
});

const mapDispatchToProps = (dispatch) => ({
	dispatch,
});

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Login);
