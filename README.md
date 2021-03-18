# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Yulin Li**

Time spent: **15** hours spent in total

Link to project: https://island-real-locust.glitch.me/index.html

*Please open the link with Chrome, for Safari sometimes has trouble with AudioContext used in this project.*

## Required Functionality

The following **required** functionality is complete:

- [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
- [x] "Start" button toggles between "Start" and "Stop" when clicked. 
- [x] Game buttons each light up and play a sound when clicked. 
- [x] Computer plays back sequence of clues including sound and visual cue for each button
- [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
- [x] User wins the game after guessing a complete pattern
- [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

- [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
- [x] Buttons use a pitch (frequency) other than the ones in the tutorial
- [x] More than 4 functional game buttons
- [x] Playback speeds up on each turn
- [x] Computer picks a different pattern each time the game is played
- [x] Player only loses after 3 mistakes (instead of on the first mistake)
- [x] Game button appearance change goes beyond color (e.g. add an image)
- [x] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [x] Progress bar to show how far the user is at each turn 
- [x] Three difficulty modes to keep challenging the user 
- [x] Count down clock showing how much time the user has left for each turn  
- [x] "Oopsies allowed" count, showing how many more mistakes are allowed before the game is lost 
- [x] A sub page name "rules" to describe the game and a little musical challenge 
- [x] Confetti when the user wins, implemented with open source code  

## Video Walkthrough

Here's a walkthrough of implemented user stories:

![](https://i.imgur.com/v3TpSIy.gif)

*As the user comes into the website, he is invited to look over an overview of the rules in a sub-page, which also includes some tips, a fun musical challenge, and a link back to the main page.*

----


![](https://i.imgur.com/xDDnL3N.gif)

*Before the user starts the game, he can pick one out of three difficulty levels; the `clock` and `oopsie count` updates accordingly as he clicks `start`, which becomes `stop` when game is in session.* 

*When a button is pressed, a picture of the musical note corresponding the pitch played lights up; the pattern is randomly generated at the start of each game.*

---- 

![](https://i.imgur.com/jQglP9f.gif)

*As the user makes progress, the game speeds up each turn. With every correct sequence guessed, the progress bar updates to reflect current status. The `clock` turns pink when there are 3 seconds left; the user loses the game if timer runs out before he completes his guess correctly.*

---- 


![](https://i.imgur.com/rTEGWCj.gif)

*The `oopsie count` turns pink when no more mistakes are allowed, game ends once user reaches mistake limit.*

----
![](https://i.imgur.com/Aw7QhcW.gif)

*User wins the game after sucessfully guessing the complete pattern. **Confetti** shows up as celebration!* 



## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 

	- I used W3School to learn about the <script> element, element property manipulation, how to style with CSS, how to include images etc. 
	- I used StackOverflow for when I ran into specific bugs. 
	- To add the confetti effect, I looked up open source code online and used the code shared by MathuSum Mut (https://www.cssscript.com/confetti-falling-animation/), licence below. 
	- I asked some friends to play the game along my development process, pointing out features they might enjoy, designs that can be improved, and minor bugs in corner cases. 


2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 
[YOUR ANSWER HERE]

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 

	On a more surface level, I wonder how I can better incorporate open source CSS into my code to better my design. I also would love to learn more about good practices in the industry when it comes to organizing web development code and documentation. I was lucky to have learned about good software development practices in school, I appreciate the difference it can make especially when working with a team, and I wonder how I can transfer such skills to web development. Along the lines of transferring software development skills, I wonder about the standards and goals for optimizing web code, for example, how time / space complexity are weighted, and how we tell good web code design from bad. Getting the code to work and the interface pleasing is only my first step, I would like to learn more about writing good and scalable code. 
Additionally, after having the HTML, CSS, Javascript basics down, I would love to extend web development skillset by learning to work with newer technologies such as Node/Express and React. 


4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 

	If I had a few more hours to work on this project, I would have firstly tried to clean up the code before implementing additional features. Specifically, since I was learning / experimenting with a lot of the things I implemented and adding additional features as I went along, I did not start with a good blueprint of how to structure my code, which left some functions and CSS classes messy and hard to abstract for further development. More specifically, I would refactor the `update status` functions into two, one for updating the display each turn and another for resetting the display when a new game starts. Additionally, I would look at some similar websites with better visual design and try to implement better CSS code to make the interface more user-friendly and aesthetically pleasing. For example, the current interface has the same design for the `start` button and the `timer`, which might be visually confusing, since one is clickable and the other is not. I would research some design principles, organize them into different divs in HTML and do some AB testing to better the design. 
	
 	Functionality wise, I would add another version of this game where instead of single notes, chords are played without showing the user which buttons were pressed, and the user would have to guess which notes were in that chord. For better user experience, I would allow the user a certain amount of time to play with the buttons before they drag their guesses into a submission box. This would be a fun game for music students to play while working on their chord recognition skills. Additionally, I would add a shuffle button to switch up the lineup of the buttons to keep the game interesting for longer. Finally, I would experiment with the sound synthesis code or try to import audio files to add an option where the notes sound as they would on a piano, to better fit the needs of music students. 




## License

    Copyright Yulin Li

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
    
## License Of Open Source Used 
    MIT License

    Copyright (c) 2018 MathuSum Mut

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.
