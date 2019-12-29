# AMON
Angular Mongoose Nodejs Fullstack baseline code
## Prerequisites
 * install nodejs
 * install mongo (i prefer doing this via Docker and Kitematic -- makes it an easy installation just remember to change the port in the settings though. but, this is highly optional, I use docker simply because i use it for a lot of other experiments as well)
 * install git (if you need SCM else just download the zip)
 * install visual code. it is a good ide for JavaScript and the launch.json is meant to work with that
 * install gulp via command `npm install -g gulp`
 * install angular cli via command `npm install -g @angular/cli`

 ## Installation & Setup


## FAQs
### Who is this stack for?

### What are the "opinions" of this "opinionated" stack? 

### what if I violate your opinions, Mr.Stackman?
A. Nothing much, just that you didn't have to take the pain of using a stack such as this in the first place.  
B. as long as what you're adding doesn't break the basic principle of the underlying framework or library, things should just "work". The only thing would be that you might have to spend time later to search for random stuff that you coded and also explaining to others (in case of a collaboration) where things go. All of which, kinda defeats the point of using an opinionated version of anything.

### How do I debug the server side code?
### How do I debug the frontend/vlient side/ browser code?
### Why the heck Angular?(Never heard of heard React, huh?!)
### What is the purpose of having 3 package.json files?
Short answer, my convenience :P .  
The main package.json that rules everything is the one in the root directory and that should be referred to for all purposes that are not too deep :P The other two are for having scripts at a sub project level and to help me compartmentalize my thinking.

#### Why do I have to click refresh each time I make a frontend change, shouldn't it automatically reflect it?
Well, currently the frontend is being piped into the server's dist folder. Because of this, while the frontend gets build immediately in the dev mode, the output doesn't get refreshed in the browser window since that's an action the server has to tell the browser to do (when we run `ng serve`, the inbuilt angular dev server does this automatically).