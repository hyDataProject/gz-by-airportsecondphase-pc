/**
 Crate by wanjikun on 19/12/10.
*/
import './Header.scss';
import logo from "img/logo.png";
import cloud from "img/cloud.png";
//晴天
import sun from "img/sun.png";
//阵雨
import shower from "img/shower.png";
//霾
import haze from "img/haze.png";
//雾
import fog from "img/fog.png";
//小雪
import lightSnow from "img/lightSnow.png";
//小雨
import lightRain from "img/lightRain.png";
//中雨
import rain from "img/rain.png";
import {NavLink} from 'react-router-dom';

export default class Header extends Component{
 constructor(props) {
   super(props);
    this.state={
        selectShow:false,
        defaultActive:0,
        year:'',
        day:'',
        weather:'',
        temperature:''
    }
    this.timer=null;
 }
componentWillMount(){
}

 componentDidMount() {
    document.body.addEventListener('click', e => { 
        if (!(e.target && (e.target.matches('.toggleItem') || e.target.matches('.navlink') || e.target.matches('.toggleSelect')))) { 
            this.setState({
                selectShow:false,
            }) 
        }             
    }); 
    this.getData();
    this.setTimer();
 }
setTimer=()=>{
    this.timer = setInterval(()=>{
        this.getData();
    },globalTimer.headerInterval)
}
getData=()=>{
    axios({
        method: 'get',
        url: realAddress[0].url + `/pc/getCurrentTime/${'CAN'}`,
    }).then((res) => {
        if(res.data.code === 0){
            let result = res.data.result;
            let {weather,time,day,temperature} = result;
            this.setState({
                weather:weather,
                year:day,
                day:time,
                temperature:temperature
            })
            
        }
    });
}
toggleSelectShow=()=>{
    let {selectShow} = this.state;
    this.setState({
        selectShow:!selectShow
    })
}
handleWeather=(e)=>{
    let icon = '';
    switch (e) {
        case '阵雨':
            icon = shower;
            break;
        case '晴':
            icon = sun;
            break;
        case '雾':
            icon = fog;
            break;
        case '小雨':
            icon = lightRain;
            break;
        case '霾':
            icon = haze;
            break;
        case '小雪':
            icon = lightSnow;
            break;
        case '中雨':
            icon = rain;
            break;
        default:
            break;
    }
    return icon;
}
 render() {
    let {selectShow,defaultActive,weather,year,day,temperature} = this.state;
    let tem =temperature !== '' ? (temperature.split('-')[1]).split('℃')[0] : '';
    let weatherIcon = this.handleWeather(weather);
   return(
     <div className={'Header'}>
        <div className="leftCont">
            <div className="logo">
                <img className="logoPng" src={logo}></img>
            </div>
            <div className="logoTit">白云机场生产可视化分析系统</div>
        </div>
        <div className="middleCont">
            <div className="middleContItem">
                综合运行态势
            </div>
            <div className="middleContItem threeArea active">
                <div onClick={this.toggleSelectShow} className="toggleSelect">场区运行监控</div>
                <div className={selectShow ? "selectCont active" : "selectCont"}>
                    <div className="toggleItem"><NavLink className={defaultActive === 1 ? "navlink active" : "navlink"} to={"/main/flyCont"}>飞行区</NavLink></div>
                    <div className="toggleItem"><NavLink className="navlink" to={"/main/terminalCont"}>航站区</NavLink></div>
                    <div className="toggleItem"><NavLink  className="navlink" to={"/main/publicArea"}>公共区</NavLink></div>
                </div>
            </div>
            <div className="middleContItem">五大业务流程</div>
        </div>
        <div className="rightCont">
            <div className="line"></div>
            <div className="year">
                <div className="yearIcon">

                </div>
                <div className="yearTxt">
                    {year}
                </div>
            </div>
            {/* <div className="line"></div>
            <div className="mai">
                <div className="maiIcon">

                </div>
                <div className="maiTxt">
                    5
                </div>
            </div> */}
            <div className="line"></div>
            <div className="time">
                <div className="timeIcon">

                </div>
                <div className="timeTxt">
                    {day}
                    {/* <span className="second">:30</span> */}
                </div>
            </div>
            <div className="line"></div>
            <div className="temp">
                <div className="tempIcon">
                    <img src={weatherIcon}></img>
                </div>
                <div className="tempTxt">
                    {tem}<span className="tem">℃</span>
                </div>
            </div>
            <div className="setting">
                设置
            </div>
        </div>   
     </div>
   )
 }
}

Header.propTypes = {}
Header.defaultProps = {}