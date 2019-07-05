import React, { Component } from "react";
import ContainerWrap from "../../layouts";
import { connect } from "react-redux";
import {
	Card,
	CardBody,Table,
	Button,
	// CardTitle,
	// Col,
	// InputGroup,
	// InputGroupAddon,
	// Row,
	// CardSubtitle,
	// Input,
	// ListGroupItem,
	// ListGroup,
} from "reactstrap";
import { getOrderList } from "../../stores/actions";
import FilterHead from "./src/filterHead";

class Orders extends Component {
	componentWillMount() {
		this.props.dispatch(getOrderList(this.props.token));
	}
	render() {
		const { orders, 
			// isLoading, from, to, sla, package_order, payment, userSender, token 
		} = this.props;
		return (
			<ContainerWrap>
				<Card>
					<FilterHead />
					<CardBody>
          <Table bordered striped hover responsive >
        <thead>
          <tr>
            <th>SLA</th>
            <th>Tracking Id</th>
            <th>Status Pengiriman</th>
            <th>Asal</th>
            <th>Tujuan</th>
            <th>Jam Dikirim</th>
            <th>Pengirim</th>
            <th>Harga Per SLA</th>
            <th>Jumlah Tagihan</th>
            <th>Status</th>
            <th>Action</th>
            <th>Copy</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((item, i)=>(
            <tr key={i}>
              <td>{item.types}</td>
              <td>{item.id}</td>
              <td>{item.status}</td>
              <td>{item.status}</td>
              <td>{item.status}</td>
              <td>{item.status}</td>
              <td>{item.status}</td>
              <td>{item.status}</td>
              <td>{item.status}</td>
              <td>{item.status}</td>
              <td><center><Button size="md" color="primary">Detail</Button></center></td>
              <td><center><Button size="md" color="success">Copy</Button></center></td>
            </tr>
          ))}
        </tbody>
      </Table>
					</CardBody>
				</Card>
			</ContainerWrap>
		);
	}
}
const mapStateToProps = (state) => {
	const { orders, isLoading, from, to, sla, package_order, payment, userSender } = state.trip_orders;
	return {
		orders,
		isLoading,
		from,
		to,
		sla,
		package_order,
		payment,
		userSender,
		token: state.auth.token,
	};
};
const mapDispatchToProps = (dispatch) => ({ dispatch });

export default connect(mapStateToProps,mapDispatchToProps)(Orders);
