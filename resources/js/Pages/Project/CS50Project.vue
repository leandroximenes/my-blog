<script setup>
import { Head } from '@inertiajs/vue3'
</script>

<template>
  <Head>
    <title>CS50 Final Project: A Real-Time Memory Game</title>
    <meta
      name="description"
      content="Laravel environment: docker, devcontainer and VS Code debug"
    />
    <meta name="keywords" content="Python, Websockets, Javascript, Sqlite, Heroku" />
  </Head>
  <article>
    <h1 class="title text-center">CS50 Final Project: A Real-Time Memory Game</h1>
    <h2 class="text-sm py-2">Published on February 18th, 2023.</h2>
    <div class="p-2 text-justify w-full space-y-10 mt-6 text-lg">
      <p>
        CS50's final project consists of an online memory game to be played with a friend, developed
        using Python (Flask and WebSockets), JavaScript, CSS, and SQLite. The link to play online
        can be found <a class="font-bold" href="https://memory-in-pairs.herokuapp.com/">here</a> .
      </p>

      <p>
        The game includes a waiting room where users wait for their partners to connect while
        simultaneously keeping track of the scores of ongoing matches at that moment. Played in
        pairs, participants have the ability to view the cards flipped by their opponents, providing
        an engaging and strategic dynamic.
      </p>

      <p>
        The main goal of this project was to explore the possibilities and experience of a
        full-duplex connection through WebSockets, an area in which I had no prior experience.
        Although it was a complex challenge with moments of uncertainty, the emotional support from
        family and friends was crucial in overcoming obstacles, allowing me to complete the project
        within the established deadline for submission to the CS50 course at Harvard University in
        the year 2022.
      </p>

      <p>
        🚀 Key Tech Stack: <br />
        * Backend: Python with Websockets <br />
        * Frontend: Pure JavaScript (no framework) <br />
        * Deployment: Heroku Server <br />
        * Database: SQLite3
      </p>

      <p>
        LINKS: <br />
        <a class="font-bold" href="https://memory-in-pairs.herokuapp.com/" target="_blank"
          >🎮 To play</a
        ><br />
        <a
          href="https://github.com/leandroximenes/memory-in-pairs/tree/memory-game"
          target="_blank"
          class="font-bold flex items-center"
        >
          <img class="h-6 w-6 mr-1" src="/public/img/github.svg" alt="github" /> Github
        </a>
      </p>

      <p>Check out the game in action on my YouTube link:</p>
    </div>
    <iframe
      class="mx-auto w-full h-60 lg:w-2/3 lg:h-96"
      src="https://www.youtube.com/embed/L4aAvp24ofY"
    >
    </iframe>
  </article>
</template>
