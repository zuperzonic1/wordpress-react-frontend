# WordPress React Frontend

## Installation Guide

### Prerequisites
Ensure you have [Git](https://git-scm.com/) installed on your system or use your preferred method to clone the repository.

### Steps to Clone and Install

1. Clone the repository:
    ```sh
    git clone https://github.com/zuperzonic1/wordpress-react-frontend
    ```

2. Navigate into the project directory:
    ```sh
    cd wordpress-react-frontend
    ```

3. Install the project dependencies:
    ```sh
    npm install
    ```

### Project Overview

This project uses [WordPress](https://wordpress.org/) as the backend, which provides data through a RESTful API. The React frontend receives this data using [Axios](https://axios-http.com/). The HTML code is converted to JSX using the [Interweave](https://github.com/milesj/interweave) library, and routing within the project is managed using [React Router DOM](https://reactrouter.com/web/guides/quick-start). Additionally, the project has [Tailwind CSS](https://tailwindcss.com/) configured for styling.

### Backend Setup

This repository contains only the frontend part of the project. To set up the backend, follow the tutorial on setting up Headless WordPress with CORS configuration:
[Headless WordPress CMS Tutorial by Cloudways](https://www.cloudways.com/blog/headless-wordpress-cms/)
