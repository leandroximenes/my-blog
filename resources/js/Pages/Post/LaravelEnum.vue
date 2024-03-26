<script setup>
import { Head } from '@inertiajs/vue3'
import VCodeBlock from '@wdns/vue-code-block'
import CommentarySection from '@/Components/CommentarySection.vue'

import { MdPreview } from 'md-editor-v3'
import 'md-editor-v3/lib/preview.css'

const phpEnum = `
\`\`\` PHP
<?php

enum UserRole: string
{
    case 'ADM' = 'Admin',
    case 'USR' = 'User',
    case 'MNG' = 'Manager',
    case 'NON' = 'None',

    public function label(): string
    {
        return match($this) {
            static::Admin => 'Admin',
            static::User => 'User',
            static::Manager => 'Manager',
            static::None => 'User non classified',
        };
    }
}
?>

\`\`\`
`

const UserRoleEnum = `
\`\`\` app/Enums/UserRoleEnum.php
<?php

namespace App\\Enums;
use Spatie\\Enum\\Laravel\\Enum;

/**
 * The Status enum.
 *
 * @method static self ADM()
 * @method static self USR()
 * @method static self MNG()
 * @method static self NON()
 */
 class UserRoleEnum extends Enum
{
    const DEFAULT = 'NON';

    protected static function values(): array
    {
        return [
            'ADM' => 'Admin',
            'USR' => 'User',
            'MNG' => 'Manager',
            'NON' => 'User non classified',
        ];
    }
}
\`\`\`

`

const migrations = `
\`\`\` database/migrations/2024_03_21_193121_add_role_to_users_table.php
<?php

use App\\Enums\\UserRoleEnum;
use Illuminate\\Database\\Migrations\\Migration;
use Illuminate\\Database\\Schema\\Blueprint;
use Illuminate\\Support\\Facades\\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->enum('role', UserRoleEnum::toArray())->default(UserRoleEnum::DEFAULT)->after('password');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn('role');
        });
    }
};
\`\`\`
`

const factory = `
\`\`\` database/factories/UserFactory.php
<?php

namespace Database\\Factories;

use App\\Enums\\UserRoleEnum; // add this
use Illuminate\\Database\\Eloquent\\Factories\\Factory;
use Illuminate\\Support\\Facades\\Hash;
use Illuminate\\Support\\Str;

/**
 * @extends \\Illuminate\\Database\\Eloquent\\Factories\\Factory<\\App\\Models\\User>
 */
class UserFactory extends Factory
{
    /**
     * The current password being used by the factory.
     */
    protected static ?string $password;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => fake()->name(),
            'email' => fake()->unique()->safeEmail(),
            'email_verified_at' => now(),
            'password' => static::$password ??= Hash::make('password'),
            'remember_token' => Str::random(10),
            'role' => fake()->randomElement(UserRoleEnum::toArray()), // add this
        ];
    }

    /**
     * Indicate that the model's email address should be unverified.
     */
    public function unverified(): static
    {
        return $this->state(fn (array $attributes) => [
            'email_verified_at' => null,
        ]);
    }
}
\`\`\`
`

const model = `
\`\`\` app/Models/User.php
<?php

namespace App\\Models;

// use Illuminate\\Contracts\\Auth\\MustVerifyEmail;
use App\\Enums\\UserRoleEnum; // add this
use Illuminate\\Database\\Eloquent\\Factories\\HasFactory;
use Illuminate\\Foundation\\Auth\\User as Authenticatable;
use Illuminate\\Notifications\\Notifiable;
use Laravel\\Sanctum\\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

   ...

    public function getRoleAttribute($value): string
    {
        return UserRoleEnum::from($value)->value;
    }

    public function setRoleAttribute($value): void
    {
        if (!empty($value))
            // check if value is a value or label
            if (in_array($value, UserRoleEnum::toValues()))
                $this->attributes['role'] = UserRoleEnum::from($value)->label;
            else if (in_array($value, UserRoleEnum::toLabels()))
                $this->attributes['role'] = $value;
            else
                throw new \\InvalidArgumentException('Invalid user role value.');
        else
            $this->attributes['role'] = UserRoleEnum::DEFAULT;
    }
}
\`\`\`
`

