How to Access the Game

The game can be accessed through the link: https://xo-game-rust.vercel.app/

Design Approach & Algorithms Used
1. Tools and Technologies:
  -VS Code: Coding environment.
  -Next.js: Framework for building the web app.
  -Firebase: Database for storing game history and facilitating replays.
  -Figma: UI/UX design tool.
  -GitHub: Code repository for version control and collaboration.
  -HTML, CSS, JavaScript: Core web technologies for building the front-end.
  -Vercel: Deployment platform.
  -UI Design in Figma:

2. The game's user interface was designed in Figma, ensuring a user-friendly experience.
Functionality Breakdown:

3. Tic-Tac-Toe Game Core: The essential game mechanics.
Adjustable Grid Size: The ability to alter the game board size beyond the standard 3x3 grid.
Replay System: Viewing past game outcomes.
Using Next.js as the Framework:

4. Next.js was chosen for its efficiency in building scalable and fast web applications, as well as its support for server-side rendering, which improves SEO and performance.
Game Implementation:

5. Utilized HTML, CSS, and JavaScript to create a dynamic grid that adjusts based on user selection. Gameplay involves alternating X/O marks with each click, ending the game upon winning conditions or a full grid.
Adjustable Grid Size:

6. Implemented a selection system on the homepage, allowing users to choose between 3x3, 4x4, and 5x5 grids. Selecting a size redirects the user to the corresponding game page.
History and Replay System:

7. Choose Firebase for its ease of use and compatibility with multiple frameworks, including Next.js. The system records winners, timestamps, and tie conditions, displaying this data in a pop-up window for replays from the homepage.
Responsive Design:

8. Efforts were made to ensure the website is responsive, though it is currently optimized mainly for desktop usage, with other platforms needing further adjustments.
UI Enhancement:

9. Applied CSS styling as per the Figma designs to ensure the visual aspect matches the planned UI, enhancing user interaction and experience.
