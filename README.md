# 🥒 Squashinator – Bitbucket Squash & Merge Chrome Extension

> A Chrome Extension that brings GitHub-style "Squash and Merge" functionality to Bitbucket pull requests.

## 🤔 What is this?

Squashinator is a Chrome extension that brings GitHub-style "Squash and Merge" functionality to Bitbucket pull requests. If you're tired of cluttered commit histories and want a clean merge experience like GitHub provides, this tool helps automate the process.

Bitbucket doesn't support squash merging the way GitHub does. So instead of clean, elegant commit histories, you’re left with 47 “fix typo” commits and one that says “final FINAL real fix”.

This Chrome extension brings some order to that chaos by:

- Adds a shiny Squashinator 🥒 button right on Bitbucket pull request pages.
- Clicking the button opens the `Merge pull request` dialog.
- When the dialog appers, it **swaps** out the default commit message with the PR title and number, crafting a neat squash commit just like GitHub.

## 💡 Why?

Because:

- You like clean Git history.
- You’re tired of clicking around like it’s 2012.
- Bitbucket has squash merge, but not as good as GitHub.

## 🛠 How it works

1. Loads only on `bitbucket.org`.
2. Injects a fixed-position button (`Squashinator 🥒`).
3. Clicks Bitbucket’s merge button.
4. Extracts the PR title and parses the PR number.
5. Sets the commit message to: `${prTitle} (PR #${prNumber})`.

## 🧪 Demo

![demo](./demo.gif)
<img src="./squashed-commit.png" alt="squashed-commit" height="300" />

## 🧰 Installation

1. Clone or [download this repo](#).
2. Go to `chrome://extensions/`
3. Enable **Developer mode**
4. Click **Load unpacked** and select the extension folder

## 🧼 Customization

Want to customize the prefix? For example, to prepend the PR title and number (like GitHub does), update `content.js` like this:

```js
const prTitle = document
  .querySelector('button[aria-label="Edit pull request title, edit"]')
  .parentElement.querySelector("div").textContent;

const url = window.location.href;
const match = url.match(/pull-requests\/(\d+)/);
const prNumber = match ? match[1] : null;

textarea.value = `${prTitle} (PR #${prNumber})`;
textarea.dispatchEvent(new Event("input", { bubbles: true }));
```

This gives you nice, clean commit messages like:

```
feat: Add validation to form (PR #42)
```

Just like GitHub — but on Bitbucket 😏.

## ⚠️ Disclaimer

This is a tongue-in-cheek fix for Bitbucket’s lack of features. It’s not officially supported, endorsed, or even politely acknowledged by Atlassian.

Use responsibly. And squash generously.

## 🔎 Keywords

chrome extension, squash merge, bitbucket pull requests, git squash, github style squash, bitbucket merge automation, git history cleaner
