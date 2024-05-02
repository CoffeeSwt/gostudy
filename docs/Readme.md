# Coffee的Go语言学习之旅
这里记录了文档资料

使用VitePress构建
```bash
yarn

yarn dev
```

## 部署网站
```bash
docker build -t my-static-web .
docker run -p 80:80 -d my-static-web
```