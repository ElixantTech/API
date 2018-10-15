<template>
    <header id="header">
        <div id="logo-group">

            <Logo />



        </div>
    </header>
</template>

<script>
    import Logo from "../Logo";

    export default {
        name: "BaseHeader",
        components: {Logo},
        props: []
    }
</script>

<style scoped>

</style>