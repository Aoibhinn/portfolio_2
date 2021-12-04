# Milestone Project Two | Are you ready to test your coding knowledge
 
<img src="#">
 
[View the live project here](#) <br>
 
## About
 
This website has been created for my Milestone 2 Interactive Frontend Development project.
 
I want to create a music quiz game to test the players coding terminology knowledge. The user will be given 4 random questions, worth 10 points a question, with 30 seconds to answer each. With a maximum of 40 points, the user will be able to save their high score and try to get on the top 5 leaderboard.


## User Experience-(UX)
 
### Site Goals
 
 1. I want the site to be attractive, responsive and easy to use for the user.
 2. I want the site to work as intended incrementing the questions and score as the user progresses, with the timer going down for each question.
 3. I want the user to have a varied choice of questions.
 4. I want the user to be able to save their score.
 5. I want the user to be able to navigate easily through the different pages of the site.

 ### User Stories
 
 * #### First Time Visitor Goals
   1. I want the game to be attractive and and easy to read all text.
   2. I want the game to be responsive to whichever device I am playing it on.
   3. I want to be able to navigate around the different pages of the site.
   4. I want to be given a choice of varied questions.

   * #### Returning/ Frequent Visitor Goals
   1. I want to be given varied questions each time I play.
   2. I want to be able to record my score and try to get on a leaderboard.
   3. I want to see other users previous scores so I can try to beat them.

    
### Design
 
Because of the topic of the quiz, I want the design of the website to have a digital/coding themed background. It needs to be pleasing for the user to look at with the game elements easily distinguishable from the background so that everything is clear and easy to use. To do this I will have a fairly dark background with bright neon colors being used for the game so they will contrast nicely together.
I want to keep a consistent theme throughout the site by using the same colour combinations on each page. With the site being attractive for the user and easy to use I am hoping the user will want to keep returning to play the game.

 * #### Wireframes
 
To make my wireframes I have used balsamiq. I have done one for each page and did a design for larger screens and smaller screens to show how the site will be responsive to screen size and change accordingly. The links to each one are below.<br>
![home_wireframe](assets/images/home_wireframe.png)
![css_q_wireframe](assets/images/css_q_wireframe.png)
![HTML_q_wireframe](assets/images/html_q_wireframe.png)
![PHP_q_wireframe](assets/images/php_q_wireframe.png)
![SQL_q_wireframe](assets/images/sql_q_wireframe.png)
![save_score_wireframe](assets/images/save_score_wireframe.png)
![leaderboard_wireframe](assets/images/leaderboard_wireframe.png)

 * #### Imagery
 
For this project I have used one image to be the main background across all the different pages of the site. It is an image with some code written as I felt it suited the theme of the quiz. I also placed a transparent overlay on top of the image to soften the brightness of it, and help enhance the interactive parts of the site for the user making it all stand out clearly and be visually appealing as well as usable and easy to see.

<img src="assets/images/code_background.png" width="450" height="300">

 * #### Color Scheme
 
For this project I wanted the colour to be vibrant and really pop out against the darker background that I chose. The main colour used is a neon pink that is also included in the background image. I have used this colour throughout all the differnt elements of the game including text colour and buttons. 
 
  * #### Typography

  The font I have used in this project is **Raleway** which was imported from **Google Fonts**. I chose to just use one font for all text throughout the quiz as I feel it's easy to read and works well with the background image.
 
 ## Features
 
The design and layout of the game is responsvie to all different screen sizes and remains attractive and easy to use no matter what device it is being played on.
 
 * ### Home Page
   * **High Scores** button that when clicked will link the user to the top 5 highscores. These scores are stored and pulled from local storage.
   * **Play** button that links the user to the main game page.
 
 * ### Game Page
   * A question counter that shows the user which question number they are on out of 4.
   * A score counter that shows the user what they're current score is and that increments by 10 for every correct answer.
   * A question and 4 possible answers to choose from. The selected answer will turn red if it is wrong with an alert pop up displaying the correct answer. If the answer is correct the answer will turn green.
   * A 30 second timer that counts down on screen and resets for each new question.
   * A home button that will take the user back to the main page.
   * 
 * ### End Page
   * A display of the users end score.
   * The option for the user to enter their name and save their score which will be added to the highscore page if the score is high enough.
   * A button to let the user play again.
   * A button to take the user back to the home page.



