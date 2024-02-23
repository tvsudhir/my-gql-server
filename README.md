## Installation
1. npm i
2. Have Postgresql DB running on port 5432 with required creds.
3. Create the table
```
CREATE TABLE public.todos (
	todoid varchar(20) NOT NULL,
	"name" varchar NULL,
	"text" text NULL,
	CONSTRAINT todos_pk PRIMARY KEY (todoid)
);
```

## Start Developing
```
npm run dev
```

## Deployment
```
npm run start
```

## See GraphQL Playground
```
http://localhost:4000/graphql
```

## Run a script present in sr/script folder
```
npm run script -- <script-name> <var-1> <var-2> ...
```
Example:
- npm run script --- scrape
