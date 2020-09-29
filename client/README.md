# books-for-friends client

Web app which uses **Google's Books Api** to search for books and provides the user with the ability to select books from the search results and save them as recommendations for friends.

Before starting the client for the first time, add an appropriate .env file to the root folder. The file must contain the following values:

```
VUE_APP_GOOGLE_BOOKS_API=https://www.googleapis.com/books/v1
VUE_APP_API=http://localhost:3000
VUE_APP_API_KEY=<YOUR_GOOGLE_API_KEY>
VUE_APP_CLIENT_ID=<YOUR_CLIENT_ID>
VUE_APP_API_SCOPE=https://www.googleapis.com/auth/books
```

### Compiles and hot-reloads for development
```
npm run serve
```
The client will be running at: http://localhost:8080/

### Compiles and minifies for production
```
npm run build
```