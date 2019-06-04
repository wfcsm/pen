<template>
    <div>
        <p-button-group >
            <div>asdas</div>
            <p-button type="primary" >默认按钮</p-button>
            <p-button type="primary" >默认按钮</p-button>
            <p-button type="primary" >默认按钮</p-button>
            <p-button type="primary" >默认按钮</p-button>
            <p-button type="primary" >默认按钮</p-button>
        </p-button-group>
    </div>
</template>

<script>
import Button from '../../../src/button'
import ButtonGroup from '../../../src/button-group'
export default {
    components:{
        "p-button":Button,
        "p-button-group":ButtonGroup
    }
}
</script>
