/**
 * Created by xj on 2018/12/12.
 */
import {NavLink} from 'react-router-dom';
import './Nav.scss'

export default class Nav extends Component {
    constructor(props, context) {
        super(props, context)
    }

    render() {
        return (
            <div className={"Layer"}>
                <div className={"Nav"}>
                    <li><NavLink to={"/main/terminalCont"}>航站区</NavLink></li>
                    <li><NavLink to={"/main/flyCont"}>飞行区</NavLink></li>
                    <li><NavLink to={"/main/publicArea"}>公共区</NavLink></li>
                </div>
            </div>
        )
    }
}