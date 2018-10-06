<template>
    <section class="body-sign" style="max-width: 950px !important;">
        <div class="center-sign">
            <a class="logo float-left">
                <img src="/img/logo.png" height="54"/>
            </a>

            <section class="card-sign form-wizard mt-3" id="signup">
                <div class="tabs">
                    <ul class="nav nav-tabs tabs-primary justify-content-end wizard-steps">
                        <li class="nav-item">
                            <a href="#signup-account" data-toggle="tab" class="nav-link text-center">
                                <span class="badge badge-primary">1</span>
                                Account Details
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="#signup-subscription" data-toggle="tab" class="nav-link text-center">
                                <span class="badge badge-default">2</span>
                                Subscription
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="#signup-billing" data-toggle="tab" class="nav-link text-center">
                                <span class="badge badge-default">3</span>
                                Billing Details
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="#w2-confirm" data-toggle="tab" class="nav-link text-center">
                                <span class="badge badge-default">4</span>
                                Confirmation
                            </a>
                        </li>
                    </ul>
                    <form method="post" id="signup_form">
                        <div class="tab-content">

                            <div id="signup-account" class="tab-pane p-3">

                                <div class="form-group row">

                                    <input-group type="text" name="first_name" label="First Name" required="true"
                                                 cols="6"></input-group>
                                    <input-group type="text" name="last_name" label="Last Name" required="true"
                                                 cols="6"></input-group>

                                </div>

                                <div class="clearfix"></div>

                                <div class="form-group row">

                                    <input-group type="email" name="email" label="E-Mail Address" required="true"
                                                 cols="8"></input-group>

                                    <div class="col-md-4">
                                        <label class="col_form_label" for="phone_number">Phone Number: <span
                                            class="required">*</span> </label>
                                        <input type="text" name="phone_number" id="phone_number"
                                               class="form-control bfh-phone" data-format="+1 (ddd) ddd-dddd" required>
                                    </div>

                                </div>

                                <div class="clearfix"></div>

                                <div class="form-group row">

                                    <input-group type="password" name="password" label="Password" required="true"
                                                 cols="6"></input-group>
                                    <input-group type="password" name="repeat_password" label="Repeat Password"
                                                 required="true" cols="6"></input-group>

                                </div>

                            </div>

                            <div id="signup-subscription" class="tab-pane p-3">
                                <section class="pricing-table" style="background-color: transparent!important;">
                                    <div class="block-heading pt-0"><h2>Choose a Support Subscription</h2>
                                        <p>Choose whether you are fine with ticket-bsaed support, or if you need hands-on assistance.</p></div>
                                    <div class="row justify-content-md-center">
                                        <div class="col-md-4 col-lg-4">
                                            <div class="item">
                                                <div class="heading"><h3 class="mb-0">Basic</h3></div>
                                                <p>Ticket based support with access to the Knowledgebase and Community Forum.</p>
                                                <div class="price"><h4>$0</h4></div>
                                                <button class="btn btn-block btn-outline-primary select-plan" id="pkg-1">BUY
                                                    SELECT
                                                </button>
                                            </div>
                                        </div>
                                        <div class="col-md-4 col-lg-4">
                                            <div class="item">
                                                <div class="ribbon">RECOMMENDED</div>
                                                <div class="heading"><h3 class="mb-0">Standard</h3></div>
                                                <p>Everything included with Basic, plus Live Chat from 11AM-7PM.</p>
                                                <div class="price"><h4>$9.99</h4></div>
                                                <button class="btn btn-block btn-primary select-plan" id="pkg-2">SELECTED</button>
                                            </div>
                                        </div>
                                        <div class="col-md-4 col-lg-4">
                                            <div class="item">
                                                <div class="heading"><h3 class="mb-0">Priority</h3></div>
                                                <p>Everything in previous plans, with priority response and 24/7 Phone Support.</p>
                                                <div class="price"><h4>$19.99</h4></div>
                                                <button class="btn btn-block btn-outline-primary select-plan" id="pkg-3">SELECT</button>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                <div class="clearfix"></div>

                                <div class="row">
                                    <div class="col-md-12">

                                        <p>
                                            <i><strong>Note:</strong> If you choose any package other than <strong>Basic</strong> you will be billed for it upon registration
                                            of your account, and will continue to be monthly. Your renewal date is TODAY, and you can change your support level at any time through
                                            your Dashboard. Please note that fees paid for your support subscription however are non-refundable. You are guaranteed access to our community forum,
                                            helpdesk and knowledgebase. With the Standard package you also get access to our Live-Help agents between 11AM and 7PM, 7-days a week; and with
                                            the Premium package you will also get access to our 24-hour live Telephone Support Agents plus a guaranteed 1-Hour Response Time on all Support Tickets
                                            you submit, whereas with other packages responses are only guaranteed within 24 hours.</i>
                                        </p>

                                        <input type="hidden" id="package_field" name="package" value="pkg2" />

                                    </div>
                                </div>
                            </div>

                            <div id="signup-billing" class="tab-pane p-3">

                                <div class="row">
                                    <div class="col-md-12">
                                        <p>Before we proceed with creation of your account we need to ensure that a
                                            valid Credit Card is on file, of which
                                            will be used to bill you Monthly for services you subscribe to. Please note
                                            that you are not going to be charged for anything
                                            right now, and that this is only required as a form of identity verification
                                            to prevent potential fraudulent activity.</p>

                                        <p><i><strong>Note:</strong> A Pre-Authrization for $1.00 may take place on your
                                            card, but don't worry as it will be returned and
                                            will only serve as a pre-authroization.. You can expect the $1 to clear back
                                            to your card in 3-5 business days.</i></p>
                                    </div>
                                </div>

                                <div class="clearfix"></div>

                                <div class="row">

                                    <div class="col-md-6 card-js form-group" data-capture-name="true"
                                         data-stripe="true">
                                        <input name="card_number" id="card_number" class="card-number form-control"
                                               required/>
                                        <input name="expiry" id="expiry" class="expiry form-control" required/>
                                        <input name="cardholder" id="cardholder" class="name form-control" required/>
                                    </div>

                                    <div class="col-md-6">

                                        <div class="form-group row" style="margin-bottom: 15px;">

                                            <div class="col-md-12">
                                                <input type="text" name="address" id="address" class="form-control"
                                                       placeholder="Billing Address" required/>
                                            </div>

                                        </div>

                                        <div class="form-group row">

                                            <div class="col-md-6">
                                                <input type="text" name="city" id="city" class="form-control"
                                                       placeholder="City" required/>
                                            </div>

                                            <div class="col-md-6">
                                                <input type="text" name="province" id="province" class="form-control"
                                                       placeholder="Province" required/>
                                            </div>

                                        </div>

                                        <div class="form-group row">

                                            <div class="col-md-8">
                                                <input type="text" name="country" id="country" class="form-control"
                                                       placeholder="Country" required/>
                                            </div>

                                            <div class="col-md-4">
                                                <input type="text" name="postal_code" id="postal_code"
                                                       class="form-control" placeholder="Postal Code" required/>
                                            </div>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>
                    </form>
                </div>
                <div class="card-footer">
                    <ul class="pager">
                        <li class="previous disabled">
                            <a><i class="fas fa-angle-left"></i> Previous</a>
                        </li>
                        <li class="finish hidden float-right">
                            <a>Finish</a>
                        </li>
                        <li class="next">
                            <a>Next <i class="fas fa-angle-right"></i></a>
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    </section>
</template>

