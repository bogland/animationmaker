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
