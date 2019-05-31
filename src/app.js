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
import PTabs from './tabs'
import PTabsPane from './tabs-pane'

Vue.use(MyPlugin)



new Vue({
    el:"#app",
    data:{
        message:" ",
        selected:"z4"
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
        PCol,
        PTabs,
        PTabsPane,


    },

    methods:{
        toast(value){
            this.$toast({
                message:'恭喜你，这是一条成功消息',
                showClose: false,
                type:"info",
                isClose:true,
                postion:"bottom",
                callback:function(){
                    console.log("用户说他知道了")
                }
            })
            // console.log(value)
        },
    },
    mounted(){
    //    console.log(MyPlugin)
    }
})

