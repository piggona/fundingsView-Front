function fund(method, param) {
  let res = null;
  switch (method) {
    case "GET":
      if (param.match("/detail/") !== null) {
        res = {
          award_title: "Focusing Cosmic Telescopes on the Distant Universe",
          organization: [
            {
              directorate: {
                longname: "Direct For Mathematical; Physical Scien",
                abbreviation: "MPS"
              },
              division: {
                longname: "Division Of Astronomical Sciences",
                abbreviation: "AST"
              },
              code: "03020000"
            }
          ],
          award_amount: "277474.00",
          institution: [{ name: "Rutgers University New Brunswick" }],
          investigator: [
            { fullname: "Nathaniel", firstname: "Charles", lastname: "Keeton" }
          ],
          program_element: "Chemistry of Life Processes",
          description:
            'Galaxy clusters act as "cosmic telescopes" that magnify distant galaxies, making them appear bigger and brighter and therefore easier to detect. If we want to better understand the intrinsic properties of the distant galaxies, it is important to make a "lens model" of the mass distribution of the cluster to make a model of the magnifications of the distant galaxies. All current models seem to missing something since they disagree with each other. This project will look at the assumptions and missing effects from the current models to try to build a better understanding of the uncertainties in lens models.&lt;br/&gt;&lt;br/&gt;The proposed project will improve the state of gravitational lens modeling by developing a framework for reconciling discrepancies between different models for reconstructing lensing maps. The project will incorporate four new effects: scatter in cluster member galaxy properties, lensing by line-of-sight galaxies outside the cluster, structure along the line of sight, and non-galaxy structure within the cluster. They will use this framework to see whether the new effects can reconcile current lens models, and present the framework as an open-source code module so that it can be used in future cluster lens modeling.&lt;br/&gt;&lt;br/&gt;This award reflects NSF\'s statutory mission and has been deemed worthy of support through evaluation using the Foundation\'s intellectual merit and broader impacts review criteria.'
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
              name: "产业：Aerospace", // First tree
              value: 100,
              type: "industry",
              uuid: "hospital medical",
              children: [
                {
                  name: "主分类", // First leaf of first tree
                  value: 100,
                  children: [
                    {
                      name: "主分类：Physical Science", // First leaf of first tree
                      value: 60,
                      type: "category",
                      uuid: "medicine",
                      children: [
                        {
                          name: "产业", // First leaf of first tree
                          value: 40,
                          color: "#566573",
                          children: [
                            {
                              name: "产业：医疗器械",
                              value: 100,
                              type: "industry",
                              uuid: "medical instruments"
                            },
                            {
                              name: "产业：生物制药",
                              value: 100,
                              type: "industry",
                              uuid: "biological medicine"
                            },
                            {
                              name: "产业：生物工程",
                              value: 40,
                              type: "industry",
                              uuid: "medicine engineering"
                            }
                          ]
                        },
                        {
                          name: "技术",
                          value: 40,
                          color: "#566573",
                          children: [
                            {
                              name: "产业：医疗器械",
                              value: 50,
                              type: "industry",
                              color: "#566573",
                              uuid: "medical instruments"
                            },
                            {
                              name: "产业：生物制药",
                              value: 50,
                              type: "industry",
                              color: "#566573",
                              uuid: "biological medicine"
                            },
                            {
                              name: "产业：生物工程",
                              value: 50,
                              type: "industry",
                              color: "#566573",
                              uuid: "medicine engineering"
                            }
                          ]
                        },
                        {
                          name: "机构", // First leaf of first tree
                          value: 40,
                          color: "#566573",
                          children: [
                            {
                              name: "产业：医疗器械",
                              value: 40,
                              type: "industry",
                              uuid: "medical instruments"
                            },
                            {
                              name: "产业：生物制药",
                              value: 40,
                              type: "industry",
                              uuid: "biological medicine"
                            },
                            {
                              name: "产业：生物工程",
                              value: 40,
                              type: "industry",
                              uuid: "medicine engineering"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      name: "主分类：Material Science", // First leaf of first tree
                      value: 20,
                      children: [
                        {
                          name: "产业", // First leaf of first tree
                          value: 40
                        },
                        {
                          name: "技术",
                          value: 40
                        },
                        {
                          name: "机构", // First leaf of first tree
                          value: 40
                        }
                      ]
                    },
                    {
                      name: "主分类：Math", // First leaf of first tree
                      value: 20,
                      children: [
                        {
                          name: "产业", // First leaf of first tree
                          value: 40
                        },
                        {
                          name: "技术",
                          value: 40
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
                  value: 100,
                  color: "#566573",
                  children: [
                    {
                      name: "技术: Electronic imaging",
                      value: 50
                    },
                    {
                      name: "技术: alloy",
                      value: 30
                    },
                    {
                      name: "技术: fuel",
                      value: 20
                    }
                  ]
                },
                {
                  name: "机构", // First leaf of first tree
                  value: 100,
                  color: "#566573",
                  children: [
                    {
                      name: "机构: Rutgers University New Brunswick",
                      value: 40
                    },
                    {
                      name: "机构: University of Texas at Austin",
                      value: 30
                    },
                    {
                      name: "机构: New York University",
                      value: 30
                    }
                  ]
                }
              ]
            },
            {
              name: "产业：Education", // First tree
              value: 20,
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
                              name: "产业：医疗器械",
                              value: 20,
                              type: "industry",
                              uuid: "medical instruments"
                            },
                            {
                              name: "产业：生物制药",
                              value: 20,
                              type: "industry",
                              uuid: "biological medicine"
                            },
                            {
                              name: "产业：生物工程",
                              value: 20,
                              type: "industry",
                              uuid: "medicine engineering"
                            }
                          ]
                        },
                        {
                          name: "技术",
                          value: 40
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
                          value: 40
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
                  type: "organization",
                  value: 80,
                  color: "#566573"
                }
              ]
            },
            {
              name: "产业：Physics", // First tree
              value: 50,
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
                              name: "产业：医疗器械",
                              value: 20,
                              type: "industry",
                              uuid: "medical instruments"
                            },
                            {
                              name: "产业：生物制药",
                              value: 20,
                              type: "industry",
                              uuid: "biological medicine"
                            },
                            {
                              name: "产业：生物工程",
                              value: 20,
                              type: "industry",
                              uuid: "medicine engineering"
                            }
                          ]
                        },
                        {
                          name: "技术",
                          value: 40
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
                          value: 40
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
