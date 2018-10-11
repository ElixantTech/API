<script>
    export default {
        name: "tooltip",
        props: [
            "skin",
            "width",
            "trigger",
            "placement"
        ],
        bind: function (el) {
            this.skin = el.data('skin') ? 'm-tooltip--skin-' + el.data('skin') : '';
            this.width = el.data('width') === 'auto' ? 'm-tooltop--auto-width' : '';
            this.trigger = el.data('trigger') ? el.data('trigger') : 'hover';
            this.placement = el.data('placement') ? el.data('placement') : 'left';

            return el.tooltip({
                trigger: this.trigger,
                template: context.
            });
        }
    }
</script>

<style scoped>

</style>
