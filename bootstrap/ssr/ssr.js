import { mergeProps, useSSRContext, unref, ref, withCtx, createTextVNode, createSSRApp, h } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderComponent, ssrRenderClass, ssrRenderSlot } from "vue/server-renderer";
import { useForm, Link, createInertiaApp } from "@inertiajs/vue3";
import createServer from "@inertiajs/vue3/server";
import { renderToString } from "@vue/server-renderer";
const _imports_0$2 = "/build/assets/me-7NLqheFn.jpg";
const _imports_0$1 = "/build/assets/github-DJ4kBwNf.svg";
const _imports_2 = "/build/assets/linkedin-CsZAhWbA.svg";
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$6 = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "lg:flex lg:space-x-2" }, _attrs))}><img${ssrRenderAttr("src", _imports_0$2)} alt="me" class="p-1 mx-auto lg:w-1/2"><div class="p-2 lg:w-1/2"><h1 class="title text-center">About me</h1><div class="text-justify w-full space-y-10 mt-6 text-lg"><p> Hello there! 👋 I&#39;m married 💑 and a proud father of a daughter 👧, residing in Brasilia, DF 🇧🇷. </p><p>I&#39;m a Full Stack Developer, passionate about technology, and a lifelong learner.&quot;</p><p> With the values and expertise instilled during my tenure in the Brazilian Army as an Officer, coupled with my experience as a Full Stack Developer, I possess a robust background in leadership, teamwork, and problem-solving. I am passionate about constructing and managing web applications, constantly seeking new challenges and opportunities to enhance my skills and grow professionally. </p><div class="flex flex-col space-y-2"><a href="https://github.com/leandroximenes" target="_blank" class="flex items-center"><img class="h-6 w-6 mr-1"${ssrRenderAttr("src", _imports_0$1)} alt="github"> Github </a><a href="https://www.linkedin.com/in/leandroximenes" target="_blank" class="flex items-center"><img class="h-6 w-6 mr-1"${ssrRenderAttr("src", _imports_2)} alt="linkedin"> Linkedin </a></div></div></div></div>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/MainPage.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const MainPage = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$4]]);
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: MainPage
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$5 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  _push(`<h1${ssrRenderAttrs(_attrs)}>hello</h1>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Post/LaravelEnvironmentPost.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const LaravelEnvironmentPost = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$3]]);
const __vite_glob_0_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: LaravelEnvironmentPost
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$4 = {
  __name: "PostForm",
  __ssrInlineRender: true,
  props: {
    post: Object,
    action: String,
    url: String
  },
  setup(__props) {
    const props = __props;
    let form = useForm({
      title: props.post.title || "",
      slug: props.post.slug || "",
      excerpt: props.post.excerpt || "",
      content: props.post.content || ""
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="flex space-x-2"><h1 class="title">Create Post</h1></div><hr class="my-4"><form class="lg:w-3/4"><div class="mb-4"><label class="text-xl text-gray-600">Title</label><input type="text" name="title" class="border-2 border-gray-300 p-2 w-full"${ssrRenderAttr("value", unref(form).title)} placeholder="Title">`);
      if (unref(form).errors.title) {
        _push(`<div>${ssrInterpolate(unref(form).errors.title)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="mb-4"><label class="text-xl text-gray-600">Slug</label><input type="text" name="slug" class="border-2 border-gray-300 p-2 w-full"${ssrRenderAttr("value", unref(form).slug)} placeholder="Slug"></div><div class="mb-4"><label class="text-xl text-gray-600">Excerpt</label><br><textarea name="excerpt" class="border-2 border-gray-300 p-2 w-full" placeholder="Excerpt">${ssrInterpolate(unref(form).excerpt)}</textarea></div><div class="mb-4"><label class="text-xl text-gray-600">Content</label><br><textarea name="content" class="border-2 border-gray-300 p-2 w-full" placeholder="Content">${ssrInterpolate(unref(form).content)}</textarea></div><button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">${ssrInterpolate(unref(form).id ? "Update Post" : "Create Post")}</button></form></div>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Post/PostForm.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __vite_glob_0_2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$4
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$3 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><div class="flex space-x-2"><h1 class="title">Articles</h1></div><hr class="my-4"><div><article class="article"><div class="content"><a class="title" href="posts/LaravelEnvironmentPost">Laravel environment: docker, devcontainer, debug </a><p>How to set a Laravel environment with devcontainer, docker and debug</p></div></article></div></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Post/PostIndex.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const PostIndex = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$2]]);
const __vite_glob_0_3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: PostIndex
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$2 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<article${ssrRenderAttrs(_attrs)}><h1 class="title text-center">CS50 Final Project: A Real-Time Memory Game</h1><h2 class="text-sm py-2">Published on February 13th, 2024.</h2><div class="p-2 text-justify w-full space-y-10 mt-6 text-lg"><p> CS50&#39;s final project consists of an online memory game to be played with a friend, developed using Python (Flask and WebSockets), JavaScript, CSS, and SQLite. The link to play online can be found <a class="font-bold" href="https://memory-in-pairs.herokuapp.com/">here</a> . </p><p> The game includes a waiting room where users wait for their partners to connect while simultaneously keeping track of the scores of ongoing matches at that moment. Played in pairs, participants have the ability to view the cards flipped by their opponents, providing an engaging and strategic dynamic. </p><p> The main goal of this project was to explore the possibilities and experience of a full-duplex connection through WebSockets, an area in which I had no prior experience. Although it was a complex challenge with moments of uncertainty, the emotional support from family and friends was crucial in overcoming obstacles, allowing me to complete the project within the established deadline for submission to the CS50 course at Harvard University in the year 2022. </p><p> 🚀 Key Tech Stack: <br> * Backend: Python with Websockets <br> * Frontend: Pure JavaScript (no framework) <br> * Deployment: Heroku Server <br> * Database: SQLite3 </p><p> LINKS: <br><a class="font-bold" href="https://memory-in-pairs.herokuapp.com/" target="_blank">🎮 To play</a><br><a href="https://github.com/leandroximenes/memory-in-pairs/tree/memory-game" target="_blank" class="font-bold flex items-center"><img class="h-6 w-6 mr-1"${ssrRenderAttr("src", _imports_0$1)} alt="github"> Github </a></p><p>Check out the game in action on my YouTube link:</p></div><iframe class="mx-auto w-full h-60 lg:w-2/3 lg:h-96" src="https://www.youtube.com/embed/L4aAvp24ofY"></iframe></article>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Project/CS50Project.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const CS50Project = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
const __vite_glob_0_4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: CS50Project
}, Symbol.toStringTag, { value: "Module" }));
const _imports_0 = "/build/assets/cs50-CmGKmCZY.png";
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><div class="flex space-x-2"><h1 class="title">Projects</h1></div><hr class="my-4"><div><article class="article"><img${ssrRenderAttr("src", _imports_0)} alt="CS50"><div class="content"><a class="title" href="projects/cs50"> CS50 Final Project: A Real-Time Memory Game </a><p> CS50 Final Project completed in December 2022 - a dynamic memory game designed for real-time online play with friends </p><div class="stacks"><span>Python</span><span>Websockets</span><span>Javascript</span><span>Sqlite</span><span>Heroku</span></div></div></article></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Project/ProjectIndex.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ProjectIndex = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const __vite_glob_0_5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ProjectIndex
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main = {
  __name: "MainLayout",
  __ssrInlineRender: true,
  setup(__props) {
    const showNavbar = ref(false);
    const toggleNavbar = () => {
      showNavbar.value = !showNavbar.value;
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<main${ssrRenderAttrs(_attrs)}><header class="bg-gray-800 py-5 text-white text-xl"><div class="mx-auto flex justify-between items-center lg:container xl:w-8/12">`);
      _push(ssrRenderComponent(unref(Link), {
        class: "ml-4",
        href: "/"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Leandro Ximenes`);
          } else {
            return [
              createTextVNode("Leandro Ximenes")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<button data-collapse-toggle="navbar-default" type="button" class="mr-2" aria-controls="navbar-default" aria-expanded="false"><svg class="w-5 h-5 mr-2 lg:hidden" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"></path></svg></button><nav class="${ssrRenderClass([{ hidden: !showNavbar.value }, "w-full absolute mt-52 flex flex-col bg-gray-500 space-y-1 text-center lg:static lg:bg-transparent lg:flex lg:flex-row lg:space-x-4 lg:space-y-0 lg:mt-0 lg:w-auto lg:mr-4"])}">`);
      _push(ssrRenderComponent(unref(Link), {
        class: "bg-gray-600 py-2 lg:bg-transparent",
        onClick: toggleNavbar,
        href: "/"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`About me`);
          } else {
            return [
              createTextVNode("About me")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Link), {
        class: "bg-gray-600 py-2 lg:bg-transparent",
        onClick: toggleNavbar,
        href: "/posts"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Articles`);
          } else {
            return [
              createTextVNode("Articles")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Link), {
        class: "bg-gray-600 py-2 lg:bg-transparent",
        onClick: toggleNavbar,
        href: "/projects"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Projects`);
          } else {
            return [
              createTextVNode("Projects")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</nav></div></header><article class="mx-auto lg:container xl:w-8/12"><div class="bg-white rounded p-2">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></article></main>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layout/MainLayout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
createServer(
  (page) => createInertiaApp({
    page,
    render: renderToString,
    resolve: (name) => {
      const pages = /* @__PURE__ */ Object.assign({ "./Pages/MainPage.vue": __vite_glob_0_0, "./Pages/Post/LaravelEnvironmentPost.vue": __vite_glob_0_1, "./Pages/Post/PostForm.vue": __vite_glob_0_2, "./Pages/Post/PostIndex.vue": __vite_glob_0_3, "./Pages/Project/CS50Project.vue": __vite_glob_0_4, "./Pages/Project/ProjectIndex.vue": __vite_glob_0_5 });
      let page2 = pages[`./Pages/${name}.vue`];
      page2.default.layout = page2.default.layout || _sfc_main;
      return pages[`./Pages/${name}.vue`];
    },
    setup({ App, props, plugin }) {
      return createSSRApp({
        render: () => h(App, props)
      }).use(plugin);
    }
  })
);
