let darkmode = localStorage.getItem("darkmode")
const outerDiv = document.getElementsByClassName("outer")[0]
const innerDiv = document.getElementsByClassName("inner")[0]
const pageTitle = document.getElementsByClassName("page-title")[0]
const footer = document.getElementsByClassName("footer")[0]
const posts = document.getElementsByClassName("post")

if(darkmode == null)
darkmode = false
else
darkmode = localStorage.getItem("darkmode")

darkmode = (darkmode === 'true')

function darkModeEnable() {
    innerDiv.classList.add("position")
    pageTitle.classList.add("page-title-light")
    innerDiv.classList.remove("red")
    footer.classList.add("footer-light")
        for(post of posts) {
            post.classList.add("post-light")
        }
}

function darkModeDisable() {
    innerDiv.classList.remove("position")
    pageTitle.classList.remove("page-title-light")
    innerDiv.classList.add("red")
    footer.classList.remove("footer-light")
    for(post of posts) {
        post.classList.remove("post-light")
    }    
}

if(darkmode){
    darkModeEnable()
}
else{
    darkModeDisable()
}

localStorage.setItem("darkmode",darkmode)

outerDiv.addEventListener("click",function(){
    if(!darkmode){
        darkModeEnable()
        darkmode = !darkmode
    }
    else{
        darkModeDisable()
        darkmode = !darkmode
    }
    localStorage.setItem("darkmode",darkmode) 
})