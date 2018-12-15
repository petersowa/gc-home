# Docker Commands

### Build and tag a docker image
`docker build -t [docker user id]/[containter name]:[version tag] .`

### Connect local machine to docker image network port
`docker run -p [src_port]:[dest_port] [docker image]`

### Docker image with interactive shell
`docker run -it [docker image] sh`

### Connect shell to running docker image
`docker exec -it [docker id] sh`

### Stop all docker containers
`docker stop $(docker ps -a -q)`

# Docker Compose
`docker-compose`

### Use docker compose to build and start a container
`docker-compose up --build`
-d to run in the background
down command to stop docker compose image

`docker-compose ps`
to get list of compose processes
yml config is needed for docker compose to get list of containers

---
Restart policy: no, aways, on-failure, unless-stopped
---
# Sample docker-compose.yml

Compose port mapping
---
```yml
version: '3'
services:
  redis-server:
    image: 'redis'
  node-app:
    restart: always
    build: .
    ports:
      - '4001:8081'
```

Compose with volume mapping
---
```yml
version: '3'
services:
  web:
    build:
      context: .
      dockerfile: Dockerfile.dev
    ports:
      - '3000:3000'
    volumes:
      - '/app/node_modules'
      - .:/app
```

Compose with testing
---
```yml
version: '3'
services:
  web:
    build:
      context: .
      dockerfile: Dockerfile.dev
    ports:
      - '3000:3000'
    volumes:
      - /app/node_modules
      - .:/app
  tests:
    build:
      context: .
      dockerfile: Dockerfile.dev
    volumes:
      - /app/node_modules
      - .:/app
    command: ['nodemon', '--legacy-watch', '--exec', 'npm', 'run', 'test']
    stdin_open: true
    tty: true
```
---
# Sample Dockerfile config
```Dockerfile
FROM node:alpine

WORKDIR '/app'
COPY package.json .
RUN npm install
COPY . .
CMD ["npm", "start"]
```
# Two phase build Docker config
```Dockerfile
FROM node:alpine as builder
WORKDIR '/app'
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

FROM nginx
COPY --from=builder /app/build /usr/share/nginx/html
```
> Written with [StackEdit](https://stackedit.io/).