// borderAnimation
function borderAnimation() {
           const animatedSpan = document.querySelectorAll('.Bordered');

        const observer = new IntersectionObserver(entries => {
            console.log(entries);
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animateBordered');
                } else {
                    entry.target.classList.remove('animateBordered');
                }
            });
        });

        animatedSpan.forEach(section => {
            observer.observe(section);
        });
}
// apiButtonfooter
function apiFooter(){
    var messageContainer = document.getElementById("messageContainerfooter");
    var emailInput = document.getElementById('emailfooter');
    var emailValue = emailInput.value;
    const data = {
        email: emailValue
    };
    emailApiCall();
}

// apiButton newsletter

function apiButtonnewsletter(){
  var messageContainer = document.getElementById("messageContainer");
  var emailInput = document.getElementById('email');
  var emailValue = emailInput.value.trim(); 
      const data = {
          email: emailValue
      };
  
      emailApiCall();
  }

// email api call
 function emailApiCall(){
  if ( emailValue === ''){
    messageContainer.innerHTML = "Please fill all the fields";

          setTimeout(function () {
              messageContainer.innerHTML = "";
          }, 3000);
} else {
  fetch('https://api.alphacapitalgroup.io/web/create-contact-tag/', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
  })
      .then(response => response.json())
      .then(data => {
          console.log(data);
          messageContainer.innerHTML = "Successfully subscribed to the newsletter",
              messageContainer.style.display = "flex";
          setTimeout(function () {
              messageContainer.style.display = "none";
          }, 3000);
      })
      .catch(error => {
          console.error('Error:', error);
          messageContainer.innerHTML = "Successfully subscribed to the newsletter",
              messageContainer.style.display = "flex";
          setTimeout(function () {
              messageContainer.style.display = "none";
          }, 3000);
      });
    }
 }




// newsletterInput arrow

function arrowFunction() {

    const inputField = document.querySelector('.AnimatedInputArrow .newsletterInput');
    const arrow = document.querySelector('.AnimatedInputArrow .icn');


inputField.addEventListener('focus', () => {
  arrow.classList.add('animate');
});


inputField.addEventListener('blur', () => {
  arrow.classList.remove('animate');
});
}



// contactus Animation

function contactusAnimate(){
    const inputFields = document.querySelectorAll('.ContactTextarea');
  const arrow = document.querySelector('.AnimatedInputArrow .icn');

  function updateAnimateClass() {
    const isAnyInputFocused = Array.from(inputFields).some(input => input === document.activeElement);
    const isAnyInputWithValue = Array.from(inputFields).some(input => input.value.trim() !== '');

    if (isAnyInputFocused || isAnyInputWithValue) {
      arrow.classList.add('animate');
    } else {
      arrow.classList.remove('animate');
    }
  }

  inputFields.forEach((input) => {
    input.addEventListener('focus', updateAnimateClass);
    input.addEventListener('blur', updateAnimateClass);
    input.addEventListener('input', updateAnimateClass);
  });


  updateAnimateClass();
}

// contactus arrow Animation
function contactusArrowanimation(){
    const inputField = document.querySelector('.AnimatedInputArrow .newsletterInput');
    const arrow = document.querySelector('.AnimatedInputArrow a.icn');


inputField.addEventListener('focus', () => {
  arrow.classList.add('animate');
});


inputField.addEventListener('blur', () => {
  arrow.classList.remove('animate');
});
}

