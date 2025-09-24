const fs = require('fs');
const path = require('path');

const manifestPath = path.join(process.cwd(), '.amplify-hosting', 'deploy-manifest.json');

try {
  // Read the existing deploy-manifest.json
  const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));

  // Add compute configuration for AWS Amplify with Node.js 20.x runtime
  manifest.computeResources = [{
    runtime: 'nodejs20.x',
    entrypoint: 'server.js'
  }];

  // Update routes to include SSR handling
  const hasSSRRoute = manifest.routes.some(route => route.target?.kind === 'Compute');

  if (!hasSSRRoute) {
    // Insert SSR route before the catch-all static route
    const staticCatchAllIndex = manifest.routes.findIndex(route => route.path === '/*');

    if (staticCatchAllIndex > -1) {
      manifest.routes.splice(staticCatchAllIndex, 0, {
        path: '/*.*',
        target: {
          kind: 'Static'
        }
      }, {
        path: '/*',
        target: {
          kind: 'Compute',
          src: 'default'
        }
      });

      // Remove the old catch-all static route
      manifest.routes.splice(staticCatchAllIndex + 2, 1);
    }
  }

  // Write the updated manifest
  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
  console.log('✅ Fixed deploy-manifest.json with nodejs20.x runtime');
} catch (error) {
  console.error('❌ Failed to fix deploy-manifest.json:', error.message);
  process.exit(1);
}