

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `[![${license.name} license](${license.image})](${license.url})`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseSection(data.license)}
  ## Table of Contents
  *[description](#description)

  *[installation](#installation)

  *[usage](#usage)

  *[contributing](#contributing)

  *[tests](#tests)

  *[license](#license)

  
  ## Description
  ${data.description}
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## Contributing
  ${data.contributing}
  ## Tests
  ${data.tests}
  ## License
  Distributed under the ${data.license.name} License. See [LICENSE](${data.license.url}) for more information
  ## Questions
  If you have any questions you can contact me at:
  EMAIL: ${data.email}
  Github: github.com/${data.username}`;
  
}

module.exports = generateMarkdown;
