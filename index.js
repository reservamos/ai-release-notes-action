/**
 * Entry point of the application
 */

import * as core from "@actions/core";

/**
 * @typedef {Object} ActionInputs
 * @property {string} [language] - The language (optional)
 * @property {string} openaiApiKey - The OpenAI API key
 * @property {string} [token] - The token (optional)
 */

/**
 * Parses the action inputs and returns an object with the parsed values.
 * @returns {ActionInputs} The parsed action inputs
 */
function parseInputs() {
  const openaiApiKey = core.getInput("openai-api-key", { required: true });
  const language = core.getInput("language");
  const token = core.getInput("token");

  return {
    language,
    openaiApiKey,
    token,
  };
}

/**
 * The main function that runs the action.
 */
function run() {
  core.info("Running ai release notes action");
  const inputs = parseInputs();
}

run();
