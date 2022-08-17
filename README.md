# Pineapple 🍍

This is just a pineapple.

# How to install the extension

> For the moment, the manual installation of this extension only works on Chromium (Chrome/Microsoft Edge/Brave...). More compatibility would coming soon.

`pnpm` is required for this repository, before anything else, please install it [following the official documentation](https://pnpm.io/installation).

Once `pnpm` installed, run these command to install the dependencies and build the extension

```bash
pnpm i && pnpm build
```

At the root of the repository, a new directory called `build` has been created. This directory should have a subdirectory either called `chrome-mv3-prod` or `firefox-mv2-prod` depending on the build command you executed.

Now open your browser, go to `chrome://extensions`, enable the developer mode and click on the "Load unpacked" button. Select the subdirectory present in the `build` directory.

![screenshot chrome](./public/screenshot-chrome.png)

That's it, the extension is installed and it will automatically do what it has to do without any intervention from you.

---

Pineapple icons created by [Umeicon - Flaticon](https://www.flaticon.com/free-icons/pineapple)
