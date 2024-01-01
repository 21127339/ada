FROM node:20-alpine3.17

WORKDIR /app
COPY . /app

# Install dependencies package
EXPOSE 3000
RUN yarn install
CMD [ "yarn", "run", "start" ]
