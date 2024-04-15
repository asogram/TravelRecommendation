const search = document.getElementById("search");
const searchButton = document.getElementById("searchButton");
const clearButton = document.getElementById("clearButton");
const items = document.getElementById("items");

fetch('./travel_recommendation_api.json')
    .then((response) => response.json())
    .then((json) => {
        console.log(json)
    });

function searchTask() {
    let text = search.value.trim().toLowerCase();
    if (text == '') {
        alert("Ensure you input a value in search!");
    } else {
        fetch('./travel_recommendation_api.json')
            .then((response) => response.json())
            .then((json) => {
                console.log(json)
                let results = '';
                if (text == 'beach' || text == 'beaches') {
                    json['beaches'].forEach((item) => {
                        results += `<div class="card">
                                        <img src="${item.imageUrl}" alt="${item.name}" style="width:100%;border-radius: 12px 12px 1px 1px;">
                                        <h4>${item.name}</h4>
                                        <h5>${item.description}</h5>
                                        <button class="btn">Visit</button>
                                    </div>`;
                    });
                }
                else if (text == 'temple' || text == 'temples') {
                    json['temples'].forEach((item) => {
                        results += `<div class="card">
                                        <img src="${item.imageUrl}" alt="${item.name}" style="width:100%;border-radius: 12px 12px 1px 1px;">
                                        <h4>${item.name}</h4>
                                        <h5>${item.description}</h5>
                                        <button class="btn">Visit</button>
                                    </div>`;
                    });
                } else {
                    json["countries"].forEach((item) => {
                        if (text == item.name.toLowerCase()) {
                            item["cities"].forEach((city) => {
                                results += `<div class="card">
                                                <img src="${city.imageUrl}" alt="${city.name}" style="width:100%;border-radius: 12px 12px 1px 1px;">
                                                <h4>${city.name}</h4>
                                                <h5>${city.description}</h5>
                                                <button class="btn">Visit</button>
                                            </div>`;
                            })
                        }
                    });

                }
                items.innerHTML = results;
                if (results == '') {
                    alert("Oops, nothing was found!");
                }
            });
    }
}

function clearTask() {
    items.innerHTML = '';
    search.value = '';
}

searchButton.addEventListener("click", searchTask);
clearButton.addEventListener("click", clearTask);