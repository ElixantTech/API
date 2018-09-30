<template>
    <form action="#" class="search nav-form">
        <div class="input-group">
            <input type="text" class="form-control" name="q" id="q" placeholder="Search...">
            <span class="input-group-append">
								<button class="btn btn-default" type="submit"><i class="fas fa-search"></i></button>
							</span>
        </div>
    </form>
</template>

<script>
    export default {
        name: "HeaderSearchForm"
    }
</script>
