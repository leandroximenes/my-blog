<?php

use App\Http\Controllers\PostController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [PostController::class, 'index'])->name('post.index');
Route::get('/LaravelEnvironmentPost', function () {
    return Inertia::render('Post/LaravelEnvironmentPost');
});
Route::get('/PestValidation', function () {
    return Inertia::render('Post/PestValidation');
});


// Route::get('/post', [PostController::class, 'create'])->name('post.create');
// Route::post('/post', [PostController::class, 'store'])->name('post.store');
// Route::get('/posts/{post:slug}', [PostController::class, 'show'])->name('show');
// Route::get('/posts/{post:slug}/edit', [PostController::class, 'edit'])->name('post.edit');
// Route::put('/posts/{post:slug}', [PostController::class, 'update'])->name('post.update');
