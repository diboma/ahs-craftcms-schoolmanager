# MySchool

Project by Dirk Bouckaert  
Data Management PGM2 (AL)  
Arteveldehogeschool 2023-24  

## Introduction
MySchool is a simplified (incomplete) school managing system (frontend and backend) built with Craft CMS.

## Prerequisites
- You need to have Docker and DDEV installed.

## Installation
- Constants are defined in the following files:
	- `.env` (which has been provided for education purposes)
	- `.ddev/config.yaml`
- Run `ddev start`.
- Run `ddev composer install`.
- Run `ddev npm install`.
- Run `ddev import-db --file=./resources/db.sql`. 
	- Or you can run `bash db-import` (Windows users: to do this, you need to have Git Bash installed).
- Run `ddev launch`.
- You can use the following account to access the control panel `/admin/login`:
	- username: admin
	- password: artevelde

## Customization
- Tailwind:
	- Run `npm run tailwind` for develop mode without hot reloading (you need to manually reload the pages to see changes).
	- Run `npm run dev`for develop mode with hot reloading (experimental).
	- Run `npm run tailwind:build` for building your Tailwind CSS file.

## Technologies and features
- Craft CMS
	- Single
	- Channel
	- Structure
	- Matrix
	- Categories
	- Assets (images and documents)
	- Form plugin (used for the contact form)
- Tailwind CSS


[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=12517824&assignment_repo_type=AssignmentRepo)
