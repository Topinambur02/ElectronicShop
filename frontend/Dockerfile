FROM node:alpine AS build

COPY package.json ./

RUN npm config set strict-ssl false

RUN npm install --force --loglevel verbose

COPY . .

RUN npm run build

FROM nginx:stable-alpine

COPY --from=build /build /usr/share/nginx/html

EXPOSE 3000

CMD ["nginx", "-g", "daemon off;"]