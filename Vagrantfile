# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure(2) do |config|

  config.vm.box = "stackroute/html"
  config.vm.box_url = "http://172.23.238.253/vagrant/boxes/stackroute-html.box"

  # Map the guest os port 8080 to host os port 8080
 config.vm.network "forwarded_port", guest: 8010, host: 8010
 #config.vm.network "forwarded_port", guest: 8081, host: 4567
#  config.vm.network "forwarded_port", guest: 80, host: 80
end
