---
layout: ../../layouts/PostLayout.astro
title: I have a blog 🎉
description: Why, how and what next?
date: 25/11/2022
---

<sub>I probably spelt something wrong.</sub>

# Why?

I've been wanting to make a website using Astro for awhile now and I thought that a personal blog would be a good place to start. I might not actually write any posts but it's nice to know this is here if I want to use it.

# How?
With Astro, TailwindCSS, @tailwindcss/typography, @tailwindcss/container-queries and deployed on Github Pages. I got help from the docs of all the things I just listed, Stack Overflow and ProTailwind.

I was trying the blog feature out and was like:

> Where are all the styles that Github has?

So I went and googled (as a pro would 😎) `tailwind markdown styles` scrolled down a bit and found that the offical plugin I have looked at quite a few times was just the thing I needed! So I installed it and quickly figure it out.

One thing that took me awhile to figure out was what to do with the BaseLayout astro component. The home page of this website has overflow set to hidden and I needed it to be not to be hidden for the blog posts. I tried using `` <body class=`bg-almostwhite p-6 ${class}`> `` but for some reason astro rejected that and error with some like this: `expected '{' got '}'`. So in the end I just used a boolean 😭.

# What next?

Personally I think that this site is quite ugly so it might need a UI update also the html is a bit messy. I also think I might add thumbnails to the posts.

# Wrapup:

This is quite a small post but I hope you liked it!

Anyway,
![Cat saying bye](https://media.tenor.com/5UrK7rSTuscAAAAC/goodbye-bye-bye.gif)
