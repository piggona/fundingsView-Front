function industry(method, param) {
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
            data: {},
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
        } else if (param.match("rescate") !== null) {
          res = {
            data: {
                xAxis:['2015', '2016', '2017', '2018', '2019'],
                data: [
                  {
                    name: '主分类1',
                    data: ["5000","6300","2200","7800","10000"]
                  },
                  {
                      name: '主分类2',
                      data: ["0","0","5600","7800","9000"]
                  },
                  {
                      name: '主分类3',
                      data: ["0","3000","3000","3000","3000"]
                  },
                  {
                      name: '主分类4',
                      data: ["100","2000","3000","3000","2000"]
                  },
                  {
                      name: '主分类5',
                      data: ["10000","6000","5000","7000","1000"]
                  }
                ]
            },
            ranklist: [
              {
                rank: 1,
                uuid: "A234",
                title: "Collaborative Research: Ethylene-Forming Enzyme",
                date: 1548
              },
              {
                rank: 2,
                uuid: "A267",
                title: "LHCB Operations and Computing",
                date: 335
              },
              {
                rank: 3,
                uuid: "A267",
                title: "Phase Behavior and Physical Properties of Thermotropic and Lyotropic Liquid Crystal Oligomers",
                date: 230
              },
              {
                rank: 4,
                uuid: "A267",
                title: "RUI: Polycationic Cage for Jacketed Covalent Organic Frameworks",
                date: 40
              },
              {
                rank: 5,
                uuid: "A267",
                title: "Collaborative Research: Integrated experimental and computational investigations of exogenous surfactant distribution in conducting zone lung airways",
                date: 3000
              }
            ]
          };
        } else if (param.match("restech") !== null) {
            res = {
                data: {
                    xAxis:['2015', '2016', '2017', '2018', '2019'],
                    data: [
                      {
                        name: '主分类1',
                        data: ["5000","6300","2200","7800","10000"]
                      },
                      {
                          name: '主分类2',
                          data: ["0","0","5600","7800","9000"]
                      },
                      {
                          name: '主分类3',
                          data: ["0","3000","3000","3000","3000"]
                      },
                      {
                          name: '主分类4',
                          data: ["100","2000","3000","3000","2000"]
                      },
                      {
                          name: '主分类5',
                          data: ["10000","6000","5000","7000","1000"]
                      }
                    ]
                },
                ranklist: [
                  {
                    rank: 1,
                    uuid: "A234",
                    title: "Collaborative Research: Ethylene-Forming Enzyme",
                    date: 1548
                  },
                  {
                    rank: 2,
                    uuid: "A267",
                    title: "LHCB Operations and Computing",
                    date: 335
                  },
                  {
                    rank: 3,
                    uuid: "A267",
                    title: "Phase Behavior and Physical Properties of Thermotropic and Lyotropic Liquid Crystal Oligomers",
                    date: 230
                  },
                  {
                    rank: 4,
                    uuid: "A267",
                    title: "RUI: Polycationic Cage for Jacketed Covalent Organic Frameworks",
                    date: 40
                  },
                  {
                    rank: 5,
                    uuid: "A267",
                    title: "Collaborative Research: Integrated experimental and computational investigations of exogenous surfactant distribution in conducting zone lung airways",
                    date: 3000
                  }
                ]
            };
        } else if (param.match("resorg") !== null) {
            res = {
                data: {
                    xAxis:['2015', '2016', '2017', '2018', '2019'],
                    data: [
                      {
                        name: '主分类1',
                        data: ["5000","6300","2200","7800","10000"]
                      },
                      {
                          name: '主分类2',
                          data: ["0","0","5600","7800","9000"]
                      },
                      {
                          name: '主分类3',
                          data: ["0","3000","3000","3000","3000"]
                      },
                      {
                          name: '主分类4',
                          data: ["100","2000","3000","3000","2000"]
                      },
                      {
                          name: '主分类5',
                          data: ["10000","6000","5000","7000","1000"]
                      }
                    ]
                },
                ranklist: [
                  {
                    rank: 1,
                    uuid: "A234",
                    title: "Collaborative Research: Ethylene-Forming Enzyme",
                    date: 1548
                  },
                  {
                    rank: 2,
                    uuid: "A267",
                    title: "LHCB Operations and Computing",
                    date: 335
                  },
                  {
                    rank: 3,
                    uuid: "A267",
                    title: "Phase Behavior and Physical Properties of Thermotropic and Lyotropic Liquid Crystal Oligomers",
                    date: 230
                  },
                  {
                    rank: 4,
                    uuid: "A267",
                    title: "RUI: Polycationic Cage for Jacketed Covalent Organic Frameworks",
                    date: 40
                  },
                  {
                    rank: 5,
                    uuid: "A267",
                    title: "Collaborative Research: Integrated experimental and computational investigations of exogenous surfactant distribution in conducting zone lung airways",
                    date: 3000
                  }
                ]
            };
        }
        break;
    }
    return res;
  }
  
  module.exports = industry;