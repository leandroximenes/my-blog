<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Post extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'title',
        'excerpt',
        'content',
        'slug',
    ];

    /**
     * Get the user that owns the Commentary
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function commentaries()
    {
        return $this->hasMany(Commentary::class);
    }
}
