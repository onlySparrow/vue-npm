/*
 * @Author:  
 * @Email:
 * @Date: 2019-04-29 14:10
 * @Last Modified by:    
 * @Last Modified time: 
 * @Description: 加载所有模块
 */
import edpglobalButton from './components/button/index.js';
import edpglobalSwitch from './components/switch/index.js';
import edpglobalList from './components/list/index.js';
import layout from './components/layout/index.js';
//If you have more module,continue to add it here

const components = [
  edpglobalButton,
  edpglobalSwitch,
  edpglobalList,
  layout 
];

const install = function(Vue, opts = {}) {
  components.map(component => {
    Vue.component(component.name, component);
  })
}

/* 支持使用标签的方式引入 */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  edpglobalButton,
  edpglobalSwitch,
  edpglobalList,
  layout
}