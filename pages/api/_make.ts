import {readdirSync, readFileSync, writeFileSync} from 'fs';
import path from 'path';
import { remark } from 'remark';
import html from 'remark-html';
import matter from 'gray-matter';

const markdownDirectory = './markdown';
const pagesDirectory = './pages/sample';

async function generateNextjsPages() {
  const markdownFiles = readdirSync(markdownDirectory);

  for (const file of markdownFiles) {
    const filePath = path.join(markdownDirectory, file);
    const fileContent = readFileSync(filePath, 'utf-8');
    const { data, content } = matter(fileContent);

    const processedContent = await remark()
    .use(html)
    .process(content);

  const contentHtml = processedContent;

    const pageSlug = file.replace('.md', '');
    const pagePath = path.join(pagesDirectory, `${pageSlug}.js`);

    const componentName = pageSlug.charAt(0).toUpperCase() + pageSlug.substring(1).toLowerCase()
    // Generate the Next.js page file
    writeFileSync(pagePath, generatePageTemplate(data, contentHtml, componentName));
  }
}

function generatePageTemplate(metadata, html, componentName) {
  
  return `
  // GENERATED FILE : CHANGES MADE MIGHT BE LOST ON BUILDING

  import Layout from '../../components/Layout';

  export default function ${componentName}() {
    return (
      <Layout data={${JSON.stringify(metadata)}} dangerousInnerHTML={\`${html}\`}>
      </Layout>
    );
  }
  `;

}

export {generateNextjsPages}