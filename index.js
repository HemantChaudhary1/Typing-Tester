// let paras = [
//     "pack play general more plan can well eye child present these will general any can as seem up set give line around she what we way again want back need run good for point run each these lead no under write run order little very hand all real into",
//     "or say first year nation program before take fact more course should where or program line well late even then turn leave problem this also small nation turn public group long go or without form would from against they then under play",
//     "head after from give into lead play person about since now show like again face that against do the come and group increase but under see plan late person without thing as what and work he so for public how good group call could open tell too for",
//     "show course lead both they what public will may line say day problem large seen part or now day both house other word work other same work look place work hold ru face here nation people would should face word with out present show will because",
//     "write school possible general day any down child turn about most early even s keep be around lead some begin such and person time still from hold still old comp increase move large old any late think must which nation find well right between",
//     "might very under with do down year those play he during down make need because public time early must people mean look just move world go however ask eye any own possible year under small since form year more also very on still interest year",
//     "in about become which word only around say line or form mean consider late opelt never run this house group however increase when go just even may hold call school say own man around nation where leave many nation you house to set through more",
//     "could old these such public get in nation they eye down she after should whaCH K increase with fact under show public people point want only school can she way since new over govern world how eye say possible this say thing a system very",
//     "and give back plan set both down turn back seem may show few system state down ver would that most during group problem she form turn need leave by feel through nos state if can so while then through that end real group between few from come might",
//     "Without large set of here man change will school use without open where or increase there problem find can through than under line way never make about same begin part large might since real have play few against head can tell people early small use",
//     "as face may right day that off govern they good may late way between look school begin day early turn fact work hand much between eye know move again old for molit part group point feel have what nation however move last early also place person",
//     "seem great program only it can only word thing from to play now need from to nove day one few they plan only want real day stand must have where find can point open another give who from make go may point just line again house just both which such"
//   ];
  

//   document.addEventListener('DOMContentLoaded', () => {
//     const typingP = document.querySelector("#paragraph p"),
//         inputF = document.querySelector("#input-field"),
//         tryAgainB = document.querySelector("#restartButton"),
//         timerT = document.querySelector("#timer"),
//         mistakeT = document.querySelector("#mistake"),
//         wpmT = document.querySelector("#wpm"),
//         cpmT = document.querySelector("#cpm"),
//         cursorBar = document.createElement('div'); // Create cursor bar element

//     cursorBar.id = 'cursor-bar';
//     document.querySelector('.para').appendChild(cursorBar); // Add cursor bar to the container

//     let timer;
//     let maxTime = 60;
//     let timeLeft = maxTime;
//     let charIndex = 0;
//     let mistakes = 0;
//     let isTyping = 0;
//     let previousCharIndex = 0; // Track the previous char index

//     // Fetch the Paragraphs
//     function loadPara() {
//         const randIndex = Math.floor(Math.random() * paras.length);
//         typingP.innerHTML = paras[randIndex].split("").map(c => `<span>${c}</span>`).join("");
//         typingP.querySelectorAll("span")[0].classList.add("active");
//         document.addEventListener("keydown", () => inputF.focus());
//         typingP.addEventListener("click", () => inputF.focus());
//     }

//     function updateCursorBar() {
//         const spanElements = typingP.querySelectorAll('span');
//         if (charIndex < spanElements.length) {
//             const charElement = spanElements[charIndex];
//             cursorBar.style.left = `${charElement.offsetLeft + charElement.offsetWidth / 2}px`;
//             cursorBar.style.top = `${charElement.offsetTop}px`;
//             cursorBar.style.height = `${charElement.offsetHeight}px`;
//         }
//     }

//     function initTyping(e) {
//         let chars = typingP.querySelectorAll("span");
//         let typedC = inputF.value.charAt(charIndex);
        
//         if (charIndex < chars.length && timeLeft > 0) {
//             if (!isTyping) {
//                 timer = setInterval(initTimer, 1000);
//                 isTyping = true;
//             }

//             if (e.inputType === 'deleteContentBackward') {
//                 // Handle backspace
//                 if (charIndex > 0) {
//                     charIndex--;
//                     previousCharIndex = charIndex; // Update previousCharIndex

//                     // Remove active class from the previous character
//                     chars[charIndex].classList.remove("correct", "incorrect", "active");

