function addSquashinatorButton() {
  if (document.getElementById("squashinator")) return;

  const button = document.createElement("button");

  button.className = "squashinator";
  button.id = "squashinator";
  button.textContent = "Squashinator 🥒";

  document.body.appendChild(button);

  button.addEventListener("click", () => {
    const mergeButton = document.querySelector('button[data-testid^="mergeButton-"]');

    const prTitle = document
      .querySelector('button[aria-label="Edit pull request title, edit"]')
      .parentElement.querySelector("div").textContent;

    const url = window.location.href;
    const match = url.match(/pull-requests\/(\d+)/);
    const prNumber = match ? match[1] : null;

    mergeButton?.click();

    const observer = new MutationObserver(() => {
      const dialog = document.querySelector("[role=dialog]");

      if (dialog) {
        const textarea = dialog.querySelector("textarea[name='merge-dialog-commit-message-textfield'");

        if (textarea) {
          setTimeout(() => {
            textarea.value = `${prTitle} (PR #${prNumber})`;
            textarea.dispatchEvent(new Event("input", { bubbles: true }));
          }, 500);

          observer.disconnect();
        }
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });
  });
}

addSquashinatorButton();
