
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('example-component', require('./components/ExampleComponent.vue'));

const app = new Vue({
    el: '#app'
});

window.theme = {};

window.theme.fn = {

    getOptions: function (opts) {

        if (typeof (opts) === 'object') {
            return opts;
        }
        elseif(typeof (opts) === 'string')
        {
            try {
                return JSON.parse(opts.replace(/'/g,'"').replace(';',''))
            } catch (e) {
                return {};
            }
        }

    }
};

// Animate
(function(theme, $) {

    theme = theme || {};

    var instanceName = '__animate';

    var PluginAnimate = function($el, opts) {
        return this.initialize($el, opts);
    };

    PluginAnimate.defaults = {
        accX: 0,
        accY: -150,
        delay: 1,
        duration: '1s'
    };

    PluginAnimate.prototype = {
        initialize: function($el, opts) {
            if ($el.data(instanceName)) {
                return this;
            }

            this.$el = $el;

            this
                .setData()
                .setOptions(opts)
                .build();

            return this;
        },

        setData: function() {
            this.$el.data(instanceName, this);

            return this;
        },

        setOptions: function(opts) {
            this.options = $.extend(true, {}, PluginAnimate.defaults, opts, {
                wrapper: this.$el
            });

            return this;
        },

        build: function() {
            var self = this,
                $el = this.options.wrapper,
                delay = 0,
                duration = '1s',
                elTopDistance = $el.offset().top,
                windowTopDistance = $(window).scrollTop();

            $(document).ready(function(){

                $el.addClass('appear-animation animated');

                if (!$('html').hasClass('no-csstransitions') && $(window).width() > 767 && elTopDistance > windowTopDistance) {

                    $el.appear(function() {

                        $el.one('animation:show', function(ev) {
                            delay = ($el.attr('data-appear-animation-delay') ? $el.attr('data-appear-animation-delay') : self.options.delay);
                            duration = ($el.attr('data-appear-animation-duration') ? $el.attr('data-appear-animation-duration') : self.options.duration);

                            if (duration != '1s') {
                                $el.css('animation-duration', duration);
                            }

                            setTimeout(function() {
                                $el.addClass($el.attr('data-appear-animation') + ' appear-animation-visible');
                            }, delay);
                        });

                        $el.trigger('animation:show');

                    }, {
                        accX: self.options.accX,
                        accY: self.options.accY
                    });

                } else {

                    $el.addClass('appear-animation-visible');

                }

            });

            return this;
        }
    };

    // expose to scope
    $.extend(theme, {
        PluginAnimate: PluginAnimate
    });

    // jquery plugin
    $.fn.themePluginAnimate = function(opts) {
        return this.map(function() {
            var $this = $(this);

            if ($this.data(instanceName)) {
                return $this.data(instanceName);
            } else {
                return new PluginAnimate($this, opts);
            }

        });
    };

}).apply(this, [window.theme, jQuery]);

// Bootstrap Toggle
(function($) {

    'use strict';

    var $window = $( window );

    var toggleClass = function( $el ) {
        if ( !!$el.data('toggleClassBinded') ) {
            return false;
        }

        var $target,
            className,
            eventName;

        $target = $( $el.attr('data-target') );
        className = $el.attr('data-toggle-class');
        eventName = $el.attr('data-fire-event');


        $el.on('click.toggleClass', function(e) {
            e.preventDefault();
            $target.toggleClass( className );

            var hasClass = $target.hasClass( className );

            if ( !!eventName ) {
                $window.trigger( eventName, {
                    added: hasClass,
                    removed: !hasClass
                });
            }
        });

        $el.data('toggleClassBinded', true);

        return true;
    };

    $(function() {
        $('[data-toggle-class][data-target]').each(function() {
            toggleClass( $(this) );
        });
    });

}).apply(this, [jQuery]);

// Cards
(function($) {

    $(function() {
        $('.card')
            .on( 'card:toggle', function() {
                var $this,
                    direction;

                $this = $(this);
                direction = $this.hasClass( 'card-collapsed' ) ? 'Down' : 'Up';

                $this.find('.card-body, .card-footer')[ 'slide' + direction ]( 200, function() {
                    $this[ (direction === 'Up' ? 'add' : 'remove') + 'Class' ]( 'card-collapsed' )
                });
            })
            .on( 'card:dismiss', function() {
                var $this = $(this);

                if ( !!( $this.parent('div').attr('class') || '' ).match( /col-(xs|sm|md|lg)/g ) && $this.siblings().length === 0 ) {
                    $row = $this.closest('.row');
                    $this.parent('div').remove();
                    if ( $row.children().length === 0 ) {
                        $row.remove();
                    }
                } else {
                    $this.remove();
                }
            })
            .on( 'click', '[data-card-toggle]', function( e ) {
                e.preventDefault();
                $(this).closest('.card').trigger( 'card:toggle' );
            })
            .on( 'click', '[data-card-dismiss]', function( e ) {
                e.preventDefault();
                $(this).closest('.card').trigger( 'card:dismiss' );
            })
            /* Deprecated */
            .on( 'click', '.card-actions a.fa-caret-up', function( e ) {
                e.preventDefault();
                var $this = $( this );

                $this
                    .removeClass( 'fa-caret-up' )
                    .addClass( 'fa-caret-down' );

                $this.closest('.card').trigger( 'card:toggle' );
            })
            .on( 'click', '.card-actions a.fa-caret-down', function( e ) {
                e.preventDefault();
                var $this = $( this );

                $this
                    .removeClass( 'fa-caret-down' )
                    .addClass( 'fa-caret-up' );

                $this.closest('.card').trigger( 'card:toggle' );
            })
            .on( 'click', '.card-actions a.fa-times', function( e ) {
                e.preventDefault();
                var $this = $( this );

                $this.closest('.card').trigger( 'card:dismiss' );
            });
    });

})(jQuery);

// Data Tables - Config
(function($) {

    'use strict';

    // we overwrite initialize of all datatables here
    // because we want to use select2, give search input a bootstrap look
    // keep in mind if you overwrite this fnInitComplete somewhere,
    // you should run the code inside this function to keep functionality.
    //
    // there's no better way to do this at this time :(
    if ( $.isFunction( $.fn[ 'dataTable' ] ) ) {

        $.extend(true, $.fn.dataTable.defaults, {
            oLanguage: {
                sLengthMenu: '_MENU_ records per page',
                sProcessing: '<i class="fas fa-spinner fa-spin"></i> Loading',
                sSearch: ''
            },
            fnInitComplete: function( settings, json ) {
                // select 2
                if ( $.isFunction( $.fn[ 'select2' ] ) ) {
                    $('.dataTables_length select', settings.nTableWrapper).select2({
                        theme: 'bootstrap',
                        minimumResultsForSearch: -1
                    });
                }

                var options = $( 'table', settings.nTableWrapper ).data( 'plugin-options' ) || {};

                // search
                var $search = $('.dataTables_filter input', settings.nTableWrapper);

                $search
                    .attr({
                        placeholder: typeof options.searchPlaceholder !== 'undefined' ? options.searchPlaceholder : 'Search...'
                    })
                    .removeClass('form-control-sm').addClass('form-control pull-right');

                if ( $.isFunction( $.fn.placeholder ) ) {
                    $search.placeholder();
                }
            }
        });

    }

}).apply(this, [jQuery]);

// Datepicker
(function(theme, $) {

    theme = theme || {};

    var instanceName = '__datepicker';

    var PluginDatePicker = function($el, opts) {
        return this.initialize($el, opts);
    };

    PluginDatePicker.defaults = {
    };

    PluginDatePicker.prototype = {
        initialize: function($el, opts) {
            if ( $el.data( instanceName ) ) {
                return this;
            }

            this.$el = $el;

            this
                .setVars()
                .setData()
                .setOptions(opts)
                .build();

            return this;
        },

        setVars: function() {
            this.skin = this.$el.data( 'plugin-skin' );

            return this;
        },

        setData: function() {
            this.$el.data(instanceName, this);

            return this;
        },

        setOptions: function(opts) {
            this.options = $.extend( true, {}, PluginDatePicker.defaults, opts );

            return this;
        },

        build: function() {
            this.$el.bootstrapDP( this.options );

            if ( !!this.skin && typeof(this.$el.data('datepicker').picker) != 'undefined') {
                this.$el.data('datepicker').picker.addClass( 'datepicker-' + this.skin );
            }

            return this;
        }
    };

    // expose to scope
    $.extend(theme, {
        PluginDatePicker: PluginDatePicker
    });

    // jquery plugin
    $.fn.themePluginDatePicker = function(opts) {
        return this.each(function() {
            var $this = $(this);

            if ($this.data(instanceName)) {
                return $this.data(instanceName);
            } else {
                return new PluginDatePicker($this, opts);
            }

        });
    }

}).apply(this, [window.theme, jQuery]);

// Header Menu Nav
(function(theme, $) {

    'use strict';

    theme = theme || {};

    var initialized = false;

    $.extend(theme, {

        Nav: {

            defaults: {
                wrapper: $('#mainNav'),
                scrollDelay: 600,
                scrollAnimation: 'easeOutQuad'
            },

            initialize: function($wrapper, opts) {
                if (initialized) {
                    return this;
                }

                initialized = true;
                this.$wrapper = ($wrapper || this.defaults.wrapper);

                this
                    .setOptions(opts)
                    .build()
                    .events();

                return this;
            },

            setOptions: function(opts) {
                // this.options = $.extend(true, {}, this.defaults, opts, theme.fn.getOptions(this.$wrapper.data('plugin-options')));

                return this;
            },

            build: function() {
                var self = this,
                    $html = $('html'),
                    $header = $('.header'),
                    thumbInfoPreview;

                // Add Arrows
                $header.find('.dropdown-toggle:not(.notification-icon), .dropdown-submenu > a').append($('<i />').addClass('fas fa-caret-down'));

                // Preview Thumbs
                self.$wrapper.find('a[data-thumb-preview]').each(function() {
                    thumbInfoPreview = $('<span />').addClass('thumb-info thumb-info-preview')
                        .append($('<span />').addClass('thumb-info-wrapper')
                            .append($('<span />').addClass('thumb-info-image').css('background-image', 'url(' + $(this).data('thumb-preview') + ')')
                            )
                        );

                    $(this).append(thumbInfoPreview);
                });

                // Side Header Right (Reverse Dropdown)
                if($html.hasClass('side-header-right')) {
                    $header.find('.dropdown').addClass('dropdown-reverse');
                }

                return this;
            },

            events: function() {
                var self = this,
                    $header = $('.header'),
                    $window = $(window);

                $header.find('a[href="#"]').on('click', function(e) {
                    e.preventDefault();
                });

                // Mobile Arrows
                $header.find('.dropdown-toggle[href="#"], .dropdown-submenu a[href="#"], .dropdown-toggle[href!="#"] .fa-caret-down, .dropdown-submenu a[href!="#"] .fa-caret-down').on('click', function(e) {
                    e.preventDefault();
                    if ($window.width() < 992) {
                        $(this).closest('li').toggleClass('showed');
                    }
                });

                // Touch Devices with normal resolutions
                if('ontouchstart' in document.documentElement) {
                    $header.find('.dropdown-toggle:not([href="#"]), .dropdown-submenu > a:not([href="#"])')
                        .on('touchstart click', function(e) {
                            if($window.width() > 991) {

                                e.stopPropagation();
                                e.preventDefault();

                                if(e.handled !== true) {

                                    var li = $(this).closest('li');

                                    if(li.hasClass('tapped')) {
                                        location.href = $(this).attr('href');
                                    }

                                    li.addClass('tapped');

                                    e.handled = true;
                                } else {
                                    return false;
                                }

                                return false;

                            }
                        })
                        .on('blur', function(e) {
                            $(this).closest('li').removeClass('tapped');
                        });

                }

                // Collapse Nav
                $header.find('[data-collapse-nav]').on('click', function(e) {
                    $(this).parents('.collapse').removeClass('in');
                });

                // Anchors Position
                $('[data-hash]').each(function() {

                    var target = $(this).attr('href'),
                        offset = ($(this).is("[data-hash-offset]") ? $(this).data('hash-offset') : 0);

                    if($(target).get(0)) {
                        $(this).on('click', function(e) {
                            e.preventDefault();

                            // Close Collapse if Opened
                            $(this).parents('.collapse.in').removeClass('in');

                            self.scrollToTarget(target, offset);

                            return;
                        });
                    }

                });

                return this;
            },

            scrollToTarget: function(target, offset) {
                var self = this;

                $('body').addClass('scrolling');

                $('html, body').animate({
                    scrollTop: $(target).offset().top - offset
                }, self.options.scrollDelay, self.options.scrollAnimation, function() {
                    $('body').removeClass('scrolling');
                });

                return this;

            }

        }

    });

}).apply(this, [window.theme, jQuery]);

// Data Tables - Config
(function($) {

    'use strict';

    // we overwrite initialize of all datatables here
    // because we want to use select2, give search input a bootstrap look
    // keep in mind if you overwrite this fnInitComplete somewhere,
    // you should run the code inside this function to keep functionality.
    //
    // there's no better way to do this at this time :(
    if ( $.isFunction( $.fn[ 'dataTable' ] ) ) {

        $.extend(true, $.fn.dataTable.defaults, {
            oLanguage: {
                sLengthMenu: '_MENU_ records per page',
                sProcessing: '<i class="fas fa-spinner fa-spin"></i> Loading',
                sSearch: ''
            },
            fnInitComplete: function( settings, json ) {
                // select 2
                if ( $.isFunction( $.fn[ 'select2' ] ) ) {
                    $('.dataTables_length select', settings.nTableWrapper).select2({
                        theme: 'bootstrap',
                        minimumResultsForSearch: -1
                    });
                }

                var options = $( 'table', settings.nTableWrapper ).data( 'plugin-options' ) || {};

                // search
                var $search = $('.dataTables_filter input', settings.nTableWrapper);

                $search
                    .attr({
                        placeholder: typeof options.searchPlaceholder !== 'undefined' ? options.searchPlaceholder : 'Search...'
                    })
                    .removeClass('form-control-sm').addClass('form-control pull-right');

                if ( $.isFunction( $.fn.placeholder ) ) {
                    $search.placeholder();
                }
            }
        });

    }

}).apply(this, [jQuery]);

// Datepicker
(function(theme, $) {

    theme = theme || {};

    var instanceName = '__datepicker';

    var PluginDatePicker = function($el, opts) {
        return this.initialize($el, opts);
    };

    PluginDatePicker.defaults = {
    };

    PluginDatePicker.prototype = {
        initialize: function($el, opts) {
            if ( $el.data( instanceName ) ) {
                return this;
            }

            this.$el = $el;

            this
                .setVars()
                .setData()
                .setOptions(opts)
                .build();

            return this;
        },

        setVars: function() {
            this.skin = this.$el.data( 'plugin-skin' );

            return this;
        },

        setData: function() {
            this.$el.data(instanceName, this);

            return this;
        },

        setOptions: function(opts) {
            this.options = $.extend( true, {}, PluginDatePicker.defaults, opts );

            return this;
        },

        build: function() {
            this.$el.bootstrapDP( this.options );

            if ( !!this.skin && typeof(this.$el.data('datepicker').picker) != 'undefined') {
                this.$el.data('datepicker').picker.addClass( 'datepicker-' + this.skin );
            }

            return this;
        }
    };

    // expose to scope
    $.extend(theme, {
        PluginDatePicker: PluginDatePicker
    });

    // jquery plugin
    $.fn.themePluginDatePicker = function(opts) {
        return this.each(function() {
            var $this = $(this);

            if ($this.data(instanceName)) {
                return $this.data(instanceName);
            } else {
                return new PluginDatePicker($this, opts);
            }

        });
    }

}).apply(this, [window.theme, jQuery]);

// Header Menu Nav
(function(theme, $) {

    'use strict';

    theme = theme || {};

    var initialized = false;

    $.extend(theme, {

        Nav: {

            defaults: {
                wrapper: $('#mainNav'),
                scrollDelay: 600,
                scrollAnimation: 'easeOutQuad'
            },

            initialize: function($wrapper, opts) {
                if (initialized) {
                    return this;
                }

                initialized = true;
                this.$wrapper = ($wrapper || this.defaults.wrapper);

                this
                    .setOptions(opts)
                    .build()
                    .events();

                return this;
            },

            setOptions: function(opts) {
                // this.options = $.extend(true, {}, this.defaults, opts, theme.fn.getOptions(this.$wrapper.data('plugin-options')));

                return this;
            },

            build: function() {
                var self = this,
                    $html = $('html'),
                    $header = $('.header'),
                    thumbInfoPreview;

                // Add Arrows
                $header.find('.dropdown-toggle:not(.notification-icon), .dropdown-submenu > a').append($('<i />').addClass('fas fa-caret-down'));

                // Preview Thumbs
                self.$wrapper.find('a[data-thumb-preview]').each(function() {
                    thumbInfoPreview = $('<span />').addClass('thumb-info thumb-info-preview')
                        .append($('<span />').addClass('thumb-info-wrapper')
                            .append($('<span />').addClass('thumb-info-image').css('background-image', 'url(' + $(this).data('thumb-preview') + ')')
                            )
                        );

                    $(this).append(thumbInfoPreview);
                });

                // Side Header Right (Reverse Dropdown)
                if($html.hasClass('side-header-right')) {
                    $header.find('.dropdown').addClass('dropdown-reverse');
                }

                return this;
            },

            events: function() {
                var self = this,
                    $header = $('.header'),
                    $window = $(window);

                $header.find('a[href="#"]').on('click', function(e) {
                    e.preventDefault();
                });

                // Mobile Arrows
                $header.find('.dropdown-toggle[href="#"], .dropdown-submenu a[href="#"], .dropdown-toggle[href!="#"] .fa-caret-down, .dropdown-submenu a[href!="#"] .fa-caret-down').on('click', function(e) {
                    e.preventDefault();
                    if ($window.width() < 992) {
                        $(this).closest('li').toggleClass('showed');
                    }
                });

                // Touch Devices with normal resolutions
                if('ontouchstart' in document.documentElement) {
                    $header.find('.dropdown-toggle:not([href="#"]), .dropdown-submenu > a:not([href="#"])')
                        .on('touchstart click', function(e) {
                            if($window.width() > 991) {

                                e.stopPropagation();
                                e.preventDefault();

                                if(e.handled !== true) {

                                    var li = $(this).closest('li');

                                    if(li.hasClass('tapped')) {
                                        location.href = $(this).attr('href');
                                    }

                                    li.addClass('tapped');

                                    e.handled = true;
                                } else {
                                    return false;
                                }

                                return false;

                            }
                        })
                        .on('blur', function(e) {
                            $(this).closest('li').removeClass('tapped');
                        });

                }

                // Collapse Nav
                $header.find('[data-collapse-nav]').on('click', function(e) {
                    $(this).parents('.collapse').removeClass('in');
                });

                // Anchors Position
                $('[data-hash]').each(function() {

                    var target = $(this).attr('href'),
                        offset = ($(this).is("[data-hash-offset]") ? $(this).data('hash-offset') : 0);

                    if($(target).get(0)) {
                        $(this).on('click', function(e) {
                            e.preventDefault();

                            // Close Collapse if Opened
                            $(this).parents('.collapse.in').removeClass('in');

                            self.scrollToTarget(target, offset);

                            return;
                        });
                    }

                });

                return this;
            },

            scrollToTarget: function(target, offset) {
                var self = this;

                $('body').addClass('scrolling');

                $('html, body').animate({
                    scrollTop: $(target).offset().top - offset
                }, self.options.scrollDelay, self.options.scrollAnimation, function() {
                    $('body').removeClass('scrolling');
                });

                return this;

            }

        }

    });

}).apply(this, [window.theme, jQuery]);

// Lock Screen
(function($) {

    'use strict';

    var LockScreen = {

        initialize: function() {
            this.$body = $( 'body' );

            this
                .build()
                .events();
        },

        build: function() {
            var lockHTML,
                userinfo;

            userinfo = this.getUserInfo();
            this.lockHTML = this.buildTemplate( userinfo );

            this.$lock        = this.$body.children( '#LockScreenInline' );
            this.$userPicture = this.$lock.find( '#LockUserPicture' );
            this.$userName    = this.$lock.find( '#LockUserName' );
            this.$userEmail   = this.$lock.find( '#LockUserEmail' );

            return this;
        },

        events: function() {
            var _self = this;

            this.$body.find( '[data-lock-screen="true"]' ).on( 'click', function( e ) {
                e.preventDefault();

                _self.show();
            });

            return this;
        },

        formEvents: function( $form ) {
            var _self = this;

            $form.on( 'submit', function( e ) {
                e.preventDefault();

                _self.hide();
            });
        },

        show: function() {
            var _self = this,
                userinfo = this.getUserInfo();

            this.$userPicture.attr( 'src', userinfo.picture );
            this.$userName.text( userinfo.username );
            this.$userEmail.text( userinfo.email );

            this.$body.addClass( 'show-lock-screen' );

            $.magnificPopup.open({
                items: {
                    src: this.lockHTML,
                    type: 'inline'
                },
                modal: true,
                mainClass: 'mfp-lock-screen',
                callbacks: {
                    change: function() {
                        _self.formEvents( this.content.find( 'form' ) );
                    }
                }
            });
        },

        hide: function() {
            $.magnificPopup.close();
        },

        getUserInfo: function() {
            var $info,
                picture,
                name,
                email;

            // always search in case something is changed through ajax
            $info    = $( '#userbox' );
            picture  = $info.find( '.profile-picture img' ).attr( 'data-lock-picture' );
            name     = $info.find( '.profile-info' ).attr( 'data-lock-name' );
            email    = $info.find( '.profile-info' ).attr( 'data-lock-email' );

            return {
                picture: picture,
                username: name,
                email: email
            };
        },

        buildTemplate: function( userinfo ) {
            return [
                '<section id="LockScreenInline" class="body-sign body-locked body-locked-inline">',
                '<div class="center-sign">',
                '<div class="panel card-sign">',
                '<div class="card-body">',
                '<form>',
                '<div class="current-user text-center">',
                '<img id="LockUserPicture" src="{{picture}}" alt="John Doe" class="rounded-circle user-image" />',
                '<h2 id="LockUserName" class="user-name text-dark m-0">{{username}}</h2>',
                '<p  id="LockUserEmail" class="user-email m-0">{{email}}</p>',
                '</div>',
                '<div class="form-group mb-lg">',
                '<div class="input-group">',
                '<input id="pwd" name="pwd" type="password" class="form-control form-control-lg" placeholder="Password" />',
                '<span class="input-group-append">',
                '<span class="input-group-text">',
                '<i class="fas fa-lock"></i>',
                '</span>',
                '</span>',
                '</div>',
                '</div>',

                '<div class="row">',
                '<div class="col-6">',
                '<p class="mt-xs mb-0">',
                '<a href="#">Not John Doe?</a>',
                '</p>',
                '</div>',
                '<div class="col-6">',
                '<button type="submit" class="btn btn-primary pull-right">Unlock</button>',
                '</div>',
                '</div>',
                '</form>',
                '</div>',
                '</div>',
                '</div>',
                '</section>'
            ]
                .join( '' )
                .replace( /\{\{picture\}\}/, userinfo.picture )
                .replace( /\{\{username\}\}/, userinfo.username )
                .replace( /\{\{email\}\}/, userinfo.email );
        }

    };

    this.LockScreen = LockScreen;

    $(function() {
        LockScreen.initialize();
    });

}).apply(this, [jQuery]);

// Masked Input
(function(theme, $) {

    theme = theme || {};

    var instanceName = '__maskedInput';

    var PluginMaskedInput = function($el, opts) {
        return this.initialize($el, opts);
    };

    PluginMaskedInput.defaults = {
    };

    PluginMaskedInput.prototype = {
        initialize: function($el, opts) {
            if ( $el.data( instanceName ) ) {
                return this;
            }

            this.$el = $el;

            this
                .setData()
                .setOptions(opts)
                .build();

            return this;
        },

        setData: function() {
            this.$el.data(instanceName, this);

            return this;
        },

        setOptions: function(opts) {
            this.options = $.extend( true, {}, PluginMaskedInput.defaults, opts );

            return this;
        },

        build: function() {
            this.$el.mask( this.$el.data('input-mask'), this.options );

            return this;
        }
    };

    // expose to scope
    $.extend(theme, {
        PluginMaskedInput: PluginMaskedInput
    });

    // jquery plugin
    $.fn.themePluginMaskedInput = function(opts) {
        return this.each(function() {
            var $this = $(this);

            if ($this.data(instanceName)) {
                return $this.data(instanceName);
            } else {
                return new PluginMaskedInput($this, opts);
            }

        });
    }

}).apply(this, [window.theme, jQuery]);

// MaxLength
(function(theme, $) {

    theme = theme || {};

    var instanceName = '__maxlength';

    var PluginMaxLength = function($el, opts) {
        return this.initialize($el, opts);
    };

    PluginMaxLength.defaults = {
        alwaysShow: true,
        placement: 'bottom-left',
        warningClass: 'badge badge-success bottom-left',
        limitReachedClass: 'badge badge-danger bottom-left'
    };

    PluginMaxLength.prototype = {
        initialize: function($el, opts) {
            if ( $el.data( instanceName ) ) {
                return this;
            }

            this.$el = $el;

            this
                .setData()
                .setOptions(opts)
                .build();

            return this;
        },

        setData: function() {
            this.$el.data(instanceName, this);

            return this;
        },

        setOptions: function(opts) {
            this.options = $.extend( true, {}, PluginMaxLength.defaults, opts );

            return this;
        },

        build: function() {
            this.$el.maxlength( this.options );

            this.$el.on('blur', function() {
                $('.bootstrap-maxlength').remove();
            });

            return this;
        }
    };

    // expose to scope
    $.extend(theme, {
        PluginMaxLength: PluginMaxLength
    });

    // jquery plugin
    $.fn.themePluginMaxLength = function(opts) {
        return this.each(function() {
            var $this = $(this);

            if ($this.data(instanceName)) {
                return $this.data(instanceName);
            } else {
                return new PluginMaxLength($this, opts);
            }

        });
    }

}).apply(this, [window.theme, jQuery]);

// MultiSelect
(function(theme, $) {

    theme = theme || {};

    var instanceName = '__multiselect';

    var PluginMultiSelect = function($el, opts) {
        return this.initialize($el, opts);
    };

    PluginMultiSelect.defaults = {
        templates: {
            li: '<li><a class="dropdown-item" tabindex="0"><label style="display: block;"></label></a></li>',
            filter: '<div class="input-group"><span class="input-group-prepend"><span class="input-group-text"><i class="fas fa-search"></i></span></span><input class="form-control multiselect-search" type="text"></div>'
        }
    };

    PluginMultiSelect.prototype = {
        initialize: function($el, opts) {
            if ( $el.data( instanceName ) ) {
                return this;
            }

            this.$el = $el;

            this
                .setData()
                .setOptions(opts)
                .build();

            return this;
        },

        setData: function() {
            this.$el.data(instanceName, this);

            return this;
        },

        setOptions: function(opts) {
            this.options = $.extend( true, {}, PluginMultiSelect.defaults, opts );

            return this;
        },

        build: function() {
            this.$el.multiselect( this.options );

            return this;
        }
    };

    // expose to scope
    $.extend(theme, {
        PluginMultiSelect: PluginMultiSelect
    });

    // jquery plugin
    $.fn.themePluginMultiSelect = function(opts) {
        return this.each(function() {
            var $this = $(this);

            if ($this.data(instanceName)) {
                return $this.data(instanceName);
            } else {
                return new PluginMultiSelect($this, opts);
            }

        });
    }

}).apply(this, [window.theme, jQuery]);

// Notifications - Config
(function($) {

    'use strict';

    // use font awesome icons if available
    if ( typeof PNotify != 'undefined' ) {
        PNotify.prototype.options.styling = "fontawesome";

        $.extend(true, PNotify.prototype.options, {
            shadow: false,
            stack: {
                spacing1: 15,
                spacing2: 15
            }
        });

        $.extend(PNotify.styling.fontawesome, {
            // classes
            container: "notification",
            notice: "notification-warning",
            info: "notification-info",
            success: "notification-success",
            error: "notification-danger",

            // icons
            notice_icon: "fas fa-exclamation",
            info_icon: "fas fa-info",
            success_icon: "fas fa-check",
            error_icon: "fas fa-times"
        });
    }

}).apply(this, [jQuery]);

// Portlets
(function(theme, $) {

    theme = theme || {};

    var instanceName = '__portlet',
        storageOrderKey = '__portletOrder',
        storageStateKey = '__portletState';

    var PluginPortlet = function($el, opts) {
        return this.initialize($el, opts);
    };

    PluginPortlet.defaults = {
        connectWith: '[data-plugin-portlet]',
        items: '[data-portlet-item]',
        handle: '.portlet-handler',
        opacity: 0.7,
        placeholder: 'portlet-placeholder',
        cancel: 'portlet-cancel',
        forcePlaceholderSize: true,
        forceHelperSize: true,
        tolerance: 'pointer',
        helper: 'original',
        revert: 200
    };

    PluginPortlet.prototype = {
        initialize: function($el, opts) {
            if ( $el.data( instanceName ) ) {
                return this;
            }

            this.$el = $el;

            this
                .setData()
                .setOptions(opts)
                .build();

            return this;
        },

        setData: function() {
            this.$el.data(instanceName, this);

            return this;
        },

        setOptions: function(opts) {
            var _self = this;

            this.options = $.extend(true, {}, PluginPortlet.defaults, opts, {
                wrapper: this.$el,
                update: _self.onUpdate,
                create: _self.onLoad
            });

            return this;
        },

        onUpdate: function(event, ui) {
            var key = storageOrderKey,
                data = store.get(key),
                $this = $(this),
                porletId = $this.prop('id');

            if (!data) {
                data = {};
            }

            if (!!porletId) {
                data[porletId] = $this.sortable('toArray');
                store.set(key, data);
            }
        },

        onLoad: function(event, ui) {
            var key = storageOrderKey,
                data = store.get(key),
                $this = $(this),
                porletId = $this.prop('id'),
                portlet = $('#' + porletId);

            if (!!data) {
                var cards = data[porletId];

                if (!!cards) {
                    $.each(cards, function(index, panelId) {
                        $('#' + panelId).appendTo(portlet);
                    });
                }
            }
        },

        saveState: function( panel ) {
            var key = storageStateKey,
                data = store.get(key),
                panelId = panel.prop('id');

            if (!data) {
                data = {};
            }

            if (!panelId) {
                return this;
            }

            var collapse = panel.find('.card-actions').children('a.fa-caret-up, a.fa-caret-down'),
                isCollapsed = !!collapse.hasClass('fa-caret-up'),
                isRemoved = !panel.closest('body').get(0);

            if (isRemoved) {
                data[panelId] = 'removed';
            } else if (isCollapsed) {
                data[panelId] = 'collapsed';
            } else {
                delete data[panelId];
            }

            store.set(key, data);
            return this;
        },

        loadState: function() {
            var key = storageStateKey,
                data = store.get(key);

            if (!!data) {
                $.each(data, function(panelId, state) {
                    var panel = $('#' + panelId);
                    if (!panel.data('portlet-state-loaded')) {
                        if (state == 'collapsed') {
                            panel.find('.card-actions a.fa-caret-down').trigger('click');
                        } else if (state == 'removed') {
                            panel.find('.card-actions a.fa-times').trigger('click');
                        }
                        panel.data('portlet-state-loaded', true);
                    }
                });
            }

            return this;
        },

        build: function() {
            var _self = this;

            if ( $.isFunction( $.fn.sortable ) ) {
                this.$el.sortable( this.options );
                this.$el.find('[data-portlet-item]').each(function() {
                    _self.events( $(this) );
                });
            }

            var portlet = this.$el;
            portlet.css('min-height', 150);

            return this;
        },

        events: function($el) {
            var _self = this,
                portlet = $el.closest('[data-plugin-portlet]');

            this.loadState();

            $el.find('.card-actions').on( 'click', 'a.fa-caret-up, a.fa-caret-down, a.fa-times', function( e ) {
                setTimeout(function() {
                    _self.saveState( $el );
                }, 250);
            });

            return this;
        }
    };

    // expose to scope
    $.extend(theme, {
        PluginPortlet: PluginPortlet
    });

    // jquery plugin
    $.fn.themePluginPortlet = function(opts) {
        return this.map(function() {
            var $this = $(this);

            if ($this.data(instanceName)) {
                return $this.data(instanceName);
            } else {
                return new PluginPortlet($this, opts);
            }

        });
    }

}).apply(this, [window.theme, jQuery]);

// Scroll to Top
(function(theme, $) {

    theme = theme || {};

    $.extend(theme, {

        PluginScrollToTop: {

            defaults: {
                wrapper: $('body'),
                offset: 150,
                buttonClass: 'scroll-to-top',
                iconClass: 'fas fa-chevron-up',
                delay: 500,
                visibleMobile: false,
                label: false
            },

            initialize: function(opts) {
                initialized = true;

                this
                    .setOptions(opts)
                    .build()
                    .events();

                return this;
            },

            setOptions: function(opts) {
                this.options = $.extend(true, {}, this.defaults, opts);

                return this;
            },

            build: function() {
                var self = this,
                    $el;

                // Base HTML Markup
                $el = $('<a />')
                    .addClass(self.options.buttonClass)
                    .attr({
                        'href': '#',
                    })
                    .append(
                        $('<i />')
                            .addClass(self.options.iconClass)
                    );

                // Visible Mobile
                if (!self.options.visibleMobile) {
                    $el.addClass('hidden-mobile');
                }

                // Label
                if (self.options.label) {
                    $el.append(
                        $('<span />').html(self.options.label)
                    );
                }

                this.options.wrapper.append($el);

                this.$el = $el;

                return this;
            },

            events: function() {
                var self = this,
                    _isScrolling = false;

                // Click Element Action
                self.$el.on('click', function(e) {
                    e.preventDefault();
                    $('body, html').animate({
                        scrollTop: 0
                    }, self.options.delay);
                    return false;
                });

                // Show/Hide Button on Window Scroll event.
                $(window).scroll(function() {

                    if (!_isScrolling) {

                        _isScrolling = true;

                        if ($(window).scrollTop() > self.options.offset) {

                            self.$el.stop(true, true).addClass('visible');
                            _isScrolling = false;

                        } else {

                            self.$el.stop(true, true).removeClass('visible');
                            _isScrolling = false;

                        }

                    }

                });

                return this;
            }

        }

    });

}).apply(this, [window.theme, jQuery]);

// Scrollable
(function(theme, $) {

    theme = theme || {};

    var instanceName = '__scrollable';

    var PluginScrollable = function($el, opts) {
        return this.initialize($el, opts);
    };

    PluginScrollable.updateModals = function() {
        PluginScrollable.updateBootstrapModal();
    };

    PluginScrollable.updateBootstrapModal = function() {
        var updateBoostrapModal;

        updateBoostrapModal = typeof $.fn.modal !== 'undefined';
        updateBoostrapModal = updateBoostrapModal && typeof $.fn.modal.Constructor !== 'undefined';
        updateBoostrapModal = updateBoostrapModal && typeof $.fn.modal.Constructor.prototype !== 'undefined';
        updateBoostrapModal = updateBoostrapModal && typeof $.fn.modal.Constructor.prototype.enforceFocus !== 'undefined';

        if ( !updateBoostrapModal ) {
            return false;
        }

        var originalFocus = $.fn.modal.Constructor.prototype.enforceFocus;
        $.fn.modal.Constructor.prototype.enforceFocus = function() {
            originalFocus.apply( this );

            var $scrollable = this.$element.find('.scrollable');
            if ( $scrollable ) {
                if ( $.isFunction($.fn['themePluginScrollable'])  ) {
                    $scrollable.themePluginScrollable();
                }

                if ( $.isFunction($.fn['nanoScroller']) ) {
                    $scrollable.nanoScroller();
                }
            }
        };
    };

    PluginScrollable.defaults = {
        contentClass: 'scrollable-content',
        paneClass: 'scrollable-pane',
        sliderClass: 'scrollable-slider',
        alwaysVisible: true,
        preventPageScrolling: true
    };

    PluginScrollable.prototype = {
        initialize: function($el, opts) {
            if ( $el.data( instanceName ) ) {
                return this;
            }

            this.$el = $el;

            this
                .setData()
                .setOptions(opts)
                .build();

            return this;
        },

        setData: function() {
            this.$el.data(instanceName, this);

            return this;
        },

        setOptions: function(opts) {
            this.options = $.extend(true, {}, PluginScrollable.defaults, opts, {
                wrapper: this.$el
            });

            return this;
        },

        build: function() {
            this.options.wrapper.nanoScroller(this.options);

            return this;
        }
    };

    // expose to scope
    $.extend(theme, {
        PluginScrollable: PluginScrollable
    });

    // jquery plugin
    $.fn.themePluginScrollable = function(opts) {
        return this.each(function() {
            var $this = $(this);

            if ($this.data(instanceName)) {
                return $this.data(instanceName);
            } else {
                return new PluginScrollable($this, opts);
            }

        });
    };

    $(function() {
        PluginScrollable.updateModals();
    });

}).apply(this, [window.theme, jQuery]);

// Select2
(function(theme, $) {

    theme = theme || {};

    var instanceName = '__select2';

    var PluginSelect2 = function($el, opts) {
        return this.initialize($el, opts);
    };

    PluginSelect2.defaults = {
        theme: 'bootstrap'
    };

    PluginSelect2.prototype = {
        initialize: function($el, opts) {
            if ( $el.data( instanceName ) ) {
                return this;
            }

            this.$el = $el;

            this
                .setData()
                .setOptions(opts)
                .build();

            return this;
        },

        setData: function() {
            this.$el.data(instanceName, this);

            return this;
        },

        setOptions: function(opts) {
            this.options = $.extend( true, {}, PluginSelect2.defaults, opts );

            return this;
        },

        build: function() {
            this.$el.select2( this.options );

            return this;
        }
    };

    // expose to scope
    $.extend(theme, {
        PluginSelect2: PluginSelect2
    });

    // jquery plugin
    $.fn.themePluginSelect2 = function(opts) {
        return this.each(function() {
            var $this = $(this);

            if ($this.data(instanceName)) {
                return $this.data(instanceName);
            } else {
                return new PluginSelect2($this, opts);
            }

        });
    }

}).apply(this, [window.theme, jQuery]);

// Slider
(function(theme, $) {

    theme = theme || {};

    var instanceName = '__slider';

    var PluginSlider = function($el, opts) {
        return this.initialize($el, opts);
    };

    PluginSlider.defaults = {

    };

    PluginSlider.prototype = {
        initialize: function($el, opts) {
            if ( $el.data( instanceName ) ) {
                return this;
            }

            this.$el = $el;

            this
                .setVars()
                .setData()
                .setOptions(opts)
                .build();

            return this;
        },

        setVars: function() {
            var $output = $( this.$el.data('plugin-slider-output') );
            this.$output = $output.get(0) ? $output : null;

            return this;
        },

        setData: function() {
            this.$el.data(instanceName, this);

            return this;
        },

        setOptions: function(opts) {
            var _self = this;
            this.options = $.extend( true, {}, PluginSlider.defaults, opts );

            if ( this.$output ) {
                $.extend( this.options, {
                    slide: function( event, ui ) {
                        _self.onSlide( event, ui );
                    }
                });
            }

            return this;
        },

        build: function() {
            this.$el.slider( this.options );

            return this;
        },

        onSlide: function( event, ui ) {
            if ( !ui.values ) {
                this.$output.val( ui.value );
            } else {
                this.$output.val( ui.values[ 0 ] + '/' + ui.values[ 1 ] );
            }

            this.$output.trigger('change');
        }
    };

    // expose to scope
    $.extend(theme, {
        PluginSlider: PluginSlider
    });

    // jquery plugin
    $.fn.themePluginSlider = function(opts) {
        return this.each(function() {
            var $this = $(this);

            if ($this.data(instanceName)) {
                return $this.data(instanceName);
            } else {
                return new PluginSlider($this, opts);
            }

        });
    }

}).apply(this, [window.theme, jQuery]);

// Spinner
(function(theme, $) {

    theme = theme || {};

    var instanceName = '__spinner';

    var PluginSpinner = function($el, opts) {
        return this.initialize($el, opts);
    };

    PluginSpinner.defaults = {
    };

    PluginSpinner.prototype = {
        initialize: function($el, opts) {
            if ( $el.data( instanceName ) ) {
                return this;
            }

            this.$el = $el;

            this
                .setData()
                .setOptions(opts)
                .build();

            return this;
        },

        setData: function() {
            this.$el.data(instanceName, this);

            return this;
        },

        setOptions: function(opts) {
            this.options = $.extend( true, {}, PluginSpinner.defaults, opts );

            return this;
        },

        build: function() {
            this.$el.spinner( this.options );

            return this;
        }
    };

    // expose to scope
    $.extend(theme, {
        PluginSpinner: PluginSpinner
    });

    // jquery plugin
    $.fn.themePluginSpinner = function(opts) {
        return this.each(function() {
            var $this = $(this);

            if ($this.data(instanceName)) {
                return $this.data(instanceName);
            } else {
                return new PluginSpinner($this, opts);
            }

        });
    }

}).apply(this, [window.theme, jQuery]);

// SummerNote
(function(theme, $) {

    theme = theme || {};

    var instanceName = '__summernote';

    var PluginSummerNote = function($el, opts) {
        return this.initialize($el, opts);
    };

    PluginSummerNote.defaults = {
        onfocus: function() {
            $( this ).closest( '.note-editor' ).addClass( 'active' );
        },
        onblur: function() {
            $( this ).closest( '.note-editor' ).removeClass( 'active' );
        }
    };

    PluginSummerNote.prototype = {
        initialize: function($el, opts) {
            if ( $el.data( instanceName ) ) {
                return this;
            }

            this.$el = $el;

            this
                .setData()
                .setOptions(opts)
                .build();

            return this;
        },

        setData: function() {
            this.$el.data(instanceName, this);

            return this;
        },

        setOptions: function(opts) {
            this.options = $.extend( true, {}, PluginSummerNote.defaults, opts );

            return this;
        },

        build: function() {
            this.$el.summernote( this.options );

            return this;
        }
    };

    // expose to scope
    $.extend(theme, {
        PluginSummerNote: PluginSummerNote
    });

    // jquery plugin
    $.fn.themePluginSummerNote = function(opts) {
        return this.each(function() {
            var $this = $(this);

            if ($this.data(instanceName)) {
                return $this.data(instanceName);
            } else {
                return new PluginSummerNote($this, opts);
            }

        });
    }

}).apply(this, [window.theme, jQuery]);

// TextArea AutoSize
(function(theme, $) {

    theme = theme || {};

    var initialized = false;
    var instanceName = '__textareaAutosize';

    var PluginTextAreaAutoSize = function($el, opts) {
        return this.initialize($el, opts);
    };

    PluginTextAreaAutoSize.defaults = {
    };

    PluginTextAreaAutoSize.prototype = {
        initialize: function($el, opts) {
            if (initialized) {
                return this;
            }

            this.$el = $el;

            this
                .setData()
                .setOptions(opts)
                .build();

            return this;
        },

        setData: function() {
            this.$el.data(instanceName, this);

            return this;
        },

        setOptions: function(opts) {
            this.options = $.extend( true, {}, PluginTextAreaAutoSize.defaults, opts );

            return this;
        },

        build: function() {

            autosize($(this.$el));

            return this;
        }
    };

    // expose to scope
    $.extend(theme, {
        PluginTextAreaAutoSize: PluginTextAreaAutoSize
    });

    // jquery plugin
    $.fn.themePluginTextAreaAutoSize = function(opts) {
        return this.each(function() {
            var $this = $(this);

            if ($this.data(instanceName)) {
                return $this.data(instanceName);
            } else {
                return new PluginTextAreaAutoSize($this, opts);
            }

        });
    }

}).apply(this, [window.theme, jQuery]);

// TimePicker
(function(theme, $) {

    theme = theme || {};

    var instanceName = '__timepicker';

    var PluginTimePicker = function($el, opts) {
        return this.initialize($el, opts);
    };

    PluginTimePicker.defaults = {
        disableMousewheel: true,
        icons: {
            up: 'fas fa-chevron-up',
            down: 'fas fa-chevron-down'
        }
    };

    PluginTimePicker.prototype = {
        initialize: function($el, opts) {
            if ( $el.data( instanceName ) ) {
                return this;
            }

            this.$el = $el;

            this
                .setData()
                .setOptions(opts)
                .build();

            return this;
        },

        setData: function() {
            this.$el.data(instanceName, this);

            return this;
        },

        setOptions: function(opts) {
            this.options = $.extend( true, {}, PluginTimePicker.defaults, opts );

            return this;
        },

        build: function() {
            this.$el.timepicker( this.options );

            return this;
        }
    };

    // expose to scope
    $.extend(theme, {
        PluginTimePicker: PluginTimePicker
    });

    // jquery plugin
    $.fn.themePluginTimePicker = function(opts) {
        return this.each(function() {
            var $this = $(this);

            if ($this.data(instanceName)) {
                return $this.data(instanceName);
            } else {
                return new PluginTimePicker($this, opts);
            }

        });
    }

}).apply(this, [window.theme, jQuery]);

// Toggle
(function(theme, $) {

    theme = theme || {};

    var instanceName = '__toggle';

    var PluginToggle = function($el, opts) {
        return this.initialize($el, opts);
    };

    PluginToggle.defaults = {
        duration: 350,
        isAccordion: false,
        addIcons: true
    };

    PluginToggle.prototype = {
        initialize: function($el, opts) {
            if ( $el.data( instanceName ) ) {
                return this;
            }

            this.$el = $el;

            this
                .setData()
                .setOptions(opts)
                .build();

            return this;
        },

        setData: function() {
            this.$el.data(instanceName, this);

            return this;
        },

        setOptions: function(opts) {
            this.options = $.extend(true, {}, PluginToggle.defaults, opts, {
                wrapper: this.$el
            });

            return this;
        },

        build: function() {
            var self = this,
                $wrapper = this.options.wrapper,
                $items = $wrapper.find('.toggle'),
                $el = null;

            $items.each(function() {
                $el = $(this);

                if(self.options.addIcons) {
                    $el.find('> label').prepend(
                        $('<i />').addClass('fas fa-plus'),
                        $('<i />').addClass('fas fa-minus')
                    );
                }

                if($el.hasClass('active')) {
                    $el.find('> p').addClass('preview-active');
                    $el.find('> .toggle-content').slideDown(self.options.duration);
                }

                self.events($el);
            });

            if(self.options.isAccordion) {
                self.options.duration = self.options.duration/2;
            }

            return this;
        },

        events: function($el) {
            var self = this,
                previewParCurrentHeight = 0,
                previewParAnimateHeight = 0,
                toggleContent = null;

            $el.find('> label').click(function(e) {

                var $this = $(this),
                    parentSection = $this.parent(),
                    parentWrapper = $this.parents('.toggle'),
                    previewPar = null,
                    closeElement = null;

                if(self.options.isAccordion && typeof(e.originalEvent) != 'undefined') {
                    closeElement = parentWrapper.find('.toggle.active > label');

                    if(closeElement[0] == $this[0]) {
                        return;
                    }
                }

                parentSection.toggleClass('active');

                // Preview Paragraph
                if(parentSection.find('> p').get(0)) {

                    previewPar = parentSection.find('> p');
                    previewParCurrentHeight = previewPar.css('height');
                    previewPar.css('height', 'auto');
                    previewParAnimateHeight = previewPar.css('height');
                    previewPar.css('height', previewParCurrentHeight);

                }

                // Content
                toggleContent = parentSection.find('> .toggle-content');

                if(parentSection.hasClass('active')) {

                    $(previewPar).animate({
                        height: previewParAnimateHeight
                    }, self.options.duration, function() {
                        $(this).addClass('preview-active');
                    });

                    toggleContent.slideDown(self.options.duration, function() {
                        if(closeElement) {
                            closeElement.trigger('click');
                        }
                    });

                } else {

                    $(previewPar).animate({
                        height: 0
                    }, self.options.duration, function() {
                        $(this).removeClass('preview-active');
                    });

                    toggleContent.slideUp(self.options.duration);

                }

            });
        }
    };

    // expose to scope
    $.extend(theme, {
        PluginToggle: PluginToggle
    });

    // jquery plugin
    $.fn.themePluginToggle = function(opts) {
        return this.map(function() {
            var $this = $(this);

            if ($this.data(instanceName)) {
                return $this.data(instanceName);
            } else {
                return new PluginToggle($this, opts);
            }

        });
    }

}).apply(this, [window.theme, jQuery]);

// Widget - Todo
(function(theme, $) {

    theme = theme || {};

    var instanceName = '__widgetTodoList';

    var WidgetTodoList = function($el, opts) {
        return this.initialize($el, opts);
    };

    WidgetTodoList.defaults = {
    };

    WidgetTodoList.prototype = {
        initialize: function($el, opts) {
            if ( $el.data( instanceName ) ) {
                return this;
            }

            this.$el = $el;

            this
                .setData()
                .setOptions(opts)
                .build()
                .events();

            return this;
        },

        setData: function() {
            this.$el.data(instanceName, this);

            return this;
        },

        setOptions: function(opts) {
            this.options = $.extend( true, {}, WidgetTodoList.defaults, opts );

            return this;
        },

        check: function( input, label ) {
            if ( input.is(':checked') ) {
                label.addClass('line-through');
            } else {
                label.removeClass('line-through');
            }
        },

        build: function() {
            var _self = this,
                $check = this.$el.find('.todo-check');

            $check.each(function () {
                var label = $(this).closest('li').find('.todo-label');
                _self.check( $(this), label );
            });

            return this;
        },

        events: function() {
            var _self = this,
                $remove = this.$el.find( '.todo-remove' ),
                $check = this.$el.find('.todo-check'),
                $window = $( window );

            $remove.on('click.widget-todo-list', function( ev ) {
                ev.preventDefault();
                $(this).closest("li").remove();
            });

            $check.on('change', function () {
                var label = $(this).closest('li').find('.todo-label');
                _self.check( $(this), label );
            });

            if ( $.isFunction( $.fn.sortable ) ) {
                this.$el.sortable({
                    sort: function(event, ui) {
                        var top = event.pageY - _self.$el.offset().top - (ui.helper.outerHeight(true) / 2);
                        ui.helper.css({'top' : top + 'px'});
                    }
                });
            }

            return this;
        }
    };

    // expose to scope
    $.extend(theme, {
        WidgetTodoList: WidgetTodoList
    });

    // jquery plugin
    $.fn.themePluginWidgetTodoList = function(opts) {
        return this.each(function() {
            var $this = $(this);

            if ($this.data(instanceName)) {
                return $this.data(instanceName);
            } else {
                return new WidgetTodoList($this, opts);
            }

        });
    }

}).apply(this, [window.theme, jQuery]);

// Widget - Toggle
(function(theme, $) {

    theme = theme || {};

    var instanceName = '__widgetToggleExpand';

    var WidgetToggleExpand = function($el, opts) {
        return this.initialize($el, opts);
    };

    WidgetToggleExpand.defaults = {
    };

    WidgetToggleExpand.prototype = {
        initialize: function($el, opts) {
            if ( $el.data( instanceName ) ) {
                return this;
            }

            this.$el = $el;

            this
                .setData()
                .setOptions(opts)
                .build()
                .events();

            return this;
        },

        setData: function() {
            this.$el.data(instanceName, this);

            return this;
        },

        setOptions: function(opts) {
            this.options = $.extend( true, {}, WidgetToggleExpand.defaults, opts );

            return this;
        },

        build: function() {
            return this;
        },

        events: function() {
            var _self = this,
                $toggler = this.$el.find( '.widget-toggle' );

            $toggler.on('click.widget-toggler', function() {
                _self.$el.hasClass('widget-collapsed') ? _self.expand( _self.$el ) : _self.collapse( _self.$el );
            });

            return this;
        },

        expand: function( content ) {
            content.children( '.widget-content-expanded' ).slideDown( 'fast', function() {
                $(this).css( 'display', '' );
                content.removeClass( 'widget-collapsed' );
            });
        },

        collapse: function( content ) {
            content.children('.widget-content-expanded' ).slideUp( 'fast', function() {
                content.addClass( 'widget-collapsed' );
                $(this).css( 'display', '' );
            });
        }
    };

    // expose to scope
    $.extend(theme, {
        WidgetToggleExpand: WidgetToggleExpand
    });

    // jquery plugin
    $.fn.themePluginWidgetToggleExpand = function(opts) {
        return this.each(function() {
            var $this = $(this);

            if ($this.data(instanceName)) {
                return $this.data(instanceName);
            } else {
                return new WidgetToggleExpand($this, opts);
            }

        });
    }

}).apply(this, [window.theme, jQuery]);

// Word Rotator
(function(theme, $) {

    theme = theme || {};

    var instanceName = '__wordRotator';

    var PluginWordRotator = function($el, opts) {
        return this.initialize($el, opts);
    };

    PluginWordRotator.defaults = {
        delay: 2000
    };

    PluginWordRotator.prototype = {
        initialize: function($el, opts) {
            if ( $el.data( instanceName ) ) {
                return this;
            }

            this.$el = $el;

            this
                .setData()
                .setOptions(opts)
                .build();

            return this;
        },

        setData: function() {
            this.$el.data(instanceName, this);

            return this;
        },

        setOptions: function(opts) {
            this.options = $.extend(true, {}, PluginWordRotator.defaults, opts, {
                wrapper: this.$el
            });

            return this;
        },

        build: function() {
            var $el = this.options.wrapper,
                itemsWrapper = $el.find(".wort-rotator-items"),
                items = itemsWrapper.find("> span"),
                firstItem = items.eq(0),
                firstItemClone = firstItem.clone(),
                itemHeight = firstItem.height(),
                currentItem = 1,
                currentTop = 0;

            itemsWrapper.append(firstItemClone);

            $el
                .height(itemHeight)
                .addClass("active");

            setInterval(function() {

                currentTop = (currentItem * itemHeight);

                itemsWrapper.animate({
                    top: -(currentTop) + "px"
                }, 300, function() {

                    currentItem++;

                    if(currentItem > items.length) {

                        itemsWrapper.css("top", 0);
                        currentItem = 1;

                    }

                });

            }, this.options.delay);

            return this;
        }
    };

    // expose to scope
    $.extend(theme, {
        PluginWordRotator: PluginWordRotator
    });

    // jquery plugin
    $.fn.themePluginWordRotator = function(opts) {
        return this.each(function() {
            var $this = $(this);

            if ($this.data(instanceName)) {
                return $this.data(instanceName);
            } else {
                return new PluginWordRotator($this, opts);
            }

        });
    }

}).apply(this, [window.theme, jQuery]);

// Navigation
(function($) {

    'use strict';

    var $items = $( '.nav-main li.nav-parent' );

    function expand( $li ) {
        $li.children( 'ul.nav-children' ).slideDown( 'fast', function() {
            $li.addClass( 'nav-expanded' );
            $(this).css( 'display', '' );
            ensureVisible( $li );
        });
    }

    function collapse( $li ) {
        $li.children('ul.nav-children' ).slideUp( 'fast', function() {
            $(this).css( 'display', '' );
            $li.removeClass( 'nav-expanded' );
        });
    }

    function ensureVisible( $li ) {
        var scroller = $li.offsetParent();
        if ( !scroller.get(0) ) {
            return false;
        }

        var top = $li.position().top;
        if ( top < 0 ) {
            scroller.animate({
                scrollTop: scroller.scrollTop() + top
            }, 'fast');
        }
    }

    function buildSidebarNav( anchor, prev, next, ev ) {
        if ( anchor.prop('href') ) {
            var arrowWidth = parseInt(window.getComputedStyle(anchor.get(0), ':after').width, 10) || 0;
            if (ev.offsetX > anchor.get(0).offsetWidth - arrowWidth) {
                ev.preventDefault();
            }
        }

        if ( prev.get( 0 ) !== next.get( 0 ) ) {
            collapse( prev );
            expand( next );
        } else {
            collapse( prev );
        }
    }

    $items.find('> a').on('click', function( ev ) {

        var $html   = $('html'),
            $window = $(window),
            $anchor = $( this ),
            $prev   = $anchor.closest('ul.nav').find('> li.nav-expanded' ),
            $next   = $anchor.closest('li'),
            $ev     = ev;

        if( $anchor.attr('href') == '#' ) {
            ev.preventDefault();
        }

        if( !$html.hasClass('sidebar-left-big-icons') ) {
            buildSidebarNav( $anchor, $prev, $next, $ev );
        } else if( $html.hasClass('sidebar-left-big-icons') && $window.width() < 768 ) {
            buildSidebarNav( $anchor, $prev, $next, $ev );
        }

    });

    // Chrome Fix
    $.browser.chrome = /chrom(e|ium)/.test(navigator.userAgent.toLowerCase());
    if( $.browser.chrome && !$.browser.mobile ) {
        var flag = true;
        $('.sidebar-left .nav-main li a').on('click', function(){
            flag = false;
            setTimeout(function(){
                flag = true;
            }, 200);
        });

        $('.nano').on('mouseenter', function(e){
            $(this).addClass('hovered');
        });

        $('.nano').on('mouseleave', function(e){
            if( flag ) {
                $(this).removeClass('hovered');
            }
        });
    }

    $('.nav-main a').filter(':not([href])').attr('href', '#');

}).apply(this, [jQuery]);

// Skeleton
(function(theme, $) {

    'use strict';

    theme = theme || {};

    var $body				= $( 'body' ),
        $html				= $( 'html' ),
        $window				= $( window ),
        isAndroid			= navigator.userAgent.toLowerCase().indexOf('android') > -1,
        isIpad      		= navigator.userAgent.match(/iPad/i) != null,
        updatingNanoScroll  = false;

    // mobile devices with fixed has a lot of issues when focus inputs and others...
    if ( typeof $.browser !== 'undefined' && $.browser.mobile && $html.hasClass('fixed') ) {
        $html.removeClass( 'fixed' ).addClass( 'scroll' );
    }

    var Skeleton = {

        options: {
            sidebars: {
                menu: '#content-menu',
                left: '#sidebar-left',
                right: '#sidebar-right'
            }
        },

        customScroll: ( !Modernizr.overflowscrolling && !isAndroid && $.fn.nanoScroller !== 'undefined'),

        initialize: function() {
            this
                .setVars()
                .build()
                .events();
        },

        setVars: function() {
            this.sidebars = {};

            this.sidebars.left = {
                $el: $( this.options.sidebars.left )
            };

            this.sidebars.right = {
                $el: $( this.options.sidebars.right ),
                isOpened: $html.hasClass( 'sidebar-right-opened' )
            };

            this.sidebars.menu = {
                $el: $( this.options.sidebars.menu ),
                isOpened: $html.hasClass( 'inner-menu-opened' )
            };

            return this;
        },

        build: function() {

            if ( typeof $.browser !== 'undefined' && $.browser.mobile ) {
                $html.addClass( 'mobile-device' );
            } else {
                $html.addClass( 'no-mobile-device' );
            }

            $html.addClass( 'custom-scroll' );
            if ( this.customScroll ) {
                this.buildSidebarLeft();
                this.buildContentMenu();
            }

            if( isIpad ) {
                this.fixIpad();
            }

            this.buildSidebarRight();

            return this;
        },

        events: function() {
            if ( this.customScroll ) {
                this.eventsSidebarLeft();
            }

            this.eventsSidebarRight();
            this.eventsContentMenu();

            if ( typeof $.browser !== 'undefined' && !this.customScroll && isAndroid ) {
                this.fixScroll();
            }

            return this;
        },

        fixScroll: function() {
            var _self = this;

            $window
                .on( 'sidebar-left-opened sidebar-right-toggle', function( e, data ) {
                    _self.preventBodyScrollToggle( data.added );
                });

        },

        fixIpad: function() {
            var _self = this;

            $('.header, .page-header, .content-body').on('click', function(){
                $html.removeClass('sidebar-left-opened');
            });
        },

        buildSidebarLeft: function() {

            var initialPosition = 0;

            this.sidebars.left.isOpened = !$html.hasClass( 'sidebar-left-collapsed' ) || $html.hasClass( 'sidebar-left-opened' );

            this.sidebars.left.$nano = this.sidebars.left.$el.find( '.nano' );

            if (typeof localStorage !== 'undefined') {
                this.sidebars.left.$nano.on('update', function(e, values) {
                    localStorage.setItem('sidebar-left-position', values.position);
                });

                if (localStorage.getItem('sidebar-left-position') !== null) {
                    initialPosition = localStorage.getItem('sidebar-left-position');
                    this.sidebars.left.$el.find( '.nano-content').scrollTop(initialPosition);
                }
            }

            this.sidebars.left.$nano.nanoScroller({
                scrollTop: initialPosition,
                alwaysVisible: true,
                preventPageScrolling: $html.hasClass( 'fixed' )
            });

            return this;
        },

        eventsSidebarLeft: function() {

            var _self = this,
                $nano = this.sidebars.left.$nano;

            var open = function() {
                if ( _self.sidebars.left.isOpened ) {
                    return close();
                }

                _self.sidebars.left.isOpened = true;

                $html.addClass( 'sidebar-left-opened' );

                $window.trigger( 'sidebar-left-toggle', {
                    added: true,
                    removed: false
                });

                $html.on( 'click.close-left-sidebar', function(e) {
                    e.stopPropagation();
                    close(e);
                });


            };

            var close = function(e) {
                if ( !!e && !!e.target && ($(e.target).closest( '.sidebar-left' ).get(0) || !$(e.target).closest( 'html' ).get(0)) ) {
                    e.preventDefault();
                    return false;
                } else {

                    $html.removeClass( 'sidebar-left-opened' );
                    $html.off( 'click.close-left-sidebar' );

                    $window.trigger( 'sidebar-left-toggle', {
                        added: false,
                        removed: true
                    });

                    _self.sidebars.left.isOpened = !$html.hasClass( 'sidebar-left-collapsed' );

                }
            };

            var updateNanoScroll = function() {
                if (updatingNanoScroll) {
                    if ( $.support.transition ) {
                        $nano.nanoScroller();
                        $nano
                            .one('bsTransitionEnd', updateNanoScroll)
                            .emulateTransitionEnd(150)
                    } else {
                        updateNanoScroll();
                    }

                    updatingNanoScroll = true;

                    setTimeout(function() {
                        updatingNanoScroll = false;
                    }, 200);
                }
            };

            var isToggler = function( element ) {
                return $(element).data('fire-event') === 'sidebar-left-toggle' || $(element).parents().data('fire-event') === 'sidebar-left-toggle';
            };

            this.sidebars.left.$el
                .on( 'click', function() {
                    updateNanoScroll();
                })
                .on('touchend', function(e) {
                    _self.sidebars.left.isOpened = !$html.hasClass( 'sidebar-left-collapsed' ) || $html.hasClass( 'sidebar-left-opened' );
                    if ( !_self.sidebars.left.isOpened && !isToggler(e.target) ) {
                        e.stopPropagation();
                        e.preventDefault();
                        open();
                    }
                });

            $nano
                .on( 'mouseenter', function() {
                    if ( $html.hasClass( 'sidebar-left-collapsed' ) ) {
                        $nano.nanoScroller();
                    }
                })
                .on( 'mouseleave', function() {
                    if ( $html.hasClass( 'sidebar-left-collapsed' ) ) {
                        $nano.nanoScroller();
                    }
                });

            $window.on( 'sidebar-left-toggle', function(e, toggle) {
                if ( toggle.removed ) {
                    $html.removeClass( 'sidebar-left-opened' );
                    $html.off( 'click.close-left-sidebar' );
                }

                // Recalculate Owl Carousel sizes
                $('.owl-carousel').trigger('refresh.owl.carousel');
            });

            return this;
        },

        buildSidebarRight: function() {
            this.sidebars.right.isOpened = $html.hasClass( 'sidebar-right-opened' );

            if ( this.customScroll ) {
                this.sidebars.right.$nano = this.sidebars.right.$el.find( '.nano' );

                this.sidebars.right.$nano.nanoScroller({
                    alwaysVisible: true,
                    preventPageScrolling: true
                });
            }

            return this;
        },

        eventsSidebarRight: function() {
            var _self = this;

            var open = function() {
                if ( _self.sidebars.right.isOpened ) {
                    return close();
                }

                _self.sidebars.right.isOpened = true;

                $html.addClass( 'sidebar-right-opened' );

                $window.trigger( 'sidebar-right-toggle', {
                    added: true,
                    removed: false
                });

                $html.on( 'click.close-right-sidebar', function(e) {
                    e.stopPropagation();
                    close(e);
                });
            };

            var close = function(e) {
                if ( !!e && !!e.target && ($(e.target).closest( '.sidebar-right' ).get(0) || !$(e.target).closest( 'html' ).get(0)) ) {
                    return false;
                }

                $html.removeClass( 'sidebar-right-opened' );
                $html.off( 'click.close-right-sidebar' );

                $window.trigger( 'sidebar-right-toggle', {
                    added: false,
                    removed: true
                });

                _self.sidebars.right.isOpened = false;
            };

            var bind = function() {
                $('[data-open="sidebar-right"]').on('click', function(e) {
                    var $el = $(this);
                    e.stopPropagation();

                    if ( $el.is('a') )
                        e.preventDefault();

                    open();
                });
            };

            this.sidebars.right.$el.find( '.mobile-close' )
                .on( 'click', function( e ) {
                    e.preventDefault();
                    $html.trigger( 'click.close-right-sidebar' );
                });

            bind();

            return this;
        },

        buildContentMenu: function() {
            if ( !$html.hasClass( 'fixed' ) ) {
                return false;
            }

            this.sidebars.menu.$nano = this.sidebars.menu.$el.find( '.nano' );

            this.sidebars.menu.$nano.nanoScroller({
                alwaysVisible: true,
                preventPageScrolling: true
            });

            return this;
        },

        eventsContentMenu: function() {
            var _self = this;

            var open = function() {
                if ( _self.sidebars.menu.isOpened ) {
                    return close();
                }

                _self.sidebars.menu.isOpened = true;

                $html.addClass( 'inner-menu-opened' );

                $window.trigger( 'inner-menu-toggle', {
                    added: true,
                    removed: false
                });

                $html.on( 'click.close-inner-menu', function(e) {

                    close(e);
                });

            };

            var close = function(e) {
                var hasEvent,
                    hasTarget,
                    isCollapseButton,
                    isInsideModal,
                    isInsideInnerMenu,
                    isInsideHTML,
                    $target;

                hasEvent = !!e;
                hasTarget = hasEvent && !!e.target;

                if ( hasTarget ) {
                    $target = $(e.target);
                }

                isCollapseButton = hasTarget && !!$target.closest( '.inner-menu-collapse' ).get(0);
                isInsideModal = hasTarget && !!$target.closest( '.mfp-wrap' ).get(0);
                isInsideInnerMenu = hasTarget && !!$target.closest( '.inner-menu' ).get(0);
                isInsideHTML = hasTarget && !!$target.closest( 'html' ).get(0);

                if ( (!isCollapseButton && (isInsideInnerMenu || !isInsideHTML)) || isInsideModal ) {
                    return false;
                }

                e.stopPropagation();

                $html.removeClass( 'inner-menu-opened' );
                $html.off( 'click.close-inner-menu' );

                $window.trigger( 'inner-menu-toggle', {
                    added: false,
                    removed: true
                });

                _self.sidebars.menu.isOpened = false;
            };

            var bind = function() {
                $('[data-open="inner-menu"]').on('click', function(e) {
                    var $el = $(this);
                    e.stopPropagation();

                    if ( $el.is('a') )
                        e.preventDefault();

                    open();
                });
            };

            bind();

            /* Nano Scroll */
            if ( $html.hasClass( 'fixed' ) ) {
                var $nano = this.sidebars.menu.$nano;

                var updateNanoScroll = function() {
                    if ( $.support.transition ) {
                        $nano.nanoScroller();
                        $nano
                            .one('bsTransitionEnd', updateNanoScroll)
                            .emulateTransitionEnd(150)
                    } else {
                        updateNanoScroll();
                    }
                };

                this.sidebars.menu.$el
                    .on( 'click', function() {
                        updateNanoScroll();
                    });
            }

            return this;
        },

        preventBodyScrollToggle: function( shouldPrevent, $el ) {
            setTimeout(function() {
                if ( shouldPrevent ) {
                    $body
                        .data( 'scrollTop', $body.get(0).scrollTop )
                        .css({
                            position: 'fixed',
                            top: $body.get(0).scrollTop * -1
                        })
                } else {
                    $body
                        .css({
                            position: '',
                            top: ''
                        })
                        .scrollTop( $body.data( 'scrollTop' ) );
                }
            }, 150);
        }

    };

    // expose to scope
    $.extend(theme, {
        Skeleton: Skeleton
    });

}).apply(this, [window.theme, jQuery]);

/* Browser Selector */
(function($) {
    $.extend({

        browserSelector: function() {

            // jQuery.browser.mobile (http://detectmobilebrowser.com/)
            (function(a){(jQuery.browser=jQuery.browser||{}).mobile=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))})(navigator.userAgent||navigator.vendor||window.opera);

            // Touch
            var hasTouch = 'ontouchstart' in window || navigator.msMaxTouchPoints;

            var u = navigator.userAgent,
                ua = u.toLowerCase(),
                is = function (t) {
                    return ua.indexOf(t) > -1;
                },
                g = 'gecko',
                w = 'webkit',
                s = 'safari',
                o = 'opera',
                h = document.documentElement,
                b = [(!(/opera|webtv/i.test(ua)) && /msie\s(\d)/.test(ua)) ? ('ie ie' + parseFloat(navigator.appVersion.split("MSIE")[1])) : is('firefox/2') ? g + ' ff2' : is('firefox/3.5') ? g + ' ff3 ff3_5' : is('firefox/3') ? g + ' ff3' : is('gecko/') ? g : is('opera') ? o + (/version\/(\d+)/.test(ua) ? ' ' + o + RegExp.jQuery1 : (/opera(\s|\/)(\d+)/.test(ua) ? ' ' + o + RegExp.jQuery2 : '')) : is('konqueror') ? 'konqueror' : is('chrome') ? w + ' chrome' : is('iron') ? w + ' iron' : is('applewebkit/') ? w + ' ' + s + (/version\/(\d+)/.test(ua) ? ' ' + s + RegExp.jQuery1 : '') : is('mozilla/') ? g : '', is('j2me') ? 'mobile' : is('iphone') ? 'iphone' : is('ipod') ? 'ipod' : is('mac') ? 'mac' : is('darwin') ? 'mac' : is('webtv') ? 'webtv' : is('win') ? 'win' : is('freebsd') ? 'freebsd' : (is('x11') || is('linux')) ? 'linux' : '', 'js'];

            c = b.join(' ');

            if ($.browser.mobile) {
                c += ' mobile';
            }

            if (hasTouch) {
                c += ' touch';
            }

            h.className += ' ' + c;

            // IE11 Detect
            var isIE11 = !(window.ActiveXObject) && "ActiveXObject" in window;

            if (isIE11) {
                $('html').removeClass('gecko').addClass('ie ie11');
                return;
            }

            // Dark and Boxed Compatibility
            if($('body').hasClass('dark')) {
                $('html').addClass('dark');
            }

            if($('body').hasClass('boxed')) {
                $('html').addClass('boxed');
            }

        }

    });

    $.browserSelector();

})(jQuery);

