<script setup></script>

<template>
  <div>
    <div class="flex space-x-2">
      <h1 class="title">Articles</h1>
    </div>
    <hr class="my-4" />
    <div class="space-y-4">
      <article class="articles">
        <a class="title" href="posts/PestValidation"
          ><img src="./img/pest-output-min.png" alt="debug Laravel" />
        </a>
        <div class="content">
          <a class="title" href="posts/PestValidation"
            >Using PEST to Test Form Validations: Require, Type, Length, and More
          </a>
          <p>
            🧪 Every test matters. <br />
            🚀 In this post, we explored the integration of Laravel, Inertia, and Vue.js and how we
            can leverage PEST to test form validations effectively.
          </p>
        </div>
      </article>
      <article class="articles">
        <a class="title" href="posts/LaravelEnvironmentPost"
          ><img src="./img/debug_ini.png" alt="debug Laravel" />
        </a>
        <div class="content">
          <a class="title" href="posts/LaravelEnvironmentPost"
            >Laravel environment: docker, devcontainer, VS Code debug
          </a>
          <p>
            In this article, we'll explore how you can supercharge your Laravel development workflow
            by harnessing the power of Docker, DevContainer, and VS Code debug.
          </p>
          <p>
            🚀 Additionally, we'll also look at how you can custom your terminal to display the
            current git branch and status.
          </p>
          <p>
            I like and use this environment because I can install and test new software without
            affecting my local machine.
          </p>
        </div>
      </article>
    </div>
  </div>
</template>
