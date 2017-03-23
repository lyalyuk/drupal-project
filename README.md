### TWIG Demo

#### Requirements
- composer - https://getcomposer.org/download/
- git
- web server (Apache is preffered. But you can use any.)

#### Install site
- Set up site, site host, create database with name `twig` as usual.
- <code>cd /path/to/site</code>
- <code>git clone https://github.com/lyalyuk/drupal-project.git .</code>
- Edit /path/to/site/web/sites/default/settings.php (rows 757-759) For your database credentials.
- <code>composer install</code>
- <code>cd /path/to/site/web</code>. Note: For Windows use backslashes "\"
- <code>../vendor/bin/drush si minimal --account-name=admin --account-pass=developer -y</code>
  (Note: For Windows use backslashes "\")

#### Update via composer and phing
(Note: For Windows use backslashes "\")
- <code>cd /path/to/site</code>
- <code>vendor/bin/phing</code>

### Plan
1. Theme Structure
 - twig_demo.info.yml, libraries, theme, folders
 - twig_libraries.info.yml
 - twig_libraries.theme
 - Common theme folders
2. Templates
 - Templates hierarchy
 HTML > Page > Region > Container > Block / Node / Comment / Form / Paragraph > Layout / Fields / Region / Links / Menu etc.
 - Template debug - {{ dump() }}
   - install kint using
     - <code> cd path/to/site/web</code>
     - <code>drush en kint</code>
 - Template files overview
     - page.html.twig
     - block.html.twig
     - node.html.twig
     - comment.html.twig
     - form.html.twig
     - ...
3. Twig Introduction
  - http://twig.sensiolabs.org/doc/2.x/templates.html#variables

 