//                     // Check if the character was incorrect
//                     if (chars[charIndex].classList.contains("incorrect")) {
//                         mistakes--;
//                     }

//                     // Add active class to the previous character
//                     chars[charIndex].classList.add("active");
//                 }
//             } else {
//                 // Handle other input types (typing new characters)
//                 if (typedC !== "") {
//                     if (chars[charIndex].innerText === typedC) {
//                         chars[charIndex].classList.add("correct");
//                     } else {
//                         mistakes++;
//                         chars[charIndex].classList.add("incorrect");
//                     }
//                     charIndex++;
//                     previousCharIndex = charIndex; // Update previousCharIndex
//                 }
//             }

//             // Update active character class
//             chars.forEach(s => s.classList.remove("active"));
//             if (charIndex < chars.length) {
//                 chars[charIndex].classList.add("active");
//             }

//             // Update cursor bar position
//             updateCursorBar();

//             // Calculate Words Per Minute (WPM)
//             let wpm = Math.round(((charIndex - mistakes) / 5) / (maxTime - timeLeft) * 60);
//             wpm = wpm < 0 || !wpm || wpm === Infinity ? 0 : wpm;

//             // Update the displayed values
//             wpmT.innerText = wpm;
//             mistakeT.innerText = mistakes;
//             cpmT.innerText = charIndex - mistakes;
//         } else {
//             clearInterval(timer);
//             inputF.value = ""; // Reset input field
//         }
//     }

//     function initTimer() {
//         if (timeLeft > 0) {
//             timeLeft--;
//             timerT.innerText = timeLeft;
//             const wpm = Math.round((charIndex - mistakes) / 5 / (maxTime - timeLeft) * 60);
//             wpmT.innerText = isNaN(wpm) || wpm === Infinity ? 0 : wpm;
//         } else {
//             clearInterval(timer);
//         }
//     }

//     function resetGame() {
//         loadPara();
//         clearInterval(timer);
//         timeLeft = maxTime;
//         charIndex = mistakes = isTyping = 0;
//         previousCharIndex = 0; // Reset previousCharIndex
//         inputF.value = "";
//         timerT.innerText = timeLeft;
//         wpmT.innerText = 0;
//         mistakeT.innerText = 0;
//         cpmT.innerText = 0;
//         // Reset cursor bar
//         cursorBar.style.left = '0px';
//         cursorBar.style.top = '0px';
//         cursorBar.style.height = '0px';
//     }

//     loadPara();
//     inputF.addEventListener("input", initTyping);
//     tryAgainB.addEventListener("click", resetGame);
// });


// // const typingP = document.querySelector("#paragraph p"),
// //     inputF = document.querySelector("#input-field"),
// //     tryAgainB = document.querySelector("#restartButton"),
// //     timerT = document.querySelector("#timer"),
// //     mistakeT = document.querySelector("#mistake"),
// //     wpmT = document.querySelector("#wpm"),
// //     cpmT = document.querySelector("#cpm");

// // let timer;
// // let maxTime = 60;
// // let timeLeft = maxTime;
// // let charIndex = 0;
// // let mistakes = 0;
// // let isTyping = 0;
// // let previousCharIndex = 0; // Track the previous char index

// // // Fetch the Paragraphs
// // function loadPara() {
// //     const randIndex = Math.floor(Math.random() * paras.length);
// //     typingP.innerHTML = paras[randIndex].split("").map(c => `<span>${c}</span>`).join("");
// //     typingP.querySelectorAll("span")[0].classList.add("active");
// //     document.addEventListener("keydown", () => inputF.focus());
// //     typingP.addEventListener("click", () => inputF.focus());
// // }

// // function initTyping(e) {
// //     let chars = typingP.querySelectorAll("span");
// //     let typedC = inputF.value.charAt(charIndex);
    
// //     if (charIndex < chars.length && timeLeft > 0) {
// //         if (!isTyping) {
// //             timer = setInterval(initTimer, 1000);
// //             isTyping = true;
// //         }

// //         if (e.inputType === 'deleteContentBackward') {
// //             // Handle backspace
// //             if (charIndex > 0) {
// //                 charIndex--;
// //                 previousCharIndex = charIndex; // Update previousCharIndex

// //                 // Remove active class from the previous character
// //                 chars[charIndex].classList.remove("correct", "incorrect", "active");

