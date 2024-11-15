FROM node:20-alpine AS builder

# Declaring env
#ENV REACT_APP_STATE production

# Setting up the work directory
WORKDIR /app

# Installing dependencies
COPY ./package.json ./
RUN npm install

# Copying all the files in our project
COPY . .

# Building our application
RUN npm run build

# Fetching the latest nginx image
FROM nginx

# Copying built assets from builder
COPY --from=builder /app/build /usr/share/nginx/html
COPY --from=builder /app/.env /

# Copying our nginx.conf
COPY .nginx/nginx.conf /etc/nginx/conf.d/default.conf

