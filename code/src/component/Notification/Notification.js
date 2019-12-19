/**
 Crate by jgmiu on 19/12/19.
*/
import './Notification.scss'
import { TitleCom } from "com/index"
import notiin from 'img/noti-in.png'
import notiout from 'img/noti-out.png'
export default class Notification extends Component{
  constructor(props) {
    super(props)
    this.state = {
      datas: []
    }
  }

  componentDidMount() {
    this._getData()
  }

  _getData() {
    let parma = 1;
    let url = `${realAddress[0].url}/screen/positionChange/${parma}`
    // console.log('消息通知：', url)
    axios({
      url: url,
      method: 'get'
    }).then(result => {
      if(!result.data.code) {
        console.log(result)
        this.setState({
          datas: result.data.result
        })  
      } else {console.error(result.data.msg)}
    }, error => console.error(error))
  }

  render() {
    return(
      <div className={'Notification'}>
        <TitleCom title={'消息通知'} />
        <div className={'list'}>
          <div className={'notiItem'}>
            <div className={'notiLeft'}>
              <span className={'time'}>2019-11-11 15:30</span>
              <span className={'number'}>B5608</span>
              <p className={'detail'}>由原<span className={'num'}>232</span>号机位更换至<span className={'num'}>225</span>号机位</p>
            </div>
            <div className={'notiRight'}>
              <div className={'port'}>
                <img src={notiin} />
                <p>进港 <span className={'num'}>ZH9824</span></p>
                <p>到达: <span className={'time'}>08-27 16:39</span></p>
              </div>
              <div className={'port'}>
                <img src={notiout} />
                <p>出港 <span className={'num'}>ZH9824</span></p>
                <p>起飞: <span className={'time'}>08-27 16:39</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

Notification.propTypes = {}
Notification.defaultProps = {}