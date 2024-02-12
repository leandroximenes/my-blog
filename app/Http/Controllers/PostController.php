<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PostController extends Controller
{
    public function index()
    {
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
