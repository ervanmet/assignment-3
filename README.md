# Wanderlust Travel

A small travel website built for Assignment 3. It demonstrates a multi-view site that loads page content into a shared `index.html` layout, with navigation driven by URL hash routes.

## Pages

- **Home** (`#home`): Travel introduction
- **About** (`#about`): About Wanderlust Travel
- **Destinations** (`#destinations`): Destination ideas
- **Things to Do** (`#thingsToDo`): Travel activities
- **Contact** (`#contact`): Contact information

Each view includes text and an image from the `images/` directory.

## How It Works

The project uses an MVC-style structure:

- `index.html` provides the shared page layout and navigation.
- `app/app.js` reads the current URL hash and listens for hash changes.
- `model/model.js` maps a route to its page template and injects that template into the `<main>` element.
- `pages/` contains the five HTML view templates.
- `scss/` contains the Sass stylesheets, compiled to `css/styles.css`.

Selecting a navigation link changes the URL hash. The app responds to that URL change by loading the matching view without replacing the shared page layout.

## Run Locally

Requirements: Node.js and npm. The `start` script uses `live-server`, which must be installed and available on your PATH.

1. Install the project dependencies:

   ```sh
   npm install
   ```

2. Install `live-server` if it is not already available:

   ```sh
   npm install --global live-server
   ```

3. Start the website:

   ```sh
   npm start
   ```

4. In a separate terminal, optionally compile Sass continuously while editing:

   ```sh
   npm run sass
   ```

## Project Structure

```text
.
├── app/
│   └── app.js
├── css/
│   └── styles.css
├── images/
├── model/
│   └── model.js
├── pages/
│   ├── about.js
│   ├── contact.js
│   ├── destinations.js
│   ├── home.js
│   └── thingstodo.js
├── scss/
│   ├── header.scss
│   ├── structure.scss
│   └── styles.scss
├── index.html
└── package.json
```

## Deployment and Submission

- **Web 4 site:** `https://in-info-web4.luddy.indianapolis.iu.edu/~ervanmet/assignment%203/`
- **GitHub repository:** `ADD_GITHUB_REPOSITORY_URL_HERE`
