const introLoader = () =>{

    let loader = document.querySelector(".loader");
    window.addEventListener("load",function(){
    loader.style.display = "none";
    });
};

export default introLoader;

