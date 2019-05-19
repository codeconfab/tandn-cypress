FROM abiosoft/caddy
ADD /app /www
COPY /Caddyfile /etc/Caddyfile
