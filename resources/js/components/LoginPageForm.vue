<template>
    <form method="post" :action="destination" novalidate>
        <div class="form-group mb-3">
            <label for="email">E-Mail Address:</label>
            <div class="input-group">
                <input name="email" type="email" id="email" class="form-control form-control-lg" />
                <span class="input-group-append">
                    <span class="input-group-text">
                        <i class="fas fa-envelope"></i>
                    </span>
                </span>
            </div>
        </div>

        <div class="clearfix"></div>

        <div class="form-group mb-3">
            <label for="password">Password:</label>
            <div class="input-group">
                <input name="password" type="password" id="password" class="form-control form-control-lg" />
                <span class="input-group-append">
                    <span class="input-group-text">
                        <i class="fas fa-key"></i>
                    </span>
                </span>
            </div>
        </div>

        <div class="row">
            <div class="col-sm-8">
                <div class="checkbox-custom checkbox-default">
                    <input id="RememberMe" name="rememberme" type="checkbox"/>
                    <label for="RememberMe">Remember Me</label>
                </div>
            </div>
            <div class="col-sm-4 text-right">
                <button type="submit" class="btn btn-primary mt-2">Sign In</button>
            </div>
        </div>
    </form>
</template>

<script>
    export default {
        name: "login-page-form",
        props: ["destination"]
    }
</script>

<style scoped>

</style>