// //                 // Check if the character was incorrect
// //                 if (chars[charIndex].classList.contains("incorrect")) {
// //                     mistakes--;
// //                 }

// //                 // Add active class to the previous character
// //                 chars[charIndex].classList.add("active");
// //             }
// //         } else {
// //             // Handle other input types (typing new characters)
// //             if (typedC !== "") {
// //                 if (chars[charIndex].innerText === typedC) {
// //                     chars[charIndex].classList.add("correct");
// //                 } else {
// //                     mistakes++;
// //                     chars[charIndex].classList.add("incorrect");
// //                 }
// //                 charIndex++;
// //                 previousCharIndex = charIndex; // Update previousCharIndex
// //             }
// //         }

// //         // Update active character class
// //         chars.forEach(s => s.classList.remove("active"));
// //         if (charIndex < chars.length) {
// //             chars[charIndex].classList.add("active");
// //         }

// //         // Calculate Words Per Minute (WPM)
// //         let wpm = Math.round(((charIndex - mistakes) / 5) / (maxTime - timeLeft) * 60);
// //         wpm = wpm < 0 || !wpm || wpm === Infinity ? 0 : wpm;

// //         // Update the displayed values
// //         wpmT.innerText = wpm;
// //         mistakeT.innerText = mistakes;
// //         cpmT.innerText = charIndex - mistakes;
// //     } else {
// //         clearInterval(timer);
// //         inputF.value = ""; // Reset input field
// //     }
// // }

// // function initTimer() {
// //     if (timeLeft > 0) {
// //         timeLeft--;
// //         timerT.innerText = timeLeft;
// //         const wpm = Math.round((charIndex - mistakes) / 5 / (maxTime - timeLeft) * 60);
// //         wpmT.innerText = isNaN(wpm) || wpm === Infinity ? 0 : wpm;
// //     } else {
// //         clearInterval(timer);
// //     }
// // }

// // function resetGame() {
// //     loadPara();
// //     clearInterval(timer);
// //     timeLeft = maxTime;
// //     charIndex = mistakes = isTyping = 0;
// //     previousCharIndex = 0; // Reset previousCharIndex
// //     inputF.value = "";
// //     timerT.innerText = timeLeft;
// //     wpmT.innerText = 0;
// //     mistakeT.innerText = 0;
// //     cpmT.innerText = 0;
// // }

// // loadPara();
// // inputF.addEventListener("input", initTyping);
// // tryAgainB.addEventListener("click", resetGame);



let paras = [
    "pack play general more plan can well eye child present these will general any can as seem up set give line around she what we way again want back need run good for point run each these lead no under write run order little very hand all real into",
    "or say first year nation program before take fact more course should where or program line well late even then turn leave problem this also small nation turn public group long go or without form would from against they then under play",
    "head after from give into lead play person about since now show like again face that against do the come and group increase but under see plan late person without thing as what and work he so for public how good group call could open tell too for",
    "show course lead both they what public will may line say day problem large seen part or now day both house other word work other same work look place work hold ru face here nation people would should face word with out present show will because",
    "write school possible general day any down child turn about most early even s keep be around lead some begin such and person time still from hold still old comp increase move large old any late think must which nation find well right between",
    "might very under with do down year those play he during down make need because public time early must people mean look just move world go however ask eye any own possible year under small since form year more also very on still interest year",
    "in about become which word only around say line or form mean consider late opelt never run this house group however increase when go just even may hold call school say own man around nation where leave many nation you house to set through more",
    "could old these such public get in nation they eye down she after should whaCH K increase with fact under show public people point want only school can she way since new over govern world how eye say possible this say thing a system very",
    "and give back plan set both down turn back seem may show few system state down ver would that most during group problem she form turn need leave by feel through nos state if can so while then through that end real group between few from come might",
    "Without large set of here man change will school use without open where or increase there problem find can through than under line way never make about same begin part large might since real have play few against head can tell people early small use",
    "as face may right day that off govern they good may late way between look school begin day early turn fact work hand much between eye know move again old for molit part group point feel have what nation however move last early also place person",
    "seem great program only it can only word thing from to play now need from to nove day one few they plan only want real day stand must have where find can point open another give who from make go may point just line again house just both which such"
];

