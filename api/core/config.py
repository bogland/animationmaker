import os

class Settings:
  PROJECT_TITLE = "Animation Tool API"
  PROJECT_VERSION= "0.1"
  DESCRIPTION = """
  Animation Tool API
  ## Heading
  **Return JSON format of Hello World **
  """


  DB_USER: str = os.getenv("DB_USER","root")
  DB_PASSWORD: str = os.getenv("DB_PASSWORD","0000")
  DB_SERVER: str = os.getenv("DB_SERVER", "localhost")
  DB_PORT: str = os.getenv("DB_PORT", 3306)
  DB_DB: str = os.getenv("DB_DB", "animationtool")
  DATABASE_URL= f"mysql+mysqldb://{DB_USER}:{DB_PASSWORD}@{DB_SERVER}:{DB_PORT}/{DB_DB}"
settings = Settings()
print(settings.DATABASE_URL)