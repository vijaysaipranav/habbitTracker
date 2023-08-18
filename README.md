# HabitTracker
This is Basic Habit Tracking Application for Users to Track Daily Habits for a week and this file is Readme for this Web Application. It's a Web App built with Node.js and EJS. It allows users to define habits and track their progress on a daily basis for a week.
# Contributed By:- Pranav

![habbitTrackerFront](https://github.com/vijaysaipranav/habbitTracker/assets/113119849/618fce3b-8bf3-4d1d-b4f5-3b35b3de7e2c)
![habbitTrackerBack](https://github.com/vijaysaipranav/habbitTracker/assets/113119849/62d174d6-9301-4c1a-88dc-331122df710c)

#Folder Structure:-

```
HabbitTracker
├──habbitTracker
├── assets
│   ├── css
│   │   ├── header.css
│   │   ├── home.css
│   │   ├── layout.css
│   │   └── weekTask.css
│   └── js
│       ├── header.js
│       ├── home.js
│       └── weekList.js
├── config
│   └── mongoose.js
├── controllers
│   ├── home.js
│   ├── task.js
│   └── weekList.js
├── generateTree.js
├── index.js
├── models
│   ├── everyDayStatus.js
│   └── taskList.js
├── package-lock.json
├── package.json
├── README.md
├── routes
│   ├── home.js
│   ├── task.js
│   └── weekList.js
└── views
    ├── home.ejs
    ├── layout.ejs
    ├── weekList.ejs
    └── _header.ejs
```

# Features of this App:-

1. Add multiple habits to track, such as reading a book, going to the gym, etc only for 1 user.
   Track the status of each habit daily: done, not done, or none.
2. View all current habits and add new habits to track.
3. View a weekly overview of each habit, including the status of the habit for the past seven days.
4. Toggle the status of habits for the current day or any previous day.
5. Store habit data in a database.
6. No Authentication or seperate session of DB used for users. A single shared session limits this app 
   accurate and best usage limit to 1 user on multiple devices, but with more than 1 user the data is 
   disrupted. Multiple users can use it in different time slots or during different times of day or even in 
   different weeks or months, for better segregation and understanding of the user to identify their data. 
   Also if the habits of 2 users are totally different like no similar habits like one possesses all bad 
   habits and other possesses all good habits, then 2 users can use this.
7. In future it will be tried to classify/categorise the user habits as well as classify them daywise 		 
   (timewise) for a single user first and then for multiple ones.

# Getting Started:-
# Prerequisites:-
```
Node.js
MongoDB
Express
Mongoose
```
# Installation Steps:-
1. Clone the repository:-
```
git clone https://github.com/vijaysaipranav/habbitTracker.git
```
2. Install the dependencies:
```
cd habbitTracker
npm install
```
3. Configure the database connection:
In server.js use your own mongoDB username and Password from connection string of MongoDB Campus or Cloud MongoDB to configure the DB connection.
4. Start the application:
```
npm start
```
5. Open your web browser and visit [https://habbittracker-52vx.onrender.com](url) to access the Habit Tracking App.

# Contributing:
Contributions are most easily and thankfully welcome! If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature/fix.
3. Make the necessary changes and commit them.
4. Push the changes to your forked repository.
5. Submit a pull request explaining the changes you've made.

# Acknowledgements:
The libraries and resources that you used in the development of this project are Visual Studio Code and MongoDB Cloud database finally with render for deployment.

# Contact:

1. Email - [vijaysaipranavt@gmail.com](url)
2. Project Link - [https://github.com/vijaysaipranav/habbitTracker.](url)
