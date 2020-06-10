document.addEventListener('DOMContentLoaded', function(){
    axios.get('http://beer-me-python-backend.herokuapp.com/beers').then(function(result){
        console.log(result.data)

        // select beer image source
        let beerImg = result.data[0].beer_label

        // create img HTML element
        let beer = document.createElement('img')

        // add image source to img element
        beer.src = beerImg
        
        // append image to document body
        document.body.appendChild(beer)        
    })

})