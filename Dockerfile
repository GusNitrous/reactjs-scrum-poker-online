# Bundle app dist
FROM node:16-alpine AS app-build
ENV NODE_ENV production

WORKDIR /app

COPY package.json .
COPY yarn.lock .
RUN yarn install --production
COPY .. .
RUN yarn build
RUN rm -rf node_modules

# Bundle static assets with nginx
FROM nginx:stable-alpine as nginx-build
ENV NODE_ENV production

# Copy built assets from app-build
COPY --from=app-build /app/build /usr/share/nginx/html
# Add your nginx.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
