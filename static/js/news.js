document.addEventListener("DOMContentLoaded", function () {
    const apiKey = "587cb2706533479085c45f2b7eb3ea3b";
    const url =
        "https://newsapi.org/v2/everything?q=tasks&apiKey=" +
        apiKey;

    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            const articles = data.articles;
            const newsContainer = document.getElementById("news-container");
            let row;

            for (let i = 0; i < articles.length; i++) {
                if (i % 4 === 0) {
                    row = document.createElement("div");
                    row.className = "row";
                    newsContainer.appendChild(row);
                }

                const col = document.createElement("div");
                col.className = "col-lg-3 col-md-6 mb-4";

                const card = document.createElement("div");
                card.className = "card h-100";

                const cardImg = document.createElement("img");
                cardImg.className = "card-img-top";
                cardImg.src = articles[i].urlToImage;
                cardImg.alt = articles[i].title;

                const cardBody = document.createElement("div");
                cardBody.className = "card-body d-flex flex-column";

                const cardTitle = document.createElement("h5");
                cardTitle.className = "card-title";
                cardTitle.innerText = articles[i].title;

                const cardText = document.createElement("p");
                cardText.className = "card-text";
                cardText.innerText = articles[i].description;

                const cardLink = document.createElement("a");
                cardLink.className = "btn btn-primary mt-auto";
                cardLink.href = articles[i].url;
                cardLink.target = "_blank";
                cardLink.innerText = "Read more";

                cardBody.appendChild(cardTitle);
                cardBody.appendChild(cardText);
                cardBody.appendChild(cardLink);

                card.appendChild(cardImg);
                card.appendChild(cardBody);

                col.appendChild(card);
                row.appendChild(col);
            }

            console.log(url);
        })
        .catch(function (error) {
            console.error("Error fetching data:", error);
        });
});
