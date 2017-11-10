function QuoteController() {

	var quoteService = new QuoteService()

	quoteService.getQuote(function (quote) {
		console.log('What is the quote', quote)
		var quoteElem = document.getElementById('quote')
		quoteElem.innerHTML = `<p>${quote.quote}`
	})
}
