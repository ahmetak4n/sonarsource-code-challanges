FROM node:22@sha256:d885885ad8e100d27b65e7837075afea042cc8515ec066cd82cdf34e26fc9fb8 as build

WORKDIR /app

COPY . .

RUN npm install

FROM gcr.io/distroless/nodejs22-debian12@sha256:d80163bac77c543a02d32d812a598ca6e43c2e989bd5e4e8806b0aecbafd9a2a

WORKDIR /app

COPY --from=build /app /app

EXPOSE 1337

CMD [ "app.js" ]
