/**
 * Created by xiaohe on 2018/5/7.
 */
import {Switch,Route} from 'react-router-dom';
import { Header,Login } from "com/index";
import {
    TerminalCont,
    FlyCont,
    PublicArea,
    Nav
} from 'con/index.js'
import "./Main.scss";

export default class Main extends Component {
    constructor(props, context) {
        super(props);
    }

    componentWillMount() {
        //测试
        this.judgeIfTocken();
        this.props.history.listen(() => {
            this.judgeIfTocken();
        })
    }

    //监听路由变化没有token跳转登录页
    judgeIfTocken=()=>{
        let path = this.props.match.path;
        let token = sessionStorage.getItem('token');
        console.log('token',token);
        
        if (!token) {
            this.props.history.push('/login')
        }
        
    }


    render() {
        return (
            <div className={"Layer"}>
                {/*默认加载判断路由*/}
                <div className="loggedContainer">
                    <div className="header">
                        <Header></Header>
                    </div>
                    <div className="container">
                        <Switch>
                            <Route path="/main/flyCont" component={FlyCont}/>
                            <Route path="/main/terminalCont" component={TerminalCont}/>
                            <Route path="/main/publicArea" component={PublicArea}/>
                            <Route path="/" component={FlyCont}/>
                        </Switch>
                    </div>
                </div>
            </div>

        )
    }
};

