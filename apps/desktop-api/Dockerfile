FROM nikolaik/python-nodejs:python3.10-nodejs20 as dev
WORKDIR /src/apps/desktop-api
EXPOSE 8001
RUN pip install poetry
COPY . .
RUN poetry install
CMD ["poetry", "run", "main"]
