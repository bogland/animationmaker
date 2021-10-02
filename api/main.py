from typing import Optional
from fastapi import FastAPI
from core.config import settings
from db.session import engine
from db.base import Base
from routes.base import api_router
from fastapi.staticfiles import StaticFiles

def create_tables():
    Base.metadata.create_all(bind=engine)

def include_router(app):
    app.include_router(api_router)

def configure_static(app):
    app.mount("/static", StaticFiles(directory="static"), name="static")

def start_application():
    app = FastAPI(
        title=settings.PROJECT_TITLE,
        version=settings.PROJECT_VERSION,
        description=settings.DESCRIPTION,
        contact={"name": "oh", "email": "guruwang@naver.com"},
    )
    create_tables()
    include_router(app)
    configure_static(app)
    return app

app = start_application()