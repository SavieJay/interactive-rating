const submit = document.querySelector(".submit");
const contain = document.querySelector(".container");
const num1 = document.querySelector(".num-1");
const num2 = document.querySelector(".num-2");
const num3 = document.querySelector(".num-3");
const num4 = document.querySelector(".num-4");
const num5 = document.querySelector(".num-5");

let arr = [num1, num2, num3, num4, num5];
arr.forEach((num) => {
    num.addEventListener('click', () => {

        arr.forEach(n => n.classList.remove("active"));
        num.classList.toggle("active");
    
        let value;
        if (num.classList.contains("active")) {
            value = num.textContent;
        }
        submit.addEventListener('click', () => {
            contain.innerHTML = `
                <div class="thanks-img">
                    <img src="/images/illustration-thank-you.svg" alt="">
                </div>
                <div class="rate-box">You selected ${value} out of 5</div>
                <div class="section">
                    <div class="header">Thank you!</div>
                    <div class="text-1">
                        We appreciate you taking the time to give a rating. If you ever need more support, 
                        don’t hesitate to get in touch!
                    </div>
                </div>
            `
            contain.classList.add("center");
            contain.classList.add("pad");


            // setTimeout(() => {
            //     contain.classList.remove("center");
            //     contain.innerHTML = `
            //         <div class="icon rating-btn">
            //             <img src="/images/icon-star.svg" alt="">
            //         </div>
            //         <div class="section">
            //             <div class="header">How did we do?</div>
            //             <div class="text">
            //                 Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!
            //             </div>
            //             <div class="rating">
            //                 <div class="rating-btn hover num-1">1</div>
            //                 <div class="rating-btn hover num-2">2</div>
            //                 <div class="rating-btn hover num-3">3</div>
            //                 <div class="rating-btn hover num-4">4</div>
            //                 <div class="rating-btn hover num-5">5</div>
            //             </div>
            //             <div class="submit">SUBMIT</div>
            //         </div>
            //     `
            // }, 5000);
        });
    });
});