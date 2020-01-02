(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{314:function(t,v,_){"use strict";_.r(v);var a=_(17),r=Object(a.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("p",[_("strong",[t._v("1.浏览器对象模型")])]),t._v(" "),_("p",[t._v("BOM 是浏览器对象模型的简称。JavaScript 将整个浏览器窗口按照实现的功能不同拆分成若干个对象")]),t._v(" "),_("p",[t._v("一个完整的 BOM 主要包括 window 对象、history 对象、location 对象和 document 对象等")]),t._v(" "),_("p",[t._v("BOM中，整个对象的层次关系如下图：")]),t._v(" "),_("div",{staticClass:"language-img line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("![image-20200101202142409](./image-20200101202142409.png)\n")])]),t._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[t._v("1")]),_("br")])]),_("p",[_("strong",[t._v("2.window 对象的常用属性及方法")])]),t._v(" "),_("p",[t._v("window 对象处于对象模型的第一层，对于每个打开的窗口系统都会自动将其定义为 window 对象。")]),t._v(" "),_("p",[t._v("window 对象常用属性：")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[_("strong",[t._v("属性")])]),t._v(" "),_("th",[_("strong",[t._v("含义")])])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("document")]),t._v(" "),_("td",[t._v("窗口中当前显示的文档对象")])]),t._v(" "),_("tr",[_("td",[t._v("history")]),t._v(" "),_("td",[t._v("history  对象保存窗口最近加载的  URL")])]),t._v(" "),_("tr",[_("td",[t._v("location")]),t._v(" "),_("td",[t._v("当前窗口的  URL")])]),t._v(" "),_("tr",[_("td",[t._v("status")]),t._v(" "),_("td",[t._v("状态栏文本")])])])]),t._v(" "),_("p",[t._v("window 对象常用方法：")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[_("strong",[t._v("方法")])]),t._v(" "),_("th",[_("strong",[t._v("说明")])])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("prompt")]),t._v(" "),_("td",[t._v("显示可提示用户输入的对话框")])]),t._v(" "),_("tr",[_("td",[t._v("alert")]),t._v(" "),_("td",[t._v("显示带有一个提示消息和一个确定按钮的警示框")])]),t._v(" "),_("tr",[_("td",[t._v("confirm")]),t._v(" "),_("td",[t._v("显示一个带有提示信息、确定和取消按钮的确认框")])]),t._v(" "),_("tr",[_("td",[t._v("close")]),t._v(" "),_("td",[t._v("关闭浏览器窗口")])]),t._v(" "),_("tr",[_("td",[t._v("open")]),t._v(" "),_("td",[t._v("打开一个新的浏览器窗口，加载给定URL所指定的文档")])]),t._v(" "),_("tr",[_("td",[t._v("setTimeout")]),t._v(" "),_("td",[t._v("在设定的毫秒数后调用函数或计算表达式")])]),t._v(" "),_("tr",[_("td",[t._v("setInterval")]),t._v(" "),_("td",[t._v("按照设定的周期（以毫秒计）来重复调用函数或表达式")])]),t._v(" "),_("tr",[_("td",[t._v("clearInterval")]),t._v(" "),_("td",[t._v("取消重复设置，与setInterval对应")])])])]),t._v(" "),_("p",[_("strong",[t._v("3.使用window对象创建对话框")])]),t._v(" "),_("p",[t._v("alert() 方法弹出警告对话框")]),t._v(" "),_("p",[_("strong",[t._v("示例：")])]),t._v(" "),_("p",[_("img",{attrs:{src:"C:%5CUsers%5C%E6%9C%B1%5CAppData%5CRoaming%5CTypora%5Ctypora-user-images%5Cimage-20200101202439043.png",alt:"image-20200101202439043"}})]),t._v(" "),_("p",[_("img",{attrs:{src:"C:%5CUsers%5C%E6%9C%B1%5CAppData%5CRoaming%5CTypora%5Ctypora-user-images%5Cimage-20200101202446479.png",alt:"image-20200101202446479"}})]),t._v(" "),_("p",[t._v("prompt() 方法创建提示对话框")]),t._v(" "),_("p",[_("strong",[t._v("示例：")])]),t._v(" "),_("p",[_("img",{attrs:{src:"C:%5CUsers%5C%E6%9C%B1%5CAppData%5CRoaming%5CTypora%5Ctypora-user-images%5Cimage-20200101202523342.png",alt:"image-20200101202523342"}})]),t._v(" "),_("p",[_("img",{attrs:{src:"C:%5CUsers%5C%E6%9C%B1%5CAppData%5CRoaming%5CTypora%5Ctypora-user-images%5Cimage-20200101202530367.png",alt:"image-20200101202530367"}})]),t._v(" "),_("p",[t._v("confirm() 方法创建确认对话框")]),t._v(" "),_("p",[_("strong",[t._v("示例：")])]),t._v(" "),_("p",[_("img",{attrs:{src:"C:%5CUsers%5C%E6%9C%B1%5CAppData%5CRoaming%5CTypora%5Ctypora-user-images%5Cimage-20200101202559287.png",alt:"image-20200101202559287"}})]),t._v(" "),_("p",[_("img",{attrs:{src:"C:%5CUsers%5C%E6%9C%B1%5CAppData%5CRoaming%5CTypora%5Ctypora-user-images%5Cimage-20200101202606715.png",alt:"image-20200101202606715"}})]),t._v(" "),_("p",[_("strong",[t._v("4.使用window对象操作窗口")])]),t._v(" "),_("p",[t._v("window对象的 open() 方法和 close() 方法用于打开和关闭窗口")]),t._v(" "),_("p",[t._v("open方法的第一个参数是新窗口的URL，第二个参数是给新窗口的命名，第三个参数是设置新窗口的特征")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[_("strong",[t._v("窗口的常见特征")])]),t._v(" "),_("th")])]),t._v(" "),_("tbody",[_("tr",[_("td",[_("strong",[t._v("名称")])]),t._v(" "),_("td",[_("strong",[t._v("说明")])])]),t._v(" "),_("tr",[_("td",[t._v("height、width")]),t._v(" "),_("td",[t._v("窗口文档显示区的高度、宽度，单位为像素")])]),t._v(" "),_("tr",[_("td",[t._v("left、top")]),t._v(" "),_("td",[t._v("窗口与屏幕左边、顶端的距离，单位为像素")])])])]),t._v(" "),_("p",[_("strong",[t._v("5.使用window对象执行计时事件")])]),t._v(" "),_("p",[t._v("setTimeout() 方法会在指定的时间执行指定的代码并退出。setInterval() 方法会根据设置的时间间隔反复执行指定的代码，直至程序结束或利用clearInterval() 方法取消")]),t._v(" "),_("p",[_("strong",[t._v("示例：")])]),t._v(" "),_("p",[_("img",{attrs:{src:"C:%5CUsers%5C%E6%9C%B1%5CAppData%5CRoaming%5CTypora%5Ctypora-user-images%5Cimage-20200101202810666.png",alt:"image-20200101202810666"}})]),t._v(" "),_("p",[_("img",{attrs:{src:"C:%5CUsers%5C%E6%9C%B1%5CAppData%5CRoaming%5CTypora%5Ctypora-user-images%5Cimage-20200101202821336.png",alt:"image-20200101202821336"}})]),t._v(" "),_("p",[t._v("requestAnimationFrame() 方法是浏览器用于定时循环操作的一个接口，类似于 setTimeout，主要用途是按帧对网页进行重绘")]),t._v(" "),_("p",[t._v("优势在于充分利用显示器的刷新机制，比较节省系统资源")]),t._v(" "),_("p",[_("strong",[t._v("语法")])]),t._v(" "),_("p",[_("img",{attrs:{src:"C:%5CUsers%5C%E6%9C%B1%5CAppData%5CRoaming%5CTypora%5Ctypora-user-images%5Cimage-20200101202907013.png",alt:"image-20200101202907013"}})]),t._v(" "),_("p",[_("strong",[t._v("6.history对象")])]),t._v(" "),_("p",[_("strong",[t._v("注意")]),_("img",{attrs:{src:"C:%5CUsers%5C%E6%9C%B1%5CAppData%5CRoaming%5CTypora%5Ctypora-user-images%5Cimage-20200101203015934.png",alt:"image-20200101203015934"}})]),t._v(" "),_("p",[t._v("location对象用于管理当前打开窗口的URL信息，相当于浏览器的地址栏")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[_("strong",[t._v("location****对象的常用属性和方法")])]),t._v(" "),_("th")])]),t._v(" "),_("tbody",[_("tr",[_("td",[_("strong",[t._v("名称")])]),t._v(" "),_("td",[_("strong",[t._v("描述")])])]),t._v(" "),_("tr",[_("td",[t._v("href  属性")]),t._v(" "),_("td",[t._v("返回或设置当前页面的  URL")])]),t._v(" "),_("tr",[_("td",[t._v("hostname  属性")]),t._v(" "),_("td",[t._v("返回 Web  主机的域名")])]),t._v(" "),_("tr",[_("td",[t._v("pathname  属性")]),t._v(" "),_("td",[t._v("返回当前页面的路径和文件名")])]),t._v(" "),_("tr",[_("td",[t._v("port  属性")]),t._v(" "),_("td",[t._v("返回 Web  主机的端口（80 或 443）")])]),t._v(" "),_("tr",[_("td",[t._v("protocol  属性")]),t._v(" "),_("td",[t._v("返回所使用的  Web  协议（http://  或 https://）")])]),t._v(" "),_("tr",[_("td",[t._v("reload()  方法")]),t._v(" "),_("td",[t._v("重新加载当前页面，相对于浏览器的刷新按钮")])]),t._v(" "),_("tr",[_("td",[t._v("assign()  方法")]),t._v(" "),_("td",[t._v("加载新的文档")])])])]),t._v(" "),_("p",[_("strong",[t._v("7.screen对象")])]),t._v(" "),_("p",[t._v("window.screen 对象包含了用户屏幕的相关信息，在编写时可以不使用 window前缀")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[_("strong",[t._v("screen****对象的常用属性")])]),t._v(" "),_("th")])]),t._v(" "),_("tbody",[_("tr",[_("td",[_("strong",[t._v("属性")])]),t._v(" "),_("td",[_("strong",[t._v("描述")])])]),t._v(" "),_("tr",[_("td",[t._v("availWidth")]),t._v(" "),_("td",[t._v("返回显示屏幕的可用宽度（除  Windows  任务栏之外）")])]),t._v(" "),_("tr",[_("td",[t._v("availHeight")]),t._v(" "),_("td",[t._v("返回显示屏幕的可用高度（除  Windows  任务栏之外）")])]),t._v(" "),_("tr",[_("td",[t._v("colorDepth")]),t._v(" "),_("td",[t._v("返回目标设备或缓冲器上的调色板的比特深度")])]),t._v(" "),_("tr",[_("td",[t._v("pixelDepth")]),t._v(" "),_("td",[t._v("返回显示屏幕的颜色分辨率（比特每像素）")])]),t._v(" "),_("tr",[_("td",[t._v("width")]),t._v(" "),_("td",[t._v("返回显示器屏幕的宽度")])]),t._v(" "),_("tr",[_("td",[t._v("height")]),t._v(" "),_("td",[t._v("返回显示器屏幕的高度")])])])]),t._v(" "),_("p",[_("strong",[t._v("8.navigator对象")])]),t._v(" "),_("p",[t._v("navigator对象包含了浏览器的有关信息")]),t._v(" "),_("p",[t._v("navigator 对象的实例是唯一的，可以用 window 对象的 navigator 属性来引用它")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[_("strong",[t._v("navigator****对象的常见方法")])]),t._v(" "),_("th")])]),t._v(" "),_("tbody",[_("tr",[_("td",[_("strong",[t._v("方法")])]),t._v(" "),_("td",[_("strong",[t._v("描述")])])]),t._v(" "),_("tr",[_("td",[t._v("javaEnabled()")]),t._v(" "),_("td",[t._v("规定浏览器是否启用  Java")])]),t._v(" "),_("tr",[_("td",[t._v("taintEnabled()")]),t._v(" "),_("td",[t._v("规定浏览器是否启用数据污点，仅适用于  IE 浏览器  （Data Tainting）")])])])]),t._v(" "),_("p",[t._v("navigator对象的常用属性如下：")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[_("strong",[t._v("navigator****对象的常用属性")])]),t._v(" "),_("th")])]),t._v(" "),_("tbody",[_("tr",[_("td",[_("strong",[t._v("属性")])]),t._v(" "),_("td",[_("strong",[t._v("描述")])])]),t._v(" "),_("tr",[_("td",[t._v("appCodeName")]),t._v(" "),_("td",[t._v("返回浏览器的代号")])]),t._v(" "),_("tr",[_("td",[t._v("appMinorVersion")]),t._v(" "),_("td",[t._v("返回浏览器的次级版本")])]),t._v(" "),_("tr",[_("td",[t._v("appName")]),t._v(" "),_("td",[t._v("返回浏览器的名称")])]),t._v(" "),_("tr",[_("td",[t._v("appVersion")]),t._v(" "),_("td",[t._v("返回浏览器的平台和版本信息")])]),t._v(" "),_("tr",[_("td",[t._v("browserLanguage")]),t._v(" "),_("td",[t._v("返回当前浏览器的语言")])]),t._v(" "),_("tr",[_("td",[t._v("cookieEnabled")]),t._v(" "),_("td",[t._v("返回浏览器中是否启用  cookie  的布尔值")])])])]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[_("strong",[t._v("navigator****对象的常用属性")])]),t._v(" "),_("th")])]),t._v(" "),_("tbody",[_("tr",[_("td",[_("strong",[t._v("属性")])]),t._v(" "),_("td",[_("strong",[t._v("描述")])])]),t._v(" "),_("tr",[_("td",[t._v("cpuClass")]),t._v(" "),_("td",[t._v("返回浏览器系统的  CPU  等级")])]),t._v(" "),_("tr",[_("td",[t._v("onLine")]),t._v(" "),_("td",[t._v("返回系统是否处于联机模式的布尔值")])]),t._v(" "),_("tr",[_("td",[t._v("platform")]),t._v(" "),_("td",[t._v("返回运行浏览器的操作系统平台")])]),t._v(" "),_("tr",[_("td",[t._v("systemLanguage")]),t._v(" "),_("td",[t._v("返回操作系统使用的默认语言")])]),t._v(" "),_("tr",[_("td",[t._v("userAgent")]),t._v(" "),_("td",[t._v("返回由客户机发送服务器的  user-agent  头部的值")])]),t._v(" "),_("tr",[_("td",[t._v("userLanguage")]),t._v(" "),_("td",[t._v("返回操作系统的自然语言设置")])])])]),t._v(" "),_("p",[t._v("**示例：**使用navigator对象中的属性和方法获取当前浏览器的相关信息")]),t._v(" "),_("p",[_("img",{attrs:{src:"C:%5CUsers%5C%E6%9C%B1%5CAppData%5CRoaming%5CTypora%5Ctypora-user-images%5Cimage-20200101203424150.png",alt:"image-20200101203424150"}})]),t._v(" "),_("p",[_("img",{attrs:{src:"C:%5CUsers%5C%E6%9C%B1%5CAppData%5CRoaming%5CTypora%5Ctypora-user-images%5Cimage-20200101203435433.png",alt:"image-20200101203435433"}})]),t._v(" "),_("p",[t._v("由于 navigator 会误导浏览器检测，所以可以使用对象检测来嗅探不同的浏览器。但不同的浏览器支持不同的对象，因此对于不同的浏览器，要使用不同的对象来检测")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[_("strong",[t._v("navigator****对象集合")])]),t._v(" "),_("th")])]),t._v(" "),_("tbody",[_("tr",[_("td",[_("strong",[t._v("集合")])]),t._v(" "),_("td",[_("strong",[t._v("描述")])])]),t._v(" "),_("tr",[_("td"),t._v(" "),_("td",[t._v("返回对文档中所有嵌入式对象的引用")])]),t._v(" "),_("tr",[_("td",[t._v("plugins[]")]),t._v(" "),_("td",[t._v("该集合是一个  plugin  对象的数组，其中的元素代表浏览器已经安装的插件。plugin对象提供的是有关插件的信息，其中包括它所支持的  MIME  类型的列表")])]),t._v(" "),_("tr",[_("td"),t._v(" "),_("td",[t._v("虽然 plugins[ ]  数组是由  IE4  定义的，但是在  IE4  中它却总是空的，因为  IE4  不支持插件和  plugin  对象")])])])]),t._v(" "),_("p",[t._v("**示例：**使用navigator对象显示出浏览器安装了哪些插件")]),t._v(" "),_("p",[_("img",{attrs:{src:"C:%5CUsers%5C%E6%9C%B1%5CAppData%5CRoaming%5CTypora%5Ctypora-user-images%5Cimage-20200101203522983.png",alt:"image-20200101203522983"}})]),t._v(" "),_("p",[_("img",{attrs:{src:"C:%5CUsers%5C%E6%9C%B1%5CAppData%5CRoaming%5CTypora%5Ctypora-user-images%5Cimage-20200101203530638.png",alt:"image-20200101203530638"}})]),t._v(" "),_("p",[_("strong",[t._v("总结")])]),t._v(" "),_("p",[t._v("window是浏览器对象模型的顶层对象。")]),t._v(" "),_("p",[t._v("alert() 方法：显示带有一个提示消息和一个“确定”按钮的警示框")]),t._v(" "),_("p",[t._v("confirm() 方法：显示一个带有提示信息、“确定”和“取消”按钮的确认框")]),t._v(" "),_("p",[t._v("open() 方法：打开一个新的浏览器窗口，加载给定 URL 所指定的文档")]),t._v(" "),_("p",[t._v("setInterval() 方法：按照设定的周期（以毫秒计）来重复调用函数或表达式")]),t._v(" "),_("p",[t._v("history对象用来管理当前窗口最近访问过的URL")]),t._v(" "),_("p",[t._v("location对象用来管理当前窗口的URL信息。")]),t._v(" "),_("p",[t._v("href 属性：返回或设置当前页面的URL")]),t._v(" "),_("p",[t._v("reload() 方法：重新加载当前页面，相对于浏览器的刷新按钮")]),t._v(" "),_("p",[t._v("assign() 方法：加载新的文档")])])}),[],!1,null,null,null);v.default=r.exports}}]);