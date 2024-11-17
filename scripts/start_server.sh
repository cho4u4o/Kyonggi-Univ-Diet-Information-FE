#!/bin/bash
echo "ApplicationStart 단계 실행 중"

# Nginx 시작 또는 재시작
sudo systemctl enable nginx
sudo systemctl restart nginx