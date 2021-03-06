That's my first programme, I want to do it better
Hello github!
Add my first change!

学习笔记
sitemap.json是是否被微信搜索
project.config.json是项目配置文件，增加了云开发
app.json中增加了底部的两个选择栏，增加了插件，小程序接口权限相关设置，全局自定义组件配置
		希望增加 多个选项栏。优化window
	插件有：腾讯位置服务地图选点，腾讯位置服务路线规划，腾讯位置服务地铁图
		希望增加 位置定位
	权限：地图选点
app.wxss调用了微信UI
		希望增加 一些优化
app.js中增加了云开发，获取位置信息，菜单选项，位置的全局变量
		希望修改 位置信息
style
	weui.wxss是git上微信自己的UI，可以参考调用
static
	image：包含所有的图片文件
		index：主页的图标
			map:地图页图标
		more:第二页图标
		tabbar:下面标题的图标
		修改：进行分类，图片优化
	local.js：包含所有地理位置,字典（包含经纬度）
	pyname.js：包含所有的页面选择文字，都是修改的名称
		修改：仅查看当前，当天的路径，将查询放到更多
	timetable.js：包含所有时间表（时间，起点，终点，途径点，车辆）
		修改：仅显示运行的班车
		问题：包含星期八
	util.js：显示当前时间，匹配当前数据
		推荐下一个班次的车辆
		获取当前的日期
page：所有的页面
	login：登录；获取定位
	index：主页面显示
		map：地图导航页面
			头部使用本次行程路线
			地图：当前定位；路线显示
			知识内容：
				总体信息：剩余座位
				预计时间：分钟+秒
				下一站：即将到达的站点（还有几站）
				路线图形：
					当前站点（原点放大，文字加粗）
					路径站点（红线已经走过的，绿线变红线，绿线未走过的）
			
			correct：路线矫正
	more：更多的页面
		connect：联系我们
		notice：告示
		process:上车流程
			文字显示页面
			末尾的数据声明
		translationsa:交通咨询
		usage：未使用
libs：可暂时忽略
	amap-wx.js:地图接口的程序
	bmap-wx.js：地图接口的程序
	config.js：控制
	qqmap-wx-jssdk.js：信息加密
	qqmap-wx-jssdk.min.js：未知
components：文档末尾的声明,自定义组件
	声明组件一般使用文件名，也可自定义
	自定义文件名，将"component-tag-name": "path/to/the/custom/component"复制到.json文件中
	在app.json中配置后，全局使用
	footer
		footer.js
		footer.json
		footer.wxml
		footer.wxss：调用了weixinUI
cloud|当前环境：lwt
		修改 完善云服务的东西，包括免费试用的内容
	getopenid
		config.json
		index.js
		package.json


