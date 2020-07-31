function fund(method, param) {
  let res = null;
  switch (method) {
    case "GET":
      if (param.match("/detail/") !== null) {
        res = {
          AwardTitle: "Unveiling the Enigmatic Biosynthetic Machinery of the Azinomycins",
          AbstractNarration: "Simple Abstract,摘要",
          Organization: {
            Directorate: {
              LongName: "Direct For Mathematical; Physical Scien",
              Abbreviation: "MPS"
            },
            Division: {
              LongName: "Division Of Chemistry",
              Abbreviation: "CHE"
            },
            Code: "03090000"
          },
          AwardAmount: "387915",
          Institution: [{ Name: "University of Pittsburgh1" }, { Name: "University of Pittsburgh2" }, { Name: "University of Pittsburgh3" }],
          Investigator: [{ FullName: "Nathaniel" }, { FullName: "Rosi" }],
          ProgramElement: "Chemistry of Life Processes",
          description: "Detail Text，正式内容"
        };
      } else if (param.match("cop") !== null) {
        res = {
          data: [
            {
              name: "机构", // First tree
              value: 20,
              children: [
                {
                  name: "主分类", // First leaf of first tree
                  value: 10,
                  children: [
                    {
                      name: "1", // First leaf of first tree
                      value: 5,
                      children: [
                        {
                          name: "关键词", // First leaf of first tree
                          value: 5
                        },
                        {
                          name: "机构", // First leaf of first tree
                          value: 5
                        }
                      ]
                    },
                    {
                      name: "2", // First leaf of first tree
                      value: 5
                    }
                  ]
                },
                {
                  name: "关键词", // First leaf of first tree
                  value: 10,
                  color: "#566573"
                }
              ]
            },
            {
              name: "机构", // First tree
              value: 20,
              children: [
                {
                  name: "主分类", // First leaf of first tree
                  value: 10,
                  children: [
                    {
                      name: "1", // First leaf of first tree
                      value: 5,
                      children: [
                        {
                          name: "关键词", // First leaf of first tree
                          value: 5
                        },
                        {
                          name: "机构", // First leaf of first tree
                          value: 5
                        }
                      ]
                    },
                    {
                      name: "2", // First leaf of first tree
                      value: 5
                    }
                  ]
                },
                {
                  name: "关键词", // First leaf of first tree
                  value: 10,
                  color: "#566573"
                }
              ]
            }
          ]
        };
      } else if (param.match("word") !== null) {
        res = {
          data: [
            {
              name: "产业：临床医疗", // First tree
              value: 100,
              type: "industry",
              uuid: "hospital medical",
              children: [
                {
                  name: "主分类", // First leaf of first tree
                  value: 80,
                  children: [
                    {
                      name: "主分类：医学", // First leaf of first tree
                      value: 60,
                      type: "category",
                      uuid: "medicine",
                      children: [
                        {
                          name: "产业", // First leaf of first tree
                          children: [
                            {
                              name:"产业：医疗器械",
                              value:20,
                              type:"industry",
                              uuid: "medical instruments"
                            },
                            {
                              name:"产业：生物制药",
                              value:20,
                              type:"industry",
                              uuid: "biological medicine"
                            },
                            {
                              name:"产业：生物工程",
                              value:20,
                              type:"industry",
                              uuid: "medicine engineering"
                            }
                          ]
                        },
                        {
                          name: "技术",
                          value:40
                        },
                        {
                          name: "机构", // First leaf of first tree
                          value: 40
                        }
                      ]
                    },
                    {
                      name: "主分类：化学", // First leaf of first tree
                      value: 60,
                      children: [
                        {
                          name: "产业", // First leaf of first tree
                          value: 40
                        },
                        {
                          name: "技术",
                          value:40
                        },
                        {
                          name: "机构", // First leaf of first tree
                          value: 40
                        }
                      ]
                    }
                  ]
                },
                {
                  name: "技术", // First leaf of first tree
                  value: 80,
                  color: "#566573"
                },
                {
                  name: "机构", // First leaf of first tree
                  value: 80,
                  color: "#566573"
                }
              ]
            },
            {
              name: "产业：教育", // First tree
              value: 100,
              type: "industry",
              uuid: "education",
              children: [
                {
                  name: "主分类", // First leaf of first tree
                  value: 80,
                  children: [
                    {
                      name: "主分类：医学", // First leaf of first tree
                      value: 60,
                      type: "category",
                      uuid: "medicine",
                      children: [
                        {
                          name: "产业", // First leaf of first tree
                          children: [
                            {
                              name:"产业：医疗器械",
                              value:20,
                              type:"industry",
                              uuid: "medical instruments"
                            },
                            {
                              name:"产业：生物制药",
                              value:20,
                              type:"industry",
                              uuid: "biological medicine"
                            },
                            {
                              name:"产业：生物工程",
                              value:20,
                              type:"industry",
                              uuid: "medicine engineering"
                            }
                          ]
                        },
                        {
                          name: "技术",
                          value:40
                        },
                        {
                          name: "机构", // First leaf of first tree
                          value: 40
                        }
                      ]
                    },
                    {
                      name: "主分类：化学", // First leaf of first tree
                      value: 60,
                      children: [
                        {
                          name: "产业", // First leaf of first tree
                          value: 40
                        },
                        {
                          name: "技术",
                          value:40
                        },
                        {
                          name: "机构", // First leaf of first tree
                          value: 40
                        }
                      ]
                    }
                  ]
                },
                {
                  name: "技术", // First leaf of first tree
                  value: 80,
                  color: "#566573"
                },
                {
                  name: "机构", // First leaf of first tree
                  value: 80,
                  color: "#566573"
                }
              ]
            },
            {
              name: "产业：机械", // First tree
              value: 100,
              type: "industry",
              uuid: "machanical",
              children: [
                {
                  name: "主分类", // First leaf of first tree
                  value: 80,
                  children: [
                    {
                      name: "主分类：医学", // First leaf of first tree
                      value: 60,
                      type: "category",
                      uuid: "medicine",
                      children: [
                        {
                          name: "产业", // First leaf of first tree
                          children: [
                            {
                              name:"产业：医疗器械",
                              value:20,
                              type:"industry",
                              uuid: "medical instruments"
                            },
                            {
                              name:"产业：生物制药",
                              value:20,
                              type:"industry",
                              uuid: "biological medicine"
                            },
                            {
                              name:"产业：生物工程",
                              value:20,
                              type:"industry",
                              uuid: "medicine engineering"
                            }
                          ]
                        },
                        {
                          name: "技术",
                          value:40
                        },
                        {
                          name: "机构", // First leaf of first tree
                          value: 40
                        }
                      ]
                    },
                    {
                      name: "主分类：化学", // First leaf of first tree
                      value: 60,
                      children: [
                        {
                          name: "产业", // First leaf of first tree
                          value: 40
                        },
                        {
                          name: "技术",
                          value:40
                        },
                        {
                          name: "机构", // First leaf of first tree
                          value: 40
                        }
                      ]
                    }
                  ]
                },
                {
                  name: "技术", // First leaf of first tree
                  value: 80,
                  color: "#566573"
                },
                {
                  name: "机构", // First leaf of first tree
                  value: 80,
                  color: "#566573"
                }
              ]
            }
          ]
        };
      } else if (param.match("similar") !== null) {
        res = {
          data: [
            {
              title: "Filtering Straegies for Radiation Transport Equations",
              uuid: "Filtering Straegies for Radiation Transport Equations",
              keywords: ["Transport", "math"]
            },
            {
              title: "Microscopic Properties of Hot and Dense QCD Matter",
              uuid: "Microscopic Properties of Hot and Dense QCD Matter",
              keywords: ["meteorological", "math"]
            },
            {
              title: "Numerical Methods for Multiphase Flows in Porous Media",
              uuid: "Numerical Methods for Multiphase Flows in Porous Media",
              keywords: ["media", "math"]
            }
          ]
        };
      }
      break;
  }
  return res;
}

module.exports = fund;
