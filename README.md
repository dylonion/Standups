# Standups

<main>

<article>

## Concept:

**TLDR;** The App lets students graph emotional states and reflect on their day; progress over time is visualized and shared

Each morning, students of General Assembly's Web Immersive program typically gather for 5 minutes or so of self-reflective whiteboarding. Traditionally, the format of an individual's 'Standup' involves 1. A chart of a Sine curve, representing the emotional highs and lows of the learning experience, in which the student plots their own current position, and 2. a sentence summarizing their wins and losses from the previous day. 
These Standups give students the opportunity to discuss their emotions in an inclusive space, and help to put everyday struggles into the broader perspective of the course as a whole. The graph provides a simple visual to remind the individual that theirs is part of a collective experience.

The purpose of this app is to bring this ritual into the digital space, and perhaps to reimagine it for a broader audience. The advantage of a digitized standup is persistence - it allows end users to track their own progress over time and compare and share it with their peers. It provides group leaders with analytics to improve their teaching/developing/etc. process.

### Potential Features:

*   Interactive 'rollercoaster' graph for daily logging
*   Log of brief + and - daily statements, option to post privately or publicly
*   Group/individual/worldwide wordcloud display generated from natural language processing of -+ logs
*   Group/individual/worldwide timeline of rollercoaster
*   administrative full CRUD access (add/remove users, add/remove posts, create groups) and ability to push questions and statements to the group
*   Todo list that uses the graph as a pinpoard, let users chart how they feel about specific tasks

### Possible Technologies:

*   Hopefully prioritize responsive design
*   React frontend
*   Node back end probably
*   Passport (wishlist: explore a new auth strategy)
*   Highcharts: npm react module for easy charts. Not yet sure how difficult live editing in browser will be with this module
*   Surveymonkey: API for creating surveys
*   AWS or firebase filehosting (firebase seems simpler)
*   Indico natural language processing for word cloud
*   Fontawesome icons

</article>

<article>

## Code planning:

### Database Structure:

    users:
       - id SERIAL PRIMARY KEY
       - name VARCHAR(255) NOT NULL
       - email VARCHAR(255) UNIQUE NOT NULL
       - permissions INT
       - avatar VARCHAR(255)
       - password_digest TEXT NOT NULL
    
    standups:
       - id SERIAL PRIMARY KEY
       - graph_position INT NOT NULL
       - positives TEXT
       - negatives TEXT
       - user_id INTEGER REFERENCES users(id) NOT NULL
       - time_created TIMESTAMP
      
     groups:
        - id SERIAL PRIMARY KEY
        - group_name VARCHAR(255)
        - owner_id INTEGER REFERENCES users(id) NOT NULL
        - user_id INTEGER REFERENCES users(id) NOT NULL
        - parent_group INTEGER 
      
      comments:
         - id SERIAL PRIMARY KEY
         - comment_body TEXT
         - from_id REFERENCES users(id) NOT NULL
         - to_id REFERENCES standups(id) NOT NULL
         - time_created TIMESTAMP
         - comment_type VARCHAR(255)
         
### User Stories:

   _Team member_

    As a a member of a professional team or educational cohort, I want a space to be able to talk about 
    my emotional journey and share my subjective experience of the workspace.

    -   Each day, I can plot my 'emotional position' in the 'sine/rollercoaster graph' of daily life.
    -   Each day, I can choose to briefly summarize the things I am feeling positive and negative about. 
        (Or my accomplishments/setbacks). 
    -   I can choose to share as myself, or submit my Standup as anonymous data to the collective.
    -   As time progresses, I can review and visualize my own timeline in motion, and see how it compares and converges 
        with collective sentiment (my team, as well as the anonymous masses using the app as a whole). 
    -   I can view the whole team as a scatterpoint on one sine graph, or as an (anonymously compiled) 
        word cloud if commonalities have emerged. 
    -   I can choose to manage a todo list within the app, using the Sine graph as a pinboard for my tasks (broadcasting to others, 
        or charting for my self how I feel about each task).

  _Team leader_

    As a team leader, I want to view information about team moral over time and identify areas where I can be of 
    assistance, or pinpoint areas of interest in the team's process (whether positive or negative). I want to provide 
    an outlet for earnest discussion amongst the team within an inclusive space.

    -   Each day, I can review data about the health and wellbeing of my group.
    -   As team leader, I can optionally push questions (poll requests) or statements to the group each day to guide 
        discussion. Response to said questions will never be mandatory.
    -   As team leader, I can message team members individually about their progress
    -   As team leader, I can moderate the group (deleting posts (from public view), removing and adding members, etc)
    -   As Supreme Commander, I can manage the structure of groups and sub-groups, and assign leaders to those groups.

### Wireframes:

#### Home / Splashpage:
![](https://raw.githubusercontent.com/dylonion/Standups/master/welcome-page.jpg)

#### User Dashboard:
![](https://raw.githubusercontent.com/dylonion/Standups/master/Dashboard.jpg)

#### Leader Dashboard:
![](https://raw.githubusercontent.com/dylonion/Standups/master/Leader-dashboard.jpg)

#### Live Standup session:
![](https://raw.githubusercontent.com/dylonion/Standups/master/Standup-liveSession.jpg)

### Phases of completion:

#### Phase 1: Setup
  *	Build out backend file structure and backend skeleton code
  *	Build out frontend file structure frontend skeleton code
  *	Create DB migrations and seed files

#### Phase 2: MVP essentials
  *	Authentication
  * Implementing highcharts and the code for graphing (both create and display)
  * Full Crud for graphs, wins/losses, add/edit/remove comment, invite/remove user  
  
#### Phase 3: Solidify MVP
  *	Responsive styling
  *	Wordclouds and natural language processing
  
#### Phase 4: Stretch goals:
 * Implementing sockets for realtime view of results and discussion
 * Nested groups and organizational heirarchy
 * Sinegraph pinboard todo app idea
 * Surveymonkey integration for pushing team questions
 * Serving features as an API (Slack?)
 * Allow group leaders to set watchlist of terms
 
</article>

</main>
