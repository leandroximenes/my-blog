<?php

use App\Http\Controllers\PostController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    // return view('welcome');
    return Inertia::render('Home');
});

Route::get('teste', function () {
    \App\Models\Post::factory()->create();

    $posts = \App\Models\Post::all();
    return [
        'posts' => $posts,
        'message' => 'ok'
    ];
});

Route::get('/posts', [PostController::class, 'index'])->name('post.index');
Route::get('/post', [PostController::class, 'create'])->name('post.create');
Route::post('/post', [PostController::class, 'store'])->name('post.store');

Route::get('/posts/{post:slug}', [PostController::class, 'show'])->name('show');
Route::get('/posts/{post:slug}/edit', [PostController::class, 'edit'])->name('post.edit');
Route::put('/posts/{post:slug}', [PostController::class, 'update'])->name('post.update');
