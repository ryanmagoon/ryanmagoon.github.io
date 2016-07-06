---
layout: post
title: mongod: command not found
---

I spent 45 minutes trying to figure out why the mongo command wouldn’t work in my terminal after I had unpacked it into my user folder. I am running macOS Sierra so homebrew threw up on me and wouldn’t install it. I put the path in my .bashrc file and restarted terminal, restarted my computer, and a host of other things.

I then realized that I was using zsh so that I could have the super awesome git info in my terminal prompt, and I lol’d.

If you’re running zsh and you can’t figure out why commands aren’t working, make sure that you are putting the path in .zshrc, not .bashrc.

Have a good day!
