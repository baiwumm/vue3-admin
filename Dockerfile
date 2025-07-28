FROM nginx:alpine
LABEL "language"="static"
COPY . /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 8080
