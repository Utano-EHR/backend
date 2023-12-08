## Description

This repository contains the API code for the Utano EHR Project.

## Technologies Used

The following technologies were used in developing this application:

- **NestJS framework**
- **Prisma ORM**
- **PostgreSQL**
- **Docker**

## Installation

Ensure to run the following commands to properly set up the repo

1. Install Dependencies

```bash
yarn install
```

2. Run Database Docker Container

```bash
docker compose up -d
```

3. Run Migration

```
npx prisma migrate dev
```

4. Run Data Seeding

```
yarn seed
```

5. Reset Seeded Table Sequence

```
yarn reset_seq
```

## Usage

To view data in the database, execute the command below once the application is running:

```bash
npx prisma studio
```

## Run The App In Watch Mode

```bash
# watch mode
yarn run start:dev
```
