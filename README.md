# KaiOS Test app

I have been fiddling with a mobile simulator for KaiOS, which is built on the deceased firefoxOS, and targets "feature phones" which are those really low end phones in india with square screens and physical buttons (features).

The apps are just local webpages. You can write them in anything which firefox can run, so react, angular, whatever.

```
// index.html
<h1 id="text">I am the walrus</h1>
<a id="mainButton" tabindex=0 class="button">Prev</a>
<a id="secondButton" tabindex=1 class="button">Next</a>

// app.js
secondButton.addEventListener("click", () => {
  increment()
  text.innerHTML = content[counter]
})
```
