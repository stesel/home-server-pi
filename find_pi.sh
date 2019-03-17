#!/bin/bash
# usage
#bash ./find_pi.sh "raspberry pi mac address"
MAC=${1}
if [ -z $MAC ]
then
    echo "mac should not be empty"
    exit 1
fi
IP=$(arp -na | grep $MAC | grep -E -o "192.168.0.[0-9]{1,3}")
echo "For mac: $MAC ip: $IP"
