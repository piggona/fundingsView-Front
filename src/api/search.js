// import random from "lodash/random";
import request from "../util/request";

// var searchResult = {
//   patent: {
//     count: 60,
//     data: [
//       {
//         documentId: "1",
//         patent_uuid: "machine",
//         title: "机械研究",
//         applicationDate: "2019-08-01"
//       },
//       {
//         documentId: "2",
//         patent_uuid: "bio",
//         title: "生物研究",
//         applicationDate: "2019-08-02"
//       },
//       {
//         documentId: "3",
//         patent_uuid: "computer",
//         title: "计算机研究",
//         applicationDate: "2019-08-03"
//       },
//       {
//         documentId: "1",
//         patent_uuid: "machine",
//         title: "机械研究",
//         applicationDate: "2019-08-01"
//       },
//       {
//         documentId: "2",
//         patent_uuid: "bio",
//         title: "生物研究",
//         applicationDate: "2019-08-02"
//       },
//       {
//         documentId: "3",
//         patent_uuid: "computer",
//         title: "计算机研究",
//         applicationDate: "2019-08-03"
//       },
//       {
//         documentId: "1",
//         patent_uuid: "machine",
//         title: "机械研究",
//         applicationDate: "2019-08-01"
//       },
//       {
//         documentId: "2",
//         patent_uuid: "bio",
//         title: "生物研究",
//         applicationDate: "2019-08-02"
//       },
//       {
//         documentId: "3",
//         patent_uuid: "computer",
//         title: "计算机研究",
//         applicationDate: "2019-08-03"
//       },
//       {
//         documentId: "1",
//         patent_uuid: "machine",
//         title: "机械研究",
//         applicationDate: "2019-08-01"
//       },
//       {
//         documentId: "2",
//         patent_uuid: "bio",
//         title: "生物研究",
//         applicationDate: "2019-08-02"
//       },
//       {
//         documentId: "3",
//         patent_uuid: "computer",
//         title: "计算机研究",
//         applicationDate: "2019-08-03"
//       },
//       {
//         documentId: "1",
//         patent_uuid: "machine",
//         title: "机械研究",
//         applicationDate: "2019-08-01"
//       },
//       {
//         documentId: "2",
//         patent_uuid: "bio",
//         title: "生物研究",
//         applicationDate: "2019-08-02"
//       },
//       {
//         documentId: "3",
//         patent_uuid: "computer",
//         title: "计算机研究",
//         applicationDate: "2019-08-03"
//       }
//     ]
//   },
//   fund: {
//     count: 60,
//     data: [
//       {
//         key: "1",
//         id: "1",
//         uuid: "BUPT rev",
//         title: "北邮奖学金",
//         start: "2017-01-01",
//         end: "2019-01-01"
//       },
//       {
//         key: "2",
//         id: "2",
//         uuid: "PKU rev",
//         title: "北大奖学金",
//         start: "2001-01-01",
//         end: "2019-02-01"
//       },
//       {
//         key: "3",
//         id: "3",
//         uuid: "THU rev",
//         title: "清华奖学金",
//         start: "2001-01-01",
//         end: "2019-01-02"
//       }
//     ]
//   },
//   assignee: {
//     count: 60,
//     data: [
//       {
//         uuid: "google",
//         fullName: "Google .Inc",
//         patent_cnt: "2000",
//         location: "USA",
//         years_active: "15"
//       },
//       {
//         uuid: "facebook",
//         fullName: "FaceBook .Inc",
//         patent_cnt: "1000",
//         location: "USA",
//         years_active: "5"
//       },
//       {
//         uuid: "Alibaba",
//         fullName: "Alibaba .Inc",
//         patent_cnt: "3000",
//         location: "China",
//         years_active: "10"
//       }
//     ]
//   },
//   person: {
//     count: 60,
//     data: [
//       {
//         uuid: "haohao",
//         fullName: "Yuanhao Jin",
//         patents_cnt: "20",
//         location: "China",
//         years_active: "23"
//       },
//       {
//         uuid: "guanqun",
//         fullName: "Guanqun Zhang",
//         patents_cnt: "30",
//         location: "China",
//         years_active: "22"
//       },
//       {
//         uuid: "liuchang",
//         fullName: "Chang Liu",
//         patents_cnt: "10",
//         location: "China",
//         years_active: "22"
//       }
//     ]
//   },
//   paper: {
//     count: 60,
//     data: [
//       {
//         uuid: "respect",
//         id: "122345",
//         title: "论猪可以活多少年",
//         year: "2007",
//         publisher: "AAAI"
//       },
//       {
//         uuid: "bullrespect",
//         id: "122365",
//         title: "论牛可以活多少年",
//         year: "2008",
//         publisher: "AIAI"
//       },
//       {
//         uuid: "monkeyrespect",
//         id: "122678",
//         title: "论猴子可以活多少年",
//         year: "2003",
//         publisher: "AIII"
//       }
//     ]
//   }
// };

