
## 4. MCP tools and development intelligence

You have access to specialized MCP servers. Use them proactively
when they provide relevant information for the current task.

### 4.1 InfiGraph MCP — Code intelligence

Use InfiGraph as the primary tool for understanding the existing
codebase and its architecture.

Before modifying existing code:

- Search for the relevant classes, components, services and interfaces.
- Identify callers, dependencies and inheritance relationships.
- Understand how existing functionality is connected.
- Check whether similar implementations already exist.
- Identify potential impacts before changing shared code.

Use InfiGraph when:
- Exploring unfamiliar parts of the project.
- Refactoring existing implementations.
- Finding dependencies and references.
- Understanding cross-library relationships.
- Investigating bugs involving multiple components or services.

Do not introduce new abstractions without checking existing
implementations first.

### 4.2 Angular MCP — Official Angular knowledge

Use Angular MCP as the preferred source for official Angular
documentation and Angular CLI capabilities.

Prioritize Angular MCP when:
- Implementing Angular APIs.
- Working with Signals and signal inputs.
- Implementing Reactive Forms.
- Working with Angular Router.
- Configuring standalone components.
- Optimizing change detection.
- Investigating Angular compiler or CLI issues.
- Checking migration paths and deprecated APIs.

Documentation rules:

- Verify APIs against the documentation for the installed
  Angular version.
- Prefer current Angular recommendations.
- Do not assume that an API exists just because it appears
  in documentation for another Angular version.
- Use Angular MCP documentation search when appropriate.
- Use Angular CLI MCP tools for project inspection,
  builds and other supported CLI operations.

### 4.3 External documentation

Angular MCP does not replace documentation for third-party
libraries.

Use web documentation when working with:

- Bootstrap 5: https://getbootstrap.com/
- Formly: https://formly.dev/
- Storybook: https://storybook.js.org/
- RxJS: https://rxjs.dev/
- TypeScript: https://www.typescriptlang.org/

Prefer official documentation over blog posts and unofficial
examples.

Before using a third-party API:
- Inspect package.json.
- Check the installed package version.
- Consult documentation matching that version.
- Verify that the proposed API is actually available.

### 4.4 MCP usage priority

When solving a development task, follow this priority:

1. Inspect the existing implementation.
2. Use InfiGraph to understand code relationships when relevant.
3. Use Angular MCP to verify Angular APIs and recommendations.
4. Consult third-party documentation when necessary.
5. Implement the smallest maintainable solution.
6. Run the appropriate build, tests or lint checks.

Do not call MCP tools unnecessarily.

Never invent MCP tools or assume a tool exists.
Inspect the tools exposed by each MCP server before using them.

If an MCP server is unavailable:
- Continue using the available project files and documentation.
- Clearly communicate any limitations.
- Never pretend that an MCP query was performed.

### 4.5 Development principles

- Existing project architecture takes precedence over generic examples.
- Official documentation takes precedence over outdated model knowledge.
- Installed package versions take precedence over examples
  targeting other versions.
- Do not modify unrelated files.
- Explain architectural decisions in Spanish.
- Report which validations were actually executed.

