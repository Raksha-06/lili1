FROM node:18.20.2

WORKDIR /app

COPY package*.json ./

RUN npm install -g expo-cli@6.3.10
RUN npm install

COPY . .

EXPOSE 19000 19001 19002

CMD ["npx", "expo", "start", "--tunnel"]
