# books-for-friends

## Purpose of the app

A small demo project which consists of a Web app created with **Vue.js**, **Vuex** and **Bulma**, and a server done with **Node.js and Express**.
The purpose of the project is to provide a web app which uses **Google's Books Api** to search for books and provides the user with the ability to select books from the search results and save them as recommendations for friends. 
The selected recommendations are received on the server side and written to files with the name of the friend as the file title and the book recommendations in json format as the file content. The files are saved in the server's folder, under files. If the same friend name is used again, the existing recommendations will be overwritten.

## Usage

The web app shows two sections: 
- the left section for **searching books** publicly available through the Google Books API
- the right section which shows books that have been added to the **recommendations list**

To **add books** to recommendations, enter a search term and select books by clicking on the + sign in each book box. You will see books appear in the recommendations section. 

There are two ways to **remove books** from the recommendations list:
- removing them **directly from the recommendations** list when clicking on the x icon next to each book. The search results on the left will be updated to reflect the deselected books. If the same book comes up in another search it will already be highlighted as added to the recommendations so the same book cannot be added twice
- deselecting them in the **search results** by clicking on the red x in each book box. The recommendations list will reflect these changes automatically

Once you are happy with the selected books you can **add notes** to each book recommendation, and you are required to type the **name of the friend** you are creating this recommendation list for. After clicking "Save", the list of books is exported in JSON format and saved in a file on the server. The saved files can be found in the the server folder under 'files'. 

## Google Sing-in
The user can use this app without signing in. In that case, the user searches for books publicly available through the Books API. However, sign in through Google is offered in the app. Signing in with your Google Account enables one additional feature, which is to **load books from your private bookshelf** and recommend them. The books in the private bookshelf are received by clicking on 'Recommend from my private bookshelf' below the search field which only appears if the user is signed in. 

## Project setup
Both the web app (client) and server must be running, in order for the project to be fully functional.

### Client
Before starting the client for the first time, add an appropriate .env file to the root folder of the client. The file must contain the following values:

```
VUE_APP_GOOGLE_BOOKS_API=https://www.googleapis.com/books/v1
VUE_APP_API=http://localhost:3000
VUE_APP_API_KEY=<YOUR_GOOGLE_API_KEY>
VUE_APP_CLIENT_ID=<YOUR_CLIENT_ID>
VUE_APP_API_SCOPE=https://www.googleapis.com/auth/books
```

I can provide a Google API key and Client Id or you can use your own.
After that run the following commands:

```
cd client
npm install
npm run serve
```
The client will be running at: http://localhost:8080/
### Server
```
cd server
npm install
npm start
```
The server will be listening on port 3000.