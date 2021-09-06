<?php

use App\Http\Controllers\GithubUserController;
use App\Models\GithubRepos;
use App\Models\GithubUsers;
use Illuminate\Http\Request;
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
    $login = GithubUsers::where('login', 'LIKE', '%' . $searchKey . '%');
    $name = GithubUsers::where('name', 'LIKE', '%' . $searchKey . '%');
    $searchResults = $login->union($name)->get();
    $count = count($searchResults);
    $result = [
        "total_count" => $count,
        "items" => $searchResults
    ];
    return $result;
});

Route::get('/users/{login}', function ($login) {
    $user = GithubUsers::where('login', $login)->first();
    return $user;
});

Route::get('/users/{login}/repos', function ($login) {
    $repos = GithubRepos::where('login', $login)->get();
    return $repos;
});

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
