<template>
    <svg class="icon" aria-hidden="true">
        <use :xlink:href="`#icon-${name}`"></use>
    </svg>
</template>
<script>
import './svg.js'
export default {
    name:"PenIcon",
    props:['name']
}
</script>
<style lang="scss" scoped>
.icon {
    width: 1.2em; height: 1.2em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
}

</style>
