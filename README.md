Sure, here is the formatted Markdown version of the NotionS.js script prerequisites, installation, usage, authentication, and license:

## Prerequisites

Before you can use the NotionS.js script, you'll need to do the following:

* Have Node.js installed on your machine. You can download it from the official website: <https://nodejs.org/>
* Have a Notion account and create a new integration to obtain an API key. You can follow the instructions in the official Notion documentation to create a new integration and obtain an API key.
* Have a GitHub account and create a new personal access token. You can follow the instructions in the official GitHub documentation to create a new personal access token.

## Installation

To use the NotionS.js script, you'll need to install the required packages. You can do this by running the following command in your terminal:

```
npm install @notionhq/client turndown node-fetch
```

## Usage

To use the notion2git.js script, you'll need to provide two arguments:

* The ID of the Notion page you want to upload
* The name of the file you want to create on the GitHub repository (without the .md extension)

You can run the script using the following command:

```
node NotionS.js <pageId> <fileName>
```

Replace `<pageId>` with the actual ID of the Notion page you want to upload, and `<fileName>` with the name of the file you want to create on the GitHub repository (without the .md extension).

For example, if you want to convert a Notion page with ID `1fdb8589cdbd4fd28d7be97bbd1ab381` to Markdown and create a file named `MyFile.md` on the GitHub repository, you can run the following command:

```
node NotionS.js 1fdb8589cdbd4fd28d7be97bbd1ab381 MyFile
```

The script will convert the content from the Notion page to Markdown format, create a new file named `MyFile.md` on the GitHub repository, and upload the Markdown content to the file.

## Authentication

To use the Notion and GitHub APIs, you'll need to provide authentication credentials. You can set the following environment variables to provide the credentials:

* `NOTION_API_KEY`: Your Notion API key
* `GITHUB_TOKEN`: Your GitHub personal access token

Alternatively, you can hardcode the credentials in the script by replacing the values of the `auth`, `owner`, `repo`, and `token` variables.

## License

This script is licensed under the MIT License. See the `LICENSE` file for more information.
