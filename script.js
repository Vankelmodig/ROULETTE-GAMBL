let button = document.getElementById("testbutton")
let rød = document.getElementById("rød")

let rødcount = document.getElementById("counterrød")
let blåcount = document.getElementById("counterblå")

let container = document.getElementById("ball-container")

button.addEventListener("click", function(){
    let tall = Math.random()

    if ( tall > 0.50000) {

        
            container.classList.add("spin-rød")
            container.addEventListener("animationend", () => {
                container.classList.remove("spin-rød");
            });
            
            setTimeout(() => {
                
                rødcount.classList.add("pulse-red");
                
                rødcount.addEventListener("animationend", () => {
                    rødcount.classList.remove("pulse-red");
                });
                
                console.log(rødcount)
                
                rødcount.textContent = parseInt(rødcount.textContent) + 1
                console.log(rødcount)
                
            }, 3000);
            
    } 
    
    if ( tall < 0.50000) {
        
        
        container.classList.add("spin-svart")
        container.addEventListener("animationend", () => {
            container.classList.remove("spin-svart");
        });

         setTimeout(() => {
        
        blåcount.textContent = parseInt(blåcount.textContent) + 1
        
        blåcount.classList.add("pulse-black");
        blåcount.addEventListener("animationend", () => {
            blåcount.classList.remove("pulse-black");
        });
            
            }, 3000);
    }
})

document.addEventListener('keydown', function(event) {
        if (event.key === 'z') { 
            rødcount.textContent = parseInt(rødcount.textContent) + 1
            rødcount.classList.add("pulse-red");
            rødcount.addEventListener("animationend", () => {
            rødcount.classList.remove("pulse-red");
            });
        }
    });


document.addEventListener('keydown', function(event) {
        if (event.key === 'x') {
            blåcount.textContent = parseInt(blåcount.textContent) + 1
            blåcount.classList.add("pulse-black");
            blåcount.addEventListener("animationend", () => {
            blåcount.classList.remove("pulse-black");
            });
              }
    });

    document.addEventListener('keydown', function(event) {
        if (event.key === 'c') { 
            rødcount.textContent = parseInt(rødcount.textContent) - 1
            rødcount.classList.add("pulse-red");
            rødcount.addEventListener("animationend", () => {
            rødcount.classList.remove("pulse-red");
            });
        }
    });


document.addEventListener('keydown', function(event) {
        if (event.key === 'v') {
            blåcount.textContent = parseInt(blåcount.textContent) - 1
            blåcount.classList.add("pulse-black");
            blåcount.addEventListener("animationend", () => {
            blåcount.classList.remove("pulse-black");
            });
              }
    });

document.addEventListener('keydown', function(event) {
        if (event.key === 'b') {
            blåcount.textContent = parseInt(blåcount.textContent) - parseInt(blåcount.textContent)
            rødcount.textContent = parseInt(rødcount.textContent) - parseInt(rødcount.textContent)
              }
    });

