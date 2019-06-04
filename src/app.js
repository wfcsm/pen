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
import Toast from './toast-plugin'
import PTabs from './tabs'
import PTabsPane from './tabs-pane'
import PPopover from './popover'
import PCollapse from './collapse'
import PCollapseItem from './collapse-item'

Vue.use(Toast)



new Vue({
    el:"#app",
    data:{
        message:" ",
        selected:["1","2"]
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
        PPopover,
        PCollapse,
        PCollapseItem

    },

    methods:{
        yyy(){
            console.log("yyy")

        },
        toast(value){
            this.$toast({
                message:'恭喜你，这是一条成功消息',
                showClose: false,
                type:"info",
                isClose:true,
                postion:"top",
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

