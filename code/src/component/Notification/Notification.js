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
     // 动画相关配置
     this.animationConfig = {
      // 动画持续时间
      times: globalTimer.infoTime,
      // 每一阶段相隔时间
      interval: globalTimer.infoInterval,
      // 本次请求无数据，延迟一段时间再请求
      nodataInterval: globalTimer.infoNodataInterval
    }
    // 定时器
    this.noDataTime = null
    this.moveNextTime = null
    this.createTime = null

    this._getData = this._getData.bind(this)
    this._start = this._start.bind(this)
    this._createAndMove = this._createAndMove.bind(this)
    this._moveNext = this._moveNext.bind(this)
    
    // 对应scss文件，表示动画的几个阶段
    this.animations = ['enter1', 'enter2', 'enter3', 'enter4']
  }

  componentDidMount() {
    this._getData();
  }

  componentWillUnmount() {
    clearTimeout(this.noDataTime)
    clearTimeout(this.moveNextTime)
    clearTimeout(this.createTime)
  }  

  _getData() {
    let parma = 1;
    let url = `${realAddressUrlOne}/pc/positionChange/${parma}`
    // console.log('消息通知：', url)
    axios({
      url: url,
      method: 'get'
    }).then(result => {
      if(!result.data.code) {
        // 开始动画
        this._start(result.data.result)
      } else {console.error(result.data.msg)}
    }, error => console.error(error))
  }

  _start(items) {
    let doms = document.getElementsByClassName('notiItem')
    if(items.length > 0) {
      if(doms.length !== 0) {
        this._moveNext(this._createAndMove.bind(this, items[0], this._getData))
      } else {
        this._createAndMove(items[0], this._getData)
      }
    } else {
      this.noDataTime = setTimeout(()=>{
        this._getData();
      },this.animationConfig.nodataInterval)
    }
  }

  _createAndMove(item, callback) {
    let listDom = document.querySelector(".list"),
    domInner = this._createInnerHTML(item),
    items = document.getElementsByClassName('notiItem')
    // 保证新插入的dom位于第一个
    if(items.length === 0) {
      listDom.appendChild(domInner)
    } else {
      listDom.insertBefore(domInner, items[0])
    }
    domInner.setAttribute(
      `style`,
      `animation:enter1 ${this.animationConfig.times} linear; animation-fill-mode: forwards;`
    )
    // 新建dom节点并移动到第一阶段，重新请求数据
    this.createTime = setTimeout(()=>{callback()}, this.animationConfig.interval)
  }

  // 页面上现有的dom移动到下一个阶段
  _moveNext(callback) {
    let items = document.getElementsByClassName('notiItem')
    for(let i = 0; i < items.length; i++) {
      let style = items[i].getAttribute('style')
      for(let j = 0; j < this.animations.length; j++) {
        if(style.indexOf(this.animations[j]) !== -1) {
          if(this.animations[j] === 'enter4') {
            items[i].remove()
          } else {
            items[i].setAttribute(
              `style`,
              `animation:${this.animations[j+1]} ${this.animationConfig.times} linear; animation-fill-mode: forwards;`
            )
            break
          }
        }
      }
    }
    // 页面上所有dom移动到下一阶段，页面新建dom结构并移动到第一阶段
    this.moveNextTime = setTimeout(()=>{callback()},this.animationConfig.interval)
  }

  // 创建dom
  _createInnerHTML(item) {
    let domInner = document.createElement("div");
    domInner.setAttribute("class", "notiItem");
    domInner.innerHTML = `
      <div class='notiLeft'>
        <span class='time'>${item.time}</span>
        <span class='number'>${item.changeAir}</span>
        <p class='detail'>由原<span class='num'>${item.before}</span>号机位更换至<span class='num'>${item.after}</span>号机位</p>
      </div>
      <div class='notiRight'>
        <div class='port'>
          <img src=${notiin} />
          <p>进港 <span class='num'>${item.arrivePort}</span></p>
          <p>到达: <span class='time'>${item.realArrive}</span></p>
        </div>
        <div class='port'>
          <img src=${notiout} />
          <p>出港 <span class='num'>${item.leavePort}</span></p>
          <p>起飞: <span class='time'>${item.willFly}</span></p>
        </div>
      </div>`;
    return domInner
  }

  render() {
    return(
      <div className={'Notification'}>
        <TitleCom title={'消息通知'} />
        <div className={'list'}>
        </div>
      </div>
    )
  }
}

Notification.propTypes = {}
Notification.defaultProps = {}