const tweetsList = document.querySelector(".tweets");

fetchTweets()
.then(dataParse)
// .then(getData)
.then(createTweetsMarkup)
// .then(({text, airline, sentiment})=>createTweetsMarkup(text, airline, sentiment));

async function fetchTweets(){
  const response = await fetch("./Tweets.csv");
  const data = await response.text();
  return data;
}
function dataParse(data){
  return Papa.parse(data, {header: true}).data;
}
function createTweetsMarkup(data){
  return tweetsList.innerHTML = data.map(
    ({text, airline, airline_sentiment}) =>
    `<tr class="tweets">
                <td>${airline}</td>
                <td>${airline_sentiment}</td>
                <td>${text}</td>
            </tr>`
).join("")
}
// airline: "Virgin America"
// airline_sentiment: "neutral"
// airline_sentiment_confidence: "1.0"
// airline_sentiment_gold: ""
// name: "cairdin"
// negativereason: ""
// negativereason_confidence: ""
// negativereason_gold: ""
// retweet_count: "0"
// text: "@VirginAmerica What @dhepburn said."
// tweet_coord: ""
// tweet_created: "2015-02-24 11:35:52 -0800"
// tweet_id: "570306133677760513"
// tweet_location: ""
// user_timezone: "Eastern Time (US & Canada)"
function getData(data){
  return data.reduce(
    (acc, tweet) => {
      acc.text.push(tweet.text);
      acc.airline.push(tweet.airline);
      acc.sentiment.push(tweet.airline_sentiment);
      acc.negativereason.push(tweet.negativereason);

      return acc;
    }, {
      text: [], 
      airline: [], 
      sentiment: [],
      negativereason: [],
    }
  )
}
const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
  ];

  const data = {
    labels: labels,
    datasets: [{
      label: 'My First dataset',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: [0, 10, 5, 2, 20, 30, 45],
    }]
  };

  const config = {
    type: 'bar',
    data: data,
    options: {}
  };

  const myChart = new Chart(
    document.getElementById('myChart'),
    config
  );