const quote = document.getElementById('quote');
const speaker = document.getElementById('speaker');
const title = document.getElementById('title');
const btn = document.getElementById("btn");

btn.addEventListener("click", getQuote);

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '8a5224d2e5msh0fa51df553dceebp15d572jsna1bfc279e6fb',
		'X-RapidAPI-Host': 'marvel-quote-api.p.rapidapi.com'
	}
};

function getQuote() {
fetch('https://marvel-quote-api.p.rapidapi.com/', options)
  .then((res) => res.json())
  .then((data) => {
    quote.innerHTML = `"${data.Quote}"`;
    speaker.innerHTML = `- ${data.Speaker}`;
    title.innerHTML = `- ${data.Title}`;
});
}