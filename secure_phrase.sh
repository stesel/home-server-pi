#!/bin/bash
# usage
#sudo bash ./secure_phrase.sh "your secret phrase"
PHRASE=${1}
if [ -z $PHRASE ]
then
    echo "secret phrase should not be empty"
    exit 1
fi
echo export SECRET_PHRASE_PI=$PHRASE >> /etc/profile
source /etc/profile
echo SECRET_PHRASE_PI=$SECRET_PHRASE_PI
exit 0
