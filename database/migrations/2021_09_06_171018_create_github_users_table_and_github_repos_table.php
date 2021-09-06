<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateGithubUsersTableAndGithubReposTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('github_repos', function (Blueprint $table) {
            $table->id()->key();
            $table->string("name");
            $table->string("html_url");
            $table->string("stargazers_count");
            $table->string("watchers_count");
            $table->string("language");
            $table->string("login");
            $table->timestamps();
        });

        Schema::create('github_users', function (Blueprint $table) {
            $table->id();
            $table->string('login')->unique();
            $table->string("name");
            $table->string('avatar_url');
            $table->string('html_url');
            $table->string('company')->nullable();
            $table->string('bio');
            $table->integer('followers');
            $table->integer('following');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('github_users_table_and_github_repos');
    }
}
