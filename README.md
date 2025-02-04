# Loch Lomond Assistant

Hi there! This is a cool tool that helps you get the latest information about the Loch Lomond ski resort and saves it as images. Here's how you can use it:

## Prerequisites

1. Make sure you have [Node.js](https://nodejs.org/) installed on your computer.

## Installation

1. Open a terminal and run the following command to install the Loch Lomond Assistant globally:

    ```sh
    npm install -g loch_lomond_assistant
    ```

## Usage

To use the Loch Lomond Assistant, follow these steps:

1. Pick an empty folder where you want to save the images.
2. Open a terminal in that folder.
3. Run the following command to get the latest ski resort information:

    ```sh
    loch info
    ```

This will capture screenshots of the current conditions and weather forecast from the Loch Lomond ski resort website and save them as images in the folder.

## How It Works

- The tool uses [Puppeteer](https://pptr.dev/), a Node library that provides a high-level API to control Chrome or Chromium over the DevTools Protocol.
- It navigates to the Loch Lomond ski resort website and takes screenshots of specific elements on the page.

## Troubleshooting

If you encounter any issues, make sure you have the latest version of Node.js and npm installed. You can also check the terminal output for any error messages.

## Author

Created by Frank.

---

I hope you find this tool useful! If you have any questions or need help, feel free to reach out.