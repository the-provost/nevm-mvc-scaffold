# NEVM MVC Scaffolding Tool
[![npm version](https://img.shields.io/npm/v/nevm-mvc-scaffold.svg?style=badge)](https://www.npmjs.com/package/nevm-mvc-scaffold)
[![License](https://img.shields.io/github/license/the-provost/nevm-mvc-scaffold.svg?style=badge)](LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/the-provost/nevm-mvc-scaffold.svg?style=badge)](https://github.com/the-provost/nevm-mvc-scaffold/stargazers)
[![GitHub tag](https://img.shields.io/github/tag/the-provost/nevm-mvc-scaffold.svg?style=badge)](https://github.com/the-provost/nevm-mvc-scaffold/tags)
![NPM Downloads](https://img.shields.io/npm/dt/nevm-mvc-scaffold)


---

Your companion for Node.js app development with a clean MVC structure and a touch of magic!

## Introduction

The **NEVM MVC Scaffolding Tool** is designed to streamline your Node.js application development process by providing you with everything you need to organize your project using the MVC (Model-View-Controller) architecture. With this tool, you can quickly set up your project directories, install necessary dependencies, and generate essential files like `server.js`, routes, controllers, models, and more.

## Features

- **Automatic Directory Creation**: The tool automatically creates the necessary directories for your backend (`controllers`, `models`, `routes`, `services`, `config`, `middleware`) and frontend (`components`, `router`).
  
- **Express.js Installation**: Optionally install Express.js for building your backend server.
  
- **ORM Installation**: Choose to install Sequelize or Mongoose as your ORM (Object-Relational Mapping) tool for database interaction.
  
- **Vue.js with Vite Installation**: Optionally install Vue.js with Vite for building your frontend application.
  
- **Vue Router Installation**: Automatically install Vue Router for frontend routing.
  
- **Simple and Interactive**: The tool provides a simple and interactive command-line interface (CLI) for guiding you through the setup process.


## Directory Structure

After installation, your project structure will look like this:

```
project-root/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── services/
│   ├── config/
│   └── middleware/
├── frontend/
│   └── src/
│       ├── components/
│       └── router/
└── server.js
```

## Installation and Usage

To use the **NEVM MVC Scaffolding Tool**, follow these steps:

1. Create a new directory for your project and navigate into it:
   ```
   mkdir my-nevm-project
   cd my-nevm-project
   ```

2. Install the package:
   ```
   npm install nevm-mvc-scaffold
   ```

3. The tool will automatically run after installation. Follow the prompts to configure your project:
   - Choose whether to install Express.js
   - Select an ORM (Sequelize, Mongoose, or none)
   - Decide if you want to install Vue.js with Vite for the frontend

4. After the setup is complete, your project structure will be ready, and chosen dependencies will be installed.

## Post-Installation Steps

After the tool finishes setting up your project:

1. Review the generated `server.js` file and customize it as needed.
2. If you chose to install an ORM, set up your database configurations.
3. If you installed Vue.js, navigate to the `frontend` directory to start developing your frontend.
4. Use the created directory structure to organize your controllers, models, routes, and services.

## Scripts

The package includes the following npm scripts:

- `npm start`: Runs the scaffolding tool manually (if needed)
- `npm run dev`: Starts the Vite development server (if Vue.js was installed)
- `npm run build`: Builds the Vue.js application for production (if Vue.js was installed)

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Acknowledgments

Special thanks to all contributors and the open-source community for their valuable contributions.
