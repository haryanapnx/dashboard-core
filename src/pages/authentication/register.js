import React from 'react';
import {
	FormGroup,
	Input,
	CustomInput,
	Form,
	Row,
	Col,
	Label,
	Button
} from 'reactstrap';
import { connect } from 'react-redux'
import {register, modalToggle} from '../../stores/actions/index'
import {formValidators, validForm, showErrors } from '../../utils/helper'

import img2 from '../../assets/images/big/auth-bg.jpg';
 
const sidebarBackground = {
	backgroundImage: "url(" + img2 + ")",
	backgroundRepeat: "no-repeat",
	backgroundPosition: "center center"
};

class Register extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username:'',
			email: '',
			password: '',
			error: null,
		};
		this.handleRegister = this.handleRegister.bind(this);
	}
	onInputChange=(e)=> {
		const {name, value} = e.target
		this.setState({ [name]: value });
		formValidators(name, value);
	}
	
	async handleRegister(e) {
		e.preventDefault()
		const { email, password } = this.state;
		await this.props.dispatch(register(email, password))
		// await this.props.dispatch(modalToggle(true, 'You have registered successfully. Please check your email for verify'));
	
	}

	render() {
		console.log(this.props.auth);
		
		return(
			<div
        className="auth-wrapper  align-items-center d-flex"
        style={sidebarBackground}
      >
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
                    This is the Firebase sign-up section. Donec non pharetra
                    ligula, sit amet laoreet arcu.Integer. you can use below
                    username password for login
                  </p>
                  <p className="mt-5">Username: demo@demo.com</p>
                  <p className="align-items-end">Password: demo123</p>
                </div>
              </Col>
              <Col md="6" lg="4" className="bg-white">
                <div className="p-4">
                  <h3 className="font-medium mb-3">Sign Up to Admin</h3>
                  <Form className="mt-3" id="loginform" >
                    <FormGroup className="mb-3">
                      <Label for="email" className="font-medium">
                        Email
                      </Label>
                      <Input
                        type="email"
                        value={this.state.email}
                        onChange={this.onInputChange}
                        name="email"
                        id="email"
                        placeholder="Email"
                        bsSize="lg"
                      />
                    </FormGroup>
                    {showErrors('email')}
                    <FormGroup className="mb-3">
                      <Label for="password" className="font-medium">
                        Password
                      </Label>
                      <Input
                        type="password"
                        value={this.state.password}
                        onChange={this.onInputChange}
                        name="password"
                        id="password"
                        placeholder="Password"
                        bsSize="lg"
                      />
                    </FormGroup>
                    {showErrors('password')}
                    <CustomInput
                      type="checkbox"
                      id="exampleCustomCheckbox"
                      label="I agree to all Terms"
                    />
                    <Row className="mb-3 mt-3">
                      <Col xs="12">
                        <Button
                          onClick={this.handleRegister}
                          className={`text-uppercase ${
                            validForm() ? '' : 'disabled'
                          }`}
                          color="primary"
                          size="lg"
                          type="submit"
                          block
                        >
                          Sign Up
                        </Button>
                      </Col>
                    </Row>
                    <div className="text-center">
                      Already have an account?
                      <a
                        href="/"
                        className="text-info ml-1"
                      >
                        <b>Sign In</b>
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
	auth:store.auth
})
 
const mapDispatchToProps = dispatch=>({ dispatch })

export default connect(mapStateToProps, mapDispatchToProps)(Register)