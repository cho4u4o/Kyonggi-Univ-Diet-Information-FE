#!/bin/bash
echo "AfterInstall 단계 실행 중"

# 빌드 파일 복사
sudo cp -r * /var/www/html/

# 소유권 및 권한 설정
sudo chown -R nginx:nginx /var/www/html
sudo chmod -R 755 /var/www/html