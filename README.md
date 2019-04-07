# home-server-pi [![Build Status](https://travis-ci.com/stesel/home-server-pi.svg?branch=master)](https://travis-ci.com/stesel/home-server-pi)

## Install
```
Download install.sh on your Pi device and execute it with shell.
In case in error try set execution rights: sudo chmod +x install.sh.
```

## Find Pi
```
Use find_pi.sh script to find Pi device by mac address 
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
