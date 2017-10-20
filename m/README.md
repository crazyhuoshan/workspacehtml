## 初次安装
npm install

## 使用方法
npm start 本地分支开发，开启服务   
npm run dev 测试分支打包  
npm run build 预发分支打包   

## 如何本地预览
http://localhost:9090/public/pages/页面文件夹名/页面文件夹名.html   
方法有点low，在后面会被优化

## 开发流程
master 主分支  
daily/daily 预发上线分支，上线前拉取最新master，上线后合并到master      
develop 测试环境分支，合并个人分支，发布测试环境   
个人分支 每天拉取最新master，不得拉取develop
