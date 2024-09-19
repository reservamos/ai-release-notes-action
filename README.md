# AI Release Notes Action

This GitHub Action automates the process of generating release notes using AI-generated content. It simplifies the task of creating human-readable release notes for your software projects.

## Features

- Automatic generation of releases based on a specified version.
- Populates release notes based on associated commits and pull requests.
- Seamless integration with GitHub workflows.
- Customizable settings for language and AI model selection. Language must be as "en", "es", "br".

## Use Case

This action is particularly useful for companies that want to generate comprehensive release notes without investing excessive time and effort.

## Getting Started

To use the AI Release Notes Action, follow these steps:

1. Go to the GitHub Marketplace and search for "AI Release Notes Action".
2. Select the action from the search results.
3. Click on "Set up a workflow" to configure the action for your repository.
4. Customize the workflow file to specify the version and any additional settings.

```yml
- name: AI Release Notes Action
        uses: reservamos/ai-release-notes-action@v1.0.0
        with:
          openai-api-key: ${{ secrets.OPENAI_API_KEY }}
          version: v1.0.0
          language: "en"
          token: ${{ secrets.GITHUB_TOKEN }}
          model: "gpt-4o"
          use-github-generated-notes: true
```

5. Save the workflow file, and the action will automatically generate release notes for each new version.

That's it! You can now enjoy the benefits of automated release note generation with AI-powered content.
