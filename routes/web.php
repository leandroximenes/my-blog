<?php

use App\Models\Post;
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
    Post::find(1)->increment('access_count');
    return Inertia::render('MainPage');
});
Route::get('/access', function () {
    $posts = Post::all()->sortByDesc('access_count');
    return Inertia::render('AccessCount', ['accesses' => $posts]);
});


Route::prefix('/projects')->group(__DIR__ . '/web/project.php');
Route::prefix('/posts')->group(__DIR__ . '/web/post.php');

Route::get('/old', function () {
    return view('welcome');
});
Route::get('teste', function () {
    $posts = Post::all();
    return [
        'posts' => $posts,
        'message' => 'ok'
    ];
});
