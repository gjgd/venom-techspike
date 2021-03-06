FROM buildkite/puppeteer as build
WORKDIR /app
# I think this is not necessary
# RUN apt-get install -y build-essential python3
COPY package.json .
RUN npm install

FROM buildkite/puppeteer as run
WORKDIR /app
COPY --from=0 /app/package.json /app/package.json
COPY --from=0 /app/node_modules /app/node_modules
COPY app.js .
CMD ["npm","start"]
