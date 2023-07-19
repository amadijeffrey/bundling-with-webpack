import axios from 'axios'

const config = {
    headers: {
        accept: "application/json"
    }
}
function generateJoke() {
    axios.get("https://icanhazdadjoke.com", config).then(({ data }) => {
        document.getElementById("joke").innerHTML = data.joke
    })
}

export default generateJoke