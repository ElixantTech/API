<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>
        
        <!-- development version, includes helpful console warnings -->
		<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet" type="text/css">
		
        <!-- Meta -->
        <meta name="csrf-token" content="{{ csrf_token() }}">
    </head>
    <body>
        <div id="app">
        	
        </div>
        
        <script src="{{ asset('js/app.js') }}" type="text/javascript"></script>
    </body>
</html>
