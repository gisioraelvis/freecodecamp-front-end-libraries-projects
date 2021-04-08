const quoteElement = document.getElementById("text");
const authorElement = document.getElementById("author");
const newQuoteBtn = document.getElementById("new-quote");
const tweetQuoteBtn = document.getElementById("tweet-quote");
const spinner = document.querySelector("#js-spinner");

getQuote();
newQuoteBtn.addEventListener("click", getQuote);

async function getQuote() {
  spinner.classList.remove("hidden");
  newQuoteBtn.disabled = true;
  try {
    const res = await fetch(
      "https://api.whatdoestrumpthink.com/api/v1/quotes/random"
    );
    if (!res.ok) {
      throw Error(response.statusText);
    }

    const quoteData = await res.json();

    quoteData.author = " "
      ? (authorElement.innerText = "Unknown")
      : (authorElement.innerText = quoteData.author);

    quoteElement.innerText = quoteData.message;

    tweetQuoteBtn.setAttribute(
      "href",
      `https://twitter.com/intent/tweet?text=${quoteData.message} - ${quoteData.author}`
    );
  } catch (err) {
    console.log(err);
    alert("Failed to fetch new quote");
  } finally {
    spinner.classList.add("hidden");
    newQuoteBtn.disabled = false;
  }
}
