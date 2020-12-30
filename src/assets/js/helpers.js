// Contains reusable stuff

// Requires a string to be a valid URL and to start with `http` or `https`
export const urlRegex = new RegExp(
  /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,10}\b([-a-zA-Z0-9@:%_+.~#()?&//=]*)/gim
);

// Validator function for URLs
//
// @param url      - String. URL to validate
// @param helpText - String. Inserted into an error message for debugging purposes
export function validateUrl(url, helpText) {
  const isValid = url.match(urlRegex);

  if (!isValid) {
    console.error(
      `Please ensure the link to ${helpText} is a valid URL. Check if it includes the protocol (\`https\` or \`http\`).`
    );
  }

  return isValid;
}

// Validator function for strings
//
// @param url      - Any. Variable to validate
// @param helpText - String. Inserted into an error message for debugging purposes
export function validateStr(variable, helpText) {
  let isValid = true;

  const type = typeof variable;

  if (type !== 'string') {
    isValid = false;
    console.error(`The type of ${helpText} must be String.`);
  }

  if (type === 'string' && !variable.trim().length) {
    console.error(`Please ensure that ${helpText} is not an empty string`);
  }

  return isValid;
}
