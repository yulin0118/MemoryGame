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


![](https://i.imgur.com/immqajk.gif)

*Before the user starts the game, he can pick one out of three difficulty levels; the `clock` and `oopsie count` updates accordingly as he clicks `start` which becomes `stop` when game is in session.* 

*When a button is pressed, a picture of the musical note corresponding the frequency played lights up.*

---- 

![](https://i.imgur.com/jQglP9f.gif)

*As the user makes progress, the game speeds up each turn. With every correct sequence guessed, the progress bar updates to reflect current progress. The `clock` turns pink when there is 3 seconds left; the game ends when time runs out a specific turn.*

---- 


![](https://i.imgur.com/rTEGWCj.gif)

*The `oopsie count` turns pink when no more mistakes allowed, game ends once user reaches mistake limit.*

----
![](https://i.imgur.com/Aw7QhcW.gif)

*User wins the game after sucessfully guessing the complete pattern. Confetti shows up as celebration!* 



## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
[YOUR ANSWER HERE]

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 
[YOUR ANSWER HERE]

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
[YOUR ANSWER HERE]

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
[YOUR ANSWER HERE]



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
