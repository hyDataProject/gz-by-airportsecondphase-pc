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
        this.state={
            isLogin:false
        }
        this.saveToken = this.saveToken.bind(this);
    }


    componentWillMount() {
        // this.saveToken();
        this.judgeIfTocken();
        this.props.history.listen(() => {
            console.log('.....');
            
            this.judgeIfTocken();
        })
    }
    //存储token
    saveToken(){
        // axios({ //获取token
        //     method: 'get',
        //     url: realAddressUrlOne + '/screen/arrivalTotalAndDelayRate',
        // }).then((result) => {
        // });
    }

    //监听路由变化没有token跳转登录页
    judgeIfTocken=()=>{
        let path = this.props.match.path;
        let token = localStorage.getItem('token')
        if (!token && path !== '/') {
            this.props.history.push('/')
        }
        
    }

    loginFun=(userCode, password)=>{
        
        this.setState({
            isLogin:true
        })
    }

    render() {
        let {isLogin} = this.state;
        return (
            <div className={"Layer"}>
                {/*默认加载判断路由*/}
                {
                    isLogin ? (
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
                    ) : (
                        <div className="loginCont">
                            <Login loginFun={this.loginFun}></Login>
                        </div>
                    )
                }
            </div>

        )
    }
};

