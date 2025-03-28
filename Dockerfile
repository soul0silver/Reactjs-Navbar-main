FROM node:22-alpine as build

# Thiết lập thư mục làm việc trong container là /app
WORKDIR /app

# Sao chép file package.json và package-lock.json (nếu có) vào thư mục làm việc /app
# Điều này giúp cài đặt dependencies một cách hiệu quả bằng cách sử dụng cache của Docker nếu các file này không thay đổi
COPY package*.json ./

# Cài đặt các dependencies được định nghĩa trong package.json
RUN npm install

# Sao chép toàn bộ mã nguồn từ thư mục hiện tại của host vào thư mục làm việc /app trong container
COPY . .

# Build ứng dụng ReactJS, kết quả build sẽ được đặt trong thư mục 'build'
RUN npm run build

## run stage ##
# Sử dụng image nginx:alpine làm base image cho giai đoạn run
FROM nginx:alpine
COPY nginx.config /etc/nginx/conf.d/default.conf
# Sao chép nội dung build từ giai đoạn build vào thư mục chứa nội dung tĩnh của nginx
COPY --from=build /app/build /usr/share/nginx/html

# Expose cổng 80 để nginx có thể phục vụ ứng dụng qua cổng này
EXPOSE 80

# Chạy nginx trong chế độ không daemon, để container không tự động tắt
CMD ["nginx", "-g", "daemon off;"]