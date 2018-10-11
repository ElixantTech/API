<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, shrink-to-fit=no" />

    <title>{{ config('app.name') }} // @yield('page_title', 'Platform')</title>

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <script src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.16/webfont.js"></script>
    <script>
        WebFont.load({
            google: {"families":["Montserrat:300,400,500,600,700","Roboto:300,400,500,600,700"]},
            active: function() {
                sessionStorage.fonts = true;
            }
        });
    </script>

    <link href="{{ asset('assets/vendors/base/vendors.bundle.css') }}" rel="stylesheet" type="text/css" />
    <link href="{{ asset('assets/demo/demo4/base/style.bundle.css') }}" rel="stylesheet" type="text/css" />
</head>
<body id="app" style="background-image: {{ url('assets/app/media/img/bg/bg-1.jpg') }}" class="m-page--fluid m-page--loading-enabled m-page--loading m-header--static m-aside-left--enabled m-aside-left--offcanvas m-footer--push m-aside--offcanvas-default">

<div class="m-page-loader m-page-loader--base">
    <div class="m-spinner m-spinner--brand"></div>
</div>

<div class="m-grid m-grid--hor m-grid--root m-page">
    @yield('page')
</div>

<div id="m_scroll_top" class="m-scroll-top">
    <i class="la la-arrow-up"></i>
</div>

<script src="{{ asset('assets/vendors/base/vendors.bundle.js') }}" type="text/javascript"></script>
<script src="{{ asset('assets/demo/demo4/base/scripts.bundle.js') }}" type="text/javascript"></script>

<script src="{{ asset('assets/app/js/dashboard.js') }}" type="text/javascript"></script>

<script src="{{ asset('assets/platform/manifest.js') }}"></script>
<script src="{{ asset('assets/platform/vendor.js') }}"></script>
<script src="{{ asset('assets/platform/app.js') }}"></script>
</body>
</html>