const tinker = `
\`\`\` bash
$user = User::find(3);

[!] Aliasing 'User' to 'App\\Models\\User' for this Tinker session.
= App\\Models\\User {#5050
    id: 3,
    name: "Tamia Borer",
    email: "brenna13@example.org",
    email_verified_at: "2024-03-21 20:04:50",
    #password: "$2y$12$S5bDxjRM4E6nuXQzTX2BjeJKVWhvzi5sMe0UZiLs5PxB0fg7y.Y4O",
    #remember_token: "xyOyRzeuMV",
    created_at: "2024-03-21 20:04:50",
    updated_at: "2024-03-21 20:04:50",
    role: "NON",
  }

> $user->role
= "User non classified"

> App\\Enums\\UserRoleEnum::ADM()->label
= "ADM"

> App\\Enums\\UserRoleEnum::ADM()->value
= "Admin"
\`\`\`
`

const test = `
\`\`\` tests/Feature/UserRoleEnumTest.php
<?php

//create a new user and check if the user role is Ini

use App\\Models\\User;
use App\\Enums\\UserRoleEnum;

test('create user random role', function () {
    $user = User::factory()->create();
    expect($user->role)->toBeString();
})->skip('This test is skipped because the user role is random');

test('create user with role ADM', function () {
    $user = User::factory()->create(['role' => UserRoleEnum::ADM()->label]);
    expect($user->role)->toBe('Admin');
});

test('create user with role Admin', function () {
    $user = User::factory()->create(['role' => UserRoleEnum::ADM()->value]);
    expect($user->role)->toBe('Admin');
});

test('does not set an invalid role attribute', function () {
    $user = new User();
    $invalidRole = 'InvalidRole';

    // Act & Assert
    $this->expectException(\\InvalidArgumentException::class);
    $this->expectExceptionMessage('Invalid user role value.');

    // Attempt to set an invalid role attribute
    $user->setRoleAttribute($invalidRole);
});
\`\`\`
`

defineProps({
  commentaries: Array
})
</script>

