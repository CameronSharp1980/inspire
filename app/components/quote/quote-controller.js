function QuoteController() {

	var quoteService = new QuoteService()

	quoteService.getQuote(function (quote) {
		console.log('Quote Data: ', quote)
		var quoteElem = document.getElementById('quote')
		var authorElem = document.getElementById('quote-author-div')
		quoteElem.innerHTML = `<div class="quote-box"><span>"${quote.quote}"</span></div>`
		authorElem.innerHTML = `<div class="quote-box"><span> &nbsp- ${quote.author}&nbsp</span></div>`
	})

	// ATTEMPTED ONMOUSEOVER/OUT METHOD TO CREATE HOVER EFFECT.
	// IT WORKS, BUT HAD UNINTENDED SIDE EFFECTS (TWITCHY FUNCTIONALITY)
	// LEAVING COMMENTED FOR NOW WHILE I TRY CSS HOVER WITH TRANSISTIONS
	// this.hoverAuthor = function hoverAuthor(quoteOrAuthor) {
	// 	if (quoteOrAuthor == 'quote') {
	// 		quoteService.getQuote(function (quote) {
	// 			// console.log('What is the quote', quote)
	// 			var quoteElem = document.getElementById('quote')
	// 			quoteElem.innerHTML = `<div class="quote-box"><span>"${quote.quote}"</span></div>`
	// 		})
	// 	} else if (quoteOrAuthor == 'author') {
	// 		quoteService.getQuote(function (quote) {
	// 			// console.log('What is the quote', quote)
	// 			var quoteElem = document.getElementById('quote')
	// 			quoteElem.innerHTML = `<div class="quote-box"><span>"${quote.quote} - ${quote.author}"</span></div>`
	// 		})
	// 	}
	// }
}
