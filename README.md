# Lieblings Restaurants
Progressive Web-App (PWA) um Lieblings Restaurants abzuspeichern und später wieder zu finden 

## Aufbau 
Die gesamte Web-Anwendung besteht aus drei Schichten:

1. Schicht: MySQL Datenbank
2. Schicht: Backend-API mit dem PHP-Framework Laravel 7 
3. Schicht: Frontend PWA mit dem JavaScript-Framework Vue.js 2

## Struktur 
Die Web-Anwendung ist in zwei Verzeichnisse aufgeteilt: 
* lieblings_restaurants_api = in diesem ist das Backend 
* lieblings_restaurants_app = in diesem ist das Frontend

## Installation 

Vorarbeiten auf Server:
- Datenbank mit Name  anlegen "lieblings_restaurants"

In Terminal/CMD in das gewünschtes Projekt-Verzeinis gehen unn folgende Schritte/Befehle ausführen:
1. git clone $ git clone git@github.com:DickreuterDigital/lieblings_restaurants.git

2. cd lieblings_restaurants_api 

3. composer install 

4. .env.example in .env umbennen

5. php artisan key:generate

6. php artisan migrate --seed

7. php artisan passport:install

Subdomaine mit Pfad in "[Verzeichnis in welches du es gecloned hast]/lieblings_restaurants/lieblings_restaurants_api/public" anlegen

Das Backend und die Datenbank sind fertig und können z.B. mit Postman (https://www.postman.com/) gesetet werden. Dazu einfach folgendes in Postman ausführen:
1. Post Request auf URL "[Deine Subdomain]/api/login" im Body die Keyes email = christian@dickreuter-digital.de und password = passwort mitgeben
2. Den access_token aus der Response kopieren
3. Get Request auf URL "[Deine Subdomain]/api/restaurants" im Tab Authorization, Type Bearer Token wählen und bei Token den access_token einfügen
4. Es sollten nach dem absenden alle Restaurants angezeigt werden

Als nächstes das Frontend erstellen, dazu in Terminal/CMD in das Projekt-Verzeichnis gehen unn folgende Schritte/Befehle ausführen:
1. cd lieblings_restaurants_app

2. npm install

3. npm run build 

Das Frontend ist fertig und es müssen noch folgende Arbeiten durchgeführt werden:
1. Hauptdomain mit Pfad in "[Verzeichnis in welches du es gecloned hast]/lieblings_restaurants/lieblings_restaurants_app/dist" anlegen

2. Im Backend-Verzeichnis (lieblings_restaurants_api) config\cors.php in 'allowed_origins' die Hauptdomain angeben


Viel Spaß beim sammeln deiner Lieblings Restaurants
