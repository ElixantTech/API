<!DOCTYPE html>

<html lang="{{ App::getLocale() }}" class="smart-style-2">
<head>
    <title>Elixant Platform // @yield('title', 'Dashboard')</title>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans:400italic,700italic,300,400,500,700">

    <link rel="shortcut icon" href="{{ asset('assets/img/favicon/favicon.ico') }}" type="image/x-icon">
    <link rel="icon" href="{{ asset('assets/img/favicon/favicon.ico') }}" type="image/x-icon">

    <link rel="stylesheet" media="screen, print" href="{{ asset('assets/vendors/vendors.bundle.css') }}">
    <link rel="stylesheet" media="screen, print" href="{{ asset('assets/app/app.bundle.css') }}">

    <script src="{{ asset('assets/platform/platform.js' }}" defer />
</head>
<body id="platform">
    <Platform />

    <script src="{{ asset('assets/vendors/vendors.bundle.js') }}"></script>
    <script src="{{ asset('assets/app/app.bundle.js') }}"></script>
</body>
</html>
