function toggleStyleSheet(){
    var checkHome = document.getElementById("home");
    const currPhoto = checkHome ? document.getElementById("portrait") : "";
    const photoPath = checkHome ? currPhoto.getAttribute("src") : "";
    const currStyle = document.getElementById("mainStyleSheet");
    const currLogo = document.getElementById("logo");
    

    const fileName = currStyle.getAttribute("href");
    const filePath = currLogo.getAttribute("src")
    

    newFileName = "";
    newFilePath = "";
    newPhotoPath = "";
    
    if (fileName == "style.css"){
        newFileName = "style2.css";
        newFilePath = "images/style2-logo.jpg";
        if (checkHome){
            newPhotoPath = "images/portrait2.jpg";
            currPhoto.setAttribute("src", newPhotoPath);
            localStorage.setItem("currentPhoto", newPhotoPath);
        }
        
    }else{
        newFileName = "style.css";
        newFilePath = "images/logo.jpg";
        if (checkHome){
            newPhotoPath = "images/portrait.JPG";
            currPhoto.setAttribute("src", newPhotoPath);
            localStorage.setItem("currentPhoto", newPhotoPath);
        }
    }
    
    currStyle.setAttribute("href", newFileName);
    currLogo.setAttribute("src", newFilePath);
    

    localStorage.setItem("currentStyle", newFileName);
    localStorage.setItem("currentLogo", newFilePath);
    
}

window.onload = function(){
    const styleName = localStorage.getItem("currentStyle") || "style.css";
    const logoName = localStorage.getItem("currentLogo") || "images/logo.jpg";
    

    const currStyle2 = document.getElementById("mainStyleSheet");
    const currLogo2 = document.getElementById("logo");
    

    currStyle2.setAttribute("href", styleName);
    currLogo2.setAttribute("src", logoName);
    

    var checkHome2 = document.getElementById("home");
    if (checkHome2){
        const photoName = localStorage.getItem("currentPhoto") || "images/portrait.JPG";
        const currPhoto2 = document.getElementById("portrait");
        currPhoto2.setAttribute("src", photoName);
    }
}