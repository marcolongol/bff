FROM nikolaik/python-nodejs:python3.10-nodejs20 as dev
WORKDIR /src/apps/legacy-api
EXPOSE 8000
RUN pip install poetry
COPY . .
RUN poetry install
CMD ["poetry", "run", "main"]
