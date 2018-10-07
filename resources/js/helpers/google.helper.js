var autocomplete, address_autocomplete;

address_autocomplete = function () {
    // Create the autocomplete object, restricting the search to geographical
    // location types.
    autocomplete = new google.maps.places.Autocomplete(
        /** @type {!HTMLInputElement} */(document.getElementById('address')),
        {types: ['geocode']});

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
            autocomplete.setBounds(circle.getBounds());
        });
    }

    // When the user selects an address from the dropdown, populate the address
    // fields in the form.
    autocomplete.addListener('place_changed', fillInAddress);

    function fillInAddress() {
        // Get the place details from the autocomplete object.
        var place = autocomplete.getPlace();

        var street_num = '';
        var street_name = '';

        var resultKeys = {
            street_number:                  'short_name',
            route:                          'long_name',
            locality:                       'long_name',
            administrative_area_level_1:    'long_name',
            country:                        'long_name',
            postal_code:                    'short_name'
        };

        var results = {
            street_number:                  '',
            route:                          '',
            locality:                       '',
            administrative_area_level_1:    '',
            country:                        '',
            postal_code:                    ''
        }

        // Get each component of the address from the place details
        // and fill the corresponding field on the form.
        for (var i = 0; i < place.address_components.length; i++) {
            var addressType = place.address_components[i].types[0];

            if (resultKeys[addressType])
            {
                results[addressType] = place.address_components[i][resultKeys[addressType]];
            }
        }

        $("#address").val(results['street_number'] + ' ' + results['route']);
        $("#city").val(results['locality']);
        $("#province").val(results['administrative_area_level_1']);
        $("#country").val(results['country']);
        $("#postal_code").val(results['postal_code']);
    }
}.apply([jQuery]);
