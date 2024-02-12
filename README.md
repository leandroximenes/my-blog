# My Simple Blog

Welcome to my simple blog project! This blog is built using Laravel, Inertia.js, and Vue.js. It features server-side rendering (SSR) for enhanced performance and SEO.

## Features

- **Home Page**: Learn more about me and my journey.
- **Blog Articles**: Explore various tutorial articles covering a range of topics.
- **Projects Page**: View a list of my projects and their descriptions.

## Technologies Used

- Laravel
- Inertia.js
- Vue.js
- Server-Side Rendering (SSR)

## Getting Started

To get a local copy of the project up and running, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/your-blog.git
   ```
2. Install dependecies:
   ```bash
   composer install
   npm install
   ```
3. Configure the environment variables:
   ```bash
   cp .env.example .env
   php artisan key:generate
   ```
4. Run the migrations:
   ```bash
   php artisan migrate
   ```
5. Start the development server:
   ```bash
   php artisan serve
   ```
6. Visit `http://localhost:8000` in your browser.

## Deployment in Heroku

1. Add and commit your changes
   ```bash
   git add .
   git commit -m "Your commit message"
   ```
2. Push your changes to Heroku
   ```bash
    git push heroku master
   ```
3. Run the migrations
   ```bash
    heroku run php artisan migrate
   ```
4. Clear the cache
   ```bash
    heroku run php artisan optimize:clear
   ```

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please feel free to open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

```
MIT License
```
