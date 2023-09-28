
# TelecareHub StarterPack.

Welcome to TelecareHub! This README file provides an overview of this project, its structure, and how to get started.

## Table of Contents

- [Introduction](#introduction)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Development Server](#development-server)
- [Project Structure](#project-structure)
- [Configuration](#configuration)
- [Scripts](#scripts)
- [Styling](#styling)

## Introduction

TelecareHub is built using Vite-react (A Vite app is a lightweight and fast development environment for building modern web applications. Vite stands for "French for 'fast,' and it lives up to its name by providing a highly performant development experience).

## Getting Started

Follow these steps to set up and run your telecareHub app locally.

### Prerequisites

Before you begin, make sure you have the following installed on your system:

- Node.js: This project requires Node.js to be installed. You can download it from [nodejs.org](https://nodejs.org/).

### Installation

1. Clone this repository to your local machine:

   ```bash
   https://github.com/eHealthAfrica/telecareHub.git
   ```

2. Navigate to the project directory:

   ```bash
   cd telecareHub
   ```

3. Install project dependencies:

   ```bash
   npm install
   ```

### Development Server

To start a development server and see your app in action, run the following command:

```bash
npm run dev
```

This will start the development server, and you can access your app at `http://localhost:5173`. Any changes you make to your code will be reflected in the browser.

## Project Structure

Here's a brief overview of the project structure:

- `public/`: Contains static assets that will be served as-is.
- `src/`: Contains the following:
  - `main.jsx`: Entry point of your app.
  - `App.jsx`: The root Vue component.
  - `assets`: Contains images.
  - `components`: Contains useful fragments of code.
  - `pages`: Contains application's individual pages.
  -`routes`: Contains the routes for navigation.
- `package.json`: Defines project dependencies and scripts.
- `vite.config.js`: Configuration file for Vite.
- `tailwind.config,js`: Configuration file for tailwind.


## Scripts

Here are some useful scripts you can run:

- `npm run dev`: Start the development server.
- `npm run build`: Build your app for production.
- `npm run serve`: Serve the production build locally.

## Styling

This project uses tailwind CSS for styling. Visit https://tailwindcss.com/ for more information.

Happy coding!!!
