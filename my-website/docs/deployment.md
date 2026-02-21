# Deploying to GitHub Pages

This site is deployed to GitHub Pages using GitHub Actions. Every push to the `main` branch automatically builds and publishes the site.

**Live site:** https://serhii23korol.github.io/learning-docusaurus/

---

## How It Works

1. You push changes to `main`
2. GitHub Actions runs the workflow (`.github/workflows/deploy.yml`)
3. It installs dependencies, builds the site, and pushes the output to the `gh-pages` branch
4. GitHub Pages serves the site from the `gh-pages` branch

---

## Workflow File

Located at `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main

jobs:
  deploy:
    name: Deploy to GitHub Pages
    runs-on: ubuntu-latest
    permissions:
      contents: write
    steps:
      - uses: actions/checkout@v4
        with:
          fetch-depth: 0

      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm

      - name: Install dependencies
        working-directory: ./my-website
        run: npm ci

      - name: Build website
        working-directory: ./my-website
        run: npm run build

      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./my-website/build
```

---

## Docusaurus Configuration

The following fields in `my-website/docusaurus.config.ts` are required for GitHub Pages to work correctly:

```ts
const config: Config = {
  url: "https://serhii23korol.github.io",
  baseUrl: "/learning-docusaurus/",
  organizationName: "serhii23korol",
  projectName: "learning-docusaurus",
  deploymentBranch: "gh-pages",
  trailingSlash: false,
};
```

> ⚠️ **Important:** The `baseUrl` must match your repo name exactly, including the leading and trailing slashes. Forgetting this will cause the site to load without styles or assets.

---

## Repo Structure

The Docusaurus project lives inside the `my-website` subfolder, not at the root of the repo:

```
learning-docusaurus/
├── .github/
│   └── workflows/
│       └── deploy.yml
├── my-website/         ← Docusaurus project is here
│   ├── package.json
│   ├── docusaurus.config.ts
│   └── ...
├── LICENSE
└── README.md
```

This is why `working-directory: ./my-website` is set in the workflow steps.

---

## GitHub Repo Settings

Two settings need to be configured once in the GitHub repo:

**1. Workflow permissions**  
Go to **Repo Settings → Actions → General → Workflow permissions** and enable **Read and write permissions**. Without this, the Action will fail with a 403 permission error when trying to push to `gh-pages`.

**2. GitHub Pages source**  
Go to **Repo Settings → Pages** and set the branch to `gh-pages`, folder `/ (root)`. This must be done after the first successful Action run, since the `gh-pages` branch is created automatically by the workflow.

---

## Troubleshooting

| Error                         | Cause                                               | Fix                                                     |
| ----------------------------- | --------------------------------------------------- | ------------------------------------------------------- |
| `Could not read package.json` | Runner can't find the project — it's in a subfolder | Add `working-directory: ./my-website` to workflow steps |
| `Permission denied (403)`     | GitHub Actions lacks write access                   | Enable Read and write permissions in Settings → Actions |
| Site loads but has no styles  | Wrong `baseUrl` in config                           | Set `baseUrl` to `/learning-docusaurus/`                |
| README shows instead of site  | Pages is serving from wrong branch                  | Switch Pages source to `gh-pages` in Settings → Pages   |
