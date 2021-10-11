from fastapi import APIRouter
from routes import route_users

api_router = APIRouter()

api_router.include_router(route_users.router, prefix="/user", tags=["user"])