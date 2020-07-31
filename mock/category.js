function category(method, param) {
    let res = null;
    switch (method) {
      case "GET":
        if (param.match("/detail/") !== null) {
          res = {
            Title: "Medical Engineering",
            AbstractNarration: "Biomedical engineering (BME) or medical engineering is the application of engineering principles and design concepts to medicine and biology for healthcare purposes (e.g. diagnostic or therapeutic).",
          };
        } else if (param.match("resfish") !== null) {
          res = {
            data:{},
            ranklist: [
              {
                rank: 1,
                uuid: "A234",
                title: "基金1",
                date: 10000
              },
              {
                rank: 2,
                uuid: "A267",
                title: "基金2",
                date: 6300
              },
              {
                rank: 3,
                uuid: "A267",
                title: "基金3",
                date: 5300
              },
              {
                rank: 4,
                uuid: "A267",
                title: "基金4",
                date: 4000
              },
              {
                rank: 5,
                uuid: "A267",
                title: "基金5",
                date: 3000
              }
            ]
          };
        } else if (param.match("restech") !== null) {
          res = {
            dataOne: {
              xAxis:["2015","2016","2017","2018","2019"],
              data: [
                {
                  name: "技术1",
                  data: ["5000","6300","2200","7800","10000"]
                },
                {
                  name: "技术2",
                  data: ["0","0","5600","7800","9000"]
                },
                {
                  name: "技术3",
                  data: ["0","3000","3000","3000","3000"]
                },
                {
                  name: "技术4",
                  data: ["100","2000","3000","3000","2000"]
                },
                {
                  name: "技术5",
                  data: ["10000","6000","5000","7000","1000"]
                },
              ]
            },
            dataTwo: {
              xAxis:['2015', '2016', '2017', '2018', '2019'],
              data: [
                {
                  name: '技术1',
                  data: ["5000","6300","2200","7800","10000"]
                },
                {
                    name: '技术2',
                    data: ["0","0","5600","7800","9000"]
                },
                {
                    name: '技术3',
                    data: ["0","3000","3000","3000","3000"]
                },
                {
                    name: '技术4',
                    data: ["100","2000","3000","3000","2000"]
                },
                {
                    name: '技术5',
                    data: ["10000","6000","5000","7000","1000"]
                }
              ]
            },
            ranklist: [
              {
                rank: 1,
                uuid: "A234",
                title: "技术1",
                date: 10000
              },
              {
                rank: 2,
                uuid: "A267",
                title: "技术2",
                date: 6300
              },
              {
                rank: 3,
                uuid: "A267",
                title: "技术3",
                date: 5300
              },
              {
                rank: 4,
                uuid: "A267",
                title: "技术4",
                date: 4000
              },
              {
                rank: 5,
                uuid: "A267",
                title: "技术5",
                date: 3000
              }
            ]
          };
        } else if (param.match("resorg") !== null) {
          res = {
            dataOne: {
              xAxis:["2015","2016","2017","2018","2019"],
              data: [
                {
                  name: "机构1",
                  data: ["5000","6300","2200","7800","10000"]
                },
                {
                  name: "机构2",
                  data: ["0","0","5600","7800","9000"]
                },
                {
                  name: "机构3",
                  data: ["0","3000","3000","3000","3000"]
                },
                {
                  name: "机构4",
                  data: ["100","2000","3000","3000","2000"]
                },
                {
                  name: "机构5",
                  data: ["10000","6000","5000","7000","1000"]
                },
              ]
            },
            dataTwo: {
              xAxis:['2015', '2016', '2017', '2018', '2019'],
              data: [
                {
                  name: '机构1',
                  data: ["5000","6300","2200","7800","10000"]
                },
                {
                    name: '机构2',
                    data: ["0","0","5600","7800","9000"]
                },
                {
                    name: '机构3',
                    data: ["0","3000","3000","3000","3000"]
                },
                {
                    name: '机构4',
                    data: ["100","2000","3000","3000","2000"]
                },
                {
                    name: '机构5',
                    data: ["10000","6000","5000","7000","1000"]
                }
              ]
            },
            ranklist: [
              {
                rank: 1,
                uuid: "A234",
                title: "机构1",
                date: 10000
              },
              {
                rank: 2,
                uuid: "A267",
                title: "机构2",
                date: 6300
              },
              {
                rank: 3,
                uuid: "A267",
                title: "机构3",
                date: 5300
              },
              {
                rank: 4,
                uuid: "A267",
                title: "机构4",
                date: 4000
              },
              {
                rank: 5,
                uuid: "A267",
                title: "机构5",
                date: 3000
              }
            ]
          };
        } else if (param.match("resindustry") !== null) {
          res = {
            dataOne: {
              xAxis:["2015","2016","2017","2018","2019"],
              data: [
                {
                  name: "产业1",
                  data: ["5000","6300","2200","7800","10000"]
                },
                {
                  name: "产业2",
                  data: ["0","0","5600","7800","9000"]
                },
                {
                  name: "产业3",
                  data: ["0","3000","3000","3000","3000"]
                },
                {
                  name: "产业4",
                  data: ["100","2000","3000","3000","2000"]
                },
                {
                  name: "产业5",
                  data: ["10000","6000","5000","7000","1000"]
                },
              ]
            },
            dataTwo: {
              xAxis:['2015', '2016', '2017', '2018', '2019'],
              data: [
                {
                  name: '产业1',
                  data: ["5000","6300","2200","7800","10000"]
                },
                {
                    name: '产业2',
                    data: ["0","0","5600","7800","9000"]
                },
                {
                    name: '产业3',
                    data: ["0","3000","3000","3000","3000"]
                },
                {
                    name: '产业4',
                    data: ["100","2000","3000","3000","2000"]
                },
                {
                    name: '产业5',
                    data: ["10000","6000","5000","7000","1000"]
                }
              ]
            },
            ranklist: [
              {
                rank: 1,
                uuid: "A234",
                title: "产业1",
                date: 10000
              },
              {
                rank: 2,
                uuid: "A267",
                title: "产业2",
                date: 6300
              },
              {
                rank: 3,
                uuid: "A267",
                title: "产业3",
                date: 5300
              },
              {
                rank: 4,
                uuid: "A267",
                title: "产业4",
                date: 4000
              },
              {
                rank: 5,
                uuid: "A267",
                title: "产业5",
                date: 3000
              }
            ]
          };
        }
        break;
    }
    return res;
  }
  
  module.exports = category;