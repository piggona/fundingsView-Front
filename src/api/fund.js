import request from "../util/request";

var titleData = {
  AwardTitle: "",
  AbstractNarration: "",
  Organization: {
    Directorate: {
      LongName: ""
    },
    Division: {
      LongName: ""
    },
    Code: ""
  },
  AwardAmount: "",
  Institution: [{ Name: "" }, { Name: "" }, { Name: "" }],
  Investigator: [{ FullName: "" }, { FullName: "" }],
  venue: "",
  description: {
    DETAILED_DESC: {
      plain: ""
    }
  }
};

var CopTree = {
  title: {
    text: "机构结构关系",
    left: "center"
  },
  series: [
    {
      type: "treemap",
      label: {
        show: true,
        formatter: "{b}"
      },
      upperLabel: {
        normal: {
          show: true,
          height: 30
        }
      },
      itemStyle: {
        normal: {
          borderColor: "#fff"
        }
      },
      levels: [
        {
          itemStyle: {
            normal: {
              borderColor: "#777",
              borderWidth: 0,
              gapWidth: 1
            }
          },
          upperLabel: {
            normal: {
              show: false
            }
          }
        },
        {
          itemStyle: {
            normal: {
              borderColor: "#555",
              borderWidth: 5,
              gapWidth: 1
            },
            emphasis: {
              borderColor: "#ddd"
            }
          }
        },
        {
          colorSaturation: [0.35, 0.5],
          itemStyle: {
            normal: {
              borderWidth: 5,
              gapWidth: 1,
              borderColorSaturation: 0.6
            }
          }
        },
        {
          itemStyle: {
            normal: {
              borderColor: "#566573",
              borderWidth: 0,
              gapWidth: 1
            }
          }
        }
      ],
      data: [
      ]
    }
  ]
};

var WordTree = {
  title: {
    text: "产业结构关系",
    left: "center"
  },
  series: [
    {
      type: "treemap",
      label: {
        show: true,
        formatter: "{b}"
      },
      upperLabel: {
        normal: {
          show: true,
          height: 30
        }
      },
      itemStyle: {
        normal: {
          borderColor: "#fff"
        }
      },
      levels: [
        {
          itemStyle: {
            normal: {
              borderColor: "#777",
              borderWidth: 0,
              gapWidth: 1
            }
          },
          upperLabel: {
            normal: {
              show: false
            }
          }
        },
        {
          itemStyle: {
            normal: {
              borderColor: "#555",
              borderWidth: 5,
              gapWidth: 1
            },
            emphasis: {
              borderColor: "#ddd"
            }
          }
        },
        {
          colorSaturation: [0.35, 0.5],
          itemStyle: {
            normal: {
              borderWidth: 5,
              gapWidth: 1,
              borderColorSaturation: 0.6
            }
          }
        },
        {
          itemStyle: {
            normal: {
              borderColor: "#566573",
              borderWidth: 0,
              gapWidth: 1
            }
          }
        }
      ],
      data: [
      ]
    }
  ]
}

function formatCurrency(num) {
  //   num = num.toString().replace(/\$|\,/g, "");
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

import $ from "jquery";
export default {
  getTitle(cb, uuid) {
    request({
      url: "api/fund/detail/" + uuid,
      method: "get"
    }).then(response => {
      let res = response.data;
      res = $.extend(true, titleData, res);
      if (res) {
        if (res["AwardAmount"]) {
          res["AwardAmount"] = formatCurrency(res["AwardAmount"]);
        }
      }
      cb(res);
    });
  },
  getCoptree(cb, uuid) {
    request({
      url: "api/fund/cop/" + uuid,
      method: "get"
    }).then(response => {
      let res = response.data;
      let cop = JSON.parse(JSON.stringify(CopTree))
      res.data.map(x => {
        cop.series[0].data.push(x)
      })

      cb(cop);
    });
  },
  getWordtree(cb, uuid) {
    request({
      url: "api/fund/word/" + uuid,
      method: "get"
    }).then(response => {
      let res = response.data;
      let word = JSON.parse(JSON.stringify(WordTree))
      res.data.map(x => {
        word.series[0].data.push(x)
      })

      cb(word);
    });
  }
};
