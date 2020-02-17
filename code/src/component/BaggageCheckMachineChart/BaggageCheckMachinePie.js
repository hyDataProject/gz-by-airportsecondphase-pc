import titleImage from "img/sssb_title.png";
import borderImage from "img/sssb_piebg.png";

export default class BaggageCheckMachinePie extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.dom = null;
  }

  componentDidMount() {
    this._drawPie();
  }

  componentDidUpdate() {
    this._drawPie();
  }

  _drawPie() {
    let zr = zrender.init(this.dom);
    // legend
    legendList.forEach((ele, index) => {
      let legend = new zrender.Group();
      let circle = new zrender.Circle({
        shape: {
          cx: 0,
          cy: 5,
          r: 3
        },
        style: {
          fill: ele.color
        }
      });
      let name = new zrender.Text({
        style: {
          text: ele.name,
          textFill: "#ffffff"
        }
      });
      name.position[0] = 10;
      legend.add(name);
      legend.add(circle);
      legend.position[0] = 230;
      legend.position[1] = 30 + index * 20;
      zr.add(legend);
    });
    // background
    let titleBg = new zrender.Image({
      style: {
        image: titleImage,
        x: 35,
        y: 35
      }
    });
    let borderBg = new zrender.Image({
      style: {
        image: borderImage,
        x: 12,
        y: 10
      }
    });
    zr.add(titleBg);
    zr.add(borderBg);

    // data
    let data = this.props.data || [];
    let length = data.length;
    data.forEach((ele, index) => {
      let raduis = 360 / length;
      let group = new zrender.Group();
      let color = zrender.color.parse(colorArr[ele.status]);
      let border = new zrender.Path(
        zrender.path.createFromString(borderPath, {
          style: {
            stroke: colorArr[ele.status],
            fill: `rgba(${color[0]},${color[1]},${color[2]},0.2)`
          },
          draggable: true
        })
      );
      let inner = new zrender.Path(
        zrender.path.createFromString(innerPath, {
          style: {
            fill: colorArr[ele.status]
          },
          draggable: true
        })
      );
      inner.position = [8, 23];
      let name = new zrender.Text({
        style: {
          text: ele.name,
          textFill: "#ffffff"
        }
      });
      name.position = [10, 7];

      group.add(border);
      group.add(inner);
      group.add(name);
      group.position = [80, 22];
      group.origin = [20, 78];
      group.scale = [raduis / 30, 1];
      group.rotation = (Math.PI / 180) * index * raduis;
      zr.add(group);
    });
  }

  render() {
    return (
      <div
        className={"BaggageCheckMachinePie"}
        ref={dom => {
          this.dom = dom;
        }}
      ></div>
    );
  }
}

BaggageCheckMachinePie.propTypes = {};
BaggageCheckMachinePie.defaultProps = {};

const innerPath =
  "M2.55,6.52a43.9,43.9,0,0,1,17.21.13,2.1,2.1,0,0,0,2.46-1.54l.06-.23A2.11,2.11,0,0,0,22,3.14a2.08,2.08,0,0,0-1.27-.85c-.94-.2-2.87-.37-3.8-.51a.54.54,0,0,1-.43-.38L16.27.82a.89.89,0,0,0-.83-.63L7.43,0A.89.89,0,0,0,6.6.53l-.3.67a.53.53,0,0,1-.43.31c-1.38.15-2.76.36-4.16.64A2.12,2.12,0,0,0,.18,3.39,2.09,2.09,0,0,0,.06,4.73l.05.21A2.1,2.1,0,0,0,2.55,6.52Z";
const borderPath =
  "M9.13,25.06c1.41-.28,2.81-.49,4.2-.64a.54.54,0,0,0,.43-.32l.3-.68a.89.89,0,0,1,.84-.53l8.09.19a.89.89,0,0,1,.84.64l.18.59a.54.54,0,0,0,.44.38c.94.14,2.89.31,3.84.51a2.1,2.1,0,0,1,1.28.86c.84.17,1.68.35,2.51.56l.52-2.06a2.16,2.16,0,0,1,1.06-4.19l4.54-18A77.5,77.5,0,0,0,0,2.4L4.73,20.5a2.14,2.14,0,0,1,.29,0,2.16,2.16,0,0,1,.79,4.18l.51,1.93c.42-.11.84-.18,1.26-.27A2.14,2.14,0,0,1,9.13,25.06Z";
const colorArr = [
  "#00ffff", // 0 运行
  "#ffffff", // 1 待机
  "#ffce00", // 2 故障
  "#004fff", // 3 维保
  "#9d9da8", // 4 关机
  "#ff0037", // 5 急停
  "#07ff00", // 6 启动中
  "#a700ff" // 7 传输模式
];
const legendList = [
  { name: "启动中", color: "#07ff00" },
  { name: "运行", color: "#00ffff" },
  { name: "关机", color: "#9d9da8" },
  { name: "待机", color: "#ffffff" },
  { name: "故障", color: "#ffce00" },
  { name: "急停", color: "#ff0037" },
  { name: "维保", color: "#004fff" },
  { name: "传输模式", color: "#a700ff" }
];
