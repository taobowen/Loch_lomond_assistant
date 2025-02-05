# Loch Lomond Assistant

Hi there! This is a cool tool that helps you get the latest information about the Loch Lomond ski resort and saves it as images. Here's how you can use it:

## Prerequisites

1. Make sure you have [Node.js](https://nodejs.org/) installed on your computer.

## Installation

1. Open a terminal (Mac)

- Press `Command + Space` to open Spotlight Search.
- Type `Terminal` and press `Enter`.

2. Run the following command to install the Loch Lomond Assistant globally:

    ```sh
    npm install -g loch_lomond_assistant
    ```

## Usage

To use the Loch Lomond Assistant, follow these steps:

1. Pick an empty folder where you want to save the images.
2. Open a terminal in that folder. If you don't know how to open a terminal in a specific folder on a Mac, follow these steps:
    - Select the specified folder in Finder.
    - Press `Control` and click the mouse.
    - In the pop-up menu, select `New Terminal at Folder`.
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

## Run interface

<img width="280" alt="Screenshot 2025-02-04 at 18 15 12" src="https://github.com/user-attachments/assets/80c1061e-03f5-42c7-99f2-4dbd192efaf3" />


## Result

![conditions](https://github.com/user-attachments/assets/cfd2eed6-e8cc-4e02-8e4e-3e42cf5a6622)
![detailed](https://github.com/user-attachments/assets/06362fc9-2b3c-4b1a-a404-972f13fdd118)
![forecast](https://github.com/user-attachments/assets/54c77434-b339-446f-b074-d911dad9fb36)
![poi](https://github.com/user-attachments/assets/0fe6abf5-e44d-4f21-849c-2d2237ad9b52)
![weather](https://github.com/user-attachments/assets/796497aa-e227-4bc5-a8d8-1b331910c3b1)

## Author

Created by Frank 🏂🏻.

---

I hope you find this tool useful! If you have any questions or need help, feel free to reach out.
