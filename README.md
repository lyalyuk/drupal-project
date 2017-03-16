### TWIG Demo

#### Requirements
- composer - https://getcomposer.org/download/
- git
- web server (Apache is preffered. But you can use any.)

#### Install site
- Set up site, site host, create database twig as usual.
- <code>cd /path/to/site</code>
- <code>git clone https://github.com/lyalyuk/drupal-project.git .</code>
- <code>composer install</code>
- <code>cd /path/to/site/web</code>
- <code>../vendor/bin/drush si minimal --account-name=admin --account-pass=developer -y</code>

#### Update via composer and phing

- <code>cd /var/www/public</code>
- <code>vendor/bin/phing</code>

### Vagrant

* For Windows users only: open /vagrant/Vagrantfile and replace

<code>config.vm.synced_folder "../", "/var/www/public", type: "nfs"</code>

with

<code>config.vm.synced_folder "../", "/var/www/public"</code>

<code>cd ./vagrant && vagrant up</code>

Copy your ssh keys from local machine to project folder:
<code>cp ~/.ssh/id_rsa ../ && cp ~/.ssh/id_rsa.pub ../</code>

Connect to vagrant machine:
<code>vagrant ssh</code>

<code>cd /var/www/public</code>

Move your SSH keys to user folder on vagrant machine:

<code>mv id_rsa ~/.ssh/ && mv id_rsa.pub ~/.ssh/ && chmod 600 ~/.ssh/id_rsa 
&& chmod 644 ~/.ssh/id_rsa.pub</code>
