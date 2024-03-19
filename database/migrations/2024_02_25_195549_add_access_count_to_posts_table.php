<?php

use App\Models\Post;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('posts', function (Blueprint $table) {
            Schema::table('posts', function (Blueprint $table) {
                $table->unsignedInteger('access_count')->default(0)->after('content');
            });
        });

        Post::create([
            'id' => 1,
            'title' => 'Home page',
            'excerpt' => 'This is a home page.',
            'content' => 'Home page is a page that contains info about me.',
            'slug' => 'home',
            'access_count' => 799,
        ]);

        Post::create([
            'id' => 2,
            'title' => 'Posts page',
            'excerpt' => 'This is a list posts page.',
            'content' => 'Posts page is a page that contains list of posts.',
            'slug' => 'PostIndex',
            'access_count' => 107,
        ]);

        Post::create([
            'id' => 3,
            'title' => 'Project page',
            'excerpt' => 'This is a project page.',
            'content' => 'Project page is a page that contains list of project.',
            'slug' => 'ProjectIndex',
            'access_count' => 44,
        ]);

        Post::create([
            'id' => 4,
            'title' => 'CS50 Project',
            'excerpt' => 'This is a CS50 project page.',
            'content' => 'CS50 project page is a page that contains info about CS50 project.',
            'slug' => 'CS50Project',
            'access_count' => 23,
        ]);

        Post::create([
            'id' => 5,
            'title' => 'Laravel Environment Post',
            'excerpt' => 'This is a Laravel environment post page.',
            'content' => 'Laravel environment post page is a page that contains info about Laravel environment post.',
            'slug' => 'LaravelEnvironmentPost',
            'access_count' => 522,
        ]);

        Post::create([
            'id' => 6,
            'title' => 'Pest Validation',
            'excerpt' => 'This is a Pest validation page.',
            'content' => 'Pest validation page is a page that contains info about Pest validation.',
            'slug' => 'PestValidation',
            'access_count' => 727,
        ]);
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('posts', function (Blueprint $table) {
            Schema::table('posts', function (Blueprint $table) {
                $table->dropColumn('access_count');
            });
        });
    }
};
