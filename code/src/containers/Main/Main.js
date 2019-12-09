/**
 * Created by xiaohe on 2018/5/7.
 */
import {Switch,Route} from 'react-router-dom';
import {
    AirPortMockTest
} from 'com/index.js'
import { Nav } from "con/index.js";
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
                哈哈哈哈哈哈
                <Switch>
                    <Route path="/main" component={Nav}/>
                </Switch>
            </div>

        )
    }
};

