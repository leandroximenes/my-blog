<?php

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
        Schema::table('users', function (Blueprint $table) {
            $table->string('github_id')->nullable();
            $table->string('github_nickname')->nullable();
            $table->string('github_avatar')->nullable();
            $table->string('github_token')->nullable();
            $table->string('github_refresh_token')->nullable();

            $table->string('google_id')->nullable();
            $table->string('google_token')->nullable();
            $table->string('google_refresh_token')->nullable();
            $table->string('google_avatar')->nullable();
            $table->string('google_nickname')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn('github_id');
            $table->dropColumn('github_nickname');
            $table->dropColumn('github_avatar');
            $table->dropColumn('github_token');
            $table->dropColumn('github_refresh_token');

            $table->dropColumn('google_id');
            $table->dropColumn('google_token');
            $table->dropColumn('google_refresh_token');
            $table->dropColumn('google_avatar');
            $table->dropColumn('google_nickname');
        });
    }
};
