import fs from "fs/promises";
import path from "path";

const SOURCE_PATH = path.join(__dirname, "..", "src");
let API_DOCUMENTATION_TEMPLATE = `
## API documentation

| API | API spec |
| -- | -- |
`;

/**
 * get entire api readme files and update api documentation(name, file link)
 */
const updateApiDocumentation = async () => {
  try {
    const sourceFiles = await fs.readdir(SOURCE_PATH);
    const utilityReadmeList = sourceFiles.filter((sourceFile) =>
      sourceFile.endsWith(".md")
    );

    for (let i = 0; i < utilityReadmeList.length; i += 1) {
      const utilityReadme = utilityReadmeList[i];
      const utilityName = utilityReadme.split(".md")[0];
      API_DOCUMENTATION_TEMPLATE += `| ${utilityName} | [${utilityReadme}](https://github.com/vsnm25/skylight-utils/blob/main/src/${utilityReadme}) | \n`;
    }
    fs.writeFile("README_API.md", API_DOCUMENTATION_TEMPLATE);
  } catch (err) {
    process.exit(1);
  }
};

updateApiDocumentation();
