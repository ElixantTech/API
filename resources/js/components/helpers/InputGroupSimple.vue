<template>
    <div :class="colClass()">
        <label class="col_form_label" :for="name">{{ label }}: <span class="required" v-if="required"> *</span></label>
        <input :type="type" :name="name" :id="name" :class="css" :value="value" :required="required" />
    </div>
</template>

<script>
    export default {
        name: "input-group",
        props: {
            "type": {
                type: String,
                default: "text"
            },
            "name": {
                type: String
            },
            "label": {
                type: String
            },
            "css": {
                type: String,
                default: "form-control"
            },
            "required": {
                type: String,
                default: "false"
            },
            "cols": {
                type: String
            },
            "value": {
                type: String,
                default: ""
            }
        },
        methods: {
            colClass: function () {
                return "col-md-" + this.cols;
            }
        }
    }
</script>
