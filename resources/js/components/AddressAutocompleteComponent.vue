<template>
    <div class="form-group row">
        <div class="col-md-8">
            <label class="col_form_label" for="{{ prefix }}_address"></label>
            <input type="text" name="{{ prefix }}_address" id="{{ prefix }}_address" value="{{ address }}" class="form-control form-control-lg" v-on:focus="geolocate()" required />
        </div>
        <div class="col-md-4">
            <label class="col_form_label" for="{{ prefix }}_city"></label>
            <input type="text" name="{{ prefix }}_city" id="{{ prefix }}_city" value="{{ city }}" class="form-control form-control-lg" required />
        </div>
    </div>

    <div class="clearfix"></div>

    <div class="form-group row">
        <div class="col-md-4">
            <label class="col_form_label" for="{{ prefix }}_province"></label>
            <input type="text" name="{{ prefix }}_province" id="{{ prefix }}_province" value="{{ province }}" class="form-control form-control-lg" required />
        </div>
        <div class="col-md-4">
            <label class="col_form_label" for="{{ prefix }}_country"></label>
            <input type="text" name="{{ prefix }}_country" id="{{ prefix }}_country" value="{{ country }}" class="form-control form-control-lg" required />
        </div>
        <div class="col-md-4">
            <label class="col_form_label" for="{{ prefix }}_postal_code"></label>
            <input type="text" name="{{ prefix }}_postal_code" id="{{ prefix }}_postal_code" value="{{ postal_code }}" class="form-control form-control-lg" required />
        </div>
    </div>
</template>

<script>
    export default {
        name: "address-autocomplete",
        props: ["prefix","type","address","city","country","province","postal_code"],
        data: {
            autocomplete: {},
            components: {
                route: this.prefix + "_address",
                locality: this.prefix + "_city",
                administrative_area_level_1: this.prefix + "_province",
                country: this.prefix + "_country",
                postal_code: this.prefix + "_postal_code"
            }
        },
        methods: {
            initAutocomplete: function () {
                this.autocomplete = new google.maps.places.Autocomplete(
                    (document.getElementById(this.prefix + "_address")), {types: ['geocode']});

                this.autocomplete.addListener('place_changed', fillInAddress);
            },

            finInAddress: function () {
                let place = this.autocomplete.getPlace();

                for (let component in this.components) {
                    document.getElementById(component).value = '';
                }
            },
            geolocate: function () {
                if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(function(position) {
                        var geolocation = {
                            lat: position.coords.latitude,
                            lng: position.coords.longitude
                        };
                        var circle = new google.maps.Circle({
                            center: geolocation,
                            radius: position.coords.accuracy
                        });
                        this.autocomplete.setBounds(circle.getBounds());
                    });
                }
            }
        }
    }
</script>

<style scoped>

</style>
