# Lazy Loading Images with imgix and React (w/hooks!)
### Getting started with imgix to boost performance in your react app.

![CodePen Project](https://assets.imgix.net/codepen/lazyload.gif?w=600)

## Getting started
  - Nice to have but not necessary:
    - imgix account with images in your bucket to use / pull from
    - working knowledge of React

## The importance of lazy loading
Lazy loading helps the initial load of websites and applications by deferring non-critical resource calls on page load. What constitutes as a "non-critical" resource? In this case, multimedia (images) that are "below the fold" or out of the current browser's window. What does lazy loading images that mean for users? It means faster load(s) and in turn a better user experience, or better delivery of content. If you are interested in learning more you can read about it here https://developers.google.com/web/fundamentals/performance/lazy-loading-guidance/images-and-video/.

## Setting up our project
  - CodePen set up

  ![CodePen Project](https://assets.imgix.net/codepen/codepen-1.png?w=600)

  - The dependencies that we will need:
    - React
    - ReactDOM
    - Babel

  ![CodePen Configuration](https://assets.imgix.net/codepen/codepen-2.png?w=400)


## Adding Functionality
Now that everything is set up, let's get to building! First, we will create the root element that React will use to render. We'll also add some starter code, to check that the configuration is working correctly.

![CodePen Addign Functionality](https://assets.imgix.net/codepen/codepen-4.png?w=600)

Next, let us get some images in our pen. We'll just be using a simple array of images (we have 25 in our bucket). You can get images any way you want / via an API, statically, or just create a repeater(we'll be using this). But feel free to set up your project however you feel fit. We can iterate over the array with a map method in react and append `<img>` tags to the page. We should also add width to our images so they aren't crazy large and take over the window. For now, let us just add width to the `<img>` tag.

![CodePen Adding Functionality](https://assets.imgix.net/codepen/codepen-5.png?w=400)

![CodePen Adding Functionality](https://assets.imgix.net/codepen/codepen-6.png?w=600)

Now that we have some basic functionality on our page, let's start building our `<LazyImage />` component. The component should take the source as a parameter so let's build that out first.

![CodePen Adding Functionality](https://assets.imgix.net/codepen/codepen-7.png?w=400)

**Notice**: `<img>` has switched to `<LazyImage />`. This is so we can reuse our component in different parts of the application. The CodePen should now just be a bunch of urls. Lets Fix this and add an `<img>` tag to the LazyImage component.
