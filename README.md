# NewsApp

This News website was fully designed and implement by me.
{Company name and logo included}

## To View
Due to linimation isues from the api site, You can only view the generated api information on local host and not on the netlify link.
As it would show an Error-406 (Requests from the browser are not allowed on the Developer plan, except from localhost.)  on your network tab.
To fully view the full website fuctionality. Follow the steps
- Clone the repo to your local system
- Run "npm install", you install dependencies
- Run "npm run dev" 

## API
The API used to generate the website information for the website was gotten <a href="newsapi.org">NewsAPI</a>.

## NAVBAR
This split into three section
- The first section show the realtime weaher temperature in Lagos state and real time date.
- The second section shows the company logo
- The third section shows the navigation bar that can be used to navigate through the site.

## HOMEPAGE
The website has a home page which showaces the top and trending news.
- The hero section displayes a filted group of news in a slide and trending news in a list format
- The news shows a paginated (by 9) list of 36 news genearted from the api. For additional news the view all button can be clicked
- The recommended section displays a list of shuffled recommended news from the trebding news api
- The newsletter section is functional and generates a completed modal on click of the subscribe button

## NEWSPAGE
The news page displays a list of all news articles. Showing their title, description, author, published date and time. All displayed a maximum of 10 per page and paginated

## CATEGORY PAGE
The Category page displays a list of all news articles by source which can be filtered to a specific category source using the filter dropdown.

## OTHER FEATURES
When a news card is clicked in the home page or on the news page, its details are shown in a individual article page.

The subcribe button displays a modal for sucription and subscription success depending on the exact button clicked
