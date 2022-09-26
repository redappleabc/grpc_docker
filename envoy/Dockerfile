FROM envoyproxy/envoy-dev:latest
WORKDIR /envoy
COPY ./envoy.yaml /etc/envoy/envoy.yaml
EXPOSE 8050
CMD /usr/local/bin/envoy -c /etc/envoy/envoy.yaml -l trace --log-path /tmp/envoy_info.log