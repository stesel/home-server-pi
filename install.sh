#!/bin/bash
# copy script to pi to directory where you want to install home-server-pi

set -e

RED="\033[1;31m"
GREEN="\033[1;32m"
NOCOLOR="\033[0m"

REPOSRC="https://github.com/stesel/home-server-pi/archive/master.zip"
NAME="home-server-pi"
ROOTDIR=$(pwd)

CHECK_VERSION() {
    if ! type $1 &> /dev/null
    then
        echo -e "${RED}Error. Please install $1${NOCOLOR}"
        exit $?
    fi
    echo -e "${GREEN}$1 $($1 --version) ${NOCOLOR}"
}

INSTALL_PACKAGE() {
    local PACKAGE=$1
    cd ${ROOTDIR}/${NAME}/${PACKAGE}
    yarn
    yarn build
    echo "${PACKAGE^^} INSTALLED"
}

CHECK_VERSION node
CHECK_VERSION yarn
CHECK_VERSION pm2

if [ -d $NAME ]
then
    rm -fr $NAME
fi

echo DOWNLOAD $NAME

wget -O $NAME.zip $REPOSRC --show-progress
if [ $? -eq 0 ]
then
    echo -e "${GREEN}DOWNLOADED${NOCOLOR}"

    unzip $NAME.zip

    rm -f $NAME.zip
    echo REMOVED ORIGINAL ZIP

    mv -f $NAME-master $NAME
    echo RENAMED TO $NAME

    INSTALL_PACKAGE client
    INSTALL_PACKAGE server

    cd ${ROOTDIR}/${NAME}/server/build/
    pm2 start ./index.js
    echo -e "${GREEN}SERVER STARTED${NOCOLOR}"

    pm2 save
    echo -e "${GREEN}SERVER ADDED TO AUTOSTART${NOCOLOR}"
else
    echo - e "${RED}FAIL TO INSTALL ${NAME^^}${NOCOLOR}"
    exit $?
fi

echo -e "${GREEN}SUCCESS${NOCOLOR}"

exit 0
