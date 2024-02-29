import { mergeProps, unref, useSSRContext, withCtx, createVNode, ref, createTextVNode, createSSRApp, h } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderAttr, ssrRenderComponent, ssrRenderClass, ssrRenderSlot } from "vue/server-renderer";
import { Head, useForm, Link, createInertiaApp } from "@inertiajs/vue3";
import VCodeBlock from "@wdns/vue-code-block";
import createServer from "@inertiajs/vue3/server";
import { renderToString } from "@vue/server-renderer";
const _sfc_main$9 = {
  __name: "AccessCount",
  __ssrInlineRender: true,
  props: {
    accesses: Array
  },
  setup(__props) {
    const props = __props;
    const acc = props.accesses;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex justify-center" }, _attrs))}><table class="table-default"><thead><tr><th>Page</th><th>Access Count</th></tr></thead><tbody><!--[-->`);
      ssrRenderList(unref(acc), (access) => {
        _push(`<tr><td>${ssrInterpolate(access.title)}</td><td>${ssrInterpolate(access.access_count)}</td></tr>`);
      });
      _push(`<!--]--></tbody></table></div>`);
    };
  }
};
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/AccessCount.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$9
}, Symbol.toStringTag, { value: "Module" }));
const _imports_0$5 = "/build/assets/me-7NLqheFn.jpg";
const _imports_0$4 = "/build/assets/github-DJ4kBwNf.svg";
const _imports_2$2 = "/build/assets/linkedin-CsZAhWbA.svg";
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$8 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "lg:flex lg:space-x-2" }, _attrs))}><img${ssrRenderAttr("src", _imports_0$5)} alt="me" class="p-1 mx-auto lg:w-1/2"><div class="p-2 lg:w-1/2"><h1 class="title text-center">About me</h1><div class="text-justify w-full space-y-10 mt-6 text-lg"><p> Hello there! 👋 I&#39;m married 💑 and a proud father of a daughter 👧, residing in Brasilia, DF 🇧🇷. </p><p>I&#39;m a Full Stack Developer, passionate about technology, and a lifelong learner.&quot;</p><p> With the values and expertise instilled during my tenure in the Brazilian Army as an Officer, coupled with my experience as a Full Stack Developer, I possess a robust background in leadership, teamwork, and problem-solving. I am passionate about constructing and managing web applications, constantly seeking new challenges and opportunities to enhance my skills and grow professionally. </p><div class="flex flex-col space-y-2"><a href="https://github.com/leandroximenes" target="_blank" class="flex items-center"><img class="h-6 w-6 mr-1"${ssrRenderAttr("src", _imports_0$4)} alt="github"> Github </a><a href="https://www.linkedin.com/in/leandroximenes" target="_blank" class="flex items-center"><img class="h-6 w-6 mr-1"${ssrRenderAttr("src", _imports_2$2)} alt="linkedin"> Linkedin </a></div></div></div></div>`);
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/MainPage.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const MainPage = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$2]]);
const __vite_glob_0_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: MainPage
}, Symbol.toStringTag, { value: "Module" }));
const _imports_0$3 = "/build/assets/devcontainerfolder-DTN3fVqK.png";
const _imports_1$2 = "/build/assets/vsextension-BUuXiwhS.png";
const _imports_2$1 = "/build/assets/dockerfile-C_VCj5mP.png";
const _imports_3$1 = "/build/assets/debug-CtGYDOVf.png";
const _sfc_main$7 = {
  __name: "BashBlock",
  __ssrInlineRender: true,
  props: {
    code: {
      type: String,
      required: true
    },
    user: {
      type: String,
      default: "no-root"
    }
  },
  setup(__props) {
    const props = __props;
    const userSimbol = props.user === "root" ? "#" : "$";
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-row w-full bg-black rounded-xl content-center items-center !p-0 !m-0" }, _attrs))}><span class="-mt-2.5 ml-4 mr-0 text-gray-400">${ssrInterpolate(unref(userSimbol))}</span>`);
      _push(ssrRenderComponent(unref(VCodeBlock), mergeProps(_ctx.$attrs, {
        code: __props.code,
        class: "w-full p-0 m-0"
      }), null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/BashBlock.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const devcontainer = `// https://aka.ms/devcontainer.json
{
	"name": "Existing Docker Compose (Extend)",
	"dockerComposeFile": [
		"../docker-compose.yml"
	],
	"service": "laravel.test",
	"workspaceFolder": "/var/www/html",
	"customizations": {
		"vscode": {
			"extensions": [
                "bmewburn.vscode-intelephense-client",
                "xdebug.php-debug"
			],
			"settings": {}
		}
	},
	"remoteUser": "sail",
	"postCreateCommand": "chown -R 1000:1000 /var/www/html 2>/dev/null || true"
	// "forwardPorts": [],
	// "runServices": [],
	// "shutdownAction": "none",
}`;
const dockerCompose = `version: '3'
services:
    laravel.test:
    build:
        context: ./.devcontainer/vendor-example/laravel/sail/runtimes/8.3
...
        ports:
...
            - '9003:9003'
...
`;
const cpCommand = `$ mkdir -p .devcontainer/vendor-example/laravel/sail/runtimes/
$ cp -r vendor/laravel/sail/runtimes/8.3 .devcontainer/vendor-example/laravel/sail/runtimes/8.3
`;
const dockerfile = `
...
RUN apt-get update \\
...
&& rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

# My customizations
RUN apt-get update \\
    && apt-get install -y sudo nano git curl \\
    && curl -fsSL https://cli.github.com/packages/githubcli-archive-keyring.gpg | sudo gpg --dearmor -o /usr/share/keyrings/githubcli-archive-keyring.gpg \\
    && chmod go+r /usr/share/keyrings/githubcli-archive-keyring.gpg \\
    && echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/githubcli-archive-keyring.gpg] https://cli.github.com/packages stable main" | sudo tee /etc/apt/sources.list.d/github-cli.list > /dev/null \\
    && apt update \\
    && apt install gh -y

# ...
RUN useradd -ms /bin/bash --no-user-group -g $WWWGROUP -u 1337 sail
...

# allow devContainer use sudo without password
RUN echo sail ALL=\\(root\\) NOPASSWD:ALL > /etc/sudoers.d/sail \\
    && chmod 0440 /etc/sudoers.d/sail
`;
const phpini = `[XDebug]
xdebug.mode=develop,debug
xdebug.start_with_request=yes
xdebug.discover_client_host=0
xdebug.client_host=host.docker.internal
`;
const startContainer = `#!/usr/bin/env bash

if [ ! -z "$WWWUSER" ]; then
    usermod -u $WWWUSER sail
fi

if [ ! -d /.composer ]; then
    mkdir /.composer
fi

chmod -R ugo+rw /.composer

if [ $# -gt 0 ]; then
    exec gosu $WWWUSER "$@"
else
    # Add custom Git branch name and status to ~/.bashrc
    echo 'parse_git_branch() {
        branch=$(git symbolic-ref HEAD 2> /dev/null || git describe --tags --exact-match 2> /dev/null || git rev-parse --short HEAD 2> /dev/null)
        if [[ -n $branch ]]; then
            branch=$(basename "\${branch}")
            status=$(git status --porcelain 2> /dev/null)
            if [[ -n $status ]]; then
                echo "($branch*)"
            else
                echo "($branch)"
            fi
        fi
    }

    export PS1='\\''\\[\\e[32m\\]\\u@$CONTAINER_NAME\\[\\e[m\\]\\[\\e[31m\\]➜\\[\\e[34m\\]\\w\\[\\e[33m\\]$(parse_git_branch)\\[\\e[00m\\] $(if [[ $? == 0 ]]; then echo "\\[\\e[32m\\]\\$ "; else echo "\\[\\e[31m\\]\\$ "; fi)\\[\\e[m\\]'\\'' ' >> /home/sail/.bashrc

    # Add a pest command in the ~/.bashrc
    echo 'export PATH="$PATH:/var/www/html/vendor/bin"' >> /home/sail/.bashrc

    # Alias for 'php artisan'
    echo 'alias pa="php artisan"' >> /home/sail/.bashrc

    exec /usr/bin/supervisord -c /etc/supervisor/conf.d/supervisord.conf
fi

`;
const vscode = `{
    "version": "0.2.0",
    "configurations": [
        {
            "name": "Listen for XDebug",
            "type": "php",
            "request": "launch",
            "port": 9003,
            "pathMappings": {
                "/var/www/html": "\${workspaceFolder}"
            }
        }
    ]
}
`;
const env = `SAIL_XDEBUG_MODE=develop,debug,coverage
WWWGROUP=1000
WWWUSER=1000
`;
const _sfc_main$6 = {
  __name: "LaravelEnvironmentPost",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<title${_scopeId}>Laravel environment: docker, devcontainer and VS Code debug</title><meta name="description" content="Laravel environment: docker, devcontainer and VS Code debug"${_scopeId}><meta name="keywords" content="Laravel, docker, devcontainer, VS Code, debug"${_scopeId}>`);
          } else {
            return [
              createVNode("title", null, "Laravel environment: docker, devcontainer and VS Code debug"),
              createVNode("meta", {
                name: "description",
                content: "Laravel environment: docker, devcontainer and VS Code debug"
              }),
              createVNode("meta", {
                name: "keywords",
                content: "Laravel, docker, devcontainer, VS Code, debug"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<article><h1 class="title text-center">Laravel environment: docker, devcontainer and VS Code debug</h1><h2 class="text-md py-2">Published on February 14th, 2024.</h2><div class="p-2 text-justify w-full space-y-10 mt-6 text-lg"><h1 class="topic">Starting new Laravel project</h1><p> In this post, we will see how to set up a Laravel environment using Docker, Devcontainer, and debug it using Xdebug. I like to use Docker for my development environment because it is easy to set up and it is consistent across different machines. With devcontainer we can use the same environment in Visual Studio Code and Xdebug is a must-have for debugging. </p><p> Let&#39;s start by creating a new Laravel project using sail (Docker). You&#39;ll need to have Docker and Docker Compose installed on your machine. If you don&#39;t have it, you can install it by following the instructions on the official <a class="font-bold" href="https://docs.docker.com/compose/install/">website.</a></p>`);
      _push(ssrRenderComponent(_sfc_main$7, {
        code: 'curl -s "https://laravel.build/example-app?with=mysql&devcontainer" | bash',
        highlightjs: "",
        lang: "bash"
      }, null, _parent));
      _push(`<p> You can change <b>&#39;example-app&#39;</b> to another name. <br> Open the project in Visual Studio Code and you will be prompted to reopen the project in a devcontainer. Click on the &#39;Reopen in Container&#39; button and wait for the container to be built. You can check the progress in the bottom right corner of Visual Studio Code. </p><h1 class="topic">VsCode and DevContainer</h1>`);
      _push(ssrRenderComponent(_sfc_main$7, {
        code: "code example-app",
        highlightjs: "",
        lang: "bash"
      }, null, _parent));
      _push(`<p> With the VSCode oppened, you will install the devcontainer extension. You will notice this .devcontainer folder in the root of the project. <img${ssrRenderAttr("src", _imports_0$3)} alt="devcontainer folder"></p><p> You can install the extension by clicking on the extensions icon in the sidebar and search <img${ssrRenderAttr("src", _imports_1$2)} alt="vscodeextensioninstall"></p><p> I use php inteliphense and xdebug extensions. You can add more extensions. <i class="flex flex-row-reverse">.devcontainer/.devcontainer.json</i>`);
      _push(ssrRenderComponent(unref(VCodeBlock), {
        code: devcontainer,
        highlightjs: "",
        lang: "javascript"
      }, null, _parent));
      _push(`</p><h1 class="topic">Docker configurations</h1><p> 1) You need to change docker-compose.yml to add new port for xdebug. <br><br> 2) Change the context and add a copy of vendor/laravel/sail/runtimes/8.3<br> Add the following lines to the <b>docker-compose.yml</b> file: <i class="flex flex-row-reverse">docker-compose.yml</i>`);
      _push(ssrRenderComponent(unref(VCodeBlock), {
        code: dockerCompose,
        highlightjs: "",
        lang: "yml"
      }, null, _parent));
      _push(ssrRenderComponent(unref(VCodeBlock), {
        code: cpCommand,
        highlightjs: "",
        lang: "bash"
      }, null, _parent));
      _push(`<br> 3) I like to custom the Dockerfile and add my customizations like install some software: sudo curl, git, git cli and nano, and change the user &#39;sail&#39; as sudo.<br><i class="text-red-500 font-bold">Put the code in right place</i>. <br><i class="flex flex-row-reverse">.devcontainer/vendor-example/laravel/sail/runtimes/8.3/Dockerfile</i>`);
      _push(ssrRenderComponent(unref(VCodeBlock), {
        code: dockerfile,
        highlightjs: "",
        lang: "Dockerfile"
      }, null, _parent));
      _push(` Your Dockerfile will look like this: <img${ssrRenderAttr("src", _imports_2$1)} alt="Dockerfile"><br> 4) Add this code in <b>php.ini</b><i class="flex flex-row-reverse"> .devcontainer/vendor-example/laravel/sail/runtimes/8.3/php.ini </i>`);
      _push(ssrRenderComponent(unref(VCodeBlock), {
        code: phpini,
        highlightjs: "",
        lang: "ini"
      }, null, _parent));
      _push(`<br> 5) I like to custom my bash prompt to show my git branch and the current directory. <br><i class="flex flex-row-reverse"> .devcontainer/vendor-example/laravel/sail/runtimes/8.3/start-container </i>`);
      _push(ssrRenderComponent(unref(VCodeBlock), {
        code: startContainer,
        highlightjs: "",
        lang: "bash"
      }, null, _parent));
      _push(`<br></p><h1 class="topic">Debug configurations</h1><p><i class="flex flex-row-reverse">.vscode/launch.json</i>`);
      _push(ssrRenderComponent(unref(VCodeBlock), {
        code: vscode,
        highlightjs: "",
        lang: "bash"
      }, null, _parent));
      _push(`<br> Check environment variables <i class="flex flex-row-reverse">.env</i>`);
      _push(ssrRenderComponent(unref(VCodeBlock), {
        code: env,
        highlightjs: "",
        lang: "ini"
      }, null, _parent));
      _push(`<br></p><h1 class="topic">Let&#39;s put to work!!</h1><p> After installing the extension, you can open the command palette (Ctrl+Shift+P) and type <i>&#39;Remote-Containers: Reopen in Container&#39;</i>. This will build the container and open the project inside it. Or it will appear a button in the bottom right corner of the window. </p><p> Now you can start the container and debug your Laravel application. You can set a breakpoint in your code and start the debug configuration in Visual Studio Code. You can check the progress in the bottom right corner of Visual Studio Code. </p><p> To open you application use the browser with the URL localhost. <br><br> Ensure there is no other service running on port 80. <br><br><img${ssrRenderAttr("src", _imports_3$1)} alt="devcontainer folder"></p><p> That&#39;s it! You now have a Laravel environment using Docker, Devcontainer, and Xdebug. You can use this environment to develop your Laravel applications and debug them using Visual Studio Code. I hope this post was helpful to you. If you have any questions, feel free to ask in the comments section below. Thank you for reading! </p></div></article><!--]-->`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Post/LaravelEnvironmentPost.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __vite_glob_0_2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$6
}, Symbol.toStringTag, { value: "Module" }));
const _imports_0$2 = "/build/assets/laravel-welcome-page-ez6egKWo.png";
const _imports_1$1 = "/build/assets/laravel-welcome-Jetstream-BNoQpVBe.png";
const _imports_2 = "/build/assets/laravel-dashborad-C6SkwNc0.png";
const _imports_3 = "/build/assets/requirefields-CEQ8spP0.png";
const _imports_4 = "/build/assets/pest-output-DAWTyeAj.png";
const _imports_5 = "/build/assets/pest-error-output-DlXUmicb.png";
const updateUser = `
<?php

namespace App\\Actions\\Fortify;

use App\\Models\\User;
use Illuminate\\Contracts\\Auth\\MustVerifyEmail;
use Illuminate\\Support\\Facades\\Validator;
use Illuminate\\Validation\\Rule;
use Laravel\\Fortify\\Contracts\\UpdatesUserProfileInformation;

class UpdateUserProfileInformation implements UpdatesUserProfileInformation
{
    /**
     * Validate and update the given user's profile information.
     *
     * @param  array<string, mixed>  $input
     */
    public function update(User $user, array $input): void
    {
        Validator::make($input, [
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'email', 'max:255', Rule::unique('users')->ignore($user->id)],
            'photo' => ['nullable', 'mimes:jpg,jpeg,png', 'max:1024'],
        ])->validateWithBag('updateProfileInformation');

        if (isset($input['photo'])) {
            $user->updateProfilePhoto($input['photo']);
        }

        if ($input['email'] !== $user->email &&
            $user instanceof MustVerifyEmail) {
            $this->updateVerifiedUser($user, $input);
        } else {
            $user->forceFill([
                'name' => $input['name'],
                'email' => $input['email'],
            ])->save();
        }
    }

    /**
     * Update the given verified user's profile information.
     *
     * @param  array<string, string>  $input
     */
    protected function updateVerifiedUser(User $user, array $input): void
    {
        $user->forceFill([
            'name' => $input['name'],
            'email' => $input['email'],
            'email_verified_at' => null,
        ])->save();

        $user->sendEmailVerificationNotification();
    }
}
`;
const UserInputTest = `
<?php

use App\\Models\\User;

$user;

// This is a setup function that will be called before each test. In this case, we are creating a user and logging in as that user.
beforeEach(function () use (&$user) {
    if (!$user) {
        $user = User::factory()->create();
    }
    test()->actingAs($user);
});

describe('test required fields', function () use (&$user) {
    test('all of then', function () {
        $response = test()->put('/user/profile-information', [
            'name' => '',
            'email' => '',
        ]);

        $response->assertStatus(302);
        $response->assertSessionHasErrors();
        $errors = session('errors')->getBag('updateProfileInformation');

        $this->assertTrue($errors->has('name'));
        $this->assertEquals(['The name field is required.'], $errors->get('name'));

        $this->assertTrue($errors->has('email'));
        $this->assertEquals(['The email field is required.'], $errors->get('email'));
    });

    test('name individually', function () use (&$user) {
        $response = test()->put('/user/profile-information', [
            'name' => '',
            'email' => $user->email,
        ]);

        $response->assertStatus(302);
        $response->assertSessionHasErrors();
        $errors = session('errors')->getBag('updateProfileInformation');

        $this->assertTrue($errors->has('name'));
        $this->assertEquals(['The name field is required.'], $errors->get('name'));
    });

    test('email individually', function () use (&$user) {
        $response = test()->put('/user/profile-information', [
            'name' => $user->name,
            'email' => '',
        ]);

        $response->assertStatus(302);
        $response->assertSessionHasErrors();
        $errors = session('errors')->getBag('updateProfileInformation');

        $this->assertTrue($errors->has('email'));
        $this->assertEquals(['The email field is required.'], $errors->get('email'));
    });
});


test('test max length fields', function () {
    $response = test()->put('/user/profile-information', [
        'name' => 'This is a very long name that exceeds the limit of 255 characters. This is just a dummy example to illustrate a name longer than 255 characters. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        'email' => 'ThisIsAVeryLongEmailAddressThatExceedsTheLimitOf255CharactersThisIsJustADummyExampleToIllustrateAnEmailAddressLongerThan255CharactersLoremIpsumDolorSitAmetConsecteturAdipiscingElitSedDoEiusmodTemporIncididuntUtLaboreEtDoloreMagnaAliquaUtEnimAdMinimVeniamQuisNostrudExercitationUllamcoLaborisNisiUtAliquipExEaCommodoConsequat@example.com',
    ]);

    $response->assertStatus(302);
    $response->assertSessionHasErrors();

    $errors = session('errors')->getBag('updateProfileInformation');

    $this->assertTrue($errors->has('name'));
    $this->assertEquals(['The name field must not be greater than 255 characters.'], $errors->get('name'));

    $this->assertTrue($errors->has('email'));
    $this->assertEquals(['The email field must not be greater than 255 characters.'], $errors->get('email'));
});

describe('test email', function () {
    test('as valid', function () {
        $invalidEmails = [
            'test',
            'test@',
            // 'test@example', // It shold be an invalid email address, but it's not.
            'test@example.',
        ];

        foreach ($invalidEmails as $invalidEmail) {
            $response = $this->put('/user/profile-information', [
                'name' => 'test',
                'email' => $invalidEmail,
            ]);

            $response->assertStatus(302);
            $response->assertSessionHasErrors();

            $errors = session('errors')->getBag('updateProfileInformation');

            $this->assertTrue($errors->has('email'));
            $this->assertEquals(['The email field must be a valid email address.'], $errors->get('email'));
        }
    });

    test('as unique', function () {
        $this->actingAs(User::factory()->create());
        $user = User::factory()->create();

        $response = $this->put('/user/profile-information', [
            'name' => 'test',
            'email' => $user->email,
        ]);

        $response->assertStatus(302);
        $response->assertSessionHasErrors();

        $errors = session('errors')->getBag('updateProfileInformation');

        $this->assertTrue($errors->has('email'));
        $this->assertEquals(['The email has already been taken.'], $errors->get('email'));
    });
});

describe('test photo', function () {

    test('as max size', function () {
        $response = $this->put('/user/profile-information', [
            'name' => 'test',
            'email' => 'test@laravel.com',
            'photo' => \\Illuminate\\Http\\Testing\\File::image('photo.jpg')->size(1025),
        ]);

        $response->assertStatus(302);

        $response->assertSessionHasErrors();

        $errors = session('errors')->getBag('updateProfileInformation');

        $this->assertTrue($errors->has('photo'));
        $this->assertEquals(['The photo field must not be greater than 1024 kilobytes.'], $errors->get('photo'));
    });

    test('with mimes types', function () {
        $response = $this->put('/user/profile-information', [
            'name' => 'test',
            'email' => 'test@laravel.com',
            'photo' => \\Illuminate\\Http\\Testing\\File::image('photo.gif'),
        ]);

        $response->assertStatus(302);
        $response->assertSessionHasErrors();

        $errors = session('errors')->getBag('updateProfileInformation');

        $this->assertTrue($errors->has('photo'));
        $this->assertEquals(['The photo field must be a file of type: jpg, jpeg, png.'], $errors->get('photo'));
    });

});

test('test with valid inputs', function () use (&$user) {
    $response = $this->put('/user/profile-information', [
        'name' => $user->name,
        'email' => $user->email,
        'photo' => \\Illuminate\\Http\\Testing\\File::image('photo.jpg'),
    ]);

    $response->assertStatus(302);
    $response->assertSessionHasNoErrors();
});
`;
const pestPHP = `
<?php

/*
|--------------------------------------------------------------------------
| Test Case
|--------------------------------------------------------------------------
|
| The closure you provide to your test functions is always bound to a specific PHPUnit test
| case class. By default, that class is "PHPUnit\\Framework\\TestCase". Of course, you may
| need to change it using the "uses()" function to bind a different classes or traits.
|
*/

uses(
    Tests\\TestCase::class,
    // Illuminate\\Foundation\\Testing\\RefreshDatabase::class,
)->in('Feature');

/*
|--------------------------------------------------------------------------
| Expectations
|--------------------------------------------------------------------------
|
| When you're writing tests, you often need to check that values meet certain conditions. The
| "expect()" function gives you access to a set of "expectations" methods that you can use
| to assert different things. Of course, you may extend the Expectation API at any time.
|
*/

expect()->extend('toBeOne', function () {
    return $this->toBe(1);
});

/*
|--------------------------------------------------------------------------
| Functions
|--------------------------------------------------------------------------
|
| While Pest is very powerful out-of-the-box, you may have some testing code specific to your
| project that you don't want to repeat in every file. Here you can also expose helpers as
| global functions to help you to reduce the number of lines of code in your test files.
|
*/
`;
const _sfc_main$5 = {
  __name: "PestValidation",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<title data-v-e19485d3${_scopeId}>Using PEST to Test Form Validations: Require, Type, Length, and More</title><meta name="description" content="Laravel, Inertia, and Vue.js, when combined as a monolith, offer a powerful stack for building modern web applications. In this post, we&#39;ll explore how these technologies integrate and how we can leverage PEST to test form validations effectively." data-v-e19485d3${_scopeId}><meta name="keywords" content="Laravel, Inertia, Vue, PEST" data-v-e19485d3${_scopeId}>`);
          } else {
            return [
              createVNode("title", null, "Using PEST to Test Form Validations: Require, Type, Length, and More"),
              createVNode("meta", {
                name: "description",
                content: "Laravel, Inertia, and Vue.js, when combined as a monolith, offer a powerful stack for building modern web applications. In this post, we'll explore how these technologies integrate and how we can leverage PEST to test form validations effectively."
              }),
              createVNode("meta", {
                name: "keywords",
                content: "Laravel, Inertia, Vue, PEST"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<article data-v-e19485d3><h1 class="title text-center" data-v-e19485d3> Using PEST to Test Form Validations: Require, Type, Length, and More </h1><h2 class="text-md py-2" data-v-e19485d3>Published on February 22sd, 2024.</h2><div class="p-2 text-justify w-full space-y-10 mt-6 text-lg" data-v-e19485d3><h1 class="topic" data-v-e19485d3>Introduction</h1><p data-v-e19485d3> In the realm of web development, integrating various technologies seamlessly can significantly streamline the development process. Laravel, Inertia, and Vue.js, when combined as a monolith, offer a powerful stack for building modern web applications. In this post, we&#39;ll explore how these technologies integrate and how we can leverage PEST to test form validations effectively. <br data-v-e19485d3> In this tutorial, we&#39;ll cover the following topics: </p><ul class="font-bold" data-v-e19485d3><li data-v-e19485d3>* Understand about Laravel, Inertia, Vue.js and PEST working in a Monolith</li><li data-v-e19485d3>* Use Laravel Jetstream as a starting point for our application</li><li data-v-e19485d3> * How to conver form validation from client side in PEST like required fields, data types, field lengths, and more. </li></ul><p data-v-e19485d3><span class="font-bold flex" data-v-e19485d3>Laravel, Inertia, and Vue.js as a Monolith</span> Before delving into form validations and testing, let&#39;s briefly discuss the synergy between Laravel, Inertia, and Vue.js. Laravel serves as the backend framework, providing robust features for routing, database interaction, and validation. Inertia.js facilitates the creation of single-page applications by allowing us to use Vue.js components within Laravel views seamlessly. </p><p data-v-e19485d3><span class="font-bold flex" data-v-e19485d3>Integration and Validation</span> One notable aspect of this integration is the handling of form validations. While Vue.js enables client-side validation, Laravel&#39;s validation capabilities are equally powerful and can be seamlessly integrated into our application. By validating forms on the server-side with Laravel, we ensure consistent validation rules across the application and enhance security. </p><p data-v-e19485d3><span class="font-bold flex" data-v-e19485d3>Introduction to PEST</span> Now, let&#39;s introduce PEST. PEST is a delightful PHP testing framework that focuses on simplicity and readability. It allows us to write expressive and feature-rich tests that ensure our application behaves as expected. In this tutorial, we&#39;ll harness the power of PEST to include form validations in our test suite seamlessly. </p><p data-v-e19485d3><span class="font-bold flex" data-v-e19485d3>Getting Started with Laravel Jetstream</span> To kickstart our journey into testing form validations, we&#39;ll use Laravel Jetstream, a popular scaffolding tool for Laravel applications. Jetstream provides authentication, team management, and robust scaffolding for our Laravel applications, allowing us to focus on building features rather than reinventing the wheel. <br data-v-e19485d3> In the upcoming sections, we&#39;ll dive into practical examples of using PEST to test various form validations, including required fields, data types, field lengths, and more. By the end of this tutorial, you&#39;ll have a solid understanding of how to leverage PEST to ensure the integrity and reliability of your form validations. <br data-v-e19485d3> Stay tuned for the next installment, where we&#39;ll delve into writing PEST tests for form validations in Laravel Jetstream. </p><h1 class="topic" data-v-e19485d3>Starting a New Laravel Project</h1><p data-v-e19485d3> Let&#39;s start with a new Laravel Jetstream project. You can create a new Laravel Jetstream project using the following command: `);
      _push(ssrRenderComponent(_sfc_main$7, {
        code: 'curl -s "https://laravel.build/form-validation?with=mysql" | bash',
        highlightjs: "",
        lang: "bash"
      }, null, _parent));
      _push(`</p><p data-v-e19485d3> Open you form-validation project in Visual Studio Code and let&#39;s start the app. The Laravel home page will be displayed in your browser. <br data-v-e19485d3><br data-v-e19485d3><img${ssrRenderAttr("src", _imports_0$2)} alt="laravel home page" data-v-e19485d3></p><h1 class="topic" data-v-e19485d3> Installing Jetstream and Building the NPM Dependencies and Migrating the Database </h1><p data-v-e19485d3> Now, let&#39;s install Jetstream using the following command: `);
      _push(ssrRenderComponent(_sfc_main$7, {
        code: "composer require laravel/jetstream",
        highlightjs: "",
        lang: "bash"
      }, null, _parent));
      _push(` Then, we&#39;ll install Jetstream with the Inertia stack: `);
      _push(ssrRenderComponent(_sfc_main$7, {
        code: "php artisan jetstream:install inertia",
        highlightjs: "",
        lang: "bash"
      }, null, _parent));
      _push(` After installing Jetstream, you should install and build your NPM dependencies and migrate your database: `);
      _push(ssrRenderComponent(_sfc_main$7, {
        code: "npm install\nnpm run build\nphp artisan migrate",
        highlightjs: "",
        lang: "bash"
      }, null, _parent));
      _push(` After customizing these components, you should rebuild your assets: `);
      _push(ssrRenderComponent(_sfc_main$7, {
        code: "npm run build",
        highlightjs: "",
        lang: "bash"
      }, null, _parent));
      _push(`</p><p data-v-e19485d3> Your page will look like this: <img${ssrRenderAttr("src", _imports_1$1)} alt="jetstream welcome page" data-v-e19485d3></p><p data-v-e19485d3> Register a user and login to the application. You will see the dashboard page. <img${ssrRenderAttr("src", _imports_2)} alt="dashboard page" data-v-e19485d3></p><h1 class="topic" data-v-e19485d3>Let&#39;s understand out goal</h1><p data-v-e19485d3> Form validation is a crucial aspect of web applications. It important to ensure that these rules are checked in server-side and in tests as well. <img${ssrRenderAttr("src", _imports_3)} alt="dashboard page" data-v-e19485d3></p><p data-v-e19485d3>In controller validation we have the following rules:</p><ul class="list-disc pl-6" data-v-e19485d3><li data-v-e19485d3><b data-v-e19485d3>name</b> has 3 validations: <i data-v-e19485d3> required, string type and max length</i></li><li data-v-e19485d3><b data-v-e19485d3>email</b> has 4 validations: <i data-v-e19485d3> required, email type, max length and unique</i></li><li data-v-e19485d3><b data-v-e19485d3>photo</b> has 3 validations: <i data-v-e19485d3> nullable, mimes and max length</i></li></ul><p data-v-e19485d3> Look at the following code to understand the validation rules in the controller: <br data-v-e19485d3><i class="flex flex-row-reverse" data-v-e19485d3>app/Actions/Fortify/UpdateUserProfileInformation.php</i>`);
      _push(ssrRenderComponent(unref(VCodeBlock), {
        code: updateUser,
        highlightjs: "",
        lang: "php"
      }, null, _parent));
      _push(`</p><h1 class="topic" data-v-e19485d3>Installing PEST and Writing Tests.</h1><p data-v-e19485d3><span data-v-e19485d3>Let&#39;s use pest to check the validation controller</span> First, let&#39;s install pest using the following command: `);
      _push(ssrRenderComponent(_sfc_main$7, {
        code: "composer require pestphp/pest --dev",
        highlightjs: "",
        lang: "bash"
      }, null, _parent));
      _push(` Then, create a new test file using the following command: `);
      _push(ssrRenderComponent(_sfc_main$7, {
        code: "php artisan make:test UserInputValidationTest --pest",
        highlightjs: "",
        lang: "bash"
      }, null, _parent));
      _push(` Check if exits the file <i class="flex flex-row-reverse" data-v-e19485d3>tests/Pest.php</i>`);
      _push(ssrRenderComponent(unref(VCodeBlock), {
        code: pestPHP,
        highlightjs: "",
        lang: "php"
      }, null, _parent));
      _push(` Now, let&#39;s write the tests for the controller validation. <br data-v-e19485d3><i class="flex flex-row-reverse" data-v-e19485d3>tests/Feature/UserInputValidationTest.php</i>`);
      _push(ssrRenderComponent(unref(VCodeBlock), {
        code: UserInputTest,
        highlightjs: "",
        lang: "php"
      }, null, _parent));
      _push(`</p><h1 class="topic" data-v-e19485d3>It&#39;s time to test!!!</h1><p data-v-e19485d3> Run the tests using the following command: `);
      _push(ssrRenderComponent(_sfc_main$7, {
        code: "./vendor/bin/pest tests/Feature/UserInputValidationTest.php",
        highlightjs: "",
        lang: "bash"
      }, null, _parent));
      _push(` You will see the following output: <img${ssrRenderAttr("src", _imports_4)} alt="pest output" data-v-e19485d3> If we change email require validation, we will see the following output: <i class="flex flex-row-reverse" data-v-e19485d3>app/Actions/Fortify/UpdateUserProfileInformation.php</i><img${ssrRenderAttr("src", _imports_5)} alt="pest output" data-v-e19485d3></p><p data-v-e19485d3> That&#39;s it! We explored the integration of Laravel, Inertia, and Vue.js and how we can leverage PEST to test form validations effectively. We used Laravel Jetstream as a starting point for our application and covered various form validations, including required fields, data types, field lengths, and more. By the end of this tutorial, you should have a solid understanding of how to use PEST to ensure the integrity and reliability of your form validations. <br data-v-e19485d3> In the next installment, we&#39;ll delve into writing PEST tests for form validations in Laravel Jetstream. Stay tuned! </p></div></article><!--]-->`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Post/PestValidation.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const PestValidation = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-e19485d3"]]);
const __vite_glob_0_3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: PestValidation
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
const __vite_glob_0_4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$4
}, Symbol.toStringTag, { value: "Module" }));
const _imports_0$1 = "/build/assets/pest-output-min-rUg6y2nq.png";
const _imports_1 = "/build/assets/debug_ini-ac2PUNJ1.png";
const _sfc_main$3 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><div class="flex space-x-2"><h1 class="title">Articles</h1></div><hr class="my-4"><div class="space-y-4"><article class="articles"><a class="title" href="posts/PestValidation"><img${ssrRenderAttr("src", _imports_0$1)} alt="debug Laravel"></a><div class="content"><a class="title" href="posts/PestValidation">Using PEST to Test Form Validations: Require, Type, Length, and More </a><p> 🧪 Every test matters. <br> 🚀 In this post, we explored the integration of Laravel, Inertia, and Vue.js and how we can leverage PEST to test form validations effectively. </p></div></article><article class="articles"><a class="title" href="posts/LaravelEnvironmentPost"><img${ssrRenderAttr("src", _imports_1)} alt="debug Laravel"></a><div class="content"><a class="title" href="posts/LaravelEnvironmentPost">Laravel environment: docker, devcontainer, VS Code debug </a><p> In this article, we&#39;ll explore how you can supercharge your Laravel development workflow by harnessing the power of Docker, DevContainer, and VS Code debug. </p><p> 🚀 Additionally, we&#39;ll also look at how you can custom your terminal to display the current git branch and status. </p><p> I like and use this environment because I can install and test new software without affecting my local machine. </p></div></article></div></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Post/PostIndex.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const PostIndex = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$1]]);
const __vite_glob_0_5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: PostIndex
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$2 = {
  __name: "CS50Project",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<title${_scopeId}>CS50 Final Project: A Real-Time Memory Game</title><meta name="description" content="Laravel environment: docker, devcontainer and VS Code debug"${_scopeId}><meta name="keywords" content="Python, Websockets, Javascript, Sqlite, Heroku"${_scopeId}>`);
          } else {
            return [
              createVNode("title", null, "CS50 Final Project: A Real-Time Memory Game"),
              createVNode("meta", {
                name: "description",
                content: "Laravel environment: docker, devcontainer and VS Code debug"
              }),
              createVNode("meta", {
                name: "keywords",
                content: "Python, Websockets, Javascript, Sqlite, Heroku"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<article><h1 class="title text-center">CS50 Final Project: A Real-Time Memory Game</h1><h2 class="text-sm py-2">Published on February 18th, 2023.</h2><div class="p-2 text-justify w-full space-y-10 mt-6 text-lg"><p> CS50&#39;s final project consists of an online memory game to be played with a friend, developed using Python (Flask and WebSockets), JavaScript, CSS, and SQLite. The link to play online can be found <a class="font-bold" href="https://memory-in-pairs.herokuapp.com/">here</a> . </p><p> The game includes a waiting room where users wait for their partners to connect while simultaneously keeping track of the scores of ongoing matches at that moment. Played in pairs, participants have the ability to view the cards flipped by their opponents, providing an engaging and strategic dynamic. </p><p> The main goal of this project was to explore the possibilities and experience of a full-duplex connection through WebSockets, an area in which I had no prior experience. Although it was a complex challenge with moments of uncertainty, the emotional support from family and friends was crucial in overcoming obstacles, allowing me to complete the project within the established deadline for submission to the CS50 course at Harvard University in the year 2022. </p><p> 🚀 Key Tech Stack: <br> * Backend: Python with Websockets <br> * Frontend: Pure JavaScript (no framework) <br> * Deployment: Heroku Server <br> * Database: SQLite3 </p><p> LINKS: <br><a class="font-bold" href="https://memory-in-pairs.herokuapp.com/" target="_blank">🎮 To play</a><br><a href="https://github.com/leandroximenes/memory-in-pairs/tree/memory-game" target="_blank" class="font-bold flex items-center"><img class="h-6 w-6 mr-1"${ssrRenderAttr("src", _imports_0$4)} alt="github"> Github </a></p><p>Check out the game in action on my YouTube link:</p></div><iframe class="mx-auto w-full h-60 lg:w-2/3 lg:h-96" src="https://www.youtube.com/embed/L4aAvp24ofY"></iframe></article><!--]-->`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Project/CS50Project.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __vite_glob_0_6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$2
}, Symbol.toStringTag, { value: "Module" }));
const _imports_0 = "/build/assets/cs50-CmGKmCZY.png";
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><div class="flex space-x-2"><h1 class="title">Projects</h1></div><hr class="my-4"><div><article class="articles"><a class="title" href="projects/cs50"><img${ssrRenderAttr("src", _imports_0)} alt="CS50"></a><div class="content"><a class="title" href="projects/cs50"> CS50 Final Project: A Real-Time Memory Game </a><p> CS50 Final Project completed in December 2022 - a dynamic memory game designed for real-time online play with friends </p><div class="stacks"><span>Python</span><span>Websockets</span><span>Javascript</span><span>Sqlite</span><span>Heroku</span></div></div></article></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Project/ProjectIndex.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ProjectIndex = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const __vite_glob_0_7 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
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
      const pages = /* @__PURE__ */ Object.assign({ "./Pages/AccessCount.vue": __vite_glob_0_0, "./Pages/MainPage.vue": __vite_glob_0_1, "./Pages/Post/LaravelEnvironmentPost.vue": __vite_glob_0_2, "./Pages/Post/PestValidation.vue": __vite_glob_0_3, "./Pages/Post/PostForm.vue": __vite_glob_0_4, "./Pages/Post/PostIndex.vue": __vite_glob_0_5, "./Pages/Project/CS50Project.vue": __vite_glob_0_6, "./Pages/Project/ProjectIndex.vue": __vite_glob_0_7 });
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
