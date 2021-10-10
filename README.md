# animationmaker

포토샵 애니메이션 제작 툴이 안좋아서 만들어봅세

# design

https://www.figma.com/file/JuJKmG5HISDmLvOZk5j5M1/animationtool?node-id=0%3A1

## 기술명세

### front

- nextjs  
  -> 검색 엔진 노출 고려

### back

- fastapi  
  -> flask 할려다가 swagger를 더 잘 지원하는 라이브러리 찾다가 그럴바에 fastapi 쓰기로함

## API 가상환경 구성 및 실행

```
python -m venv venv
python -m pip install -r requirements.txt
uvicorn main:app --reload
```

## 프로젝트 구조 참고 URL

https://www.youtube.com/watch?v=5dfnnbCcJqM&t=1393s

## DB 관리

db 스키마가 변경되는 것을 반영해주기위해서 migration필요

```
alembic init ./migration
alembic revision --autogenerate -m "Initial"
alembic upgrade head
```

- revision 후 upgrade head를 해줘야 다음부터 적용됨
- 만약 특정 Table이 기록되길 원치 않는다면 env.py에서 include_object설정을 줌  
  실제 테이블은 아래 속성을 넣어주면 된다.

```
    __table_args__ = {
        'info':{'skip_autogenerate':True}
        }
```

## GOOGLE OAuth Login

nextjs 의 경우 .env 생성후 process.env.GOOGLE_LOGIN_API 사용시 ServerSide에선 정상 출력됨  
ClientSide에서는 아래 설정을 해줘야 나옴

```
.env 생성
.babelrc 생성
{
  "presets": ["next/babel"]
}
next.config.js 수정
env: {
  GOOGLE_LOGIN_API: process.env.GOOGLE_LOGIN_API,
}
```
