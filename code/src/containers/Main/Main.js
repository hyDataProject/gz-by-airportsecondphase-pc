/**
 * Created by xiaohe on 2018/5/7.
 */
import {Switch,Route} from 'react-router-dom';
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
        this.saveToken = this.saveToken.bind(this);
    }


    componentWillMount() {
        this.saveToken();
    }
    //存储token
    saveToken(){
        // axios({ //获取token
        //     method: 'get',
        //     url: realAddress[0].url + '/screen/arrivalTotalAndDelayRate',
        // }).then((result) => {
        // });
    }

    render() {
        return (
            <div className={"Layer"}>
                {/*默认加载判断路由*/}
                <div className="header">
                    投不投不
                </div>
                <div className="container">
                    <Switch>
                        <Route path="/main/terminalCont" component={TerminalCont}/>
                        <Route path="/main/flyCont" component={FlyCont}/>
                        <Route path="/main/publicArea" component={PublicArea}/>
                        <Route path="/" component={Nav}/>
                    </Switch>
                </div>
            </div>

        )
    }
};

