<?php

use App\Models\Post;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    Post::find(3)->increment('access_count');
    return Inertia::render('Project/ProjectIndex');
});

Route::get('/cs50', function () {
    Post::find(4)->increment('access_count');
    return Inertia::render('Project/CS50Project');
});
