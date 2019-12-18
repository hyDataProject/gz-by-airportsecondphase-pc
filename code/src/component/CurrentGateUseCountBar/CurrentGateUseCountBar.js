import './CurrentGateUseCountBar.scss';
import barBg from 'img/jrkq_bar_bg.png';

import scatterImg from 'img/scatter_img.png';

export default class CurrentGateUseCountBar extends Component {
    constructor(props){
        super(props);
        this.state = {

        };
        this.myChart = null;
        this.draw = this.draw.bind(this);
    }
    componentDidMount(){
        switch(this.props.id){
            case 'FarBar':
                this.myChart = echarts.init(document.getElementById('FarBar'));
                this.draw(this.props.farRate);
                break;
            case 'NearBar':
                this.myChart = echarts.init(document.getElementById('NearBar'));
                this.draw(this.props.nearRate);
                break;
        }
    }
    componentWillReceiveProps(nextProps) {
        switch(this.props.id){
            case 'FarBar':
                this.draw(nextProps.farRate);
                break;
            case 'NearBar':
                this.draw(nextProps.nearRate);
                break;
        }
    }
    renderItem(params, api){
        let categoryIndex = api.value(1);
        let start = api.coord([api.value(1), categoryIndex]);
        let x = 264*api.value(0)/100;//柱图在x轴上的长度(485=纹理背景长度-多边形下边减上边的值)
        return {
            type: 'group',
            children: [
                {// 纹理背景
                    type: 'image',
                    style: {
                        image: barBg,
                        width: 276,
                        height: 15,
                        x: 10,
                        y: start[1]-10.5
                    }
                },
                {// 多边形
                    type: 'polygon',
                    position: [10,12],
                    shape: {
                        points:[[0,0], [0, 15], [x+12, 15], [x, 0]],
                    },
                    style: {
                        fill: new echarts.graphic.LinearGradient(
                            0, 0, 1, 0,
                            [
                                {offset: 0, color: 'rgba(0,63,156,0.3)'},
                                {offset: 1, color: 'rgba(0,220,212,0.7)'}
                            ]
                        )
                    }
                }
            ]

        }
    }
    draw(rate){
        this.myChart.clear();
        var option = {
            grid: {
                left: 10,
                right: 20,
                bottom: 50
            },
            xAxis: {
                type: 'value',
                show: false,
                max: 100,
            },
            yAxis: {
                type: 'category',
                show: false,
                data: [],
            },
            series: [
                {
                type: 'custom',
                id: 'barBg',
                renderItem: this.renderItem,
                data: [rate],
                silent: true,
            },
            {
                data: [rate],
                type: 'bar',
                id: 'rate',
                barWidth: 15,
                silent: true,
                label: {
                    show: true,
                    position: "insideRight",
                    offset: [10, -20],
                    fontSize: 12,
                    color: "#F5E22B",
                    fontFamily: 'lcd',
                    formatter: "{c}%"
                },
                itemStyle: {
                    color: 'rgba(0,0,0,0)'
                }
            },
            {
                data: [rate],
                type: 'scatter',
                id: 'scatter',
                symbol: 'image://'+scatterImg,
                symbolSize: 40,
                symbolOffset: [6,-3],
                symbolRotate: -6,
                silent: true,
            }
        ]
        }
        this.myChart.setOption(option)
    }
    render(){
        return(
            <div id={this.props.id}></div>
        )
    }
}