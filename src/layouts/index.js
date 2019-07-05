import React from "react";
import Fulllayout from "./fullLayout";

const ContainerWrap = ({ children }) => {
	return (
		<>
			<Fulllayout>{children}</Fulllayout>
		</>
	);
};

export default ContainerWrap;