<style src="../../../../node_modules/card-js/card-js.min.css"></style>
<style src="../../../css/pricing-tables.css"></style>

<style>
    .input-group input:focus, .input-group select:focus {
        background-color: #fff;
        outline: 0;
        border-color: #66afe9;
        -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 8px rgba(102, 175, 233, .6);
        box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 8px rgba(102, 175, 233, .6);
    }

    .input-group .form-control {
        -webkit-box-shadow: 0 1px 0 rgba(255, 255, 255, .7), inset 0 1px 0 rgba(255, 255, 255, .7);
        -moz-box-shadow: 0 1px 0 rgba(255, 255, 255, .7), inset 0 1px 0 rgba(255, 255, 255, .7);
        -ms-box-shadow: 0 1px 0 rgba(255, 255, 255, .7), inset 0 1px 0 rgba(255, 255, 255, .7);
        -o-box-shadow: 0 1px 0 rgba(255, 255, 255, .7), inset 0 1px 0 rgba(255, 255, 255, .7);
        box-shadow: 0 1px 0 rgba(255, 255, 255, .7), inset 0 1px 0 rgba(255, 255, 255, .7);
        position: relative;
    }
</style>

<script>

    require('card-js');
    require('bootstrap-wizard');
    require('jquery-validation/dist/additional-methods')

    export default {
        name: "register-form"
    }

    $(document).ready(function () {
        let $signup_finish = $("#signup").find("ul.pager li.finish"),
            $signup_validator = $("#signup form").validate({
                rules: {
                    first_name: {
                        required: true,
                    },
                    last_name: {
                        required: true,
                    },
                    email: {
                        required: true,
                        email: true,
                        remote: {
                            url: "https://api.elixant.io/user/emailTaken",
                            type: "post",
                            data: {
                                email: function () {
                                    return $("input[name='email']").val();
                                }
                            },
                            dataFilter: function (data) {
                                var json = JSON.parse(data);
                                return (!json.data.exists);
                            }
                        },
                    },
                    phone_number: {
                        required: true,
                        phoneUS: true
                    },
                    password: {
                        required: true,
                    },
                    repeat_password: {
                        required: true,
                        equalTo: "#password"
                    },
                },
                messages: {
                    email: {
                        remote: "Oops! That E-Mail is being used already..."
                    }
                },
                highlight: function (element) {
                    $(element).closest('.form-group').removeClass('has-success').addClass('has-error');
                },
                success: function (element) {
                    $(element).closest('.form-group').removeClass('has-error');
                    $(element).remove();
                },
                errorPlacement: function (error, element) {
                    element.parent().append(error);
                }
            });

        $signup_finish.on('click', function (ev) {
            ev.preventDefault();

            var validated = $('#signup form').valid();

            if (validated) {
            }
        });

        $('#signup').bootstrapWizard({
            tabClass: 'wizard-steps',
            nextSelector: 'ul.pager li.next',
            previousSelector: 'ul.pager li.previous',
            firstSelector: null,
            lastSelector: null,
            onNext: function (tab, navigation, index, newindex) {
                var validated = $('#signup form').valid();
                if (!validated) {
                    $signup_validator.focusInvalid();
                    return false;
                }
            },
            onTabClick: function (tab, navigation, index, newindex) {
                if (newindex == index + 1) {
                    return this.onNext(tab, navigation, index, newindex);
                } else if (newindex > index + 1) {
                    return false;
                } else {
                    return true;
                }
            },
            onTabChange: function (tab, navigation, index, newindex) {
                var totalTabs = navigation.find('li').length - 1;
                $signup_finish[newindex != totalTabs ? 'addClass' : 'removeClass']('hidden');
                $('#signup').find(this.nextSelector)[newindex == totalTabs ? 'addClass' : 'removeClass']('hidden');
            }
        });

        let deselectPlans = function() {
            $('.select-plan').each(function () {
                console.log('unselect ' + $(this).attr('id'));
                $(this).text('SELECT');
            });
        };

        $('.select-plan').click(function () {
            console.log('click!');

            deselectPlans();

            $(this).text('SELECTED');
            $('#plan-field').val(
                $(this).attr('id')
            );
        });
    });

    var autocomplete;

    function initAutocomplete() {
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
    }

    function fillInAddress() {
        // Get the place details from the autocomplete object.
        var place = autocomplete.getPlace();

        var street_num = '';
        var street_name = '';

        // Get each component of the address from the place details
        // and fill the corresponding field on the form.
        for (var i = 0; i < place.address_components.length; i++) {
            var addressType = place.address_components[i].types[0];

            if (addressType === 'street_number') {
                street_num = place.address_components[i]['short_name'];
            }
            elseif(addressType === 'route')
            {
                street_name = place.address_components[i]['long_name']
            }
            elseif(addressType === 'locality')
            {
                $("#city").val(place.address_components[i]['long_name']);
            }
            elseif (addressType === 'administrative_area_level_1')
            {
                $("#province").val(place.address_components[i]['long_name']);
            }
            elseif (addressType === 'country')
            {
                $("#country").val(place.address_components[i]['long_name']);
            }
            elseif (addressType === 'postal_code')
            {
                $("#postal_code").val(place.address_components[i]['long_name']);
            }

            $("#address").val(street_num + ' ' + street_name)
        }
    }
</script>
