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
    const { quote, author } = genRandomQuotes();

    authorElement.innerText = author;

    quoteElement.innerText = quote;

    tweetQuoteBtn.setAttribute(
      "href",
      `https://twitter.com/intent/tweet?text=${quote} - ${author}`
    );
  } catch (err) {
    console.log(err);
    alert("Failed to fetch new quote");
  } finally {
    spinner.classList.add("hidden");
    newQuoteBtn.disabled = false;
  }
}

function genRandomQuotes() {
  var quotes = [
    {
      id: 1,
      quote:
        "I have just three things to teach: simplicity, patience, compassion. These three are your greatest treasures.",
      author: "Lao Tzu",
    },
    {
      id: 2,
      quote:
        "Do today what others won't and achieve tomorrow what others can't.",
      author: "Jerry Rice",
    },
    {
      id: 3,
      quote:
        "In character, in manner, in style, in all things, the supreme excellence is simplicity.",
      author: "Henry Wadsworth Longfellow",
    },
    {
      id: 4,
      quote: "If we don't discipline ourselves, the world will do it for us.",
      author: "William Feather",
    },
    {
      id: 5,
      quote: "Rule your mind or it will rule you.",
      author: "Horace",
    },
    {
      id: 6,
      quote: "All that we are is the result of what we have thought.",
      author: "Buddha",
    },
    {
      id: 7,
      quote:
        "Doing just a little bit during the time we have available puts you that much further ahead than if you took no action at all.",
      author: "Pulsifer, Take Action; Don't Procrastinate",
    },
    {
      id: 8,
      quote: "Never leave that till tomorrow which you can do today.",
      author: "Benjamin Franklin",
    },
    {
      id: 9,
      quote:
        "Procrastination is like a credit card: it's a lot of fun until you get the bill.",
      author: "Christopher Parker",
    },
    {
      id: 10,
      quote: "Someday is not a day of the week.",
      author: "Author Unknown",
    },
    {
      id: 11,
      quote: "Tomorrow is often the busiest day of the week.",
      author: "Spanish Proverb",
    },
    {
      id: 12,
      quote:
        "I can accept failure, everyone fails at something. But I can't accept not trying.",
      author: "Michael Jordan",
    },
    {
      id: 13,
      quote:
        "There’s a myth that time is money. In fact, time is more precious than money. It’s a nonrenewable reauthor. Once you’ve spent it, and if you’ve spent it badly, it’s gone forever.",
      author: "Neil A. Fiore",
    },
    {
      id: 14,
      quote:
        "Nothing can stop the man with the right mental attitude from achieving his goal; nothing on earth can help the man with the wrong mental attitude.",
      author: "Thomas Jefferson",
    },
    {
      id: 15,
      quote:
        "There is only one success--to be able to spend your life in your own way.",
      author: "Christopher Morley",
    },
    {
      id: 16,
      quote:
        "Success is the good fortune that comes from aspiration, desperation, perspiration and inspiration.",
      author: "Evan Esar",
    },
    {
      id: 17,
      quote:
        "We are still masters of our fate. We are still captains of our souls.",
      author: "Winston Churchill",
    },
    {
      id: 18,
      quote: "Our truest life is when we are in dreams awake.",
      author: "Henry David Thoreau",
    },
    {
      id: 19,
      quote: "The best way to make your dreams come true is to wake up.",
      author: "Paul Valery",
    },
    {
      id: 20,
      quote:
        "Life without endeavor is like entering a jewel mine and coming out with empty hands.",
      author: "Japanese Proverb",
    },
    {
      id: 21,
      quote:
        "Happiness does not consist in pastimes and amusements but in virtuous activities.",
      author: "Aristotle",
    },
    {
      id: 22,
      quote:
        "By constant self-discipline and self-control, you can develop greatness of character.",
      author: "Grenville Kleiser",
    },
    {
      id: 23,
      quote:
        "The difference between a successful person and others is not a lack of strength, not a lack of knowledge, but rather a lack in will.",
      author: "Vince Lombardi Jr.",
    },
    {
      id: 24,
      quote:
        "At the end of the day, let there be no excuses, no explanations, no regrets.",
      author: "Steve Maraboli",
    },
    {
      id: 25,
      quote:
        "Inaction will cause a man to sink into the slough of despond and vanish without a trace.",
      author: "Farley Mowat",
    },
    {
      id: 26,
      quote:
        "True freedom is impossible without a mind made free by discipline.",
      author: "Mortimer J. Adler",
    },
    {
      id: 27,
      quote:
        "The most powerful control we can ever attain, is to be in control of ourselves.",
      author: "Chris Page",
    },
    {
      id: 28,
      quote:
        "Idleness is only the refuge of weak minds, and the holiday of fools.",
      author: "Philip Dormer Stanhope",
    },
    {
      id: 29,
      quote: "This is your life and it's ending one minute at a time.",
      author: "Tyler Durden, Fight Club",
    },
    {
      id: 30,
      quote: "You create opportunities by performing, not complaining.",
      author: "Muriel Siebert",
    },
    {
      id: 31,
      quote:
        "Great achievement is usually born of great sacrifice, and is never the result of selfishness.",
      author: "Napoleon Hill",
    },
    {
      id: 32,
      quote: "Whether you think you can, or you think you can't, you're right.",
      author: "Henry Ford",
    },
    {
      id: 33,
      quote:
        "Even if I knew that tomorrow the world would go to pieces, I would still plant my apple tree.",
      author: "Martin Luther",
    },
    {
      id: 34,
      quote: "Great acts are made up of small deeds.",
      author: "Lao Tzu",
    },
    {
      id: 35,
      quote: "The flame that burns Twice as bright burns half as long.",
      author: "Lao Tzu",
    },
    {
      id: 36,
      quote:
        "Perfection is achieved not when there is nothing more to add, but when there is nothing left to take away.",
      author: "Antoine de Saint-Exupery",
    },
    {
      id: 37,
      quote: "If you can't do great things, do small things in a great way.",
      author: "Napoleon Hill",
    },
    {
      id: 38,
      quote: "When I let go of what I am, I become what I might be.",
      author: "Lao Tzu",
    },
    {
      id: 39,
      quote:
        "Do not go where the path may lead, go instead where there is no path and leave a trail.",
      author: "Ralph Waldo Emerson",
    },
    {
      id: 40,
      quote: "Well done is better than well said.",
      author: "Benjamin Franklin",
    },
    {
      id: 41,
      quote:
        "Whatever you think the world is withholding from you, you are withholding from the world.",
      author: "Ekhart Tolle",
    },
    {
      id: 42,
      quote: "Muddy water is best cleared by leaving it alone.",
      author: "Alan Watts",
    },
    {
      id: 43,
      quote: "Do, or do not. There is no try.",
      author: "Yoda",
    },
    {
      id: 44,
      quote:
        "The superior man is modest in his speech, but exceeds in his actions.",
      author: "Confucius",
    },
    {
      id: 45,
      quote:
        "Optimism is the faith that leads to achievement. Nothing can be done without hope and confidence.",
      author: "Helen Keller",
    },
    {
      id: 46,
      quote:
        "We must believe that we are gifted for something, and that this thing, at whatever cost, must be attained.",
      author: "Marie Curie",
    },
    {
      id: 47,
      quote:
        "If you look at what you have in life, you’ll always have more. If you look at what you don’t have in life, you’ll never have enough.",
      author: "Oprah Winfrey",
    },
    {
      id: 48,
      quote:
        "You may encounter many defeats, but you must not be defeated. In fact, it may be necessary to encounter the defeats, so you can know who you are, what you can rise from, how you can still come out of it.",
      author: "Maya Angelou",
    },
    {
      id: 49,
      quote:
        "We need to start work with the idea that we’re going to learn every day. I learn, even at my position, every single day.",
      author: "Chanda Kochhar",
    },
    {
      id: 50,
      quote:
        "There are two kinds of people, those who do the work and those who take the credit. Try to be in the first group; there is less competition there.",
      author: "Indira Gandhi",
    },
    {
      id: 51,
      quote:
        "You can’t be that kid standing at the top of the waterslide, overthinking it. You have to go down the chute.",
      author: "Tina Fey",
    },
    {
      id: 52,
      quote: "Above all, be the heroine of your life, not the victim.",
      author: "Nora Ephron",
    },
    {
      id: 53,
      quote:
        "Learn from the mistakes of others. You can’t live long enough to make them all yourself.",
      author: "Eleanor Roosevelt",
    },
    {
      id: 54,
      quote:
        "What you do makes a difference, and you have to decide what kind of difference you want to make.",
      author: "Jane Goodall",
    },
    {
      id: 55,
      quote:
        "One of the secrets to staying young is to always do things you don’t know how to do, to keep learning.",
      author: "Ruth Reichl",
    },
    {
      id: 56,
      quote: "If you don’t risk anything, you risk even more.",
      author: "Erica Jong",
    },
    {
      id: 57,
      quote: "When the whole world is silent, even one voice becomes powerful.",
      author: "Malala Yousafzai",
    },
    {
      id: 58,
      quote:
        "The most common way people give up their power is by thinking they don’t have any.",
      author: "Alice Walker",
    },
    {
      id: 59,
      quote:
        "My philosophy is that not only are you responsible for your life, but doing the best at this moment puts you in the best place for the next moment.",
      author: "Oprah Winfrey",
    },
    {
      id: 60,
      quote:
        "Don’t be intimidated by what you don’t know. That can be your greatest strength and ensure that you do things differently from everyone else.",
      author: "Sara Blakely",
    },
    {
      id: 61,
      quote:
        "If I had to live my life again, I’d make the same mistakes, only sooner.",
      author: "Tallulah Bankhead",
    },
    {
      id: 62,
      quote:
        "Never limit yourself because of others’ limited imagination; never limit others because of your own limited imagination.",
      author: "Mae C. Jemison",
    },
    {
      id: 63,
      quote: "If you obey all the rules, you miss all the fun.",
      author: "Katharine Hepburn",
    },
    {
      id: 64,
      quote: "Life shrinks or expands in proportion to one’s courage.",
      author: "Anaïs Nin",
    },
    {
      id: 65,
      quote:
        "Avoiding danger is no safer in the long run than outright exposure. The fearful are caught as often as the bold.",
      author: "Helen Keller",
    },
    {
      id: 66,
      quote:
        "How wonderful it is that nobody need wait a single moment before beginning to improve the world.",
      author: "Anne Frank",
    },
    {
      id: 67,
      quote:
        "So often people are working hard at the wrong thing. Working on the right thing is probably more important than working hard.",
      author: "Caterina Fake",
    },
    {
      id: 68,
      quote:
        "There are still many causes worth sacrificing for, so much history yet to be made.",
      author: "Michelle Obama",
    },
    {
      id: 69,
      quote: "Nothing is impossible; the word itself says ‘I’m possible’!",
      author: "Audrey Hepburn",
    },
    {
      id: 70,
      quote: "You only live once, but if you do it right, once is enough.",
      author: "Mae West",
    },
  ];

  return quotes[Math.floor(Math.random() * quotes.length)];
}
