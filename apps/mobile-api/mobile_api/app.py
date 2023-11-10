"""
This file is the entry point for the FastAPI application.
"""
from fastapi import FastAPI

app = FastAPI()


@app.get("/")
def read_root():
    """
    Root endpoint
    """
    return {"Hello": "World"}
