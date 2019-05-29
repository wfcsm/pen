import Vue from 'vue'
import PButton from './button'
import PIcon from './icon'
import PButtonGroup from './button-group'
import PInput from './input'
import PContainer from './container'
import PHeader from './header'
import PAside from './aside'
import PMain from './main'
import PFooter from './footer'
import PRow from './row'
import PCol from './col'
import {MyPlugin} from './toast-plugin'
Vue.use(MyPlugin)



new Vue({
    el:"#app",
    data:{
        message:" "
    },
    components:{
        PButton,
        PIcon,
        PButtonGroup,
        PInput,
        PContainer,
        PHeader,
        PAside,
        PMain,
        PFooter,
        PRow,
        PCol

    },
    methods:{
        toast(value){
            this.$toast({
                message:'恭喜你，这是一条成功消息',
                showClose: false,
                type:"warning"
            })
            console.log(value)
        }
    },
    mounted(){
       console.log(MyPlugin)
    }
})

