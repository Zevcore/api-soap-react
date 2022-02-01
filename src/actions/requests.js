export let DogAPI = () => {
    const url = "https://dog-facts-api.herokuapp.com/api/v1/resources/dogs/all";
    
    const getRandomInt = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }

    const options = {
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
    };

    return new Promise(resolve => {
        fetch(url, options)
            .then(response => response.json())
            .then(
                (result) => {
                    resolve(result)
                }
            )
    })
    
}
