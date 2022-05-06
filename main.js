// Smooth Scrolling Function 
const scroll = new SmoothScroll('.navbar a[href*="#"]', {
    speed: 850
});

// Reliability Checker

let input = '';
let approved = ['.gov', '.edu', 'pubmed','.nih', '.nlm', '.ncbi', 'medscape.com', 'webMD', 'mayoclinic'];
let notApproved = ['wikipedia', 'wiki', 'NaturalNews.com', 'reddit', 'quora', 'facebook', 'twitter', 'instagram', 'drugs.com', 'medgadget',];
document.getElementById("searchButton").addEventListener("click", getText);
function getText (){

    input = document.getElementById("input").value;
    for(let i = 0; i < approved.length; i++){
        if(input.includes(approved[i])){
            alert("This Website is reliable");
            return
        }
    }for(let i = 0; i < notApproved.length; i++){
        if(input.includes(notApproved[i])){
            alert("This Website is not reliable");
            return
        }
    }
    alert("Unknown")
    return 


}