// Mailbox
(function(theme, $) {

    theme = theme || {};

    var instanceName = '__mailbox';

    var capitalizeString = function( str ) {
        return str.charAt( 0 ).toUpperCase() + str.slice( 1 );
    }

    var Mailbox = function($wrapper) {
        return this.initialize($wrapper);
    };

    Mailbox.prototype = {
        initialize: function($wrapper) {
            if ( $wrapper.data( instanceName ) ) {
                return this;
            }

            this.$wrapper = $wrapper;

            this
                .setVars()
                .setData()
                .build()
                .events();

            return this;
        },

        setVars: function() {
            this.view = capitalizeString( this.$wrapper.data( 'mailbox-view' ) || "" );

            return this;
        },

        setData: function() {
            this.$wrapper.data(instanceName, this);

            return this;
        },

        build: function() {

            if ( typeof this[ 'build' + this.view ] === 'function' ) {
                this[ 'build' + this.view ].call( this );
            }


            return this;
        },

        events: function() {
            if ( typeof this[ 'events' + this.view ] === 'function' ) {
                this[ 'events' + this.view ].call( this );
            }

            return this;
        },

        buildFolder: function() {
            this.$wrapper.find('.mailbox-email-list .nano').nanoScroller({
                alwaysVisible: true,
                preventPageScrolling: true
            });
        },

        buildEmail: function() {
            this.buildComposer();
        },

        buildCompose: function() {
            this.buildComposer();
        },

        buildComposer: function() {
            this.$wrapper.find( '#compose-field' ).summernote({
                height: 250,
                toolbar: [
                    ['style', ['style']],
                    ['font', ['bold', 'italic', 'underline', 'clear']],
                    ['fontname', ['fontname']],
                    ['color', ['color']],
                    ['para', ['ul', 'ol', 'paragraph']],
                    ['height', ['height']],
                    ['table', ['table']],
                    ['insert', ['link', 'picture', 'video']],
                    ['view', ['fullscreen']],
                    ['help', ['help']]
                ]
            });
        },

        eventsCompose: function() {
            var $composer,
                $contentBody,
                $html,
                $innerBody;

            $composer		= $( '.note-editable' );
            $contentBody	= $( '.content-body' );
            $html			= $( 'html' );
            $innerBody		= $( '.inner-body' );

            var adjustComposeSize = function() {
                var composerHeight,
                    composerTop,
                    contentBodyPaddingBottom,
                    innerBodyHeight,
                    viewportHeight,
                    viewportWidth;


                contentBodyPaddingBottom	= parseInt( $contentBody.css('paddingBottom'), 10 ) || 0;
                viewportHeight				= Math.max( document.documentElement.clientHeight, window.innerHeight || 0 );
                viewportWidth				= Math.max( document.documentElement.clientWidth, window.innerWidth || 0 );

                $composer.css( 'height', '' );

                if ( viewportWidth < 767 || $html.hasClass('mobile-device') ) {
                    composerTop	   = $composer.offset().top;
                    composerHeight = viewportHeight - composerTop;
                } else {
                    if ( $html.hasClass( 'fixed' ) ) {
                        composerTop	= $composer.offset().top;
                    } else {
                        composerTop	= $composer.position().top;
                    }
                    composerHeight = $innerBody.outerHeight() - composerTop;
                }

                composerHeight -= contentBodyPaddingBottom;

                $composer.css({
                    height: composerHeight
                });
            };

            var timer;
            $(window)
                .on( 'resize orientationchange sidebar-left-toggle mailbox-recalc', function() {
                    clearTimeout( timer );
                    timer = setTimeout(function() {
                        adjustComposeSize();
                    }, 100);
                });

            adjustComposeSize();
        }
    };

    // expose to scope
    $.extend(theme, {
        Mailbox: Mailbox
    });

    // jquery plugin
    $.fn.themeMailbox = function(opts) {
        return this.each(function() {
            var $this = $(this);

            if ($this.data(instanceName)) {
                return $this.data(instanceName);
            } else {
                return new Mailbox($this);
            }

        });
    }

}).apply(this, [window.theme, jQuery]);
