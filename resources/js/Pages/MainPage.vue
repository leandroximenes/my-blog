<script setup></script>

<template>
  <div class="lg:flex lg:space-x-2">
    <img
      src="/public/img/me.jpg"
      alt="me"
      class="p-1 mx-auto lg:w-1/2 min-h-[300px] max-h-[600px] object-contain"
    />
    <div class="p-2 lg:w-1/2">
      <h1 class="title text-center">About me</h1>
      <div class="text-justify w-full space-y-6 mt-6 text-lg">
        <p>
          Hello there! 👋 I'm married 💑 and a proud father of a daughter 👧, residing in Brasilia,
          DF 🇧🇷.
        </p>
        <p>I'm a Full Stack Developer, passionate about technology, and a lifelong learner."</p>
        <p>
          The values and expertise I developed as an Officer in the Brazilian Army, combined with my
          experience as a Full Stack Developer, have shaped my strong foundation in leadership,
          teamwork, and problem-solving.
        </p>
        <div>
          Now, as a Backend Developer at
          <a href="https://www.bignerve.com" target="_blank" class="text-blue-500 underline inline">
            BigNerve</a
          >, I focus in NestJS and continuously explore new technologies to drive innovative
          solutions and achieve company goals. I thrive on tackling complex challenges, refining my
          expertise, and contributing to impactful digital projects that align with the company's objectives.
        </div>
        <div class="flex flex-row-reverse gap-4">
          <a href="https://github.com/leandroximenes" target="_blank" class="flex items-center">
            <img class="h-6 w-6 mr-1" src="/public/img/github.svg" alt="github" /> Github
          </a>
          <a
            href="https://www.linkedin.com/in/leandroximenes"
            target="_blank"
            class="flex items-center"
          >
            <img class="h-6 w-6 mr-1" src="/public/img/linkedin.svg" alt="linkedin" /> Linkedin
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