var resPie = {
  title: {
    text: "主分类资金分布",
    subtext: "单位（USD）",
    x: "center"
  },
  tooltip: {
    trigger: "item",
    formatter: "{a} <br/>{b} : {c} ({d}%)"
  },
  legend: {
    orient: "vertical",
    left: "left",
    data: []
  },
  series: [
    {
      name: "主分类",
      type: "pie",
      radius: "55%",
      center: ["50%", "60%"],
      data: [],
      itemStyle: {
        emphasis: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: "rgba(0, 0, 0, 0.5)"
        }
      }
    }
  ]
};

var resCloud = {
  title: {
    text: "热点产业词",
    //   subtext: "单位（USD）",
    x: "center"
  },
  tooltip: {},
  series: [
    {
      type: "wordCloud", //类型为字符云
      shape: "smooth", //平滑
      gridSize: 20, //网格尺寸
      textStyle: {
        normal: {
          fontFamily: "微软雅黑",
          color: [],
          emphasis: {
            shadowBlur: 5, //阴影距离
            shadowColor: "#333" //阴影颜色
          }
        }
      },
      size: ["80%", "80%"],
      // sizeRange : [ 50, 100 ],
      rotationRange: [0, 0], //旋转范围
      data: []
    }
  ]
};

function formatCurrency(num) {
  // num = num.toString().replace(/\$|\,/g,'');
  if (isNaN(num)) num = "0";
  let sign = num == (num = Math.abs(num));
  num = Math.floor(num * 100 + 0.50000000001);
  let cents = num % 100;
  num = Math.floor(num / 100).toString();
  if (cents < 10) cents = "0" + cents;
  for (var i = 0; i < Math.floor((num.length - (1 + i)) / 3); i++)
    num =
      num.substring(0, num.length - (4 * i + 3)) +
      "," +
      num.substring(num.length - (4 * i + 3));
  return "$" + ((sign ? "" : "-") + num + "." + cents);
}

function recurTree(tree) {
  tree.map(x => {
    x.scopedSlots = { title: "title" };
    if (JSON.stringify(x.children) !== undefined && x.children !== null) {
      recurTree(x.children);
    }
    if (x.children === null) {
      delete x.children;
    }
  });
}

export default {
  getSearchResult(cb, searchPhrase, fin) {
    request({
      url: "api/search",
      method: "post",
      data: JSON.stringify(searchPhrase),
      headers: { "Content-Type": "application/json" }
    })
      .then(response => {
        let res = response.data.data;
        res.data.map(x => {
          let temp = x["amount"];
          x["amount"] = formatCurrency(temp);
        });
        cb(res);
      })
      .finally(() => {
        fin();
      });
  },
  getBasic(cb) {
    request({
      url: "api/search/basic",
      method: "get"
    }).then(response => {
      let res = response.data.data;
      let pie = JSON.parse(JSON.stringify(resPie));
      let cloud = JSON.parse(JSON.stringify(resCloud));

      pie.legend.data = res.resPie.legend;
      let series = res.resPie.series;
      series.map(x => {
        let name = x.key;
        x.tooltip = {
          trigger: "item",
          formatter: `{a} <br/>{b} : ${name}<br/>Value: {c} ({d}%)`
        };
      });
      pie.series[0].data = series;

      cloud.series[0].data = res.resCloud.data;

      cloud.series[0].textStyle.normal.color = function() {
        var colors = [
          "#16A085",
          "#1F618D",
          "#B7950B",
          "#BA4A00",
          "#283747",
          "#A04000",
          "#B3B6B7",
          "#A04000",
          "#76448A"
        ];
        return colors[parseInt(Math.random() * 10)];
      };
      let tree = JSON.parse(JSON.stringify(res.treeNodes.data));
      recurTree(tree);
      res.fundRank.data.map(x => {
        x._money = "$" + x._money;
      });
      let result = {
        statistic: res.statistic,
        fundRank: res.fundRank,
        resPie: pie,
        resCloud: cloud,
        treeNodes: tree
      };
      cb(result);
    });
  },
  setRank(cb, activeAmount) {
    request({
      url: "api/search/rank/" + activeAmount,
      method: "get"
    }).then(response => {
      let res = response.data.data;
      // console.log("rank data:", res);
      if (activeAmount === "amount") {
        res.data.map(x => {
          x._money = "$" + x._money;
        });
      } else {
        res.data.map(x => {
          x._money = x._money + "%";
        });
      }
      //   // console.log("setRank(cb, activeAmount):", res);
      cb(res);
    });
  },
  setTech(cb, activeTech) {
    request({
      url: "api/search/tech/" + activeTech,
      method: "get"
    }).then(response => {
      let tree = response.data.data.data;
      recurTree(tree);
      cb(tree);
    });
  }
};
