import Toast from './toast'
let MyPlugin = {}

function createToast(Vue,propsObjec){
    var Constructor = Vue.extend(Toast)
    var toast = new Constructor({
        propsData: propsObjec
    })
    toast.$mount()
    document.body.appendChild(toast.$el)
    return toast
}
let currentToast;
MyPlugin.install = function (Vue, options) {
    Vue.prototype.$toast = function (propsObjec) {
        if(currentToast){
            currentToast.closeToast();
        }
        currentToast=createToast(Vue,propsObjec)
    }
}
export {
    MyPlugin
}