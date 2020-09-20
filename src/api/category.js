import request from "../util/request";
import echarts from "echarts";

var titleData = {
  Title: "",
  AbstractNarration: ""
};

var resCategory = {
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
      show: true
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
        data: []
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

var resTech = {
  dataOne: {
    color: ["#3398DB", "#F7DC6F", "#7FB3D5", "#E59866", "#566573"],
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
      show: true
    },
    calculable: true,
    legend: {
      data: [],
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
          "2002",
          "2003",
          "2004",
          "2005",
          "2006",
          "2007",
          "2008",
          "2009",
          "2010",
          "2011",
          "2012",
          "2013",
          "2014",
          "2015",
          "2016",
          "2017",
          "2018",
          "2019",
          "2020"
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
    series: []
  },
  dataTwo: {
    tooltip: {
      trigger: "axis"
    },
    legend: {
      data: []
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: []
    },
    yAxis: {
      type: "value"
    },
    series: []
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
    color: ["#3398DB", "#F7DC6F", "#7FB3D5", "#E59866", "#566573"],
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
      show: true
    },
    calculable: true,
    legend: {
      data: [],
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
          "2002",
          "2003",
          "2004",
          "2005",
          "2006",
          "2007",
          "2008",
          "2009",
          "2010",
          "2011",
          "2012",
          "2013",
          "2014",
          "2015",
          "2016",
          "2017",
          "2018",
          "2019",
          "2020"
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
    series: []
  },
  dataTwo: {
    tooltip: {
      trigger: "axis"
    },
    legend: {
      data: []
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: []
    },
    yAxis: {
      type: "value"
    },
    series: []
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
    color: ["#3398DB", "#F7DC6F", "#7FB3D5", "#E59866", "#566573"],
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
      show: true
    },
    calculable: true,
    legend: {
      data: [],
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
          "2002",
          "2003",
          "2004",
          "2005",
          "2006",
          "2007",
          "2008",
          "2009",
          "2010",
          "2011",
          "2012",
          "2013",
          "2014",
          "2015",
          "2016",
          "2017",
          "2018",
          "2019",
          "2020"
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
    series: []
  },
  dataTwo: {
    tooltip: {
      trigger: "axis"
    },
    legend: {
      data: []
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: []
    },
    yAxis: {
      type: "value"
    },
    series: []
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

import $ from "jquery";
export default {
  getTitle(cb, uuid) {
    request({
      url: "api/category/detail/" + uuid,
      method: "get"
    }).then(response => {
      let res = response.data.data;
      res = $.extend(true, titleData, res);
      res.Title = res.title;
      cb(res);
    });
  },
  getResCategory(cb, uuid) {
    request({
      url: "api/category/resfish/" + uuid,
      method: "get"
    }).then(response => {
      let res = response.data.data;
      resCategory["ranklist"] = res["ranklist"];
      resCategory.data.xAxis[0].data = [];
      resCategory.data.series[0].data = [];
      res.ranklist.map(x => {
        resCategory.data.xAxis[0].data.push(x.title);
        resCategory.data.series[0].data.push(x.date);
      });
      cb(resCategory);
    });
  },
  getResTech(cb, uuid) {
    request({
      url: "api/category/restech/" + uuid,
      method: "get"
    }).then(response => {
      let res = response.data.data;
      let barData = {
        name: "01",
        type: "bar",
        data: []
        // data: []
      };
      let seriesData = {
        name: "基金",
        type: "line",
        stack: "总量",
        data: []
      };
      resTech.dataOne.xAxis[0].data = res.dataOne.xAxis;
      resTech.dataOne.legend.data = [];
      resTech.dataOne.series = [];
      res.dataOne.data.map(x => {
        let dat = JSON.parse(JSON.stringify(barData));
        dat.name = x.name;
        dat.data = x.data;
        resTech.dataOne.legend.data.push(dat.name);
        resTech.dataOne.series.push(dat);
      });
      resTech.dataTwo.xAxis.data = res.dataTwo.xAxis;
      resTech.dataTwo.legend.data = [];
      resTech.dataTwo.series = [];
      res.dataTwo.data.map(x => {
        let dat = JSON.parse(JSON.stringify(seriesData));
        dat.name = x.name;
        dat.data = x.data;
        resTech.dataTwo.legend.data.push(dat.name);
        resTech.dataTwo.series.push(dat);
      });
      resTech["ranklist"] = res["ranklist"];
      cb(resTech);
    });
  },
  getResOrg(cb, uuid) {
    request({
      url: "api/category/resorg/" + uuid,
      method: "get"
    }).then(response => {
      let res = response.data.data;
      let barData = {
        name: "01",
        type: "bar",
        data: []
        // data: []
      };
      let seriesData = {
        name: "基金",
        type: "line",
        stack: "总量",
        data: []
      };
      resOrg.dataOne.xAxis[0].data = res.dataOne.xAxis;
      resOrg.dataOne.legend.data = [];
      resOrg.dataOne.series = [];
      res.dataOne.data.map(x => {
        let dat = JSON.parse(JSON.stringify(barData));
        dat.name = x.name;
        dat.data = x.data;
        resOrg.dataOne.legend.data.push(dat.name);
        resOrg.dataOne.series.push(dat);
      });
      resOrg.dataTwo.xAxis.data = res.dataTwo.xAxis;
      resOrg.dataTwo.legend.data = [];
      resOrg.dataTwo.series = [];
      res.dataTwo.data.map(x => {
        let dat = JSON.parse(JSON.stringify(seriesData));
        dat.name = x.name;
        dat.data = x.data;
        resOrg.dataTwo.legend.data.push(dat.name);
        resOrg.dataTwo.series.push(dat);
      });
      resOrg["ranklist"] = res["ranklist"];
      cb(resOrg);
    });
  },
  getResIndustry(cb, uuid) {
    request({
      url: "api/category/resindu/" + uuid,
      method: "get"
    }).then(response => {
      let res = response.data.data;
      let barData = {
        name: "01",
        type: "bar",
        data: []
        // data: []
      };
      let seriesData = {
        name: "基金",
        type: "line",
        stack: "总量",
        data: []
      };
      resIndustry.dataOne.xAxis[0].data = res.dataOne.xAxis;
      resIndustry.dataOne.legend.data = [];
      resIndustry.dataOne.series = [];
      res.dataOne.data.map(x => {
        let dat = JSON.parse(JSON.stringify(barData));
        dat.name = x.name;
        dat.data = x.data;
        resIndustry.dataOne.legend.data.push(dat.name);
        resIndustry.dataOne.series.push(dat);
      });
      resIndustry.dataTwo.xAxis.data = res.dataTwo.xAxis;
      resIndustry.dataTwo.legend.data = [];
      resIndustry.dataTwo.series = [];
      res.dataTwo.data.map(x => {
        let dat = JSON.parse(JSON.stringify(seriesData));
        dat.name = x.name;
        dat.data = x.data;
        resIndustry.dataTwo.legend.data.push(dat.name);
        resIndustry.dataTwo.series.push(dat);
      });
      resIndustry["ranklist"] = res["ranklist"];
      cb(resIndustry);
    });
  }
};
