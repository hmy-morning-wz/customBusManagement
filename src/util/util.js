import {
    validatenull
} from './validate'
/**
 * 设置灰度模式
 */
export const toggleGrayMode = (status) => {
    if (status) {
        document.body.className = document.body.className + ' grayMode';
    } else {
        document.body.className = document.body.className.replace(' grayMode', '');
    }
};
/**
 * 设置主题
 */
export const setTheme = (name) => {
    document.body.className = name;
}

/**
 * 获取字典
 */
export const setDic = (dicData, DIC) => {
    return (typeof(dicData) == 'string') ? DIC : dicData
};
/**
 * 设置px
 */
export const setPx = (val, defval) => {
    if (validatenull(val)) {
        val = defval;
    }
    val = val + '';
    if (val.indexOf('%') == -1) {
        val = val + 'px';
    }
    return val;
};
/**
 * 动态获取组件
 */
export const getComponent = (type) => {
    if (type == "select") {
        return "crudSelect";
    } else if (type == "radio") {
        return "crudRadio";
    } else if (type == "checkbox") {
        return "crudCheckbox";
    } else if (type == "date") {
        return "crudDate";
    } else {
        return "crudInput";
    }
};
export const initMenu = (router, menu) => {
  if (menu.length === 0) {
    return;
  }
  router.addRoutes(formatRoutes(menu));
};
export const formatRoutes = (aMenu) => {
  const aRouter = [];
  aMenu.forEach(oMenu => {
    const {path,component,icon,parentId,label,children} = oMenu;
    if (!validatenull(component)) {
      //view页面
      if(component.startsWith('views')&&parentId==-1){
        //根页面
        const oRouter = {
          path: path,
          component(resolve) {require(['../page/index'], resolve);},
          redirect:path+'/index',
          icon: icon,
          children: formatRoutesChildren(label,component)
        };
        aRouter.push(oRouter);
      }else {
        const oRouter = {
          path: path,
          component(resolve) {
            let componentPath = '';
            if (component=='Layout') {
              require(['../page/index'], resolve);
              return;
            } else {
              componentPath = component;
            }
            require([`../${componentPath}.vue`], resolve);
          },
          name: label,
          icon: icon,
          children: validatenull(children) ? [] : formatRoutes(children)
        };
        aRouter.push(oRouter);
      }
    }
  });
  return aRouter;
};
export const formatRoutesChildren= (label,component) => {
  const aRouter = [];
  const ch = {
    path: 'index',
    component(resolve) {
      require([`../${component}.vue`], resolve);
    },
    name: label,
  };
  aRouter.push(ch);
  return aRouter;
};
/**
 * 加密处理
 */
export const encryption = (params) => {
    let {
        data,
        type,
        param,
        key
    } = params;
    let result = JSON.parse(JSON.stringify(data));
    if (type == 'Base64') {
        param.forEach(ele => {
            result[ele] = btoa(result[ele]);
        })
    } else{
      param.forEach(ele => {
      var data = result[ele];
      key = CryptoJS.enc.Latin1.parse(key);
      var iv = key;
      // 加密
      var encrypted = CryptoJS.AES.encrypt(
        data,
        key, {
          iv: iv,
          mode: CryptoJS.mode.CBC,
          padding:CryptoJS.pad.Pkcs7
        });
      result[ele] = encrypted.toString();
    });

    }
    return result;
};

/**
 * 设置浏览器头部标题
 */
export const setTitle = function(title) {
    title = title ? `${title}—通卡联城|后台管理系统` : '通卡联城|后台管理系统';
    window.document.title = title;
};
/**
 * 浏览器判断是否全屏
 */
export const fullscreenToggel = () => {
    if (fullscreenEnable()) {
        exitFullScreen();
    } else {
        reqFullScreen();
    }
};
/**
 * esc监听全屏
 */
export const listenfullscreen = (callback) => {
    function listen() {
        callback()
    }
    document.addEventListener("fullscreenchange", function() {
        listen();
    });
    document.addEventListener("mozfullscreenchange", function() {
        listen();
    });
    document.addEventListener("webkitfullscreenchange", function() {
        listen();
    });
    document.addEventListener("msfullscreenchange", function() {
        listen();
    });
};
/**
 * 浏览器判断是否全屏
 */
