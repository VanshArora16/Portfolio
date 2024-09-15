const sections = document.querySelectorAll(".section"); //accessing all the elements having section class

const sectBtns = document.querySelectorAll(".controls"); //parent container of buttons

const sectBtn = document.querySelectorAll(".control"); // selecting all the btn having control

const allSections = document.querySelector(".main-content"); // selecting body 


function pageTransition() {
    //This function manages the active state of buttons  & displays the corresponding sections  within a webpage.
    // button click active class 
    for (let i = 0; i < sectBtn.length; i++) {
        sectBtn[i].addEventListener("click", function () {
            // selected the current btn having active class
            let currentBtn = document.querySelectorAll(".active-btn");

            // The class "active-btn" is removed from the current active button using the replace method 
            currentBtn[0].className = currentBtn[0].className.replace("active-btn", "");

            //"active-btn" class is added to the clicked button 
            this.className += ' active-btn';
        })
    }

    // Section Active
    allSections.addEventListener("click", (e) => {
        const id = e.target.dataset.id;
        if (id) {
            // remove selected from the other btns
            sectBtns.forEach((btn) => {
                btn.classList.remove('active');
            });

            // hide all other sections
            sections.forEach((section) => {
                section.classList.remove('active');
            });

            const element = document.getElementById(id);
            element.classList.add('active');
        }
    })

    // toggle theme
    const themeBtn = document.querySelector(".theme-btn");

    themeBtn.addEventListener("click", () => {
        let element = document.body;
        element.classList.toggle("light-mode");
        
    })

}
pageTransition();