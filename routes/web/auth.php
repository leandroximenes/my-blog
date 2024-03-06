<?php

use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Laravel\Socialite\Facades\Socialite;

Route::get('logout', function () {
    Auth::logout();
    return redirect('/');
});

Route::get('/github/redirect', function () {
    return Socialite::driver('github')->redirect();
});

Route::get('/github/callback', function () {
    $githubUser = Socialite::driver('github')->user();

    $user = User::firstOrCreate([
        'email' => $githubUser->getEmail(),
    ], [
        'name' => $githubUser->name,
        'email' => $githubUser->email,
        'password' => bcrypt('password'),
        'github_id' => $githubUser->id,
        'github_token' => $githubUser->token,
        'github_refresh_token' => $githubUser->refreshToken,
        'github_avatar' => $githubUser->avatar,
        'github_anickname' => $githubUser->nickname,
    ]);

    Auth::login($user);

    return redirect('/');
});
