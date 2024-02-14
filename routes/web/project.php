<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Project/ProjectIndex');
});

Route::get('/cs50', function () {
    return Inertia::render('Project/CS50Project');
});
