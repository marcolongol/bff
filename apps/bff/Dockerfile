FROM node:18-alpine as dev
EXPOSE 4200
WORKDIR /src
COPY package.json .
RUN npm install
COPY ./nx.json .
COPY ./tsconfig.base.json .
COPY ./apps/bff /src/apps/bff
CMD ["npm", "run", "serve:bff"]
# CMD [ "tail", "-f", "/dev/null" ]

FROM base as prod
EXPOSE 80
COPY  dist/apps/bff/* /usr/share/nginx/html/
CMD ["nginx", "-g", "daemon off;"]
