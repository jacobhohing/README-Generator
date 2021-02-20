
// Array of Licenses, badges, and links. Credit: lukas-h/license-badges.md for the links and badges.
const licenseBadges = [
  {
    name:"Apache 2.0",
    badge:"[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
  },
  {
    name:"Boost Software License 1.0",
    badge:"[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)",
  },
  {
    name:"IBM Public License Version 1.0",
    badge:"[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)",
  },
  {
    name:"ISC",
    badge:"[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)",
  },
  {
    name:"MIT",
    badge:"[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
  },
  {
    name:"Mozilla",
    badge:"[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)",
  },
  {
    name:"The Unlicense",
    badge:"[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)",
  },
]

// Function that renders license badges.
function renderLicenseBadge(license) {
  

  for (var key in licenseBadges) {
    let licenseName = licenseBadges[key];

    if (license == licenseName.name)
    {
      return licenseName.badge
    }
    else
    {
      return ""
    }
  }

}


renderLicenseBadge("MIT");

// Function that renders license Links.
// function renderLicenseLink(license) {
//   for (var key in licenseBadges) {
//     let licenseName = licenseBadges[key];

//     if (license == licenseName.name)
//     {
//       return licenseName.link
//     }
//     else
//     {
//       return ""
//     }
//   }

// }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license != "")
  {
  return `## License 
  ${renderLicenseBadge(license)}`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

##Table of Contents

<ol>
<li>[Description](#Description)</li>
<li>[Installation](#Installation)</li>
<li>[Usage](#Usage)</li>
<li>[License](#License)</li>
<li>[Contributions](#Contributions)</li>
<li>[Questions](#Questions)</li>
<li>[Tests](#Tests)</li>
</ol>

##Description
${data.descprition}
`;
}

module.exports = generateMarkdown;
