---
layout: post
title: c# - the modifier async isn't allowed for this item
---

I was taking Shawn Wildermuth's "Building a Web App with ASP.NET Core, MVC 6, EF Core, Angular course, and I hit a stumbling block.
His code magically worked where mine didn't. I was defining an async interface method and got the error saying that I wasn't allowed to specify it as async.
After stackoverflowing, I found Jon Skeet saying that async/await is an implementation detail, which means it doesn't belong in the interface definition.
Putting the return method as a Task is a good hint that the method should be implemented asynchronously, as it would be hard to implement that method synchronously with that type of return type.
