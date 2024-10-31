const { execSync } = require('child_process');
const readline = require('readline');

// Set up readline to prompt for input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to ask for input
const askQuestion = (question) => {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
};

(async () => {
  const env = await askQuestion('Enter the environment (stage/qa): ');
  const email = await askQuestion('Enter your username: ');
  const password = await askQuestion('Enter your password: ');

  rl.close();
    // Validate the environment input
    if (env !== 'stage' && env !== 'qa') {
      console.error('Invalid environment. Please enter "stage" or "qa".');
      process.exit(1);
    }

  // Run the Playwright test command with the provided credentials
  try {
    execSync(`cross-env ENV=${env} USERNAME=${email} PASSWORD=${password} npx playwright test --project=${env} --headed`, { stdio: 'inherit' });
  } catch (error) {
    console.error('Error running tests:', error.message);
  }
})();
