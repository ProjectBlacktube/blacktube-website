FROM abdennour/nginx-distroless-unprivileged as release
# workdir is the same as root directive in the nginx custom config.
WORKDIR /opt/app
# copy custom nginx config from your host
COPY --chown=1001:0 ./nginx.conf /etc/nginx/conf.d
# copy web assets from build stage above
COPY --from=build ./public --chown=1001:0 /code/build/. .
# expose is the same as listen directive in the nginx custom config.
EXPOSE 8080
# no need to set again user because the default is 1001
# However you can make it always at the end as convention
USER 1001
