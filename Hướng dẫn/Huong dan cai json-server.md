## 1: Cài json-server:

- Bản 0.17 sẽ không bị conflict với json-server-auth

`npm i json-server@0.17`

## 2: Cài đặt concurrently để thực hiện nhiều "npm run start" cùng 1 lúc:

`npm i concurrently`

## 3: Đi vào file package.json và thêm vào:

```json
{ "start": "concurrently \"npm run dev\" \"json-server -w db.json -p 3000\"" }
```

## 4: Tạo file db.json và thêm dữ liệu fake vào.

## 5: Chạy lệnh `npm run start` để chạy cả 2 server cùng 1 lúc.

## 6: Cài json-server-auth:

`npm i json-server-auth`

## 7: Tạo file db.json và thêm dữ liệu fake vào.

```db.json
"users": []
```

## 8: Tạo alias trong file package.json:

```json
    "server": "json-server db.json -m ./node_modules/json-server-auth",
    "start": "concurrently \"npm run server\" \"npm run dev\""
```

## 9: Chạy dự án:

`npm run start`
