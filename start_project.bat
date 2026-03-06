@echo off
:: 进入脚本所在的当前目录（确保路径正确）
cd /d "%~dp0"

:: 1. 启动浏览器并访问指定 URL (使用 start 命令异步执行，不阻塞后续命令)
:: 注意：如果电脑性能较慢，浏览器打开瞬间服务器可能还没完全ready，刷新一次即可
start http://localhost:5173/vite-project/

:: 2. 执行 npm run dev
npm run dev