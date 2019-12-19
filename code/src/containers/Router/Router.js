/**
 * Created by xiaohe on 2018/5/8.
 */

import {HashRouter, Route, NavLink, Link, Switch} from 'react-router-dom';
import { hot } from 'react-hot-loader/root';
import {Nav,Main} from 'con/index';
import { Login } from "com/index";

class Router extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <HashRouter>
                    <Switch>
                        <Route path="/nav" component={Nav}/>
                        <Route path="/main" component={Main}/>
                        <Route path="/login" component={Login}/>
                        <Route path="/" component={Main}/>
                    </Switch>
            </HashRouter>
        )
    }
}
Router.contextTypes = {
    store: PropTypes.object
}
export default hot(Router);
