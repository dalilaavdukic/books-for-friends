# books-for-friends

A small demo project which consists of a Web app created with Vue.js and a server done with Node.js and Express.
The purpose of the project is to provide a web app which uses Google's Book Api to search for books and provides the user the ability to select books from the search results and save them as recommendations for friends. 
The selected recommendations are received on the server side and written to files with the name of the friend as the file title and the book recommendations in json format as the file content. The files are saved in server's folder, under files. If the same friend name is used again, the existing recommendations will be overwritten.