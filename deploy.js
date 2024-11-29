const { exec } = require('child_process');
const dotenv = require('dotenv');

// 環境変数の読み込み
dotenv.config();

const commands = [
  'npm run build',
  'npx wrangler publish'
];

async function deploy() {
  for (const command of commands) {
    console.log(`Executing: ${command}`);
    try {
      await new Promise((resolve, reject) => {
        exec(command, (error, stdout, stderr) => {
          if (error) {
            console.error(`Error: ${error}`);
            reject(error);
            return;
          }
          console.log(stdout);
          if (stderr) console.error(stderr);
          resolve();
        });
      });
    } catch (error) {
      console.error('Deployment failed:', error);
      process.exit(1);
    }
  }
  console.log('Deployment completed successfully!');
}

deploy();