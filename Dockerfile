FROM node:16-alpine

#RUN npm init -y
#RUN npm install -g http-server
#RUN npm install -g @vue/cli

WORKDIR /app

RUN npm install -g @vue/cli
COPY ./app/package*.json ./
RUN npm install
COPY ./app .

#RUN npm run build

EXPOSE 8080
#CMD [ "http-server", "dist" ]
CMD [ "npm", "run", "serve" ]
