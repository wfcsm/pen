const expect = chai.expect;
 import Vue from 'vue'
 import Input from '../src/input'

 Vue.config.productionTip = false
 Vue.config.devtools = false

 describe('Input', () => {
     it('存在.', () => {
         expect(Input).to.be.ok
     })
     it('接受value.', () => {
         const Constructor = Vue.extend(Input)
         const vm = new Constructor({
         propsData: {
             value: '123'
         }
         }).$mount()
         const useElement = vm.$el.querySelector('Input')
 
         expect(useElement.value).to.equal('123')
         vm.$destroy()
     })
     it('接受placeholder.', () => {
        const Constructor = Vue.extend(Input)
        const vm = new Constructor({
        propsData: {
            placeholder: '123'
        }
        }).$mount()
        const useElement = vm.$el.querySelector('Input')

        expect(useElement.getAttribute("placeholder")).to.equal('123')
        vm.$destroy()
    })

    it('接受disabled.', () => {
        const Constructor = Vue.extend(Input)
        const vm = new Constructor({
        propsData: {
            disabled: true
        }
        }).$mount()
        const useElement = vm.$el.querySelector('Input')

        expect(useElement.getAttribute("disabled")).to.equal("disabled")
        vm.$destroy()
    })
    it('接受erromessage.', () => {
        const Constructor = Vue.extend(Input)
        const vm = new Constructor({
        propsData: {
            erromessage: "sadaads"
        }
        }).$mount()
        const useElement = vm.$el.querySelector('Input')
        expect(useElement.getAttribute("class")).to.equal("erromessage")
        vm.$destroy()
    })

 })