/**
 * Entry point of the application
 */

import { getInput, setFailed, info } from "@actions/core";
import { getOctokit } from "@actions/github";
import OpenAI from "openai";

/**
 * @typedef {Object} ActionInputs
 * @property {string} language - The language (defaults to "en")
 * @property {string} openaiApiKey - The OpenAI API key
 * @property {string} [token] - The token (optional)
 * @property {string} [customPrompt] - The custom prompt (optional)
 */

/**
 * Parses the action inputs and returns an object with the parsed values.
 * @returns {ActionInputs} The parsed action inputs
 */
function parseInputs() {
  const openaiApiKey = getInput("openai-api-key", { required: true });
  const language = getInput("language");
  const token = getInput("token");

  return {
    language,
    openaiApiKey,
    token,
  };
}

/**
 * The main function that runs the action.
 */
async function run() {
  info("Running ai release notes action");
  const { openaiApiKey, language, token } = parseInputs();
  // const octokit = getOctokit(token);
  //const release = context.payload.release;

  const customPrompt = "This is a test prompt";

  // Read PR merged related commits and PR body

  try {
    /* if (!release && !customPrompt) {
      throw new Error("This action can only be run on pull requests");
    } */

    // Get the release notes
    const releaseNotes = customPrompt; // release.body;
    info(`Release notes: ${releaseNotes}`);

    // Call the OpenAI API
    const openai = new OpenAI({ apiKey: openaiApiKey });

    const completion = await openai.chat.completions.create({
      messages: [{ role: "system", content: "You are a helpful assistant." }],
      model: "gpt-4o",
    });

    const response = completion.data.choices[0].message.content;
    info(`Response: ${response}`);

    // Create a comment on the pull request
  } catch (error) {
    setFailed(error.message || "Failed to run the action");
  }
}

run();
