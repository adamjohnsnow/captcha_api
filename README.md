### Quick Install
```
git clone https://github.com/adamjohnsnow/captcha_api.git
cd captcha_api
psql
CREATE DATABASE captcha_api_dev;
\q
psql -U adamsnow captcha_api_dev < dbexport.pgsql
```
