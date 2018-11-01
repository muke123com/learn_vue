<template>
    <div id="app">
        <header-box></header-box>
        <router-view/>
        <footer-box></footer-box>
    </div>
</template>

<script>
    import headerBox from './components/header/Header'
    import footerBox from './components/footer/Footer'

    export default {
        components: {
            headerBox,
            footerBox
        },
        name: 'App'
    }
</script>

