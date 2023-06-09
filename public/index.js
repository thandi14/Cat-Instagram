
async function parseUrl() {
    //let url = JSON.parse(catsUrl);
   let url = await fetch("https://api.thecatapi.com/v1/images/search?limit=10")
   let catsUrl = await url.json()
   images(catsUrl)

   window.addEventListener("scroll", () => {
       if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight) {
           setTimeout(parseUrl(), 2000)
        }
    })
}

function images(url) {

    console.log(url) // passed in the url which is an array

    for (let i = 0; i < url.length; i++) { //loop through the array
        let cat = url[i] // each array contains obj which is called cat
        let imgs = document.createElement("img"); // create img
        imgs.setAttribute("id", `img${i}`) //set image # (id)
        imgs.src = cat.url //set each src for each img
        content(imgs, i, url) //pass in each img with src into content to be added in a container
    }

}

function content(img, count){
    let catsContainer = document.getElementById("catsContainer"); //grid
  //  let comContainer = document.getElementById("comContainer");
    let container = document.createElement("div"); //each cats con whole body inside grid for each img
    container.setAttribute("class", `cat`) // cat con # (class)


    let title = document.createElement("h1"); // adding each title
    title.innerText = `Cat #${count}`
    container.appendChild(title)

    container.appendChild(img); // adding each img passed in

    let catsFooterImg = document.createElement("div");
    catsFooterImg.setAttribute("id", "catsFooter");
    catsContainer.appendChild(catsFooterImg); //bottom of img
    container.appendChild(catsFooterImg);

    let likes = document.createElement("i"); //creating heart
    likes.classList = "fa-regular fa-heart";
    likes.setAttribute("id", "hearts");
    catsFooterImg.appendChild(likes); //adding heart to bottom of img footer
    let comments = document.createElement("i"); //creating comment
    comments.classList = "fa-regular fa-comment"
    catsFooterImg.appendChild(comments); //adding comment to bottom of img footer

    let catsFooterCon = document.createElement("div");
    catsFooterCon.setAttribute("id", "catsFooterCon");
    container.appendChild(catsFooterCon); // bottom of container/ container footer

    let number = document.createElement("h2");
    number.setAttribute("id", "likes")
    let numlikes = Math.floor(Math.random() * 1000); //like numbers
    let num = numlikes
    number.innerText = `${num} likes`;
    catsFooterCon.appendChild(number); //adding number of likes to container footer

    let see = document.createElement("h2");
    see.setAttribute("id", "coms");
    let coms = Math.floor(Math.random() * 100); //comment numbers
    see.innerText = `View all ${coms} comments` //adding number of comments to container footer
    catsFooterCon.appendChild(see)

    let time = document.createElement("h2"); //setting a time when post was posted
    time.setAttribute("id", "time");
    let timer = Math.floor(Math.random() * 100);
    if (timer < 24 && timer > 1) {
        time.innerText = `${timer} hours ago`;
    }
    else if (timer === 1) {
        time.innerText = `${timer} hour ago`;
    }
    else if (timer > 24) {
         timer = Math.floor(Math.random() * 10);
         if (timer < 60 && timer > 1) {
            time.innerText = `${timer} days ago`;
         }
         else if (timer === 1) {
            time.innerText = `${timer} day ago`;

         }
         else {
           time.innerText = `just now`;
         }

    }
    else {
        time.innerText = `just now`
    }

    catsFooterCon.appendChild(time); //adding time to container footer

    catsContainer.appendChild(container) //adding body to grid

    let clicks = 0

        likes.addEventListener("click", () => { //event listener
            if (clicks % 2 === 0) {
                num = num + 1
                number.innerText = `${num} likes`
                likes.classList = "fa-solid fa-heart"
                likes.style.color = "red"
                clicks++

            } else {
                num = num - 1
                number.innerText = `${num} likes`
                likes.classList = "fa-regular fa-heart"
                likes.style.color = "black"
                clicks++
            }
        })

        comments.addEventListener("click", () => {
            imgContainer(time, see, img, numlikes, title, clicks)
            commentSection()
        })

    }

    function imgContainer(time, comms, img, number, title, clicks) {
        let catsContainerTwo = document.getElementById("catsContainerTwo")
        let containerTwo = document.createElement("div");
        containerTwo.setAttribute("id", "containerTwo");
        catsContainerTwo.appendChild(containerTwo);

        let titleTwo = document.createElement("h1");
        titleTwo.innerText = title.innerText
        containerTwo.appendChild(titleTwo)

        let imgTwo = document.createElement("img"); //adding each image
        imgTwo.src = img.src;
        containerTwo.appendChild(imgTwo);

        let imgFooterTwo = document.createElement("div"); //footer fot image
        imgFooterTwo.setAttribute("id", "imgFooterTwo");
        containerTwo.appendChild(imgFooterTwo);
        let likesTwo = document.createElement("i");
        likesTwo.classList = "fa-regular fa-heart"; //adding heart button to footer
        likesTwo.setAttribute("id", "heartsTwo")
        imgFooterTwo.appendChild(likesTwo);
        let commTwo = document.createElement("i")
        commTwo.classList = "fa-regular fa-comment"; //adding com button to footer
        imgFooterTwo.appendChild(commTwo);

        let imgContainerFooterTwo = document.createElement("div");
        imgContainerFooterTwo.setAttribute("id", "imgContainerFooterTwo")
        containerTwo.appendChild(imgContainerFooterTwo);
        let numberTwo = document.createElement("h2");
        numberTwo.innerText = `${number} likes`
        numberTwo.setAttribute("id", "numoflikestwo")
        imgContainerFooterTwo.appendChild(numberTwo);

        let seeTwo = document.createElement("h3");
        seeTwo.innerText = comms.innerText;
        imgContainerFooterTwo.appendChild(seeTwo)
        let timeTwo = document.createElement("h3");
        timeTwo.innerText = time.innerText;
        imgContainerFooterTwo.appendChild(timeTwo);

        let likes = document.getElementById("hearts");
        let num = document.getElementById("likes");
        console.log(likes);

        if (clicks % 2 !== 0) {
            number = number + 1
                numberTwo.innerText = `${number} likes`
                likesTwo.classList = "fa-solid fa-heart"
                likesTwo.style.color = "red"
                clicks++
        }
        else {
            numberTwo.innerText = `${number} likes`;
            likesTwo.classList = "fa-regular fa-heart"
            likesTwo.style.color = "black";
            clicks++
        }

        likesTwo.addEventListener("click", () => { //event listener
            if (clicks % 2 !== 0) {
                number = number + 1
                numberTwo.innerText = `${number} likes`
                likesTwo.classList = "fa-solid fa-heart"
                likesTwo.style.color = "red"
                clicks++

            } else {
                number = number - 1;
                numberTwo.innerText = `${number} likes`
                likesTwo.classList = "fa-regular fa-heart"
                likesTwo.style.color = "black"
                clicks++
            }
        })

    }


    function commentSection() {
    let catsContainer = document.getElementById("catsContainer");
    let header = document.getElementById("head");
    let numberTwo = document.getElementById("numoflikestwo");
    let likesTwo = document.getElementById("heartsTwo");

    header.classList = "blur"
    catsContainer.classList = "blur"
    let catsContainerTwo = document.getElementById("catsContainerTwo");
    let transparent = document.getElementById("transparent");
    transparent.classList = "show"
    catsContainerTwo.classList = "show"
    let arr = ["cutness overload", "I NEED!!", "so cute!"]
    let comContainer = document.getElementById("comContainer"); //grabbing container for comments
    let scroll = document.createElement("div");
    scroll.setAttribute("id", "scroll")
    comContainer.appendChild(scroll)
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
        catsContainerTwo.classList = "hide"
        comContainer.classList = "hide"
        transparent.classList = "hide"
        catsContainer.classList.remove("blur")
        header.classList.remove("blur")

        deletion()

    })

}

function deletion() {
    catsContainerTwo = document.getElementById("catsContainerTwo")
    containerTwo = document.getElementById("containerTwo")

    if (containerTwo){
        containerTwo.remove()
    }
}


window.onload = () => {
    parseUrl()

}
