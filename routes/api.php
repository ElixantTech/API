<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where all API routes are defined.
|
*/
Route::get('/redirect', function () {
    $query = http_build_query([
        'client_id' => 'client-id',
        'redirect_uri' => 'https://api.elixant.io/callback',
        'response_type' => 'code',
        'scope' => '',
    ]);
    
    return redirect('https://api.elixant.io/oauth/authorize?'.$query);
});

Route::get('/callback', function (Request $request) {
    $http = new GuzzleHttp\Client;
    
    $response = $http->post('https://api.elixant.io/oauth/token', [
        'form_params' => [
            'grant_type' => 'authorization_code',
            'client_id' => 'client-id',
            'client_secret' => 'client-secret',
            'redirect_uri' => 'https://api.elixant.io/callback',
            'code' => $request->code,
        ],
    ]);
    
    return json_decode((string) $response->getBody(), true);
});