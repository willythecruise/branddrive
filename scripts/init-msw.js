const { execSync } = require('child_process');
 
// Generate the service worker file
execSync('npx msw init public/ --save', { stdio: 'inherit' }); 