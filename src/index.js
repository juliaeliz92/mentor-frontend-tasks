import React from 'react';
import ReactDOM from 'react-dom/client';
import {
	BrowserRouter, Routes, Route
} from "react-router-dom";
import './index.css';
import App from './App';
import Tasks, { ResultSummaryComponent } from "./tasks";
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
<React.StrictMode>
	<BrowserRouter>
		<Routes>
			<Route path="mentor-frontend-tasks" element={<App/>} />
			<Route path="task" element={<Tasks />}>
				<Route path="result-summary-component" element={<ResultSummaryComponent/>} />
			</Route>
			<Route path="*" element={<p>404! Page not found!</p>} />
		</Routes>
	</BrowserRouter>
</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
