<script setup>
import VCodeBlock from '@wdns/vue-code-block'

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
}`

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
`

const cpCommand = `$ mkdir -p .devcontainer/vendor-example/laravel/sail/runtimes/
$ cp -r vendor/laravel/sail/runtimes/8.3 .devcontainer/vendor-example/laravel/sail/runtimes/8.3
`

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
`

const phpini = `[XDebug]
xdebug.mode=develop,debug
xdebug.start_with_request=yes
xdebug.discover_client_host=0
xdebug.client_host=host.docker.internal
`

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

`

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
`

const env = `SAIL_XDEBUG_MODE=develop,debug,coverage
WWWGROUP=1000
WWWUSER=1000
`
</script>

<template>
  <article>
    <h1 class="title text-center">Laravel environment: docker, devcontainer and VS Code</h1>
    <h2 class="text-sm py-2">Published on February 14th, 2024.</h2>
    <div class="p-2 text-justify w-full space-y-10 mt-6 text-lg">
      <p>
        In this post, we will see how to set up a Laravel environment using Docker, Devcontainer,
        and debug it using Xdebug. I like to use Docker for my development environment because it is
        easy to set up and it is consistent across different machines. With devcontainer we can use
        the same environment in Visual Studio Code and Xdebug is a must-have for debugging.
      </p>
      <p>
        Let's start by creating a new Laravel project using sail (Docker). You'll need to have
        Docker and Docker Compose installed on your machine. If you don't have it, you can install
        it by following the instructions on the official
        <a class="font-bold" href="https://docs.docker.com/compose/install/">website.</a>
      </p>
      <VCodeBlock
        code='$ curl -s "https://laravel.build/example-app?with=mysql&devcontainer" | bash'
        highlightjs
        lang="bash"
      />
      <p>
        You can change <b>'example-app'</b> to another name. <br />
        Open the project in Visual Studio Code and you will be prompted to reopen the project in a
        devcontainer. Click on the 'Reopen in Container' button and wait for the container to be
        built. You can check the progress in the bottom right corner of Visual Studio Code.
      </p>
      <VCodeBlock code="$ code example-app" highlightjs lang="bash" />
      <p>
        With the VSCode oppened, you will install the devcontainer extension. <br />
        You will notice this .devcontainer folder in the root of the project.
        <img src="./img/devcontainerfolder.png" alt="devcontainer folder" />
      </p>
      <p>
        You can install the extension by clicking on the extensions icon in the sidebar and search
        <img src="./img/vsextension.png" alt="vscodeextensioninstall" />
      </p>

      <p>
        Here is my <b>.devcontainer/.devcontainer.json</b> I use php inteliphense and xdebug
        extensions. file:
        <VCodeBlock :code="devcontainer" highlightjs lang="javascript" />
      </p>
      <p>
        1) You need to change docker-compose.yml to add new port for xdebug. <br /><br />

        2) Change the context and add a copy of vendor/laravel/sail/runtimes/8.3<br />
        Add the following lines to the <b>docker-compose.yml</b> file:
        <VCodeBlock :code="dockerCompose" highlightjs lang="yml" />
        <VCodeBlock :code="cpCommand" highlightjs lang="bash" /><br />

        3) I like to custom the Dockerfile and add my customizations like install some software:
        sudo curl, git, git cli and nano, and change the user 'sail' as sudo.<br />
        <i class="text-red-500 font-bold">Put the code in right place</i>. <br />
        In the <b>.devcontainer/vendor-example/laravel/sail/runtimes/8.3/Dockerfile</b>
        <VCodeBlock :code="dockerfile" highlightjs lang="Dockerfile" />
        Your Dockerfile will look like this:
        <img src="./img/dockerfile.png" alt="Dockerfile" /><br />

        4) Add this code in <b>php.ini</b>
        <VCodeBlock :code="phpini" highlightjs lang="ini" /><br />

        5) I like to custom my bash prompt to show my git branch and the current directory. <br />
        Change the file <b>start-container</b>
        <VCodeBlock :code="startContainer" highlightjs lang="bash" /><br />

        6) Create a debug configuration in VSCode. <b>.vscode/launch.json</b><br />
        <VCodeBlock :code="vscode" highlightjs lang="bash" /><br />

        7) Check environment variables in <b>.env</b> file. <br />
        <VCodeBlock :code="env" highlightjs lang="ini" /><br />
      </p>
      <p>
        After installing the extension, you can open the command palette (Ctrl+Shift+P) and type
        <i>'Remote-Containers: Reopen in Container'</i>. This will build the container and open the
        project inside it. Or it will appear a button in the bottom right corner of the window.
      </p>
      <p>
        Now you can start the container and debug your Laravel application. You can set a breakpoint
        in your code and start the debug configuration in Visual Studio Code. You can check the
        progress in the bottom right corner of Visual Studio Code.
        <img src="./img/debug.png" alt="devcontainer folder" />
      </p>
    </div>
  </article>
</template>
