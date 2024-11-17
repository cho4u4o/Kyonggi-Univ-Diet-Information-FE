#!/bin/bash
echo "BeforeInstall 단계 실행 중"

# 기존 빌드 파일 제거
sudo rm -rf /var/www/html/*

# Nginx 설치 및 기본 설정
if ! [ -x "$(command -v nginx)" ]; then
  sudo yum update -y
  sudo amazon-linux-extras enable nginx1
  sudo yum install -y nginx
fi