---
layout: post
title: mongodb: Error: connect ECONNREFUSED 127.0.0.1:27017
---

If you get this error, it usually means that mongo is not running.
I had my node server set up to connect to a database, but didn't realise that the server was not running.
Opening up a separate tab in terminal and running mongod and then restarting my node server solved my problem and my server is now running fine.

Cheers!
Ryan
