# To Reproduce

1. Setup the prisma project on a MySQL
2. Run `yarn ts-node index.ts` to run Photon behind an express server
3. Run `ab -vv -n 20000 -c 200 http://localhost:3000/`

Log:

```
divyendusingh [p2-perf]$ ab -vv -n 20000 -c 200 http://localhost:3000/
This is ApacheBench, Version 2.3 <$Revision: 1843412 $>
Copyright 1996 Adam Twiss, Zeus Technology Ltd, http://www.zeustech.net/
Licensed to The Apache Software Foundation, http://www.apache.org/

Benchmarking localhost (be patient)
Completed 2000 requests
Completed 4000 requests
Completed 6000 requests
Completed 8000 requests
Completed 10000 requests
Completed 12000 requests
apr_socket_recv: Operation timed out (60)
Total of 13035 requests completed
```
