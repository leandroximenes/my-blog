<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PostController extends Controller
{
    public function index()
    {
        Post::find(2)->increment('access_count');
        $posts = Post::all();
        return Inertia::render('Post/PostIndex', [
            'posts' => $posts,
        ]);
    }

    public function create()
    {
        //create a fake post
        $emptyPost = new Post();

        return Inertia::render('Post/PostForm', [
            'post' => $emptyPost,
            'action' => 'post',
            'url' => 'post'
        ]);
    }

    public function show(Post $post)
    {
        $post->increment('access_count');
        $commentaries = $post->commentaries->map(function ($commentary) {
            return [
                'id' => $commentary->id,
                'content' => $commentary->content,
                'user' => $commentary->user->name,
                'avatar' => $commentary->user->avatar,
                'created_at' => $commentary->created_at->diffForHumans(),
            ];
        });

        return Inertia::render("Post/$post->slug", [
            'commentaries' => $commentaries,
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required',
            'excerpt' => 'required',
            'content' => 'required',
            'slug' => 'required|unique:posts,slug',
        ]);

        Post::create($request->all());

        return redirect('/posts');
    }
}
