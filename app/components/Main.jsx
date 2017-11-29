const React = require("react");
const Nav = require("Nav");

const Main = ({children}) => {
	return (
		<div>
			<Nav />
			{children}
		</div>
	);
};
module.exports = Main;
