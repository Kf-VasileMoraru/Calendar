FROM node:20.11-alpine  as build
WORKDIR /src
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:1.25-alpine
COPY --from=build /src/dist/calendar/browser /usr/share/nginx/html
COPY --from=build /src/conf/nginx.conf /etc/nginx/conf.d/default.conf
CMD nginx -g "daemon off;"