export const fullscreenEnable = () => {
    var isFullscreen = document.fullscreenEnabled ||
        window.fullScreen ||
        document.mozFullscreenEnabled ||
        document.webkitIsFullScreen;
    return isFullscreen;
}

/**
 * 浏览器全屏
 */
export const reqFullScreen = () => {
    if (document.documentElement.requestFullScreen) {
        document.documentElement.requestFullScreen();
    } else if (document.documentElement.webkitRequestFullScreen) {
        document.documentElement.webkitRequestFullScreen();
    } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen();
    }
};
/**
 * 浏览器退出全屏
 */
export const exitFullScreen = () => {
    if (document.documentElement.requestFullScreen) {
        document.exitFullScreen();
    } else if (document.documentElement.webkitRequestFullScreen) {
        document.webkitCancelFullScreen();
    } else if (document.documentElement.mozRequestFullScreen) {
        document.mozCancelFullScreen();
    }
};
/**
 * 递归寻找子类的父类
 */

export const findParent = (menu, id) => {
    for (let i = 0; i < menu.length; i++) {
        if (menu[i].children.length != 0) {
            for (let j = 0; j < menu[i].children.length; j++) {
                if (menu[i].children[j].id == id) {
                    return menu[i];
                } else {
                    if (menu[i].children[j].children.length != 0) {
                        return findParent(menu[i].children[j].children, id);
                    }
                }
            }
        }
    }
};

/**
 * 总体路由处理器
 */
export const resolveUrlPath = (url, name) => {

    let reqUrl = url;
    if (url.indexOf("http") != -1 || url.indexOf("https") != -1) {
        reqUrl = `/myiframe/urlPath?src=${reqUrl}&name=${name}`;
    } else {
        reqUrl = `${reqUrl}`;
    }
    return reqUrl;
};
/**
 * 总体路由设置器
 */
export const setUrlPath = ($route) => {
    let value = "";
    if ($route.query.src) {
        value = $route.query.src;
    } else {
        value = $route.path;
    }
    return value;
};
/**
 * 动态插入css
 */

export const loadStyle = url => {
    const link = document.createElement('link');
    link.type = 'text/css';
    link.rel = 'stylesheet';
    link.href = url;
    const head = document.getElementsByTagName('head')[0];
    head.appendChild(link);
};
/**
 * 根据字典的value显示label
 */
export const findByvalue = (dic, value) => {
    let result = '';
    if (validatenull(dic)) return value;
    if (typeof(value) == 'string' || typeof(value) == 'number' || typeof(value) == 'boolean') {
        let index = 0;
        index = findArray(dic, value);
        if (index != -1) {
            result = dic[index].label;
        } else {
            result = value;
        }
    } else if (value instanceof Array) {
        result = [];
        let index = 0;
        value.forEach(ele => {
            index = findArray(dic, ele);
            if (index != -1) {
                result.push(dic[index].label);
            } else {
                result.push(value);
            }
        });
        result = result.toString();
    }
    return result;
};
/**
 * 根据字典的value查找对应的index
 */
export const findArray = (dic, value) => {
    for (let i = 0; i < dic.length; i++) {
        if (dic[i].value == value) {
            return i;
        }
    }
    return -1;
};
/**
 * 生成随机len位数字
 */
export const randomLenNum = (len, date) => {
    let random = '';
    random = Math.ceil(Math.random() * 100000000000000).toString().substr(0, len ? len : 4);
    if (date) random = random + Date.now();
    return random;
};
/**
 * 打开小窗口
 */
export const openWindow = (url, title, w, h) => {
    // Fixes dual-screen position                            Most browsers       Firefox
    const dualScreenLeft = window.screenLeft !== undefined ? window.screenLeft : screen.left
    const dualScreenTop = window.screenTop !== undefined ? window.screenTop : screen.top

    const width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width
    const height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height

    const left = ((width / 2) - (w / 2)) + dualScreenLeft
    const top = ((height / 2) - (h / 2)) + dualScreenTop
    const newWindow = window.open(url, title, 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=yes, copyhistory=no, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left)

    // Puts focus on the newWindow
    if (window.focus) {
        newWindow.focus()
    }
}
