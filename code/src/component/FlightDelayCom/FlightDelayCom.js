/**
 Crate by wanjikun on 19/12/10.
*/
import { TitleCom,PiechartCom  } from "com/index";
import './FlightDelayCom.scss'
export default class FlightDelayCom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            seriesData: [],
            color: ['#0bf2b7', '#03c7f6', '#f0fd31', '#f8b80b'],
        }
        this.timer = null;
    }

    componentDidMount() {
        this.getData();
        this.setTimer();
    }
    componentWillUnmount() {
        this.timer && clearInterval(this.timer)
    }

    getData = () => {
        axios({ //进港每小时放行概览
            method: 'get',
            url: realAddressUrlOne + `/pc/fltDelaySortieCount`,
        }).then((res) => {
            // console.log('延误架次实时分析', res);
            const { code, result } = res.data;
            if (code === 0) {
                const { oneHour, thanFour, thanOneHour, thanTwoHour } = result;
                const data = [
                    {
                        value: oneHour,
                        name: '0-1时'
                    },
                    {
                        value: thanOneHour,
                        name: '1-2时'
                    },
                    {
                        value: thanTwoHour,
                        name: '2-4时'
                    },
                    {
                        value: thanFour,
                        name: '4时以上'
                    }
                ]
                this.setState({
                    seriesData: data
                })
                
            }

        });
    }

    setTimer = () => {
        this.timer = setInterval(() => {
            this.getData()
        }, globalTimer.fltDelaySortieCountDelay)
    }
    render() {
        const {seriesData,color} = this.state;
        return (
            <div className={'FlightDelayCom'}>
                <TitleCom title="今日延误航班概览"></TitleCom>
                <div className="chartCont">
                    <PiechartCom  seriesData={seriesData} color={color}></PiechartCom>
                </div>
            </div>
        )
    }
}

FlightDelayCom.propTypes = {}
FlightDelayCom.defaultProps = {}