# Sitecore MVC FED Seed CLI
The XCentium Sitecore MVC FED Seed CLI is a scaffolding tool for the front-end development workspace that you would like tied to your Sitecore MVC solution. The CLI creates a [Pattern Lab](https://patternlab.io/) design system with the choice to use optional CSS starter frameworks.

## Installation

- `npm install -g @xcentium/xc-cli`

## Options
- `-v`, `--version` :   output cli version number
- `-h`, `--help`    :   output usage information

## Commands
- `init`        :   generate a new project based off of Xcentium template
- `help [cmd]`  :   display help for [cmd]

## Creating a Project
- `xc-cli init` - *while in a terminal scoped to the directory that you want your project to be created.*
- **Options:**
 - `-s`: skips prompts and generate project with no frameworks selected
 - `-g`: initializes as a Git repository
 - `-i`: automatically installs Node dependencies as soon as project files are copied to directory

