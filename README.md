# Spring-Boot

To run the app on Windows:

1. Configure `\Spring-Boot\demo\src\main\resources\application.properties` with your MySQL connection.
2. Create a database called `demo` in MySQL.
3. In a terminal, run: `.\gradlew.bat bootRun` from `\Spring-Boot\demo`.
4. In another terminal, go to `\Spring-Boot\frontend`, run:

   ```bash
   npm install
   npm start
