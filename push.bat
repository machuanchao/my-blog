@echo off
git add .
git commit -m "新增 %date% %time%"
git push
echo 推送完成，按任意键关闭
pause
