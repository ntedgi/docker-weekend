```sh
docker run <image name> <command>
```
If image not exist we pull it 
Docker run  = create + run 
The command is override and execute inside the container

```sh
docker image ps 
```

Display all running containers 

```sh
 docker image ps  - - all
```
Show all running docker ever 
If docker exited its not means his dead you can start it again with the start command

```sh
docker create <image-name> 
```
Create the image and return the container ID 

```sh
docker start  -a <id>
```
Run and return all the output from the specific container 

```sh
docker system prune 
```
Delete all Container cache data 

```sh
docker stop <container - id>
```
Hardware signal send to the hardware used by this container
Let release memory .
If container docent stop in 10 secondes docker kill will send 
Send sigterm

```sh
docker kill <container - id>
```
Send sigkill you have to shot done write now

```sh
docker logs <id>
```
Get all logs of created <container id>

```sh
docker exec -it <container id> <command>
```
-it type input exec to the container without it the command want have any chance getting an input and return to the terminal
Flags = [ -it => -i -t ] 
[ -i ] rederice input to container stdin 
[ -t ] format output of container

every container as 3 standers input
Stdin - 
Stdout - 
Stderr -

```sh
docker exec -it <container id> <command> sh
```
Open a Terminal in a container context 


## Docker Files

```sh
docker build .
```
build a docker file in current directory  , returns container id 

```sh
docker build -t naortedgi/redis:latest .
```
build a docker file in current directory and tag it  , returns container id 

```sh
Sending build context to Docker daemon  2.048kB
Step 1/3 : FROM alpine
 ---> caf27325b298
Step 2/3 : RUN apk add --update redis
 ---> Using cache
 ---> 442834e44730
Step 3/3 : CMD [ "redis-server" ]
 ---> Using cache
 ---> dccc0b91d87f
Successfully built dccc0b91d87f
Successfully tagged naortedgi/redis:latest
```

how to import file to inside of container

COPY ./

```sh

docker run -p <local-port:docker-port> <image id>
```

redirect incoming request from local machine into contianer