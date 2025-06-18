#!/bin/bash

DOMAIN="chainaya-taiga.ru"
EMAIL="pavel_vilkov17@mail.ru"

# Создание директорий
mkdir -p ssl
mkdir -p certbot-var

# Получение SSL сертификата
docker run -it --rm \
  -v $(pwd)/ssl:/etc/letsencrypt \
  -v $(pwd)/certbot-var:/var/lib/letsencrypt \
  -v $(pwd)/webroot:/var/www/html \
  certbot/certbot certonly \
  --webroot \
  --webroot-path=/var/www/html \
  --email $EMAIL \
  --agree-tos \
  --no-eff-email \
  -d $DOMAIN \
  -d www.$DOMAIN

# Копирование сертификатов
cp ssl/live/$DOMAIN/fullchain.pem ssl/chainaya-taiga.crt
cp ssl/live/$DOMAIN/privkey.pem ssl/chainaya-taiga.key

echo "SSL сертификат получен для $DOMAIN"