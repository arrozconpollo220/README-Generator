// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  }

  switch (license) {
    case 'MIT':
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
      break;
    case 'Apache':
      return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
      break;
    case 'IBM':
      return '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)';
      break;
    case 'Mozilla':
      return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
      break;
    case 'Perl':
      return '[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)'; 
      break;    
    default:
      return '';
  }
}


// // TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
    ${renderLicenseBadge}
  # ${data.title}

  ## Table of Contents
  \n -[Description](#Description)
  \n -[Installation](#Installation)
  \n -[Usage](#Usage)
  \n -[Credits](#Credits)
  \n -[Licenses](#Licenses)
  \n -[Contributions](#Contributions)
  \n -[Testing](#Testing)
  \n -[Site-URL](#Site-URL)
  \n -[Screenshots](#Screenshots)

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Credits
  ${data.credits}

  ## Licenses
  This project is licensed under the ${renderLicenseBadge(data.license)} license. Click on the badge above for more information.

  ## Contributions
  ${data.contribute}

  ## Testing
  ${data.testing}

  ## Site-URL
  ${data.URL}

  ## Screenshots
  ${''}

  ## Questions?
  Any questions regarding this project can be answered by contacting me through my GitHub Profile at https://github.com/${data.username} or at my email address at ${data.email}. 

  -Thank you

`;
}

module.exports = generateMarkdown;

