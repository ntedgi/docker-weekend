# base linux composite distro
FROM node:alpine

# absulote path to conatiner
WORKDIR /usr/webapp

# first copy only package.json
# if content been changed only then run npm i
COPY ./package.json ./

RUN npm install

#copy all files from current directory to workdir path 
COPY ./ ./

CMD ["npm","start"]