<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return redirect('platform.dashboard');
})->middleware('auth:web');

Auth::routes();

Route::get('/dashboard', 'HomeController@index')->name('platform.dashboard')->middleware('auth:web');
