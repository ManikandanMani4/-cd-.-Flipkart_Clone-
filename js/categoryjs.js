@@ -10,7 +10,7 @@ document.addEventListener("DOMContentLoaded", function () {
        icon.src = "img/" + categoryData.icon;

        const nameLink = document.createElement("a");
        nameLink.href = "src/"+ categoryData.name+"/" ; // find index.html
        nameLink.href = "#"; // Default href is "#"
        nameLink.textContent = categoryData.name;

        const name = document.createElement("span");
@@ -26,7 +26,7 @@ document.addEventListener("DOMContentLoaded", function () {
        if (!categoryData.subcategories) {
            const singleItem = document.createElement("div");
            const singleLink = document.createElement("a");
            singleLink.href = "src/"+ categoryData.name+"/";
            singleLink.href = "#";
            singleLink.textContent = categoryData.name;
            singleItem.appendChild(singleLink);
            subcategoriesList.appendChild(singleItem);
@@ -75,6 +75,13 @@ document.addEventListener("DOMContentLoaded", function () {
            console.log("subcategoriesList is not defined or is empty.");
        }

        // Add click event listener to redirect to top-offers.html if id is "top-offers"
        categoryItem.addEventListener('click', function () {
            if (categoryData.id === "top-offers") {
                window.location.href = "top-offers.html";
            }
        });
        return categoryItem;
    }

‎top-offer.css
+39
Original file line number	Diff line number	Diff line change
@@ -0,0 +1,39 @@
.hero{
    background-image: url(img/heo-top-offers.png);
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-repeat: no-repeat;
}
.offer{
    height: 80vh;
    width: 98vw;
    background-size: cover;
    background-repeat: no-repeat;
    margin: auto;
    margin: 1rem;
}
#one{
    background-image: url(img/oone.png);
}
#two{
    background-image: url(img/otwo.png);
}
#three{
    background-image: url(img/othree.png);
}
#four{
    background-image: url(img/ofour.png);
}
#five{
    background-image: url(img/ofive.png);
}
#six{
    background-image: url(img/osix.png);
}
#seven{
    background-image: url(img/oseven.png);
}
#eight{
    background-image: url(img/oeight.png);
}
