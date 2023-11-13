"""
This file is the entry point for the FastAPI application.
"""
import os
from typing import Union

import requests
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

LEGACY_API_URL = os.getenv("BFF_LEGACY_API_PORT", "http://localhost:8000").replace(
    "tcp://", "http://"
)

app = FastAPI(
    title="Mobile API",
    description="API for the mobile application",
    version="1.0.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def read_root():
    """
    Root endpoint
    """
    return {"Hello": "World"}


@app.get("/pokemon/{pokemon_id}")
def read_pokemon(pokemon_id: Union[int, str]):
    """
    Pokemon endpoint
    """
    url = f"{LEGACY_API_URL}/pokemon/{pokemon_id}"
    response = requests.get(url)
    return response.json()
