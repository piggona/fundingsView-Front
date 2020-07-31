function search(method, param) {
  let res = null;
  switch (method) {
    case "POST":
      res = {
        tot_res: 120,
        data: [
          {
            key: "1",
            id: "1",
            uuid: "BUPT rev",
            title: "北邮奖学金",
            start: "2017-01-01",
            end: "2019-01-01"
          },
          {
            key: "2",
            id: "2",
            uuid: "PKU rev",
            title: "北大计算机学院奖学金",
            start: "2001-01-01",
            end: "2019-02-01"
          },
          {
            key: "3",
            id: "3",
            uuid: "THU rev",
            title: "清华工程系奖学金",
            start: "2001-01-01",
            end: "2019-01-02"
          }
        ]
      };
      break;
    case "GET":
      if (param.match("basic") !== null) {
        res = {
          statistic: { fundingsAmount: 112893, avgInvested: 11011 },
          fundRank: {
            data: [{ rank: "1", name: "xxx", _money: "20$" }],
            order_type: "金额"
          },
          resPie: {
            legend: [
              "Medication",
              "Computer Engineering",
              "Geograph",
              "Art",
              "Math"
            ],
            series: [
              { value: 335, name: "Computer Engineering" },
              { value: 310, name: "Medication" },
              { value: 234, name: "Geograph" },
              { value: 135, name: "Art" },
              { value: 1548, name: "Math" }
            ],
          },
          resCloud: {
            data: [
              {
                name: "汽车",
                value: 10000
              },
              {
                name: "光学",
                value: 6181
              },
              {
                name: "相机",
                value: 4386
              },
              {
                name: "调色",
                value: 4055
              },
              {
                name: "电子",
                value: 2467
              },
              {
                name: "中华人民共和国",
                value: 2244
              },
              {
                name: "三星电子",
                value: 1898
              },
              {
                name: "苹果",
                value: 1484
              },
              {
                name: "诺基亚",
                value: 1112
              },
              {
                name: "北京邮电大学",
                value: 965
              },
              {
                name: "Macbook Pro",
                value: 847
              },
              {
                name: "Elasctic Search",
                value: 582
              },
              {
                name: "食品安全",
                value: 555
              },
              {
                name: "少儿教育",
                value: 550
              },
              {
                name: "诺贝尔奖",
                value: 462
              },
              {
                name: "区块链技术",
                value: 366
              },
              {
                name: "数字货币",
                value: 360
              },
              {
                name: "汽车制造",
                value: 282
              },
              {
                name: "智能驾驶",
                value: 273
              },
              {
                name: "飞行",
                value: 273
              },
              {
                name: "计算机技术",
                value: 265
              }
            ],
          },
          treeNodes: {
            data: [
              {
                title:"医疗",
                key: "医疗medical",
                children: [
                  {title:"X射线技术",key: "X射线技术xrays"},
                  {title:"有机合成技术",key: "有机合成技术organs"}
                ]
              },
              {
                title:"机械",
                key: "机械mechanism",
                children: [
                  {title:"机床加工",key: "机床加工machines"},
                  {title:"激光篆刻",key: "激光篆刻rays"}
                ]
              },
            ]
          }
        };
      } else if (param.match("rank") !== null) {
        // // console.log(param);
        if (param.match("amount") !== null) {
          res = {
            data: [{ rank: "1", name: "xxx", _money: "20$" }],
            order_type: "金额"
          };
        } else {
          res = {
            data: [
              { rank: "1", name: "guanqun", _money: "20%" },
              { rank: "1", name: "yuanhao", _money: "20%" },
              { rank: "1", name: "liuchang", _money: "20%" }
            ],
            order_type: "增长率"
          };
        }
      } else if (param.match("tech") !== null) {
        // // console.log(param);
        if (param.match("niques") !== null) {
          res = {
            data: [
              {
                title:"医疗",
                key: "医疗medical",
                children: [
                  {title:"X射线技术",key: "X射线技术xrays"},
                  {title:"有机合成技术",key: "有机合成技术organs"}
                ]
              },
              {
                title:"机械",
                key: "机械mechanism",
                children: [
                  {title:"机床加工",key: "机床加工machines"},
                  {title:"激光篆刻",key: "激光篆刻rays"}
                ]
              },
            ]
          };
        } else {
          res = {
            data: [
              {
                title:"医疗" ,
                key: "医疗medical",
                children: [
                  {title:"医药",key: "医药medicine"},
                  {title:"医疗机械",key:"医疗机械medical machines"}
                ]
              },
              {
                title:"机械",
                key:"机械machinism",
                children: [
                  {title:"汽车制造",key: "汽车制造cars"},
                  {title:"航天",key: "航天space"}
                ]
              },
            ]
          };
        }
      }
      break;
  }
  return res;
}

module.exports = search;
