/**
 * Created by zhangqin on 2019/12/10.
 */
import './ImportantNodeFlight.scss';
import CountUp from 'react-countup';
import { TitleCom } from "com/index";
export default class ImportantNodeFlight extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render(){
        return(
            <div className="ImportantNodeFlight">
                <TitleCom title="重要节点航班实时概览"></TitleCom>
                <div className="flexCon">
                    <div className="flexItem">
                        <div className="left">
                            <div className="inside"></div>
                            <img src=""></img>
                        </div>
                        <div className="right">
                            <p><CountUp end={43} /></p>
                            <span>保障中</span>
                        </div>
                    </div>
                    <div className="flexItem">
                        <div className="left">
                            <div className="inside"></div>
                            <img src=""></img>
                        </div>
                        <div className="right">
                            <p><CountUp end={43} /></p>
                            <span>保障中</span>
                        </div>
                    </div>
                    <div className="flexItem">
                        <div className="left">
                            <div className="inside"></div>
                            <img src=""></img>
                        </div>
                        <div className="right">
                            <p><CountUp end={43} /></p>
                            <span>保障中</span>
                        </div>
                    </div>
                    <div className="flexItem">
                        <div className="left">
                            <div className="inside"></div>
                            <img src=""></img>
                        </div>
                        <div className="right">
                            <p><CountUp end={43} /></p>
                            <span>保障中</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}