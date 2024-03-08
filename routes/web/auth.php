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

Route::get('/google/redirect', function () {
    return Socialite::driver('google')->redirect();
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
        'github_nickname' => $githubUser->nickname,
    ]);

    Auth::login($user);

    return redirect('/auth/success');
});

Route::get('/google/callback', function () {
    $googleUser = Socialite::driver('google')->user();

    $user = User::firstOrCreate([
        'email' => $googleUser->getEmail(),
    ], [
        'name' => $googleUser->name,
        'email' => $googleUser->email,
        'password' => bcrypt('password'),
        'google_id' => $googleUser->id,
        'google_token' => $googleUser->token,
        'google_refresh_token' => $googleUser->refreshToken,
        'google_avatar' => $googleUser->avatar,
        'google_nickname' => $googleUser->nickname,
    ]);

    Auth::login($user);

    return redirect('/auth/success');
});


Route::get('/success', function () {
    return view('successLogin');
});
