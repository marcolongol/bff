FROM nikolaik/python-nodejs:python3.10-nodejs20 as dev
WORKDIR /src/apps/mobile-api
EXPOSE 8002
RUN pip install poetry
COPY . .
RUN poetry install
CMD ["poetry", "run", "main"]
