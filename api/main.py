from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from knxrcore.sql import mysql

# client creation

app = FastAPI()
conn = mysql.Connection()

origins = [
    'http://localhost',
    'http://localhost:*',
    '127.0.0.1:*'
]

app.add_middleware(CORSMiddleware,
                   allow_origins=['*'],
                   allow_credentials=True,
                   allow_methods=['*'],
                   allow_headers=['*'])


@app.get("/")
async def root():
    return {"message": "."}


# so sql shit halt
@app.get('/sql/get/{sql_string}/{params}')
async def get(sql_string, params: str):
    return sql_string, params


@app.post('')
