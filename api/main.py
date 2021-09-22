from typing import Optional

from fastapi import FastAPI
from pydantic import BaseModel


class User(BaseModel):
    first_name: str
    last_name: str = None
    age: float

app = FastAPI()


@app.get("/",response_model=User)
def read_root(user: User):
    return user


@app.get("/items/{item_id}")
def read_item(item_id: int, q: str = None):
    return {"item_id": item_id, "q": q}