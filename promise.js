
//Create a prmise which will be in pending state, until a html btn is clicked it should be resolved.
function createButtonPromise(buttonId) {
    return new Promise((resolve) => {
        const button = document.getElementById(buttonId);
        if (!button) {
            console.error("Button not found");
            return;
        }

        button.addEventListener("click", function handleClick() {
            resolve("Button clicked!");
            button.removeEventListener("click", handleClick); // Clean up event listener
        });
    });
}

const buttonPromise = createButtonPromise("myButton");

buttonPromise.then((message) => {
    console.log(message); // Logs "Button clicked!" when the button is clicked
});

//Or Add a btn in html file
const myPromise=new Promise((res,rej)=>{
    document.getElementById("myBtn").addEventListener("click",()=>{
        res("some value");
    })
    document.getElementById("myBtn2").addEventListener("click",()=>{
        rej("myValue");
    })
})

myPromise.then(res=>console.log(res)).catch(err=>console.log(err))

//=================================
// Q.2-> Create a Promise withput using new Promise
async function myFn(){
   // throw new Error; --> Rejection
    return "esh";
}
const res=myFn();
console.log(res);
//Now can i make it pending?

