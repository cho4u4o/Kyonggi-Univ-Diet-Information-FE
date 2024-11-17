#!/bin/bash
echo "ValidateService 단계 실행 중"

# Nginx 상태 확인
if curl -f http://localhost; then
  echo "애플리케이션 배포 성공"
  exit 0
else
  echo "애플리케이션 배포 실패"
  exit 1
fi