<?php

use App\Http\Controllers\GithubUserController;
use App\Models\GithubRepos;
use App\Models\GithubUsers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Route;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::get('search/users', function () {
    $searchKey = request('q');
    $result = Http::get('https://api.github.com/search/users?q=' . $searchKey)->body();
    return $result;
});

Route::get('/users/{login}', function ($login) {
    $result = Http::get('https://api.github.com/users/' . $login)->body();
    return $result;
});

Route::get('/users/{login}/repos', function ($login) {
    $result = Http::get('https://api.github.com/users/' . $login . '/repos')->body();
    return $result;
});

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
