import request from "../util/request";
import echarts from "echarts";

var titleData = {
    Title: "",
    AbstractNarration: "",
};

var resTech = {
    data: {
      color: ["#3398DB"],
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "shadow",
          label: {
            show: true
          }
        }
      },
      toolbox: {
        show: true,
        
      },
      calculable: true,
      legend: {
        data: ["Top5"],
        itemGap: 5
      },
      grid: {
        top: "12%",
        left: "8%",
        right: "10%",
        containLabel: true
      },
      xAxis: [
        {
          type: "category",
          data: [
          ]
          // data: []
        }
      ],
      yAxis: [
        {
          type: "value",
          name: "投资金额",
          axisLabel: {
            formatter: function(a) {
              a = +a;
              return isFinite(a) ? echarts.format.addCommas(+a) : "";
            }
          }
        }
      ],
      dataZoom: [
        {
          show: false,
          start: 0,
          end: 100
        },
        {
          type: "inside",
          start: 94,
          end: 100
        },
        {
          show: false,
          yAxisIndex: 0,
          filterMode: "empty",
          width: 30,
          height: "80%",
          showDataShadow: false,
          left: "93%"
        }
      ],
      series: [
        {
          name: "TOP5",
          type: "bar",
          data: []
          // data: []
        }
      ]
    },
    ranklist: [
      {
        rank: 1,
        uuid: "A234",
        title: "论持久战",
        date: "2019-08-29"
      },
      {
        rank: 2,
        uuid: "A267",
        title: "论吃饭",
        date: "2019-08-19"
      }
    ]
};

var resCategory = {
  dataOne: {
      title: {
      x: "center"
      },
      tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b} : {c} ({d}%)"
      },
      legend: {
      orient: "vertical",
      left: "left",
      data: ["G05D", "G05C", "G64C", "864C", "864D"]
      // data: []
      },
      series: [
      {
          name: "类别",
          type: "pie",
          radius: "55%",
          center: ["50%", "60%"],
          data: [
          ],
          // data: [],
          itemStyle: {
          emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)"
          }
          }
      }
      ]
  },
  dataTwo: {
      tooltip: {
          trigger: 'axis'
      },
      legend: {
          data: []
      },
      grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
      },
      toolbox: {
          feature: {
              saveAsImage: {}
          }
      },
      xAxis: {
          type: 'category',
          boundaryGap: false,
          data: []
      },
      yAxis: {
          type: 'value'
      },
      series: [
      ]
  },
  ranklist: [
      {
          rank: 1,
          uuid: "A234",
          title: "论持久战",
          date: "2019-08-29"
      },
      {
          rank: 2,
          uuid: "A267",
          title: "论吃饭",
          date: "2019-08-19"
      }
  ]
};

var resOrg = {
  dataOne: {
    title: {
    x: "center"
    },
    tooltip: {
    trigger: "item",
    formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
    orient: "vertical",
    left: "left",
    data: ["G05D", "G05C", "G64C", "864C", "864D"]
    // data: []
    },
    series: [
    {
        name: "类别",
        type: "pie",
        radius: "55%",
        center: ["50%", "60%"],
        data: [
        ],
        // data: [],
        itemStyle: {
        emphasis: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)"
        }
        }
    }
    ]
  },
  dataTwo: {
      tooltip: {
          trigger: 'axis'
      },
      legend: {
          data: []
      },
      grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
      },
      toolbox: {
          feature: {
              saveAsImage: {}
          }
      },
      xAxis: {
          type: 'category',
          boundaryGap: false,
          data: []
      },
      yAxis: {
          type: 'value'
      },
      series: [
      ]
  },
  ranklist: [
      {
          rank: 1,
          uuid: "A234",
          title: "论持久战",
          date: "2019-08-29"
      },
      {
          rank: 2,
          uuid: "A267",
          title: "论吃饭",
          date: "2019-08-19"
      }
  ]
};

var resIndustry = {
  dataOne: {
    title: {
    x: "center"
    },
    tooltip: {
    trigger: "item",
    formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
    orient: "vertical",
    left: "left",
    data: ["G05D", "G05C", "G64C", "864C", "864D"]
    // data: []
    },
    series: [
    {
        name: "类别",
        type: "pie",
        radius: "55%",
        center: ["50%", "60%"],
        data: [
        ],
        // data: [],
        itemStyle: {
        emphasis: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)"
        }
        }
    }
    ]
  },
  dataTwo: {
      tooltip: {
          trigger: 'axis'
      },
      legend: {
          data: []
      },
      grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
      },
      toolbox: {
          feature: {
              saveAsImage: {}
          }
      },
      xAxis: {
          type: 'category',
          boundaryGap: false,
          data: []
      },
      yAxis: {
          type: 'value'
      },
      series: [
      ]
  },
  ranklist: [
      {
          rank: 1,
          uuid: "A234",
          title: "论持久战",
          date: "2019-08-29"
      },
      {
          rank: 2,
          uuid: "A267",
          title: "论吃饭",
          date: "2019-08-19"
      }
  ]
};

