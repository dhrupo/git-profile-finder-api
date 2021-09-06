<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class GithubUsers extends Model
{
    use HasFactory;

    public function repos()
    {
        return $this->hasMany(GithubRepos::class, 'login', 'login');
    }
}
