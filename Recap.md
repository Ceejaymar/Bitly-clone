Notes:

I was able to persist data with session storage. I decided to use session storage to avoid unneccesary information staying in the user's local storage after the browser is closed.

The shortened bitly link does copy when clicked on. An alert pops up letting the user know it has been copied.  

Even though the app only required one route, I added react-router to make sure there was an easy way to redirect back to the home page if a random route was entered. When a random route was entered, it made it seem as though there was an issue with the SDK, so I added a NotFound page to make sure that if users traverse to a wrong route, they can just click the link provided to go back to the home page.

With more time, I would've not used the built-in browser alert. The built-in alerts stop the app completely, which is not a desirable effect. I would've tried to make a custom alert or use a package, which I'm sure exists. Albeit, using the default alert was fine in my case.

The requirements were clear and easy to follow. Overall, it was fun working on this code challenge. One of the more enjoyable challenges I have received.

Thank you for the opportunity!