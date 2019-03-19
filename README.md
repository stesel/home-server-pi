# home-server-pi

## TODO update
```typescript
require('child_process');
const pkg = require('./package');
const checkForUpdate = require('update-check');

let update = null;

try {
	update = await checkForUpdate(pkg, {
		interval: 3600000,  // For how long to cache latest version (default: 1 day)
		distTag: 'canary'   // A npm distribution tag for comparision (default: 'latest')
	});
} catch (err) {
	console.error(`Failed to check for updates: ${err}`);
}

if (update) {
	console.log(`The latest version is ${update.latest}. Please update!`);
}
```

## ping WS
```
wscat -c ws://localhost:3000
```

## pi logs
```
journalctl
last reboot | less
last -x | grep shutdown | less
/var/log/syslog
```

## autostart
https://www.instructables.com/id/Nodejs-App-As-a-RPI-Service-boot-at-Startup/
