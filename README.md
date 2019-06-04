# pen-ui

简介：这是我在学习Vue框架时，用Vue写的UI组件，这是我第一次写组件，其中有很多的不足，但我感觉这是快速学习Vue的一种很好的方式

请在使用这个UI框架时引入以下CSS
```
*,*::before,*::after{
        box-sizing: border-box;
        margin:0;
        padding: 0;
    }
body{
    font-family: Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,SimSun,sans-serif;
    font-size: 14px;
}
```
请在使用这个UI框架时引入以下代码
```
import {
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
    PCollapseItem,
    Toast
} from 'pen'
import 'pen/dist/index.css'
```