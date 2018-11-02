document.addEventListener('DOMContentLoaded', init);

var colors = [
  '#8f44f0',
  '#44c7f3',
  '#20a4b3',
  '#43b860',
  '#e63a36',
  '#153b3c'
]

function init(){
  var btn = document.querySelector('click-me');
  btn.addEventListener('click', generateQuote);
}

var quotesArray = [
  "Do not fear the winds of adversity. Remember, a kite rises against the wind rather than with it. ",
  "Never give up and good luck will find you." ,
  "Discipline is the bridge between goals and accomplishment",
  "Why not you?",
  "The key is not to prioritize what's on your schedule, but to schedule your priorities.",
  "Go confidently in the direction of your dreams. Live the life you have imagined",
  "Jumping from failure to failure with undiminished enthusiasm is the big secret to success",
  "Care about what other people think and you will always be their prisoner",
  "In the end, only three things matter: how much you loved, how gently you lived, and how gracefully you let go of things not meant for you.",
  "Don't let someone who gave up on their dreams talk you out of going after yours",
  "The Great Doesn’t Happen Through Impulse Alone, and Is a Succession of Little Things That Are Brought Together",
  "You have power over your mind, not outside events. Realize this, and you will find strength.",
  "Shut up and grind"
];

function generateQuote(){
  var randomQuote = quotesArray[Math.floor(Math.random() * quotesArray.length)];
  document.getElementById('quote-text').innerHTML = randomQuote;
  // document.body.style.background = colors[Math.floor(Math.random() * colors.length)];
  // console.log('function called!');
}
