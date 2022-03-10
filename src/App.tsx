import February from 'pages/february/february';
import January from 'pages/january/january';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/home/home';
import NotFound from './pages/not-found/not-found';

export default function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/january">
                    <January />
                </Route>
                <Route exact path="/february">
                    <February />
                </Route>
                <Route path="*">
                    <NotFound />
                </Route>
            </Switch>
        </Router>
    );
}
