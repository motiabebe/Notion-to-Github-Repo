const { Client } = require('@notionhq/client');
const TurndownService = require('turndown');
const fetch = require('node-fetch');

const notion = new Client({ auth: 'your_notion_TOKEN_here' });
const owner = 'your_github_username';
const repo = 'your_github_repo_name';
const token = 'your_github_TOKEN_here';

const turndownService = new TurndownService();

async function getPageContent(pageId) {
  const response = await notion.pages.retrieve({ page_id: pageId });
  return response.properties;
}

async function uploadMarkdownFile(content, fileName) {
  const apiUrl = `https://api.github.com/repos/${owner}/${repo}/contents/${fileName}.md`;

  const requestOptions = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({
      message: 'Add new Markdown file',
      content: btoa(content)
    })
  };

  const response = await fetch(apiUrl, requestOptions);
  const data = await response.json();
  console.log(data);
}

async function main() {
  const pageId = process.argv[2];
  const fileName = process.argv[3];
  const pageContent = await getPageContent(pageId);
  const markdownContent = turndownService.turndown(JSON.stringify(pageContent));
  await uploadMarkdownFile(markdownContent, fileName);
}

main().catch(error => console.error(error));
