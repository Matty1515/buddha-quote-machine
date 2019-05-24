/* jshint esversion: 6 */
// Finish copy/paste button
// Add more quotes!

const quotes = [
  {
    text: "Health is the greatest gift, contentment the greatest wealth, faithfulness the best relationship.",
    author: "Buddha"
  },
  {
    text: "Drop by drop is the water pot filled. Likewise, the wise man, gathering it little by little, fills himself with good.",
    author: "Buddha"
  },
  {
    text: "There is no fear for one whose mind is not filled with desires.",
    author: "Buddha"
  },
  {
    text: "Work out your own salvation. Do not depend on others.",
    author: "Buddha"
  },
  {
    text: "If anything is worth doing, do it with all your heart.",
    author: "Buddha"
  },
  {
    text: "A man is not called wise because he talks and talks again; but if he is peaceful, loving and fearless then he is in truth called wise.",
    author: "Buddha"
  },
  {
    text: "Do not look for a sanctuary in anyone except your self.",
    author: "Buddha"
  },
  {
    text: "No one saves us but ourselves. No one can and no one may. We ourselves must walk the path.",
    author: "Buddha"
  },
  {
    text: "To live a pure unselfish life, one must count nothing as one’s own in the midst of abundance.",
    author: "Buddha"
  },
  {
    text: "If we fail to look after others when they need help, who will look after us?",
    author: "Buddha"
  },
];
const quoteNum = quotes.length;
// console.log("Quote Num: " + quoteNum);

class QuoteMachine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: null,
      author: null
    };
    this.getNewQuote = this.getNewQuote.bind(this);
  }
  componentDidMount() {
    this.getNewQuote();
  }
  getNewQuote() {
    const randNum = Math.floor(Math.random() * quoteNum);
    setTimeout( () => {
      this.setState({
        text: quotes[randNum].text,
        author: quotes[randNum].author
      });
    }, 100);
  }
  render() {
    return (
      <div id="quote-box">
        <div className="text-wrapper">
          <p id="text"><q>{this.state.text}</q></p>
        </div>
        <p id="author">-{this.state.author}</p>
        <div className="buttons-wrapper">
          <div className="icons-wrapper">
            <a id="copy-quote"><i class="fas fa-copy"></i></a>
            <a id="tweet-quote" href={"https://twitter.com/intent/tweet?hashtags=BuddhaQuotes&text=%22" + this.state.text + "%22 -Buddha"} target="_blank"><i className="fab fa-twitter"></i></a>
          </div>
          <button onClick={this.getNewQuote} id="new-quote">next >></button>
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <QuoteMachine />,
  document.getElementById('app')
)