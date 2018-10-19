<!DOCTYPE html>

<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" class="header-fixed sidebar-left-sm">
<head>
    <title>Elixant Platform // @yield('title', 'Dashboard')</title>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans:400italic,700italic,300,400,500,700">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <link rel="shortcut icon" href="{{ asset('assets/img/favicon/favicon.ico') }}" type="image/x-icon">
    <link rel="icon" href="{{ asset('assets/img/favicon/favicon.ico') }}" type="image/x-icon">

    <link rel="stylesheet" media="screen, print" href="{{ asset('assets/app/app.bundle.css') }}">
</head>
<body>

    <div id="platform">
        <Platform></Platform>
    </div>

    <script src="{{ asset('assets/app/js/manifest.js') }}"></script>
    <script src="{{ asset('assets/app/js/vendor.js') }}"></script>
    <script src="{{ asset('assets/app/app.bundle.js') }}"></script>
</body>
</html>
