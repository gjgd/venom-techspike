FROM buildkite/puppeteer as build
WORKDIR /app
COPY package.json .
RUN npm install

FROM build as run
COPY app.js .
CMD ["npm","start"]
