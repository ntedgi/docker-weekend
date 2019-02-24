# [from , run , cmd docker instructions] 

# use existing image as a base
FROM alpine

# download and install dependices 
RUN apk add --update redis 

#run command inside the container after it starts 
CMD [ "redis-server" ]