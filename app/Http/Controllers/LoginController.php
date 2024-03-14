<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Laravel\Socialite\Facades\Socialite;

class LoginController extends Controller
{

    public function logout()
    {
        Auth::logout();
        return redirect('/');
    }

    public function redirect($plataform)
    {
        return Socialite::driver($plataform)->redirect();
    }

    public function callback($plataform)
    {
        $plataformUser = Socialite::driver($plataform)->user();

        $user = User::firstOrCreate([
            'email' => $plataformUser->getEmail(),
        ], [
            'name' => $plataformUser->getName(),
            'email' => $plataformUser->getEmail(),
            'password' => bcrypt('password'),
            'avatar' => $plataformUser->getAvatar(),
            'nickname' => $plataformUser->getNickname(),
        ]);

        Auth::login($user);

        return redirect('/auth/success');
    }
}
