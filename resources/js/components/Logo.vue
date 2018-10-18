<template>
    <span id="logo" v-bind:class="logo.class"></span>
</template>

<script>
    export default {
        name: "Logo",
        data: function () {
            return {
                logo: {
                    class: "default"
                }
            }
        }}
</script>

<style scoped>
    #logo {
        width: 110px;
        border: none;
    }

    #logo.default {
        background-image: url("../../../public/assets/img/logo.png");
    }

    #logo.square  {
        background-image: url("../../../public/assets/img/logo-square.png");
    }

    #logo.small {
        background-image: url("../../../public/assets/img/logo-small.png");
    }
</style>
