# Project Name: **Tasteology**

## Description
A simple HTML, CSS, and JavaScript webpage, built from a Figma design. The project uses Grunt for automating tasks like LESS compilation, file copying, and live-reloading via BrowserSync during development.

---

## Table of Contents
1. [Installation](#installation)
2. [Usage](#usage)
3. [Project Structure](#project-structure)
4. [Contributing](#contributing)
5. [License](#license)

---

## Installation

### Prerequisites
Before you can run or build the project, you'll need to have [Node.js](https://nodejs.org/en/) and [npm](https://www.npmjs.com/) installed on your machine. You can check if they're installed by running the following commands:

```
node -v
npm -v
```

### Steps to Get Started
1. Clone the repository to your local machine:
   ```
   git clone https://github.com/bom2ne1/tasteology.git
   ```

2. Navigate to the project directory:
   ```
   cd tasteology
   ```

3. Install the dependencies:
   ```
   npm install
   ```

---

## Usage

There are two main tasks you can run using npm scripts:

### Development Mode (`npm start`)
Run the following command to start the Grunt task runner with live-reloading enabled via BrowserSync. This will watch for file changes in the project and automatically update the browser:

```
npm start
```

This will:
- Watch for changes in `src/less/`, `src/js/`, `src/index.html`, and `src/assets/`.
- Compile LESS to CSS, copy assets and JavaScript files, and automatically refresh the browser.

### Build Mode (`npm run build`)
Run this command to generate the production-ready files in the `dist/` folder, without live-reloading or watching files:

```
npm run build
```

This will:
- Compile LESS to CSS.
- Copy all necessary files (HTML, CSS, JS, assets) into the `dist/` folder.

After running this, you can upload the contents of the `dist/` folder to your server for production.

---

## Project Structure

Here's an overview of the project structure:

```
/tasteology
  ├── /dist             # Compiled and production-ready files
  │   ├── /assets       # Copied assets (images, etc.)
  │   ├── /css          # Compiled CSS (styles.css)
  │   ├── /js           # Copied JS (script.js)
  │   └── index.html    # The main HTML file
  ├── /src              # Source files
  │   ├── /assets       # Source images and other assets
  │   ├── /js           # JavaScript source files
  │   ├── /less         # LESS source files (styles.less)
  │   └── index.html    # The main HTML file
  ├── Gruntfile.js      # Grunt configuration file
  ├── package.json      # npm package file
  └── README.md         # Project README (this file)
```

---

## Contributing

Here's how you can get involved:

1. Fork the repository on GitHub.
2. Clone your fork to your local machine:
   ```
   git clone https://github.com/your-username/tasteology.git
   ```

3. Create a new branch for your feature:
   ```
   git checkout -b feature-name
   ```

4. Make your changes and commit them:
   ```
   git commit -am 'Add new feature'
   ```

5. Push your changes to your fork:
   ```
   git push origin feature-name
   ```

6. Submit a pull request to the main repository.

---

## Authors

[Joel Caley](https://joelcaley.love/)
And the creator of the figma design - unfortunately, I'm not entirely sure who that is.