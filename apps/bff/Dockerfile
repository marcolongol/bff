FROM node:lts-alpine as dev
EXPOSE 4200
WORKDIR /src
COPY package.json .
RUN npm install
COPY ./nx.json .
COPY ./tsconfig.base.json .
COPY ./apps/bff ./apps/bff
CMD ["npm", "run", "serve:bff"]

FROM nginx:alpine as prod
EXPOSE 80
COPY  ./dist/apps/bff/browser /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]
