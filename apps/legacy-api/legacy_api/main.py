"""
Main module to run the FastAPI server
"""
import uvicorn


def main():
    """
    Main function to run the FastAPI server
    """
    uvicorn.run("legacy_api.app:app", host="0.0.0.0", port=8000, reload=True)


if __name__ == "__main__":
    main()
