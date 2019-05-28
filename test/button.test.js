const expect = chai.expect;
 import Vue from 'vue'
 import Button from '../src/button'

 Vue.config.productionTip = false
 Vue.config.devtools = false

 describe('Button', () => {
     it('存在.', () => {
         expect(Button).to.be.ok
     })
     it('可以设置icon.', () => {
         const Constructor = Vue.extend(Button)
         const vm = new Constructor({
         propsData: {
             icon: 'delete'
         }
         }).$mount()
         const useElement = vm.$el.querySelector('use')
         expect(useElement.getAttribute('xlink:href')).to.equal('#icon-delete')
         vm.$destroy()
     })
     it('可以设置loading.', () => {
         const Constructor = Vue.extend(Button)
         const vm = new Constructor({
         propsData: {
             loading: true
         }
         }).$mount()
         const useElements = vm.$el.querySelectorAll('use')
         expect(useElements.length).to.equal(1)
         expect(useElements[0].getAttribute('xlink:href')).to.equal('#icon-loading')
         vm.$destroy()
     })
     it("设置disabed",()=>{
         const Constructor=Vue.extend(Button);
         const vm = new Constructor({
             propsData:{
                disabled:true
             }
         }).$mount()
         const useElement=vm.$el.querySelectorAll("button");
         expect(vm.$el.getAttribute("disabled")).to.equal("disabled")
         vm.$destroy()
     })
     it("设置circle",()=>{
        const Constructor=Vue.extend(Button);
        const vm = new Constructor({
            propsData:{
                circle:true
            }
        }).$mount()
        const useElement=vm.$el.querySelectorAll("button");
        expect(vm.$el.getAttribute("class").indexOf("is-circle")>0).to.equal(true)
        vm.$destroy()
    })

 })