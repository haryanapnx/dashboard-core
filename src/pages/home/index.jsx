import React from "react";
import {
	Card,
	CardBody,
	CardTitle,
	CardSubtitle,
	Col,
	Row,
	Input
} from 'reactstrap';
// import { TriplogicSummary } from 'components/dashboard-components';

class Home extends React.Component {
	render() {
		return (
			<div>
			  <Row>
					<Col xs={12}>
						<Card>
				<CardBody>
					<div className="d-md-flex align-items-center">
						<div>
							<CardTitle>Triplogic Summary</CardTitle>
							<CardSubtitle>Overview of Users Activities All Time</CardSubtitle>
						</div>
						{/* <div className="ml-auto d-flex no-block align-items-center">
							<ul className="list-inline font-12 dl mr-3 mb-0">
				        <li className="border-0 p-0 list-inline-item" style={{ color: 'rgba(254, 202, 87,1.0)' }}>
				        	<i className="fa fa-circle"></i> Triplogistic
				        </li>
				        <li className="border-0 p-0 list-inline-item" style={{ color: 'rgba(29, 209, 161,1.0)' }}>
				        	<i className="fa fa-circle"></i> TripStore
				        </li>
                <li className="border-0 p-0 list-inline-item" style={{ color: 'rgba(10, 189, 227,1.0)' }}>
				        	<i className="fa fa-circle"></i> TripTravel
				        </li>
				      </ul>
							<div className="dl">
								<Input type="select" className="custom-select">
                  <option value="0">Monthly</option>
                  <option value="1">Daily</option>
                  <option value="2">Weekly</option>
                  <option value="3">Yearly</option>
                </Input>
							</div>
						</div> */}
					</div>
					<Row>
						<Col lg="4">
							<h1 className="mb-0 mt-4">{
								// this.formatNumber(totalUserReguler)
								}</h1>
							<h6 className="font-light text-muted">Total Retail User</h6>
							{/* <h1 className="mb-0 mt-4">{this.formatNumber(totalUserCorporate)}</h1>
							<h6 className="font-light text-muted">Total Corporate User</h6> */}
							{/* <a className="btn btn-info my-3 p-3 px-4" href=""><i className="fa fa-download"></i> Download Data Report</a> */}
						</Col>
						{/* <Col lg="8">
							<div className="campaign ct-charts">
								<div className="chart-wrapper" style={{ width: '100%', margin: '0 auto', height: 250 }}>
									<Line 
										data={lineData}
										options={{
											scaleShowGridLines: true,
											scaleGridLineColor: 'rgba(0,0,0,.05)',
											scaleGridLineWidth: 1,
											scaleShowHorizontalLines: true,
											scaleShowVerticalLines: true,
											bezierCurve: true,
											bezierCurveTension: 0.4,
											pointDot: true,
											pointDotRadius: 4,
											pointDotStrokeWidth: 1,
											pointHitDetectionRadius: 20,
											datasetStroke: true,
											datasetStrokeWidth: 2,
											datasetFill: true,
											legendTemplate: `<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].strokeColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>`,
											legend: { 
												display: false, 
												labels: { 
													fontFamily: "Nunito Sans" 
												} 
											}, 
											scales: { 
													yAxes: [{ 
														stacked: false, 
														gridLines: { 
															display: true 
														}, ticks: { 
															fontFamily: "Nunito Sans" 
														} 
													}], 
													xAxes: [{ 
														gridLines: { display: false }, 
														ticks: { 
															fontFamily: "Nunito Sans" 
														} 
													}] 
											} 
										}}
										width={600} height={250}/>
								</div>
							</div>
						</Col> */}
					</Row>
				</CardBody>
				{/* <CardBody className="border-top">
					<Row className="mb-0">
            <Col lg="12">
              <CardTitle>Transactions Per-Service <span style={{ fontWeight: 80 }}>({moment().format('MMMM')})</span></CardTitle>
            </Col>
						<Col lg="2" md="6">
							<S.Statistics
                color="rgba(254, 202, 87,1.0)"
								icon="truck"
								title="TripLogistic"
								subtitle={this.formatNumber(parseFloat(totalServiceTransactions.tripLogistics))}
							/>
						</Col>
						<Col lg="2" md="6">
							<S.Statistics
								color="rgba(29, 209, 161,1.0)"
								icon="cart-outline"
								title="TripStore"
								subtitle={this.formatNumber(parseFloat(totalServiceTransactions.tripStore))}
							/>
						</Col>
						<Col lg="2" md="6">
							<S.Statistics
								color="rgba(10, 189, 227,1.0)"
								icon="airplane-takeoff"
								title="TripTravel Flight"
								subtitle={this.formatNumber(parseFloat(totalServiceTransactions.tripTravelAirplane))}
							/>
						</Col>
						<Col lg="2" md="6">
							<S.Statistics
								color="rgba(10, 189, 227,1.0)"
								icon="domain"
								title="TripTravel Hotel"
								subtitle={this.formatNumber(totalServiceTransactions.tripTravelHotel)}
							/>
						</Col>
						<Col lg="2" md="6">
							<S.Statistics
								color="rgba(155, 89, 182,1.0)"
								icon="cellphone"
								title="TripBills"
								subtitle={this.formatNumber(totalServiceTransactions.tripBills)}
							/>
						</Col>
						<Col lg="2" md="6">
							<S.Statistics
								color="#0f0f0f"
								icon="view-grid"
								title="Other"
								subtitle={this.formatNumber(totalServiceTransactions.total)}
							/>
						</Col>
					</Row>
				</CardBody> */}
			</Card>

						{/* <TriplogicSummary /> */}
					</Col>
				</Row>
			</div>
		);
	}
}

export default Home;
