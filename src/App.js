import { Link } from "react-router-dom";

function App() {
	return (
		<div>
			<h1>Mentor Frontend Tasks</h1>
			<nav>
				<ul>
					<li>
						<Link to={'/task/result-summary-component'}>Result Summary Component</Link>
					</li>
					<li>
						<Link to={'/task/newsletter-signup'}>News Letter Signup</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
}

export default App;
