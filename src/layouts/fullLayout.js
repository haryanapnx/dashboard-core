//@flow
import React from "react";
import { connect } from "react-redux";
import Header from "../components/header/header.js";
import Sidebar from "../components/sidebar/sidebar.js";
import Orders from "../components/triplogistic/orders";
import Footer from "../components/footer/footer";
import dashboards from "../routes/src/dashboards";
import * as action from "../stores/actions/alertAction";
import { bindActionCreators } from "redux";
import Loader from "../components/loader";

type State = {
	isOpen: boolean,
	loading: boolean,
	width: any,
	settings: [
		{
			theme: string,
			layout: string,
			dir: string,
			sidebartype: string,
			sidebarpos: string,
			headerpos: string,
			boxed: string,
			navbarbg: string,
			sidebarbg: string,
			logobg: string,
		},
	],
};

type Props = {};

class Fulllayout extends React.Component<Props, State> {
	/*--------------------------------------------------------------------------------*/
	/*Change the layout settings [HEADER,SIDEBAR && DARK LAYOUT] from here            */
	/*--------------------------------------------------------------------------------*/
	constructor(props: Props) {
		super(props);
		this.state = {
			isOpen: false,
			loading: true,
			width: window.innerWidth,
			settings: [
				{
					theme: "light",
					layout: "vertical",
					dir: "ltr",
					sidebartype: "full",
					sidebarpos: "fixed",
					headerpos: "fixed",
					boxed: "full",
					navbarbg: "skin2",
					sidebarbg: "skin6",
					logobg: "skin6",
				},
			],
		};

		// this.props.history.listen((location, action) => {
		// 	if (window.innerWidth < 767 &&
		// 		document.getElementById('main-wrapper').className.indexOf("show-sidebar") !== -1) {
		// 		document.getElementById('main-wrapper').classList.toggle("show-sidebar");
		// 	}
		// });
	}
	/*--------------------------------------------------------------------------------*/
	/*Life Cycle Hook, Applies when loading or resizing App                           */
	/*--------------------------------------------------------------------------------*/
	componentWillMount() {
		window.addEventListener("load", this.updateDimensions);
		window.addEventListener("resize", this.updateDimensions);
	}
	/*--------------------------------------------------------------------------------*/
	/*Function that handles sidebar, changes when resizing App                        */
	/*--------------------------------------------------------------------------------*/
	updateDimensions = () => {
		let element = document.getElementById("main-wrapper");
		this.setState({
			width: window.innerWidth,
		});
		switch (this.state.settings[0].sidebartype) {
			case "full":
			case "iconbar":
				if (this.state.width < 1170) {
					element.setAttribute("data-sidebartype", "mini-sidebar");
					element.classList.add("mini-sidebar");
				} else {
					// element.setAttribute("data-sidebartype" || '', this.state.settings[0].sidebartype);
					// element.classList.remove("mini-sidebar");
					
				}
				break;

			case "overlay":
				if (this.state.width < 767) {
					element.setAttribute("data-sidebartype", "mini-sidebar");
				} else {
					element.setAttribute("data-sidebartype", this.state.settings[0].sidebartype);
				}
				break;

			default:
		}
	};
	/*--------------------------------------------------------------------------------*/
	/*Life Cycle Hook                                                                 */
	/*--------------------------------------------------------------------------------*/
	componentWillUnmount() {
		window.removeEventListener("load", this.updateDimensions);
		window.removeEventListener("resize", this.updateDimensions);
	}
	render() {
		const { isLoading, children } = this.props;
		const { settings } = this.state;

		if (isLoading) {
			return <Loader />;
		}

		return (
			<div
				id="main-wrapper"
				dir={settings[0].dir}
				data-theme={settings[0].theme}
				data-layout={settings[0].layout}
				data-sidebartype={settings[0].sidebartype}
				data-sidebar-position={settings[0].sidebarpos}
				data-header-position={settings[0].headerpos}
				data-boxed-layout={settings[0].boxed}
			>
				<Header data={this.state} />
				<Sidebar data={this.state} {...this.props} routes={dashboards} />
				<div className="page-wrapper d-block">
					<div className="page-content container-fluid">{children}</div>
					<Footer />
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	const { token, auth, isLoading } = state.auth;
	return {
		alert: state.alert,
		auth,
		token,
		isLoading,
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		removeAlert: bindActionCreators(action.removeAlert, dispatch),
		setSuccessMessage: bindActionCreators(action.setSuccessMessage, dispatch),
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Fulllayout);
