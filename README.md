# React NiceTemplate

A modern template for building React applications with TypeScript, Vite, and Tailwind CSS.

## Requirements

- Node.js v18+
- pnpm (recommended package manager)

## Installation & How to run

To get started with this project, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/nicetemplate.git
   cd nicetemplate
   ```

2. Install the dependencies:

   ```bash
   pnpm install
   ```

3. Start the project:
   ```bash
   pnpm run dev
   ```

## Tools

- **React 18** with TypeScript support
- **Tailwind CSS** for styling
- **ESLint** and **Prettier** for code quality and formatting
- **Playwright** for testing
- **Husky** for Git hooks and pre-commit linting
- **Typedoc** for generating documentation from TypeScript code

## Scripts

- `pnpm run dev` : Starts the development server using Vite
- `pnpm run build` : Builds the production files.
- `pnpm run preview` : Previews the built project.
- `pnpm run lint` : Lints the code using ESLint and checks formatting with Prettier.
- `pnpm run lint:fix` : Automatically fixes linting errors and formatting issues.
- `pnpm run test` : Runs all Playwright tests.
- `pnpm run docs:gen` : Generates documentation using Typedoc.
- `pnpm run husky:lint-staged` : Hook to lint staged files.
- `pnpm run husky:commitlint` : Hook to check the commit message.

# Project Guidelines

## What should be documented?

### 1. Scripts in 'package.json'

Each script in `package.json` should be documented, explaining:

- **Purpose:**: What does the script do?

### 2. Main components

Each domain or major feature should document:

- **Description:**: Overview of its purpose and key components.
- **Features:**: Brief description of the feature and who should use it.

### 3. Utility functions

Every utility function in the project should include Typedoc comments with:

- **Function purpose:**: Explain what the function does.

### 4. Folder structure

The purpose of each important folder in the project.

```
/project
  /src
    /components     // Globally used React components
    /hooks          // Globally used React hooks
    /utils          // Globally used helper/utility functions
    /domains        // Domain-specific logic
      /domain1        // Example domain name
        /components   // Components used by this domain
        /adapters     // Adapters to interact with external systems or APIs
        /hooks        // React hooks
        /utils        // Utility functions and constants
        /Feature1Page.tsx  // Main entry page component
  /tests
    /domain1
      /feature1       // Test files and cases for "Feature1"
```

### 5. Naming conventions

Define clear naming conventions for components, files, and variables:

- **Components:** PascalCase (e.g., Feature1Page.tsx).
- **Utility functions:** camelCase (e.g., getFeatureData).
- **Folder names:** kebab-case (e.g., domain1, components).

### 6. Git commit conventions

All commit messages must specify its type:

- **ci:** Changes to the CI configuration files
- **chore:** Routine tasks not related to features or fixes, e.g. updating a dependancy
- **docs:** Documentation only changes
- **ticker:** Changes related to a ticket
- **feat:** A new feature
- **fix:** A bug fix
- **perf:** A code change that improves performance
- **test:** Adding tests or correcting existing tests
- **refactor:** A code change that neither fixes a bug nor adds a feature
- **revert:** Reverts a previous commit
- **style:** Changes that do not affect the meaning of the code (formatting, missing colons, etc)