<template>
  <Head>
    <title>Enumerations: We have time for them. Crafting clearer, more reliable code</title>
    <meta
      name="description"
      content="Enumerations: We have time for them. Crafting clearer, more reliable code"
    />
    <meta name="keywords" content="Laravel, PHP, Enum, PET" />
  </Head>
  <article>
    <h1 class="title text-center">
      Enumerations: We have time for them. Crafting clearer, more reliable code
    </h1>
    <h2 class="text-md py-2">Published on March 21st, 2024.</h2>
    <div class="p-2 text-justify w-full space-y-10 mt-6 text-lg">
      <h1 class="topic">Questions</h1>
      <p>
        If you find yourself needing to categorize roles like 'admin', 'user', 'manager' or 'user
        non classified' within your user table in a Laravel application. <br />
        What approach would you take in your Laravel application? 🤔
      </p>
      <ul class="font-bold">
        <li>Should you use a native PHP Enum?</li>
        <li>Should you use a tool made for Laravel called spatie/laravel-enum?</li>
        <li>Maybe you could make a relationship table to show the roles?</li>
        <li>
          Or should you just create a column in you database and expects that everyone undestands?
        </li>
      </ul>
      <p>
        Each of these approaches has its own pros and cons. In this particular case, I chose to use
        a Laravel Enum.
      </p>
      <h1 class="topic">The goal</h1>
      <p>
        The goal of this article is to show you how to use Laravel Enum to create a more reliable
        and clear code. We will also see how to use it in migration, model, factory and how to test
        it.
      </p>
      <h1 class="topic">What is an Enum?</h1>
      <p>
        <a target="_blank" href="https://www.php.net/manual/en/language.types.enumerations.php">
          "Enumerations are a restricting layer on top of classes and class constants, intended to
          provide a way to define a closed set of possible values for a type."
        </a>
        <MdPreview class="max-h-[40rem]" :modelValue="phpEnum" language="en-US" />
      </p>
      <h1 class="topic">Why Laravel Enum?</h1>
      <p>
        Laravel Enum is a package that allows you to create and use enumerations in your Laravel
        application. It is a simple and powerful package that can help you to create more reliable
        and clear code. It is also allows you to use pollimorphic relationships instead of native
        PHP enums that you can't. <br />
        <a target="_blank" href="https://php.watch/versions/8.1/enums#enum-inheritance">
          <b> "Enums cannot be extended, and must not inherit" </b>
        </a>
      </p>
      <h1 class="topic">Instalation</h1>
      <p>
        In this example I'll use a empty laravel application. <br />
        Then, install the package:
        <VCodeBlock
          code="composer require spatie/laravel-enum"
          highlightjs
          cssPath="vcodeblock"
          lang="bash"
        />
      </p>
      <h1 class="topic">Enum</h1>
      <p>
        Use the following command to create a new enum:
        <VCodeBlock
          code="php artisan make:spatie-enum UserRoleEnum"
          highlightjs
          cssPath="vcodeblock"
          lang="bash"
        />
        Past this code to the new file:
        <MdPreview class="max-h-[40rem]" :modelValue="UserRoleEnum" language="en-US" />
      </p>
      <h1 class="topic">Migration</h1>
      <p>
        Let's create a new migration to add the role column to the users table:
        <VCodeBlock
          code="php artisan make:migration add_role_to_users_table --table=users"
          highlightjs
          cssPath="vcodeblock"
          lang="bash"
        />
        Past this code to the new file:
        <MdPreview class="max-h-[40rem]" :modelValue="migrations" language="en-US" />
        Run the migration:
        <VCodeBlock code="php artisan migrate" highlightjs cssPath="vcodeblock" lang="bash" />
      </p>
      <h1 class="topic">Factory</h1>
      <p>
        <MdPreview class="max-h-[40rem]" :modelValue="factory" language="en-US" />
      </p>
      <h1 class="topic">Model</h1>
      <p>
        I like to adjust the model to use the enum description. For example: <br />
        If the user role is 'ADM' the description will be 'Admin'. And I also adjust set method to
        ensure that will convert to database required enum.
        <MdPreview class="max-h-[40rem]" :modelValue="model" language="en-US" />
      </p>
      <h1 class="topic">Let's check with tinker</h1>
      <p>
        Lets open it and check if everything is working as expected:
        <VCodeBlock code="php artisan tinker" highlightjs cssPath="vcodeblock" lang="bash" />
        <VCodeBlock
          code="App\Models\User::factory()->count(10)->create()"
          highlightjs
          cssPath="vcodeblock"
          lang="bash"
        />
        <MdPreview class="max-h-[40rem]" :modelValue="tinker" language="en-US" />
      </p>
      <h1 class="topic">Testing</h1>
      <p>
        I will create a Test to ensure that the enum is working as expected. <br />
        Let's install Pest;
      </p>
      <VCodeBlock
        code="composer require pestphp/pest --dev --with-all-dependencies"
        highlightjs
        cssPath="vcodeblock"
        lang="bash"
      />
      Now, create a test file
      <p>
        <VCodeBlock
          code="php artisan make:test UserRoleEnumTest --pest"
          highlightjs
          cssPath="vcodeblock"
          lang="bash"
        />
        Past this code to the new file:
        <MdPreview class="max-h-[40rem]" :modelValue="test" language="en-US" />
      </p>
      <p>
        Run the test:
        <VCodeBlock code="php artisan test" highlightjs cssPath="vcodeblock" lang="bash" />
      </p>
      <img src="./img/enum_test.png" alt="list test" />
      <h1 class="topic">Conclusion</h1>
      <p>
        Enumerations are a great way to create more reliable and clear code. Laravel Enum is a
        powerful package that can help you to create enumerations in your Laravel application. It is
        simple to use and can help you to create more reliable and clear code. I hope this article
        has helped you to understand how to use Laravel Enum to create more reliable and clear code.
      </p>
    </div>
  </article>
  <CommentarySection :commentaries="commentaries" />
</template>

<style scoped>
a {
  font-style: italic;
  font-weight: bold;
  text-decoration: underline;
}
</style>
