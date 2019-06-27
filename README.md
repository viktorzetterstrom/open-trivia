# Hack day at &lt;/salt&gt; - Open Trivia API implementation

This project was created by me in one day at the School of Applied Technology as a part of Hack-day.

## Usage
 Clone the repository and install both the client and the server with your package manager of choice. Start the application from the root folder by running
* `npm run start-server`
* `npm run start-client`

The client will open up automatically when you run the client script. To play simply choose your level of difficulty, type and category of question and click the button to play.

## Structure
The page is running create react app with a Express backend proxy. The data is fetched from the [Open Trivia Database](https://opentdb.com/).