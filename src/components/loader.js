import React from "react";

const Loader = () => {
	return (
		<div id="main-wrapper">
			<div className="page-wrapper d-block" style={{ minHeight: "100vh" }}>
				<div className="page-content container-fluid">
					<div className="loading">
						<div className="loading center">
							<div className="loading-bar" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Loader;