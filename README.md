# React 使用Next.js

Next.js SSR優點

1. 搭建輕鬆
2. 自帶數據同步SSR(服務端渲染)
3. 豐富插件，自己形成生態
4. 配置靈活

# 手動創建方式(知道即可)

## 安裝

```bash
npm init
```

![image](./images/image2021-03-1419.53.39.png)

```bash
npm i --save react react-dom next
```

![image](./images/image2021-03-1419.54.54.png)

## 修改package.json

```json
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "next",
    "build": "next build",
    "start": "next start"
  },
```

![image](./images/image2021-03-1419.56.34.png)

## 運行

```bash
npm run dev
```

![image](./images/image2021-03-1420.00.09.png)

# 使用腳手架安裝(真實項目使用)

安裝腳手架

```bash
npm i -g create-next-app
```

加-g可能權限不夠無法安裝，後來把-g拿掉

![image](./images/image2021-03-1420.05.52.png)

# 創建新項目

```bash
npx create-next-app next-create
```

![image](./images/image2021-03-1420.09.27.png)

# 運行

```bash
cd next-create
npm run dev
```

運行成功了

![image](./images/image2021-03-1420.11.25.png)

# 框架原始資料夾結構

![image](./images/image2021-03-1420.15.31.png)