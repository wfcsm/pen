import Toast from './toast'
let MyPlugin = {}


MyPlugin.install = function (Vue, options) {
    Vue.prototype.$toast = function (propsObjec) {
        var Constructor = Vue.extend(Toast)
        var toast = new Constructor({
            propsData:propsObjec
        })
        console.log(toast)
        toast.$mount()
        document.body.appendChild(toast.$el)
    }
}
export {
    MyPlugin
}