// contactus subscribeNewsletter
function subscribeNewsletter() {
    e.preventDefault();

    var nameInput = document.getElementById('name');
    var nameValue = nameInput.value;
    var emailInput = document.getElementById('email');
    var emailValue = emailInput.value;
    var subjectInput = document.getElementById('subject');
    var subjectValue = subjectInput.value;
    var message = document.getElementById('message');
    var messageValue = message.value;
    var messageContainer = document.getElementById("messageContainer");
    // console.log(emailValue);


    // function callAPI() {
    // console.log("email",email);
    const data = {
        name: nameValue,
        email: emailValue,
        subject: subjectValue,
        message: messageValue
    };
	if (nameValue === '' || emailValue === '' || subjectValue===''||messageValue === '' ){
		  messageContainer.innerHTML = "Please fill all the fields";

            setTimeout(function () {
                messageContainer.innerHTML = "";
            }, 3000);
	} else {
		 fetch('https://api.alphacapitalgroup.io/web/contact-us/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then(response => response.json())
        .then(data => {

            messageContainer.innerHTML = "submitted successfully!!",
                messageContainer.style.display = "flex";
            setTimeout(function () {
                messageContainer.style.display = "none";
            }, 3000);
        })
        .catch(error => {

        });

    document.getElementById("myForm").reset();
	}

   


  }

// funding platformcards
function platformcards(){
    const cards = document.querySelectorAll(".platformcards");
                  cards[1].classList.add("Active");
                  cards.forEach(card => {
                        card.addEventListener("mouseenter", function () {
                              cards[1].classList.remove("Active");
                              this.classList.add("Active");
                        });

                        card.addEventListener("mouseleave", function () {

                              this.classList.remove("Active");
							cards[1].classList.add("Active");
                        });
                  });
}

// funding carousal
function carouselNavigation(){
    const prev = document.querySelector(".prev");
            const next = document.querySelector(".next");
            const carousel = document.querySelector(".carousel-container");
            const track = document.querySelector(".track");
            let width = carousel.offsetWidth;
            let index = 0;
            // window.addEventListener("resize", function () {
            //     width = carousel.offsetWidth;
            // });
            next.addEventListener("click", function (e) {

                prev.classList.add("show");
                index = index + 1;
                track.style.transform = "translateX(" + index * -width + "px)" ;
// 				track.style.transition: track.style.transform + " 0.5s ease-in-out";
                if (track.offsetWidth - index * width < index * width) {
                    next.classList.add("hide");
                }
                console.log(index)
            });
            prev.addEventListener("click", function () {
                // index = index - 1;
                next.classList.remove("hide");
                if (index === 0) {
                    prev.classList.remove("show");
                }
                track.style.transform = "translateX(" + index * -width + "px)";
                console.log(index, "translateX(" + index * -width + "px)");
            });

}




// trustpilot


function trustpilotApi(){
    const apiKey = "fBLPigT6jUwNZioq9FnCoXtiJstHvm8T";
  const businessUnitId = "62053dd91174fa6f10b67256";
  const apiUrl = `https://api.trustpilot.com/v1/business-units/${businessUnitId}/reviews?perPage=10&page=1&stars=5`;
  function getRandomColor() {
  const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
  return randomColor;
}
	
  function createCarouselItem(review) {
const color = getRandomColor();
    return `
      <div class="item TrustPilotItem">
        <div class="d-flex align-items-center">
          <div class="Profile-Initial" style="background-color: ${color};">${review.consumer.displayName.split(' ').map(word => word.charAt(0)).join('').toUpperCase()}</div>
           <div class="ml-3 d-flex align-items-center ReviewStarTestimonial">
      ${Array.from({ length: review.stars }, (_, index) => `<img src="/assets/images/star.svg" alt="" class="reviewstar">`).join('')}
    </div>
        </div>
        <h4>${review.consumer.displayName}</h4>
        <p>${(review.text).length < 200 ? review.text : `${(review.text).slice(0, 200)}...`}</p>
      </div>
    `;
  }

  function fetchReviews() {
    fetch(apiUrl, {
      headers: {
        'apikey': apiKey
      }
    })
    .then(response => response.json())
    .then(data => {
   
      const carouselContainer = $("#carouselContainer");


      data.reviews.forEach(review => {
        const carouselItem = createCarouselItem(review);
        carouselContainer.append(carouselItem);
      });


      $(".custom-owl-carousel").owlCarousel({
        center: true,
        loop: true,
        margin: 30,
        stagePadding: 0,
        nav: false,
        dots: false,
        responsive: {
          0: {
            items: 1,
			  stagePadding: 10,
          },
			350: {
            items: 1,
            stagePadding: 50,
          },
          600: {
           items: 1,
             stagePadding: 50,
          },
          1000: {
            items: 3,
          },
			 1400: {
            items: 3,
            stagePadding: 100,
          },
			2000: {
            items: 5,
            stagePadding: 100,
          },
			3000: {
            items: 7,
            stagePadding: 100,
          },
        }
      });

      $(".custom-owl-prev").click(function () {
        $(".custom-owl-carousel").trigger("prev.owl.carousel");
      });

      $(".custom-owl-next").click(function () {
        $(".custom-owl-carousel").trigger("next.owl.carousel");
      });
    })
    .catch(error => {
//       console.error('Error fetching reviews:', error);
    });
  }

  fetchReviews();
}



// home skillset svg

function skillsetSvg(){
    const svgElement = document.getElementById('svg-element');
    const notification = document.getElementById('notification');
    
    svgElement.addEventListener('mouseover', () => {
      // Get the SVG's position
      const svgRect = svgElement.getBoundingClientRect();
    
      // Position the notification near the SVG
      notification.style.marginLeft = '18px';
      notification.style.bottom = '462.359px';

      // Show the notification
      notification.style.display = 'block';
    });
    
    svgElement.addEventListener('mouseout', () => {
      // Hide the notification when mouse leaves the SVG
      notification.style.display = 'none';
    });
}

//home trustpilot
function trustpilotApiHome(){
   

}

// home countdown
 
function countdownInterval(){
    function updateCountdown() {
        const targetDate = new Date("<?php echo date('Y-m-d H:i:s', strtotime($countdowntime)); ?>"); 
        const currentDate = new Date();
        const timeDifference = targetDate - currentDate;

 
        if (timeDifference <= 0) {
            clearInterval(countdownInterval);
            document.getElementById("countdown").textContent = "Countdown Over!";
            return;
        }

        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);


        document.getElementById("days").textContent = days;
        document.getElementById("hours").textContent = hours;
        document.getElementById("minutes").textContent = minutes;


        const prevSecondsElement2 = document.getElementById("prev-seconds-2");
        const prevSecondsElement1 = document.getElementById("prev-seconds-1");
        const prevSecondsElement = document.getElementById("prev-seconds");
        const currentSecondElement = document.getElementById("current-second");
        const nextSecondsElement = document.getElementById("next-seconds");
        const nextSecondsElement1 = document.getElementById("next-seconds-1");
        const nextSecondsElement2 = document.getElementById("next-seconds-2");

     
        prevSecondsElement2.style.animation = "none";
        prevSecondsElement1.style.animation = "none";
        prevSecondsElement.style.animation = "none";
        currentSecondElement.style.animation = "none";
        nextSecondsElement.style.animation = "none";
        nextSecondsElement1.style.animation = "none";
        nextSecondsElement2.style.animation = "none";


        const prevSeconds = (seconds === 0) ? 59 : seconds - 1;
        const nextSeconds = (seconds === 59) ? 0 : seconds + 1;
        const prevSeconds1 = (prevSeconds === 0) ? 59 : prevSeconds - 1;
        const nextSeconds1 = (nextSeconds === 59) ? 0 : nextSeconds + 1;
        const prevSeconds2 = (prevSeconds1 === 0) ? 59 : prevSeconds1 - 1;
        const nextSeconds2 = (nextSeconds1 === 59) ? 0 : nextSeconds1 + 1;

        prevSecondsElement2.textContent = (prevSeconds2 < 10 ? "0" : "") + prevSeconds2;
        prevSecondsElement1.textContent = (prevSeconds1 < 10 ? "0" : "") + prevSeconds1;
        prevSecondsElement.textContent = (prevSeconds < 10 ? "0" : "") + prevSeconds;
        currentSecondElement.textContent = (seconds < 10 ? "0" : "") + seconds;
        nextSecondsElement.textContent = (nextSeconds < 10 ? "0" : "") + nextSeconds;
        nextSecondsElement1.textContent = (nextSeconds1 < 10 ? "0" : "") + nextSeconds1;
        nextSecondsElement2.textContent = (nextSeconds2 < 10 ? "0" : "") + nextSeconds2;


        prevSecondsElement2.style.animation = "slideOutToTop 0.5s";
        prevSecondsElement1.style.animation = "slideOutToTop 0.5s";
        prevSecondsElement.style.animation = "slideOutToTop 0.5s";
        currentSecondElement.style.animation = "slideInFromBottom 0.5s";
        nextSecondsElement.style.animation = "slideInFromBottom 0.5s";
        nextSecondsElement1.style.animation = "slideInFromBottom 0.5s";
        nextSecondsElement2.style.animation = "slideInFromBottom 0.5s";
    }

 
    updateCountdown();

 
    const countdownInterval = setInterval(updateCountdown, 1000);
}




function copytoClipBoard(){
    function copyToClipboard() {
     
        const textToCopy = document.getElementById("CopyText").textContent;
  
  
        const tempTextarea = document.createElement("textarea");
  
  
        tempTextarea.value = textToCopy;
  
    
        document.body.appendChild(tempTextarea);
  
        tempTextarea.select();
  
        document.execCommand("copy");
  
        document.body.removeChild(tempTextarea);
  
        const messageElement = document.getElementById("messageCoupon");
        messageElement.textContent = "Coupon copied!";
  
        const redirectURL = "<?php echo $redirectcoupon; ?>";
  // 	console.log("redirectURL", redirectURL)
        setTimeout(() => {
          messageElement.textContent = "";
          
            window.open(redirectURL, '_blank');
        }, 2000); // Show the message for 2 seconds
      }
}