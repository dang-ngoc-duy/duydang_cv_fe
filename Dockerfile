# Build docker image.
# Sử dung node
FROM node:12-alpine as node

# Khai báo tham số
ARG workdir=.
LABEL description="Deploy DDCV-FE"

# Khái báo workdir trong node.
WORKDIR /app

# Copy package.json và package-lock.json vào trong workdir của node.
# COPY ${workdir}/package.json /app/
COPY ${workdir}/package.json /app/package.json
# COPY ${workdir}/package-lock.json /app/package-lock.json

# Tương tự npm install
RUN npm ci

# # Cài đặt các thư viện node liên quan.
# RUN npm install --verbose --production

# Copy project vào trong workdir của node.
COPY ${workdir}/ /app/

ENV CI=true

# Chạy lệnh build.
RUN npm run build:dev:unix

# Sử dụng nginx
FROM nginx:1.12
# Copy folder đã được build vào folder chạy của nginx.
COPY --from=node /app/build-dev/ /var/www/dist/

# Copy file cấu hình chạy cho nginx (file nginx.conf sẽ tạo ở bước tiếp theo)
COPY --from=node /app/nginx.conf /etc/nginx/nginx.conf

# # Cài đặt curl cho câu lệnh check HEALTH
# RUN apt-get update && apt-get install -y curl

# # Kiểm tra trạng thái của container sau khi chạy
# HEALTHCHECK --interval=1m --timeout=3s \
#   CMD curl -f http://localhost || exit 1

CMD ["nginx", "-g", "daemon off;"]
