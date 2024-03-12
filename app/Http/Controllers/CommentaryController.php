<?php

namespace App\Http\Controllers;

use App\Models\Commentary;
use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class CommentaryController extends Controller
{
    public function store(Request $request)
    {
        try {
            $validator = Validator::make($request->all(), [
                'content' => 'required|string',
                'post_slug' => 'required|string|exists:posts,slug'
            ]);

            if ($validator->fails()) {
                throw new \Exception($validator->errors()->first(), 1);
            }

            $post = Post::where('slug', $request->post_slug)->first();
            $commentary = new Commentary();
            $commentary->content = $request->content;
            $commentary->post_id = $post->id;
            $commentary->user_id = auth()->user()->id;
            $commentary->save();

            return route('post.show', ['slug' => $post->slug]);
        } catch (\Exception $e) {
            return back()
                ->with('message', __('alerts.error', ['detail' => $e->getMessage()]))
                ->withErrors($validator)
                ->withInput();
        }
    }
}