const typingP = document.querySelector("#paragraph p"),
    inputF = document.querySelector("#input-field"),
    tryAgainB = document.querySelector("#restartButton"),
    timerT = document.querySelector("#timer"),
    mistakeT = document.querySelector("#mistake"),
    wpmT = document.querySelector("#wpm"),
    cpmT = document.querySelector("#cpm");

let timer;
let maxTime = 60;
let timeLeft = maxTime;
let charIndex = 0;
let mistakes = 0;
let isTyping = 0;
let previousCharIndex = 0; // Track the previous char index

// Fetch the Paragraphs
function loadPara() {
    const randIndex = Math.floor(Math.random() * paras.length);
    typingP.innerHTML = paras[randIndex].split("").map(c => `<span>${c}</span>`).join("");
    typingP.querySelectorAll("span")[0].classList.add("active");
    inputF.focus(); // Focus the input field initially
}

function initTyping(e) {
    let chars = typingP.querySelectorAll("span");
    let typedC = inputF.value.charAt(charIndex);

    if (charIndex < chars.length && timeLeft > 0) {
        if (!isTyping) {
            timer = setInterval(initTimer, 1000);
            isTyping = true;
        }

        if (e.inputType === 'deleteContentBackward') {
            // Handle backspace
            if (charIndex > 0) {
                charIndex--;
                previousCharIndex = charIndex; // Update previousCharIndex

                // Remove active class from the previous character
                chars[charIndex].classList.remove("correct", "incorrect", "active");

                // Check if the character was incorrect
                if (chars[charIndex].classList.contains("incorrect")) {
                    mistakes--;
                }

                // Add active class to the previous character
                chars[charIndex].classList.add("active");
            }
        } else {
            // Handle other input types (typing new characters)
            if (typedC !== "") {
                if (chars[charIndex].innerText === typedC) {
                    chars[charIndex].classList.add("correct");
                } else {
                    mistakes++;
                    chars[charIndex].classList.add("incorrect");
                }
                charIndex++;
                previousCharIndex = charIndex; // Update previousCharIndex
            }
        }

        // Update active character class
        chars.forEach(s => s.classList.remove("active"));
        if (charIndex < chars.length) {
            chars[charIndex].classList.add("active");
        }

        // Move cursor position
        const cursorSpan = document.querySelector("#cursor");
        if (cursorSpan) {
            cursorSpan.style.left = `${chars[charIndex]?.offsetLeft || 0}px`;
            cursorSpan.style.top = `${chars[charIndex]?.offsetTop || 0}px`;
        }

        // Calculate Words Per Minute (WPM)
        let wpm = Math.round(((charIndex - mistakes) / 5) / (maxTime - timeLeft) * 60);
        wpm = wpm < 0 || !wpm || wpm === Infinity ? 0 : wpm;

        // Update the displayed values
        wpmT.innerText = wpm;
        mistakeT.innerText = mistakes;
        cpmT.innerText = charIndex - mistakes;
    } else {
        clearInterval(timer);
        inputF.value = ""; // Reset input field
    }
}

function initTimer() {
    if (timeLeft > 0) {
        timeLeft--;
        timerT.innerText = timeLeft;
        const wpm = Math.round((charIndex - mistakes) / 5 / (maxTime - timeLeft) * 60);
        wpmT.innerText = isNaN(wpm) || wpm === Infinity ? 0 : wpm;
    } else {
        clearInterval(timer);
    }
}

function resetGame() {
    loadPara();
    clearInterval(timer);
    timeLeft = maxTime;
    charIndex = mistakes = isTyping = 0;
    previousCharIndex = 0; // Reset previousCharIndex
    inputF.value = "";
    timerT.innerText = timeLeft;
    wpmT.innerText = 0;
    mistakeT.innerText = 0;
    cpmT.innerText = 0;
}

// Initialize the game and add event listeners
loadPara();
inputF.addEventListener("input", initTyping);
tryAgainB.addEventListener("click", resetGame);

// Add a cursor element
const cursor = document.createElement("span");
cursor.id = "cursor";
cursor.style.position = "absolute";
cursor.style.width = "2px";
cursor.style.height = "1.2em"; // Adjust height according to font size
cursor.style.backgroundColor = "black"; // Cursor color
cursor.style.zIndex = "10";
document.body.appendChild(cursor);
