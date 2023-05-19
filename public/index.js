
async function parseUrl() {
    //let url = JSON.parse(catsUrl);
   let url = await fetch("https://api.thecatapi.com/v1/images/search?limit=10")
   let catsUrl = await url.json()
   images(catsUrl)
}


function content(img, count, arr){
    let catsContainer = document.getElementById("catsContainer");
    let comContainer = document.getElementById("comContainer");
    let container = document.createElement("div"); //each cats con
    container.setAttribute("class", `cat`) // cat con # (class)


    let title = document.createElement("h1"); // adding each title
    title.innerText = `Cat #${count}`
    container.appendChild(title)

    container.appendChild(img); // adding each img passed in

    let catsFooterImg = document.createElement("div")
    catsContainer.appendChild(catsFooterImg); //bottom of img
    container.appendChild(catsFooterImg)
    let likes = document.createElement("i"); //creating heart
    likes.classList = "fa-solid fa-heart"
    catsFooterImg.appendChild(likes)
    let comments = document.createElement("i"); //creating comment
    comments.classList = "fa-solid fa-comment"
    catsFooterImg.appendChild(comments)
    let catsFooterCon = document.createElement("div");
    catsContainer.appendChild(catsFooterCon); // bottom of container
    container.appendChild(catsFooterCon);
    let number = document.createElement("h2");
    number.setAttribute("id", "likes")
    let num = Math.floor(Math.random() * 1000); //like numbers
    number.innerText = `${num} likes`;
    catsFooterCon.appendChild(number);
    let see = document.createElement("h2");
    let coms = Math.floor(Math.random() * 100); //comment numbers
    see.innerText = `View all ${coms} comments`
    catsFooterCon.appendChild(see)


    catsContainer.appendChild(container) //adding to body
    let clicks = 0




        likes.addEventListener("click", () => { //event listener
            if (clicks === 0 || clicks % 2 === 0) {
                num = num + 1
                number.innerText = `${num} likes`
                clicks++

            } else {
                num = num - 1
                number.innerText = `${num} likes`
                clicks++
            }
        })

        comments.addEventListener("click", () => {
            commentSection()
        })

    }


    function images(url) {

        console.log(url) // passed in the url which is an array
        let arr = []

        for (let i = 0; i < url.length; i++) { //loop through the array
            let cat = url[i] // each array contains obj which is called cat
            let imgs = document.createElement("img"); // create img
            imgs.setAttribute("id", `img${i}`) //set image # (id)
            imgs.src = cat.url //set each src for each img
            content(imgs, i, url) //pass in each img with src into content to be added in a container
        }

    }


    function commentSection() {
    let arr = ["cutness overload", "I NEED!!", "so cute!"]
    let comContainer = document.getElementById("comContainer"); //grabbing container for comments
    let comHeader = document.createElement("div"); //header for comment section
    comHeader.setAttribute("id", "comHeader");
    comContainer.appendChild(comHeader);
    let title = document.createElement("h2"); //comment section title
    title.innerText = "comments"
    comHeader.appendChild(title)
    let close = document.createElement("i");
    close.classList = "fa-solid fa-x";
    comHeader.appendChild(close)

    let allComs = document.createElement("div");
    allComs.setAttribute("id", "allComments");
    comContainer.appendChild(allComs);

    for (let i = 0; i < arr.length; i++) {
        coms = arr[i]
        let eachCom = document.createElement("h2");
        eachCom.innerText = coms
        eachCom.setAttribute("id", `com ${i}`)
        allComs.appendChild(eachCom)
    }

    let comFooter = document.createElement("div");
    comFooter.setAttribute("id", "comFooter");
    comContainer.appendChild(comFooter);
    let input = document.createElement("input");
    input.setAttribute("id", "commentBox");
    input.placeholder = "comment here..."
    comFooter.appendChild(input);
    comContainer.classList = "show"

    input.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            let newCom = document.createElement("h2");
            newCom.innerText = event.target.value;
            allComs.appendChild(newCom);
            input.value = ""
        }
    })


    close.addEventListener("click", () => {
        comContainer.classList = "hide"
    })

}




window.onload = () => {
    parseUrl()

}
