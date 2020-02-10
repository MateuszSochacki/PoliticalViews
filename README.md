# Political Views
Take a test to determine your political views and find party that matches your beliefs. Answer bunch of questions which will be transformed into chart, at which you can compare your views to most popular political parties. Currently only in Polish. It is being created by [@MateuszSochacki](https://github.com/MateuszSochacki) and [@Dimolek](https://github.com/Dimolek/).

## Built with
* [IntelliJ](https://www.jetbrains.com/idea/) - IDE
* [Maven](https://maven.apache.org/) - Dependency management
* [Java 11](https://www.java.com) - Backend programming language
  * [Spring](https://spring.io/) - Application framework
  * [Hibernate](https://hibernate.org) - Object-relational mapping framework
  * [Lombok](https://projectlombok.org/) - External library to cleanup the code
* [MySql](https://www.mysql.com/) - Database
* [React](https://reactjs.org/) - Frontend

## Functionality
 - taking a predefined test and obtaining chart showing one's views on a political spectrum
 - creating user accounts
 - user login
 - storing user's results of predefined test in database
 - creating custom political tests by users and storing them in database
 - sharing link to created test
 
 ## Screenshots
 ![UI](https://media.discordapp.net/attachments/353086685002727425/676357615336423434/unknown.png?width=1397&height=677)

 ## To change/improve
 - [ ] user data is stored as plain text in database - add security
 - [ ] after signing up, user id is stored in browser's SessionStorage - add authentication
