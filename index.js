const fs = require('fs');
const path = require('path');
const readline = require('readline');
const { exec } = require('child_process');

// Define directories to create
const directories = [ 
    'backend/controllers',
    'backend/models',
    'backend/routes',
    'backend/services',
    'backend/config',
    'backend/middleware',
    'frontend/src/components',
    'frontend/src/router'
];

console.log("\x1b[1m Hey! I am the NEVM MVC Scaffolding Tool you've been searching for!\x1b[0m");
console.log();
console.log("\x1b[1m Let's get started on your nodejs app development journey with everything you need to work in peace with a clean MVC structure and a little extra magic... \x1b[0m");
console.log();
console.log();
console.log("\x1b[1m Setting up the scaffolding for the tower you are going to build \x1b[0m");
console.log();
function showDivider(character, length) {
    console.log(character.repeat(length));
    console.log(); // Empty line for separation
}

// Print Divider:
showDivider('-', 40);
// Create directories
directories.forEach(directory => {
    const directoryPath = path.join(process.cwd(), directory);
    if (!fs.existsSync(directoryPath)) {
        fs.mkdirSync(directoryPath, { recursive: true });
        console.log(`Created directory: ${directoryPath}`);
    } else {
        console.log(`Directory already exists: ${directoryPath}`);
    }
});

showDivider('-', 40);

// Create a readline interface for user input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Prompt the user if they want to install Express.js
rl.question('Do you want to install Express.js? (y/n): ', (answer) => {
    if (answer.toLowerCase() === 'y') {
        console.log('Installing Express.js...');
        exec('npm install express', (error, stdout, stderr) => {
            if (error) {
                console.error(`Error installing Express.js: ${error}`);
                return;
            }
            console.log(stdout);
            console.log('Express.js installed successfully.');
            generateServerFile();
        });
    } else {
        console.log('Skipping installation of Express.js.');
        generateServerFile();
    }
});

// Generate server.js file
function generateServerFile() {
    showDivider('-', 40);
    const serverFile = path.join(process.cwd(), 'server.js');
    const serverContent = `
  const express = require('express');
  const app = express();

  // Set up middleware, routes, and other configurations here

  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(\`Server is running on port \${PORT}\` . Make something awesome...);
  });
  `;

    fs.writeFile(serverFile, serverContent, (err) => {
        if (err) {
            console.error('Error generating server.js file:', err);
            return;
        }
        console.log('Server file (server.js) generated successfully.');
        installORM();
    });
}

// Prompt the user to choose an ORM
function installORM() {
    showDivider('-', 40);
    rl.question('Do you want to install an ORM? (sequelize(s)/mongoose(m)/neither(n)): ', (answer) => {
        if (answer.toLowerCase() === 'sequelize' || answer.toLowerCase() === 's') {
            installSequelize();
        } else if (answer.toLowerCase() === 'mongoose'  || answer.toLowerCase() === 'm') {
            installMongoose();
        } else {
            console.log('Skipping installation of ORM.');
            console.log('Next steps:');
            console.log('- Define your models and database configurations as needed.');
            vueInstall();
        }
    });
}

// Install Sequelize
function installSequelize() {
    showDivider('-', 40);
    console.log('Installing Sequelize...');
    exec('npm install sequelize', (error, stdout, stderr) => {
        if (error) {
            console.error(`Error installing Sequelize: ${error}`);
            vueInstall();
            return;
        }
        console.log(stdout);
        console.log('Sequelize installed successfully.');
        console.log('Next steps:');
        console.log('- Define your Sequelize models and database configurations.');
        vueInstall();
    });
}

