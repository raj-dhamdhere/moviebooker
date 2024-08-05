import React from "react";
import Test from "./Components/Test.js"
import Show1 from "./Components/Show1.js";
import Show2 from "./Components/Show2.js";
import Show3 from "./Components/Show3.js";
import Summary from "./Components/Summary.js"
import Revenue from "./Components/Revenue.js"
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends React.Component {
	render() {
		return (
			<div>
				<Router>
					<div className="App">
						<Route exact path="/" component={Test} />
						<Route path="/show1" component={Show1} />
						<Route path="/show2" component={Show2} />
						<Route path="/show3" component={Show3} />
						<Route path="/summary" component={Summary} />
						<Route path="/revenue" component={Revenue}/>
					</div>
				</Router>
			</div>
		);
	}
}

export default App;
