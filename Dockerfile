FROM node:22.13.1

WORKDIR /app

COPY package.json . 

RUN npm install

COPY . .

EXPOSE 3006

CMD ["npm", "start"]