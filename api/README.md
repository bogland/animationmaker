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
