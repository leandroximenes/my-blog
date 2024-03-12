<?php


use App\Http\Controllers\CommentaryController;
use Illuminate\Support\Facades\Route;

Route::post('/store', [CommentaryController::class, 'store'])->name('commentaries.store');
