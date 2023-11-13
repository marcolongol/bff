"""
This file is the entry point for the FastAPI application.
"""
from typing import Union

import requests
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(
    title="Legacy API",
    description="API for the legacy application",
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
    try:
        url = f"https://pokeapi.co/api/v2/pokemon/{pokemon_id}"
        response = requests.get(url)
        return response.json()
    except Exception as e:
        print(e)
        return {"error": "Something went wrong"}
