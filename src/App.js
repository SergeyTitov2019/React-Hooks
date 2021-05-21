import './App.css';
import { BrowserRouter as Router} from 'react-router-dom'
import Routes from './components/router/index'
import TopBar from "./components/top-bar";

const App = () =>  {
	return (
		<div className="App">
			{/*<h1>Hooks </h1>*/}
			<Router>
				<TopBar />
				<Routes />
			</Router>
		</div>
	);
}

export default App;
