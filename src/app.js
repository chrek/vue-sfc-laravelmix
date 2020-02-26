import Vue from "vue";
import TweetComponent from "./components/TweetComponent.vue";

const tweets = [
  {
    id: 1,
    name: "Andrew",
    handle: "@theonlyandrew",
    img: "./src/assets/images/andrew.png",
    tweet: "Happiness can exist only in acceptance...",
    likes: 12
  },
  {
    id: 2,
    name: "Mary",
    handle: "@immaculatemary",
    img: "./src/assets/images/mary.png",
    tweet:
      "The most difficult thing is the decision to act, the rest is merely tenacity. The fears are paper tigers...",
    likes: 19
  },
  {
    id: 3,
    name: "John",
    handle: "@unbeatablejohn",
    img: "./src/assets/images/john.png",
    tweet:
      "If you cannot do great things, do small things in a great way. Napoleon Hill...",
    likes: 28
  }
];

new Vue({
  el: "#app",
  data: {
    tweets
  },
  methods: {
    addTweetMessage(tweet) {
      let newTweet = {};
      let lastTweetObjectID = this.tweets[this.tweets.length - 1].id;

      // Do a shallow copying of tweet object
      newTweet = Object.assign({}, tweet);

      // Assign an Id to the tweet just after lastTweetObjectID
      newTweet.id = lastTweetObjectID + 1;

      // Push the newly copied item to the end of the data array
      this.tweets.push(newTweet);
    }
  },
  components: {
    TweetComponent
    //TweetContent
  }
});
