# Food Lookup Demo
# Introduction 

This is a challenge I received a few months ago; keep reading to understand how it works.
It required quite a few tricky changes to the config files to get it working because there are some outdated libraries in the original code. 

The repository h[ttps://github.com/tmallafre/qachallenge](https://github.com/tmallafre/qachallenge) will be used to store and use the Playwright tests for the Food Lookup Demo app test automation, and to run the server as well. This repository will be used to get the work delivered by the whole team in sync.
# Getting Started
In this repo we have all the code needed to run the Food Lookup Demo app and the Playwright tests, and the scripts that are needed to run them in CI.
The server part is inside the folder named 'server' located below the /playwright folder, so we have all the code needed together but not mixed. You only need to clone the repo and install Playwright on your local environment to develop and run the tests there.
To run the server on your local environment, follow the steps described in https://github.com/Skycatch/qa-automation-challenge

# Build and Test
We'll establish a policy about how to name the test files and how to organize them in folders. Until then, try to do your best using the existing files and folders as examples. 

# Contribute
We will use folders and tags in Playwright to keep the tests structured and organized, so we'll be able to create test sets easily. The conventions to be used will be documented in the company Wiki (to be done) or in this readme file for the time being.
Check the tests located in /tests/food.demo.spec.ts file as an example to start writing your tests.

# Additional info
The CI environment is configured to run the tests at every commit, but we'll evaluate if we need to change these configs in the future.
For safety's sake, the GitHub repo will be configured in a way that every pull request will need at least approval from one additional user (when at least one more user will be working in the project). Anyway, ask if you are unsure about how to push your work to the repository, or check the Wiki (when available).


# Branches and repo configuration
We will use the 'main' branch as our ultimate version of the code, so for your everyday work it's advised to use your own branches. Then you'll push your code to GitHub, and then you'll make a pull request that will be merged to the 'main' branch when another member of the team will approve it, as commented earlier in this document.

# Architecture
The CI is configured to run the server and the tests on every push, but the tests can also be run using the GUI in GitHub Actions. These configs are settled at the beginning of the file /.github/workflows/playwright.yml.
This file also contains the docker image of the SO used to run the server and the tests and some other configs, so it will be updated when required by new docker images or new Node versions will be available.
At the end of the playwright.yml file, we have the commands to run the server, install all of the software and dependencies needed and to run the tests.
It's also a good idea that you get familiar with the contents of the playwright.config.ts file, so you'll be able to configure it to check your tests at your convenience. But keep in mind that your changes here will reach the repo, so remember to talk about your changes to other team members or revert them before publishing.

# Other
Feel free to reach me through GitHub or email if you have any questions.




