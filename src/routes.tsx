import { Switch, Route } from 'react-router-dom';
import BarChart from './pages/BarChart';
import Home from './pages/Home';
import LineChart from './pages/LineChart';
import PieChart from './pages/PieChart';

const Routes = (): JSX.Element => {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/bar-chart" component={BarChart} />
            <Route path="/pie-chart" component={PieChart} />
            <Route path="/line-chart" component={LineChart} />
        </Switch>
    )
}

export default Routes;
