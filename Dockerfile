FROM nginx:alpine

COPY dist/angular-sample-small-project /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
