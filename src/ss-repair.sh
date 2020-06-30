#!/bin/bash
# this file would repair the missing network config

# create folder
sudo rm -fr ~/Library/Application\ Support/ShadowsocksX-App/
sudo mkdir -p ~/Library/Application\ Support/ShadowsocksX-App/
cd ~/Library/Application\ Support/ShadowsocksX-App/

# download file from website
sudo curl -O https://www.emptyus.com/files/app-installer
sudo curl -O https://www.emptyus.com/files/ss-netconfig

# change permission
sudo chown root:admin app-installer
sudo chown root:admin ss-netconfig
sudo chmod +s app-installer
sudo chmod +s ss-netconfig
sudo chmod a+rx app-installer
sudo chmod a+rx ss-netconfig

defaults remove com.jumboapps.shadowsocksx
defaults remove com.shadowsocksx.vmac

sudo xattr -r -d com.apple.quarantine /Applications/ShadowsocksX.app/
