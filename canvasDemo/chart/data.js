var options = {
  title: {
    text: "手机市场占比图",
    subtext: "9月份数据",
    textStyle: {
      fontFamily: "serif"
    }
  },
  tooltip: {
    trigger: "item",
    formatter: "{a} <br> {b} : {c} ({d}%)"
  },
  legend: {
    orient: "vertical",
    left: "left",
    data: ["小米", "华为", "苹果", "三星", "魅族", "锤子"]
  },
  series: [{
    name: "占比",
    data: [{
      label: '小米',
      value: 10,
      bgColor: '#0DA068'
    }, {
      label: '华为',
      value: 20,
      status: 'out',
      bgColor: '#194E9C'
    }, {
      label: '苹果',
      value: 30,
      bgColor: '#ED9C13'
    }, {
      label: '三星',
      value: 25,
      bgColor: '#ED5713'
    }, {
      label: '魅族',
      value: 10,
      bgColor: '#057249'
    }, {
      label: '锤子',
      value: 5,
      bgColor: '#5F91DC'
    }]
  }]
}
