import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './home/home';
import NotFound from './not-found/not-found';

export default function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="*">
                    <NotFound />
                </Route>
            </Switch>
        </Router>
    );
}
