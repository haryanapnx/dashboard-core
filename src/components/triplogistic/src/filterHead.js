import React, { Component } from "react";
import {
	// Card,
	CardBody,
	CardTitle,
	Button,
	Col,
	InputGroup,
	InputGroupAddon,
	Row,
	CardSubtitle,
	Input,
	// ListGroupItem,
	// ListGroup,
} from "reactstrap";

export default class FilterHead extends Component {
	render() {
		return (
			<div>
				<CardBody>
					<Row>
						<Col sm="12" xs="12" md="4" lg="4" xl="4">
							<CardTitle>
								<i className="mdi mdi-database mr-2" /> Orders Retail Logistics
							</CardTitle>
							<CardSubtitle>List Order Pengiriman Barang</CardSubtitle>
							{/* <p style={{fontSize: 20}} >Revenue {accounting.formatMoney(revenue, "Rp. ", 0, '.')}</p> */}
						</Col>
						<Col sm="12" xs="12" md="8" lg="8" xl="8">
							<Row className="d-flex justify-content-end">
								<Col className="p-1" sm="12" xs="12" md="6" lg="6" xl="6">
									<InputGroup style={{ maxHeight: 36 }}>
										<Button>X</Button>
									</InputGroup>
								</Col>
								<Col className="p-1" sm="12" xs="12" md="4" lg="4" xl="4">
									<InputGroup style={{ maxHeight: 36 }}>
										<Input
											type="text"
											placeholder="Cari"
											name="searchText"
											// value=''
											// onChange={this.onChage}
										/>
										<InputGroupAddon addonType="append">
											<Button
												color="primary"
												// onClick={() => onChangeSearch(searchText)}
											>
												<i className="ti-search" />
											</Button>
										</InputGroupAddon>
									</InputGroup>
								</Col>
							</Row>
							<Row className="d-flex justify-content-end">
								<Col className="p-1" sm="12" xs="12" md="4" lg="4" xl="4">
									<Button
										color="primary"
										style={{ float: "right" }}
										onClick={() => this.setState({ modalAddOrder: true })}
									>
										Add Order
									</Button>
								</Col>
								<Col className="p-1" sm="12" xs="12" md="4" lg="4" xl="4">
									<Button
										color="success"
										style={{ float: "right" }}
										onClick={() => this.setState({ modalExportCsv: true })}
									>
										Export data
									</Button>
								</Col>
							</Row>
						</Col>
					</Row>
				</CardBody>
			</div>
		);
	}
}
