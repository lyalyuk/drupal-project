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

- <code>cd /path/to/site</code>
- <code>vendor/bin/phing</code>
