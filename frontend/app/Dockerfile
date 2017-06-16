FROM mhart/alpine-node:latest

ADD package.json /tmp/package.json
RUN cd /tmp && npm install
RUN mkdir -p /opt/frontend && cp -a /tmp/node_modules /opt/frontend/

WORKDIR /opt/frontend
ADD . /opt/frontend

EXPOSE 3000

CMD ["npm", "build", "start"]