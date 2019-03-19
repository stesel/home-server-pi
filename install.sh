#!/bin/bash
# copy script to pi to directory where you want to install home-server-pi

REPOSRC="https://github.com/stesel/home-server-pi/archive/master.zip"
NAME="home-server-pi"

set -e

if [ -d $NAME ]
then
    rm -fr $NAME
fi

echo DOWNLOAD $NAME

wget -O $NAME.zip $REPOSRC --show-progress
if [ $? -eq 0 ]
then
    echo DOWNLOADED

    unzip $NAME.zip

    rm -f $NAME.zip
    echo REMOVED ORIGINAL ZIP

    mv -f $NAME-master $NAME
    echo RENAMED TO $NAME

    cd ./$NAME
    ROOTDIR=$(pwd)

    cd $ROOTDIR/client
    yarn
    yarn build
    echo CLIENT INSTALLED

    cd $ROOTDIR/server
    yarn
    yarn build
    echo SERVER INSTALLED

    cd $ROOTDIR
    chmod +x $ROOTDIR/start.sh
    update-rc.d $ROOTDIR/start.sh
    echo ADDED TO AUTOSTART
else
    echo FAIL
    exit $?
fi
