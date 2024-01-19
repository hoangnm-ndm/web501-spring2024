Các thuật ngữ:

- Node: Javascript runtime
- Npm: Node package manager
- Lý do phải dùng nvm: Để quản lý phiên bản node, quản lý các package cần thiết cho dự án.
- Lý do phải dùng node: Để chạy javascript ở backend, frontend, mobile, desktop, serverless, iot, machine learning, artificial intelligence, blockchain, game, ...
- Lý do phải dùng npm: Để quản lý các package cần thiết cho dự án.

# 1. Dành cho Window:

## 1.1. Cài đặt node:

- Tải nodejs tại: https://nodejs.org/en/download/
- Chọn phiên bản LTS (Long Term Support)
- Sau khi tải về, chạy file .exe để cài đặt
- Kiểm tra cài đặt thành công bằng cách mở cmd và gõ lệnh: `node -v` và `npm -v`

## 1.2. Cài đặt nvm:

- Tải nvm tại: https://github.com/coreybutler/nvm-windows/releases
- Chọn phiên bản exe mới nhất
- Sau khi tải về, chạy file .exe để cài đặt
- Kiểm tra cài đặt thành công bằng cách mở cmd và gõ lệnh: `nvm -v`

## 1.3. Cài đặt node bằng nvm:

- Mở cmd và gõ lệnh: `nvm install node_version` (node_version là phiên bản node muốn cài đặt, ví dụ: v18.17.0)

## 1.4. Kiểm tra cài đặt thành công bằng cách mở cmd và gõ lệnh: `node -v` và `npm -v`

- Trên Powershell của window việc thực thi tập lệnh thường bị tắt theo mặc định, để thực thi được tập lệnh thì ta cần phải mở Powershell với quyền Administrator và gõ lệnh: `Set-ExecutionPolicy RemoteSigned` hoặc mở Powershell và gõ: `Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned`

# 2. Dành cho Mac:

(Nếu đã cài homebrew thì bỏ qua bước 1)

## 2.1 Cài đặt homebrew, mở terminal và gõ lệnh:

`/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"`

## 2.2 Cài đặt nvm, mở terminal và gõ lệnh:

`brew install nvm`

## 2.3 Cài đặt node, mở terminal và gõ lệnh:

`nvm install node_version` (node_version là phiên bản node muốn cài đặt, ví dụ: v18.17.0)

## 2.4 Kiểm tra cài đặt thành công bằng cách mở terminal và gõ lệnh:

`node -v` và `npm -v`

# 3. Các lệnh cơ bản với nvm:

## 3.1. Kiểm tra phiên bản node đang sử dụng:

`nvm current`

## 3.2. Kiểm tra phiên bản node đã cài đặt:

`nvm ls`

## 3.3. Chọn phiên bản node để sử dụng:

`nvm use node_version` (node_version là phiên bản node muốn sử dụng, ví dụ: v14.17.0)

## 3.4. Cài đặt phiên bản node mới:

`nvm install node_version` (node_version là phiên bản node muốn cài đặt, ví dụ: v14.17.0)

## 3.5. Cài đặt phiên bản node LTS:

`nvm install --lts`

## 3.6. Cài đặt phiên bản node mới nhất:

`nvm install node`
