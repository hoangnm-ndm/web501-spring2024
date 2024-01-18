## 1: Cài json-server:

`npm i json-server@0.17`

## 2: Cài đặt concurrently để thực hiện nhiều "npm run start" cùng 1 lúc:

`npm i concurrently`

## 3: Đi vào file package.json và thêm vào:

```json
{ "start": "concurrently \"npm run dev\" \"json-server -w db.json -p 3000\"" }
```

## 4: Tạo file db.json và thêm dữ liệu fake vào.

## 5: Chạy lệnh `npm run start` để chạy cả 2 server cùng 1 lúc.
