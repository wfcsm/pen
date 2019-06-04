module.exports = {
    base:"/pen/",
    title:"pen UI",
    description:"一个Vue-UI框架",
    themeConfig: {
      sidebar: [
        {
          title: '入门',
          children: [
            '/install/',
            '/get-started/'
          ]
        },
        {
          title: '组件',
          children: [ 
              '/components/button',
              '/components/input',
              '/components/tabs',
              '/components/grid',
              '/components/layout',
              '/components/toast',
              '/components/popover',
              '/components/collapse'
           ]
        }
      ]
    }
  }