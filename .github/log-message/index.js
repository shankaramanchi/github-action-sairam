const core = require('@actions/core');

try {
  // Get the message input defined in action.yml
  const message = core.getInput('message');
  console.log(`Message: ${message}`);
} catch (error) {
  core.setFailed(`Action failed with error ${error}`);
}
