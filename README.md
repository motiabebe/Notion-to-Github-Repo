# Notion to GitHub Markdown Script

This script converts content from a Notion page to Markdown format and uploads it to a GitHub repository. It uses the Notion API to retrieve the content and the GitHub API to upload the Markdown file.

## Installation

To use this script, you'll need to have Node.js installed on your machine. You can download it from the official website: https://nodejs.org/

You'll also need to install the following packages:

- `@notionhq/client`: A Node.js client for the Notion API
- `turndown`: A JavaScript library for converting HTML to Markdown
- `node-fetch`: A Node.js library for making HTTP requests

To install these packages, run the following command in your terminal:

npm install @notionhq/client turndown node-fetch


## Usage

To use this script, you'll need to provide two arguments:

- The ID of the Notion page you want to convert to Markdown
- The name of the Markdown file you want to create on the GitHub repository (without the `.md` extension)

You can run the script using the following command:


node NotionS.js


Replace `<pageId>` with the actual ID of the Notion page you want to upload, and `<fileName>` with the name of the file you want to create on the GitHub repository (without the `.md` extension).

For example, if you want to convert a Notion page with ID `1fdb8589cdbd4fd28d7be97bbd1ab381` to Markdown and create a file named `MyFile.md` on the GitHub repository, you can run the following command:

node NotionS.js 1fdb8589cdbd4fd28d7be97bbd1ab381 MyFile


The script will convert the content from the Notion page to Markdown format, create a new file named `MyFile.md` on the GitHub repository, and upload the Markdown content to the file.

## Authentication

To use the Notion and GitHub APIs, you'll need to provide authentication credentials. You can set the following environment variables to provide the credentials:

- `NOTION_API_KEY`: Your Notion API key
- `GITHUB_TOKEN`: Your GitHub personal access token

Alternatively, you can hardcode the credentials in the script by replacing the values of the `auth`, `owner`, `repo`, and `token` variables.

## License

This script is licensed under the MIT License. See the `LICENSE` file for more information.
