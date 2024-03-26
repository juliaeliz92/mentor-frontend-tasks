import { Outlet } from 'react-router-dom';
import ResultSummaryComponent from './ResultSummaryComponent'
import { NewLetterSignUp } from './NewsLetterSignUp';

export default function Tasks() {
    return(<Outlet />)
}

export { ResultSummaryComponent, NewLetterSignUp }