// Install Mongoose
function installMongoose() {
    showDivider('-', 40);
    console.log('Installing Mongoose...');
    exec('npm install mongoose', (error, stdout, stderr) => {
        if (error) {
            console.error(`Error installing Mongoose: ${error}`);
            vueInstall();
            return;
        }
        console.log(stdout);
        console.log('Mongoose installed successfully.');
        console.log('Next steps:');
        console.log('- Define your Mongoose models and database configurations.');
        vueInstall();
    });
}
function vueInstall() {
    showDivider('-', 40);
    // Save the current working directory
    const currentDirectory = process.cwd();
    // Prompt the user if they want to install Vue.js with Vite
    rl.question('Do you want to install Vue.js with Vite? (y/n): ', (answer) => {
        if (answer.toLowerCase() === 'y') {
            const frontEndDirectory = 'frontend';

            // Assuming the current directory is the parent directory
            const parentDirectory = process.cwd(); // Get the current working directory

            // Define the path to the frontend folder
            const frontEnd = path.join(parentDirectory, frontEndDirectory);

            console.log('Installing Vue.js with Vite...');
            const installCommand = 'npm install vite @vitejs/plugin-vue';
            exec(installCommand, (error, stdout, stderr) => {
                // Restore the original directory
                // process.chdir(currentDirectory);
                if (error) {
                    console.error(`Error installing Vue.js with Vite: ${error}`);
                    return;
                }
                console.log(stdout);
                console.log('Vue.js with Vite installed successfully.');
                console.log(`Installed Directory: ${process.cwd()}`);

                // Check if package.json exists inside frontend directory
                const packageJsonPath = path.join(frontEnd, 'package.json');
                if (fs.existsSync(packageJsonPath)) {
                    console.log(`Package.json created inside ${frontEndDirectory} directory.`);
                } else {
                    console.log(`Package.json not found inside ${frontEndDirectory} directory.`);
                }

                updateFrontend(); // Move updateFrontend call here
            });
        } else {
            console.log('Skipping installation of Vue.js with Vite.');
            rl.close();
        }
    });
}






// Update frontend files and folders
function updateFrontend() {
    showDivider('-', 40);
    console.error(`Current Directory: ${process.cwd()}`);
    const frontendPackageJsonPath = path.join(process.cwd(), 'package.json');
    // const frontendPackageJson = require(frontendPackageJsonPath);
    console.error(`Package json exists at: ${frontendPackageJsonPath}`);
    const frontendPackageJson = require(frontendPackageJsonPath);
    // Update scripts in package.json
    frontendPackageJson.scripts.dev = "vite";
    frontendPackageJson.scripts.build = "vite build";
    fs.writeFileSync(frontendPackageJsonPath, JSON.stringify(frontendPackageJson, null, 2));
    showDivider('-', 40);
    // Create 'router' directory if it doesn't exist
    const routerDirectory = path.join(process.cwd(), 'src', 'router');
    if (!fs.existsSync(routerDirectory)) {
        fs.mkdirSync(routerDirectory, { recursive: true });
        console.log(`Created directory: ${routerDirectory}`);
    } else {
        console.log(`Directory already exists: ${routerDirectory}`);
    }

    // Install Vue Router
    exec('npm install vue-router', (error, stdout, stderr) => {
        if (error) {
            console.error(`Error installing Vue Router: ${error}`);
            return;
        }
        console.log(stdout);
        console.log('Vue Router installed successfully.');

        // Generate router.js file
        const routerFile = path.join(process.cwd(), 'frontend', 'src', 'router', 'router.js');
        const routerContent = `
    import { createRouter, createWebHistory } from 'vue-router';
    // Import your Vue components for routing

    const routes = [
      // Define your routes here
    ];

    const router = createRouter({
      history: createWebHistory(),
      routes,
    });

    export default router;
    `;

        fs.writeFile(routerFile, routerContent, (err) => {
            if (err) {
                console.error('Error generating router.js file:', err);
                return;
            }
            console.log('Router file (router.js) generated successfully.');
            console.log('Next steps:');
            console.log('- Define your Vue components in frontend/src/components/');
            console.log('- Define your routes in frontend/src/router/router.js');
            console.log('- Use Vue Router for frontend routing.');
            rl.close();
        });
    });
}

