sudo docker build -t search-app .
sudo docker run -p 3000:3000 -ti search-app


sudo docker-compose build
sudo docker-compose up

npm install db-migrate
node node_modules/db-migrate/bin/db-migrate

https://db-migrate.readthedocs.io/en/latest/Getting%20Started/the%20commands/

sudo docker ps
sudo docker exec -t -i 637e8bf9415f bash

миграция
sudo docker-compose exec web node node_modules/db-migrate/bin/db-migrate --config config/database.json -e dev up


sudo docker-compose exec db bash
su postgres     
psql