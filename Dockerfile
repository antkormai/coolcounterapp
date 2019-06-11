FROM node:8.16.0-jessie
WORKDIR /app
COPY package.json /app/package.json
RUN npm install
RUN npm install -g @angular/cli@7.3.0
COPY . /app
CMD ng serve --host 0.0.0.0