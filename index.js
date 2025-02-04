#!/usr/bin/env node

import Info from './info.js';
import { exec } from 'child_process';

// Capture the command passed in the terminal (e.g., 'info')
const command = process.argv[2];

if (command === 'info') {
  console.log('Executing "loch info"...');
  const info = new Info();
  info.start();
  exec('echo "Getting info..."', (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }
    console.log(stdout);
    if (stderr) {
      console.error(`stderr: ${stderr}`);
    }
  });
} else {
  console.log(`Unknown command: ${command}`);
}
