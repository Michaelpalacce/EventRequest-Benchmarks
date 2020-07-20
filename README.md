# EventRequest-Benchmarks
Benchmarks for EventRequest

The tests are performed with [**autocannon**](https://www.npmjs.com/package/autocannon).

Run any of the files ( either event_request, express or rayo ), open a new terminal and run `autocannon -c 100 -p 10 localhost`

Machine: i7-6700k || 16GB-DDR4-RAM || SSD

#Stress test with no processing:


#Event Request:

![image info](./benchmarks/event_request.png)

#Express:

![image info](./benchmarks/express.png)

#Fastify:

![image info](./benchmarks/fastify.png)

#Hapi:

![image info](./benchmarks/hapi.png)

#HTTP Server:

![image info](./benchmarks/http_server.png)

#Koa:

![image info](./benchmarks/koa.png)

#Polka:

![image info](./benchmarks/polka.png)

#Rayo:

![image info](./benchmarks/rayo.png)
