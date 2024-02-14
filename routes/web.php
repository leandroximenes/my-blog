<?php

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
    return Inertia::render('MainPage');
});
Route::get('/old', function () {
    return view('welcome');
});

Route::get('teste', function () {
    // $post = Post::factory()->create();

    // $post->save();

    $posts = \App\Models\Post::all();
    return [
        'posts' => $posts,
        'message' => 'ok'
    ];
});

Route::prefix('/projects')->group(__DIR__ . '/web/project.php');
Route::prefix('/posts')->group(__DIR__ . '/web/post.php');
