<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\User;

class LoginController extends Controller
{
    public function login(Request $request)
    {
        $cred = $request->validate([
            'email'     => 'email|required',
            'password'  => 'required'
        ]);

        if(!auth()->attempt($cred)) 
        {
            return response(['message' => 'Invalid Credentials'],401);
        }

        $accessToken = auth()->user()->createToken('authToken')->accessToken;
        return response(['user' => auth()->user(), 'accessToken' => $accessToken]);
        
    }

    public function register(Request $request)
    {
        $cred = $request->validate([
            'email'     => 'email|required',
            'password'  => 'required|confirmed',
            'name'      => 'required',
        ]);
        
        $cred['password'] = bcrypt($cred['password']);

        $user = User::create($cred);

        $accessToken = $user->createToken('authToken')->accessToken;
        return response(['user' => $user, 'accessToken' => $accessToken]);
    }
}
