var timetable = {
  //工作日，字典
  "weekday": {
    //市区--》到达地点
    "shiqu": {
      //小和山，数组，每一项 都是字典
      "xiaoheshan":[
        {
          "when": "06:45",
          "start": "学院路东门",
          "end": "宾馆门口",
          "site": "学院路东门——古荡公交站——古荡——香樟——康乐——府新——周家村——留下——宾馆门口",
          "car_num":"大客1辆",
        },
        {
          "when": "06:45",
          "start": "翠苑新村",
          "end": "宾馆门口",
          "site": "翠苑新村——物美——中国工商银行杭州金融研修学院南门——南都——骆家庄——宾馆门口",
          "car_num":"大客1辆",
        },
        {
          "when": "06:45",
          "start": "祥符二校区",
          "end": "宾馆门口",
          "site": "祥符二校区——水映苑——三墩——车辆管理所公交站——三坝公交站——留下——宾馆门口",
          "car_num":"大客1辆",
        },
        {
          "when": "12:40",
          "start": "学院路东门",
          "end": "宾馆门口",
          "site": "学院路东门——古荡公交站——古荡——香樟——康乐——府新——周家村——留下——宾馆门口",
          "car_num":"中客1辆",
        }
      ],
      "anji":[
        {
          "when": "06:40",
          "start": "四喜凉亭公交车站（长征学院门口）",
          "end": "安吉校区",
          "site": "四喜凉亭公交车站（长征学院门口）——水木清华入口（路南面）学校正门对面公交站——屏峰公交站——留和路北口——安吉校区",
          "car_num":"大客1辆",
        },
        {
          "when": "06:40",
          "start": "翠苑新村",
          "end": "安吉校区",
          "site": "翠苑新村——物美——中国工商银行杭州金融研修学院南门——南都——骆家庄——留祥路古墩路口——安吉校区",
          "car_num":"大客1辆",
        },
      ]
    },
    //小和山--》到达地点
    "xiaoheshan":{
      //市区
      "shiqu":[
        {
          "when": "11:50",
          "start": "宾馆门口",
          "end": "学院路东门",
          "site": "宾馆门口——留下——周家村——府苑——康乐——香樟——古荡——古荡公交站——学院路东门",
          "car_num":"中客1辆",
        },
        {
          "when": "16:40",
          "start": "宾馆门口",
          "end": "学院路东门",
          "site": "宾馆门口——留下——周家村——府苑——康乐——香樟——古荡——古荡公交站——学院路东门",
          "car_num":"大客1辆",
        },
        {
          "when": "16:40",
          "start": "宾馆门口",
          "end": "翠苑新村",
          "site": "宾馆门口——骆家庄——南都——财经——物美——翠苑新村",
          "car_num":"大客1辆",
        },
        {
          "when": "16:40",
          "start": "宾馆门口",
          "end": "祥符二校区",
          "site": "宾馆门口——留下——杭三大桥公交站——车辆管理所公交站——三墩——水映苑——祥符二校区",
          "car_num":"大客1辆",
        },
        {
          "when": "17:25",
          "start": "宾馆门口",
          "end": "学院路东门（中客1辆）",
          "site": "宾馆门口——留下——周家村——府苑——康乐——香樟——古荡——古荡公交站——学院路东门",
          "car_num":"中客1辆",
        },
        {
          "when": "21:00",
          "start": "闻理园北",
          "end": "学院路东门（中客1辆）",
          "site": "闻理园北——宾馆门口——留下——周家村——府苑——康乐——香樟——古荡——古荡公交站——学院路东门",
          "car_num":"中客1辆",
        }
      ],
      //安吉
      "anji": [
        {
          "when": "06:40",
          "start": "原学院路校区",
          "end": "安吉校区",
          "site": "原学院路校区——古荡——香樟——康乐——府新——安吉校区门口",
          "car_num":"大客或中客1辆",
        },
        {
          "when": "08:30",
          "start": "西和食堂西门",
          "end": "安吉校区",
          "site": "西和食堂门口——小和山校区正门对面——屏峰公交站——留和路北口——安吉校区门口",
          "car_num":"中客1辆",
        },
        {
          "when": "10:00",
          "start": "小和山校区正门",
          "end": "安吉校区",
          "site": "小和山校区正门——屏峰公交站——留和路北口——安吉校区门口",
          "car_num":"大客1辆",
        },
        {
          "when": "16:00",
          "start": "小和山校区正门",
          "end": "安吉校区",
          "site": "小和山校区正门——屏峰公交站——留和路北口——安吉校区门口",
          "car_num":"大客1辆",
        }
      ]
    },
    //安吉--》到达地点
    "anji":{
      //小和山
      "xiaoheshan":[
        {
          "when": "13:00",
          "start": "安吉校区科创楼北",
          "end": "小和山校区正门",
          "site": "安吉校区科创楼北——小和山校区正门",
          "car_num":"中客1辆",
        },
        {
          "when": "15:30",
          "start": "安吉校区科创楼北",
          "end": "小和山校区正门",
          "site": "安吉校区科创楼北——留祥路古墩路口——古墩路文一路口——古墩路文二路口——古墩路文三路口——天目山路古墩路口——小和山校区正门",
          "car_num":"中客1辆",
        },
        {
          "when": "16:40",
          "start": "安吉校区科创楼北",
          "end": "小和山校区正门",
          "site": "安吉校区科创楼北——留祥路古墩路口——骆家庄——南都——中国工商银行杭州金融研修学院南门——物美——翠苑新村——原学院路校区——古荡——香樟——康乐——府新——小和山校区正门",
          "car_num":"大客1辆",
        }
      ],
      //市区
      "shiqu":[
        {
          "when": "16:40",
          "start": "安吉校区科创楼北",
          "end": "翰墨香林",
          "site": "安吉校区科创楼北——留和路北口——屏峰公交站——小和山校区正门——翰墨香林",
          "car_num":"大客1辆",
        },
        {
          "when": "17:20",
          "start": "安吉校区科创楼北",
          "end": "翰墨香林",
          "site": "安吉校区科创楼北——留和路北口——屏峰公交站——小和山校区正门——翰墨香林",
          "car_num":"大客或中客1辆",
        },
        {
          "when": "21:10",
          "start": "安吉校区科创楼北",
          "end": "翰墨香林",
          "site": "安吉校区科创楼北——留祥路古墩路口——古墩路文一路口——古墩路文二路口——古墩路文三路口——天目山路古墩路口——留和路北口——翰墨香林",
          "car_num":"大客1辆",
        }
      ]
    }
  },
  //星期六
  "weekend1":{
    //安吉--》到达地点
    "anji":{
      //市区
      "shiqu":[
        {
          "when": "16:40",
          "start": "安吉校区科创楼北",
          "end": "翰墨香林",
          "site": "安吉校区科创楼北——留祥路古墩路口——古墩路文一路口——古墩路文二路口——古墩路文三路口——府苑新村公交站——留和路北口——小和山校区正门——水木清华入口——翰墨香林",
          "car_num":"大客或中客1辆",
        }
      ],
      //小和山
      "xiaoheshan":[
        {}
      ]
    },
    //市区--》目的地
    "shiqu": {
      //小和山
      "xiaoheshan":[
        {
          "when": "06:45",
          "start": "学院路东门",
          "end": "宾馆门口",
          "site": "学院路东门——古荡公交站——古荡——香樟——康乐——府新——周家村——留下——宾馆门口",
          "car_num":"大客1辆",
        },
        {
          "when": "06:45",
          "start": "翠苑新村",
          "end": "宾馆门口",
          "site": "翠苑新村——物美——财经——南都——骆家庄——宾馆门口",
          "car_num":"大客1辆",
        }
      ],
      //安吉
      "anji":[
        {
          "when":"06:30",
          "start": "四喜凉亭公交站（长征学院门口）",
          "end": "安吉校区门口",
          "site": "四喜凉亭公交站（长征学院门口）——水木清华入口——小和山校区正门对面——屏峰公交站——留和路北口——府苑新村公交站——古墩路文三路口——古墩路文二路口——古墩路文一路口——留祥路古墩路口——安吉校区门口",
          "car_num":"大客或中客1辆",
        }
      ]
    },
    //小和山--》目的地
    "xiaoheshan":{
      //市区
      "shiqu":[
        {
          "when": "16:40",
          "start": "宾馆门口",
          "end": "学院路东门",
          "site": "宾馆门口——留下——周家村——府苑——康乐——香樟——古荡——古荡公交站——学院路东门",
          "car_num":"大客1辆",
        },
        {
          "when": "16:40",
          "start": "宾馆门口",
          "end": "翠苑新村",
          "site": "宾馆门口——骆家庄——南都——财经——物美——翠苑新村",
          "car_num":"大客1辆",
        },
        {
          "when": "20:20",
          "start": "宾馆门口",
          "end": "学院路东门",
          "site": "宾馆门口——留下——周家村——府苑——康乐——香樟——古荡——古荡公交站——学院路东门",
          "car_num":"中客1辆",
        }
      ],
      //安吉
      "anji":[
        {}
      ]
    }
  },
  //星期天
  "weekend2": {
    //安吉--》到达目的地
    "anji":{
      //市区
      "shiqu":[
        {
          "when": "16:40",
          "start": "安吉校区科创楼北",
          "end": "翰墨香林",
          "site": "安吉校区科创楼北——留祥路古墩路口——古墩路文一路口——古墩路文二路口——古墩路文三路口——府苑新村公交站——留和路北口——小和山校区正门——水木清华入口——翰墨香林",
          "car_num":"大客或中客1辆",
        }
      ],
      //小和山
      "xaioheshan":[
        {}
      ]
    },
    //市区--》目的地
    "shiqu":{
      //小和山
      "xiaoheshan":[
        {
          "when": "07:30",
          "start": "学院路东门",
          "end": "宾馆门口",
          "site": "学院路东门——古荡公交站——古荡——香樟——康乐——府新——周家村——留下——宾馆门口",
          "car_num":"中客1辆",
        }
      ],
      //安吉
      "anji":[
        {
          "when":"06:30",
          "start": "四喜凉亭公交站（长征学院门口）",
          "end": "安吉校区",
          "site": "四喜凉亭公交站（长征学院门口）——水木清华入口——小和山校区正门对面——屏峰公交站——留和路北口——府苑新村公交站——古墩路文三路口——古墩路文二路口——古墩路文一路口——留祥路古墩路口——安吉校区门口",
          "car_num":"大客或中客1辆",
        }
      ]
    },
    //小和山
    "xiaoheshan":{
      //市区
      "shiqu":[
        {
          "when": "16:40",
          "start": "宾馆门口",
          "end": "学院路东门",
          "site": "宾馆门口——留下——周家村——府苑——康乐——香樟——古荡——古荡公交站——学院路东门",
          "car_num":"中客1辆",
        }
      ],
      "anji":[
        {}
      ]
    }
  },
  //星期八
  "weekend3":{
    //安吉--》目的地
    "anji":{
      //市区
      "shiqu":[
        {
          "when": "16:40",
          "start": "安吉校区科创楼北",
          "end": "翰墨香林",
          "site": "安吉校区科创楼北——留祥路古墩路口——古墩路文一路口——古墩路文二路口——古墩路文三路口——府苑新村公交站——留和路北口——小和山校区正门——水木清华入口——翰墨香林",
          "car_num":"大客或中客1辆",
        }
      ],
      "xaioheshan":[
        {}
      ]
    },
    //小和山--》目的地
   /* "xiaoheshan": {
      "anji": [
        {
          "when": "06:50",
          "start": "西和食堂门口",
          "end": "安吉校区",
          "site": "西和食堂门口——小和山校区正门对面——屏峰公交站——留和路北口——府苑新村公交站——古墩路文三路口——古墩路文二路口——古墩路文一路口——留祥路古墩路口——安吉校区——（大巴或中巴1辆）"
        }
      ]
    },*/
    //市区--》目的地
    "shiqu":{
      //安吉
      "anji":[
        {
          "when":"06:50",
          "start": "四喜凉亭公交站（长征学院门口）",
          "end": "安吉校区",
          "site": "四喜凉亭公交站（长征学院门口）——水木清华入口——小和山校区正门对面——屏峰公交站——留和路北口——府苑新村公交站——古墩路文三路口——古墩路文二路口——古墩路文一路口——留祥路古墩路口——安吉校区门口",
          "car_num":"大客或中客1辆",
        }
      ],
      "xiaoheshan":[
        {}
      ]
    },
  }

}

//数据
module.exports = {
  data: timetable
};