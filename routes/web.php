<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home');
});
Route::get('/about/{name}', function () {
    return Inertia::render('About', [
        'user' => 'Yanik'
    ]);
});
