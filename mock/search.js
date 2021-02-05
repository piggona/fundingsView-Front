function search(method, param) {
  let res = null;
  switch (method) {
    case "POST":
      res = {
        data: {
          tot_res: 5,
          data: [
            {
              amount: "249688",
              id: "1",
              uuid: "1",
              title:
                "CNS: Small: Collaborative Research: Transient characteristics and interference modeling for millimeter-wave communications",
              start: "10/01/2019",
              end: "09/30/2022"
            },
            {
              amount: "310326",
              id: "2",
              uuid: "2",
              title: "The Formation of Giant Planets on Wide Orbits",
              start: "09/01/2019",
              end: "08/31/2022"
            },
            {
              amount: "500000",
              id: "3",
              uuid: "3",
              title:
                "CNS Core: Small: Online learning of cross-layer systems for robust and high-performance Internet video transmission",
              start: "09/01/2019",
              end: "08/31/2022"
            },
            {
              amount: "200000",
              id: "4",
              uuid: "4",
              title:
                "AF: Small: Computational Complexity Theory and Circuit Complexity",
              start: "10/01/2019",
              end: "09/30/2021"
            },
            {
              amount: "277474",
              id: "5",
              uuid: "5",
              title: "Focusing Cosmic Telescopes on the Distant Universe",
              start: "09/01/2019",
              end: "08/31/2022"
            }
          ]
        }
      };
      break;
    case "GET":
      console.log("param:", param);
      if (param.match("basic") !== null) {
        res = {
          data: {
            statistic: { fundingsAmount: 164470, avgInvested: 15003 },
            fundRank: {
              data: [{ rank: "1", name: "xxx", _money: "20$" }],
              order_type: "金额"
            },
            resPie: {
              legend: ["12345", "6789", "123", "143545", "54645"],
              series: [
                { value: 335, key: "Computer Engineering", name: "12345" },
                { value: 310, key: "Medication", name: "6789" },
                { value: 234, key: "Geograph", name: "123" },
                { value: 135, key: "Art", name: "143545" },
                { value: 1548, key: "Math", name: "54645" }
              ]
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
              ]
            },
            treeNodes: {
              data: [
                {
                  title: "医疗",
                  key: "医疗medical",
                  children: [
                    { title: "X射线技术", key: "X射线技术xrays" },
                    { title: "有机合成技术", key: "有机合成技术organs" }
                  ]
                },
                {
                  title: "机械",
                  key: "机械mechanism",
                  children: [
                    { title: "机床加工", key: "机床加工machines" },
                    { title: "激光篆刻", key: "激光篆刻rays" }
                  ]
                }
              ]
            }
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
                title: "医疗",
                key: "医疗medical",
                children: [
                  { title: "X射线技术", key: "X射线技术xrays" },
                  { title: "有机合成技术", key: "有机合成技术organs" }
                ]
              },
              {
                title: "机械",
                key: "机械mechanism",
                children: [
                  { title: "机床加工", key: "机床加工machines" },
                  { title: "激光篆刻", key: "激光篆刻rays" }
                ]
              }
            ]
          };
        } else {
          res = {
            data: [
              {
                title: "医疗",
                key: "医疗medical",
                children: [
                  { title: "医药", key: "医药medicine" },
                  { title: "医疗机械", key: "医疗机械medical machines" }
                ]
              },
              {
                title: "机械",
                key: "机械machinism",
                children: [
                  { title: "汽车制造", key: "汽车制造cars" },
                  { title: "航天", key: "航天space" }
                ]
              }
            ]
          };
        }
      }
      break;
  }
  return res;
}

module.exports = search;
