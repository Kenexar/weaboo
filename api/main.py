from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from knxrcore.sql import mysql

from slowapi.errors import RateLimitExceeded
from slowapi import Limiter, _rate_limit_exceeded_handler
from slowapi.util import get_remote_address

# client creation


limiter = Limiter(key_func=get_remote_address)
app = FastAPI()

app.state.limiter = limiter
app.add_exception_handler(RateLimitExceeded, _rate_limit_exceeded_handler)
conn = mysql.Connection(user='local', password='coggersPassword')

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
@limiter.limit("5/minute")
async def get(sql_string, params: str):
    return sql_string, params


@app.get('/proof/login/{username}')
@limiter.limit("5/minute")
async def get_login(username):
    user_psw = conn.get('SELECT `password` FROM user.user WHERE `username` = %s', (username,))

    try:
        user = user_psw[0]
    except IndexError:
        return {'msg': 'No user', 'code': 12001}

    if user[0]:
        return {'msg': 'Success.', 'code': 12000, 'body': {'password': user[0]}}
    return {'msg': 'internal error.', 'code': 12003}
