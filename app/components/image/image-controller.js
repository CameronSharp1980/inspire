function ImageController() {
	//Your ImageService is a global constructor function what can 
	// you do here if you new it up?
	var imageService = new ImageService()

	function setBackground(imageObj) {
		//tried imageObj.large_url to check if exists. Settled on this and removed return mentioned in image-service.js
		if (imageObj.large_url != null) {
			document.body.style.cssText += `background: url(${imageObj.large_url}); background-size: cover; background-repeat: no-repeat;`
		} else {
			imageService.getImage(setBackground)
		}
	}
	imageService.getImage(setBackground)

	// imageService.getImage(function (imageRes) {
	// 	console.log(imageRes)
	// })

}


