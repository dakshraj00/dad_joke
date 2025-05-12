let button = document.getElementById("button");
let joke = document.getElementById("joke");

let apikey = "y7AsHDYtN6pb6q93DdyHwg==IngKkjl9qFEonahc";

let apiurl = 'https://api.api-ninjas.com/v1/dadjokes'; 

let options = {
    method: "GET",
    headers: {
        "X-Api-Key": apikey,
    }
};

async function getjoke() {
    joke.innerHTML = "Updating...";
    button.disabled = true;
    button.innerText = "Loading....";

    try {
        let response = await fetch(apiurl, options);

        if (!response.ok) {
            throw new Error("Network response was not ok: " + response.status);
        }

        let data = await response.json();
        joke.innerHTML = data[0]?.joke || "No joke found.";
    } catch (err) {
        joke.innerHTML = "Error fetching joke.";
        console.error("Fetch error:", err);
    }

    button.disabled = false;
    button.innerText = "TELL ME A JOKE";
}

button.addEventListener("click", getjoke);
