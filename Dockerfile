FROM node:12.18.4
WORKDIR /Docker
ENV PORT 3000
COPY package.json /Docker
RUN npm install
COPY . /Docker
CMD ["npm", "start"]
EXPOSE 4200
