<?php

use App\Http\Controllers\LoginController;
use Illuminate\Support\Facades\Route;

Route::get('/logout', [LoginController::class, 'logout']);

Route::get('/{plataform}/redirect', [LoginController::class, 'redirect']);

Route::get('/{plataform}/callback', [LoginController::class, 'callback']);

Route::get('/success', function () {
    return view('successLogin');
});
