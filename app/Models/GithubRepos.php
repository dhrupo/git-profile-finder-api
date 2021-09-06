<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class GithubRepos extends Model
{
    use HasFactory;

    public function users()
    {
        return $this->belongsTo(GithubUsers::class, 'login', 'login');
    }
}
