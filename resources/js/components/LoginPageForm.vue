<template>
    <form method="post" :action="destination" novalidate>
        <div class="form-group mb-3">
            <label>E-Mail Address:</label>
            <div class="input-group">
                <input name="email" type="text" class="form-control form-control-lg" />
                <span class="input-group-append">
                    <span class="input-group-text">
                        <i class="fas fa-envelope"></i>
                    </span>
                </span>
            </div>
        </div>
    </form>
</template>

<script>
    export default {
        name: "LoginPageForm",
        props: ["destination"]
    }
</script>

<style scoped>

</style>