import $ from "jquery"
export default {
  getTitle(cb, uuid) {
    request({
      url: "api/tech/detail/" + uuid,
      method: "get"
    }).then(response => {
      let res = response.data;
      res = $.extend(true, titleData, res);
      cb(res);
    });
  },
  getResTech(cb, uuid) {
    request({
      url: "api/tech/resfish/"+uuid,
      method: "get"
    }).then(response => {
      let res = response.data;
      resTech["ranklist"] = res["ranklist"];
      resTech.data.xAxis[0].data = [];
      resTech.data.series[0].data = [];
      res.ranklist.map(x => {
        resTech.data.xAxis[0].data.push(x.title)
        resTech.data.series[0].data.push(x.date)
      })
      cb(resTech);
    })
  },
  getResCategory(cb, uuid) {
    request({
      url: "api/tech/rescate/"+uuid,
      method: "get"
    }).then(response => {
      let res = response.data;
      let pieData = {
        value: 0,
        name: ""
      }
      let seriesData = {
        name: '主分类',
        type: 'line',
        stack: '总量',
        data: []
      }
      resCategory["ranklist"] = res["ranklist"];
      resCategory.dataOne.legend.data = [];
      resCategory.dataOne.series[0].data = [];
      // 饼图
      res.ranklist.map(x => {
        let dat = JSON.parse(JSON.stringify(pieData));
        resCategory.dataOne.legend.data.push(x.title);
        dat.value=x.date;
        dat.name=x.title;
        resCategory.dataOne.series[0].data.push(dat)
      });
      // 折线图
      resCategory.dataTwo.xAxis.data = res.data.xAxis;
      resCategory.dataTwo.legend.data = [];
      resCategory.dataTwo.series = [];
      res.data.data.map(x => {
        let dat = JSON.parse(JSON.stringify(seriesData));
        dat.name = x.name;
        dat.data = x.data;
        resCategory.dataTwo.legend.data.push(dat.name)
        resCategory.dataTwo.series.push(dat)
      })
      cb(resCategory);
    })
  },
  getResOrg(cb, uuid) {
    request({
      url: "api/tech/resorg/"+uuid,
      method: "get"
    }).then(response => {
      let res = response.data;
      let pieData = {
        value: 0,
        name: ""
      }
      let seriesData = {
        name: '主分类',
        type: 'line',
        stack: '总量',
        data: []
      }
      resOrg["ranklist"] = res["ranklist"];
      resOrg.dataOne.legend.data = []
      resOrg.dataOne.series[0].data = []
      // 饼图
      res.ranklist.map(x => {
        let dat = JSON.parse(JSON.stringify(pieData));
        resOrg.dataOne.legend.data.push(x.title);
        dat.value=x.date;
        dat.name=x.title;
        resOrg.dataOne.series[0].data.push(dat)
      });
      // 折线图
      resOrg.dataTwo.legend.data = []
      resOrg.dataTwo.series = []
      resOrg.dataTwo.xAxis.data = res.data.xAxis;
      res.data.data.map(x => {
        let dat = JSON.parse(JSON.stringify(seriesData));
        dat.name = x.name;
        dat.data = x.data;
        resOrg.dataTwo.legend.data.push(dat.name)
        resOrg.dataTwo.series.push(dat)
      })
      cb(resOrg);
    })
  },
  getResIndustry(cb, uuid) {
    request({
      url: "api/tech/resindustry/"+uuid,
      method: "get"
    }).then(response => {
      let res = response.data;
      let pieData = {
        value: 0,
        name: ""
      }
      let seriesData = {
        name: '主分类',
        type: 'line',
        stack: '总量',
        data: []
      }
      resIndustry["ranklist"] = res["ranklist"];
      // 饼图
      resIndustry.dataOne.legend.data = [];
      resIndustry.dataOne.series[0].data = [];
      res.ranklist.map(x => {
        let dat = JSON.parse(JSON.stringify(pieData));
        resIndustry.dataOne.legend.data.push(x.title);
        dat.value=x.date;
        dat.name=x.title;
        resIndustry.dataOne.series[0].data.push(dat)
      });
      // 折线图
      resIndustry.dataTwo.legend.data = [];
      resIndustry.dataTwo.series = [];
      resIndustry.dataTwo.xAxis.data = res.data.xAxis;
      res.data.data.map(x => {
        let dat = JSON.parse(JSON.stringify(seriesData));
        dat.name = x.name;
        dat.data = x.data;
        resIndustry.dataTwo.legend.data.push(dat.name)
        resIndustry.dataTwo.series.push(dat)
      })
      cb(resIndustry);
    })
  }
}