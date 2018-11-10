## Installation
In order to use Redis as your cache back-end in ContentaJS you will need to:

### Install
Install this module in your ContentaJS forked project:

```
npm install @contentacms/redis
```
 
 ### Add the Redis configuration
Add the Redis configuration  to your configuration files in ContentaJS, and
make Redis your active cache back-end. Make sure to configure Redis with your
actual host, port, and any
[additional options you need](http://redis.js.org/#api-rediscreateclient).
Modify your
[config file](https://github.com/lorenwest/node-config/wiki/Configuration-Files)
with:

```yaml
# NOTE: Append the 'redis' section under 'plugins'
applicationCache:
  activePlugin: redis # <--- ACTIVATE REDIS
  plugins:
    lru: … # You can keep existing configuration to switch back if needed.
    foo: …
    bar: …
    redis: # <--- APPEND THIS SECTION
      # Additional options for node_redis
      # http://redis.js.org/#api-rediscreateclient passed verbatim.
      host: 127.0.0.1
      port: 6379
      prefix: 'contentajs::'
```
