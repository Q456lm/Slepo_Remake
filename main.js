/****************************************************
 * Global Game State Flags
 ****************************************************/
let playing = false;          // Game has started
let pause = false;            // Game is paused
let gaming = false;            // Player is "gaming" vs "school"
let gaming1 = false;
let gaming2 = false;
let gaming3 = false;
let gaming4 = false;
let gaming5 = false;
let gamingCount = 0;
let died = false;             // Player death state
let score = 0;                // Current score
let highestScore = 0;         // Highest score achieved
let movementSpeed = 0.25;     // Horizontal movement speed of characters
let edgeTime = 0;             // Time spent gaming
let overlay = true;           // Whether an overlay is currently visible
 
/****************************************************
 * Difficulty Caps
 ****************************************************/
const MAX_SPAWN_ODDS = 0.5;        // Maximum total spawn rate
const MAX_TEACHER_CHANCE = 0.65;   // Maximum teacher spawn ratio
 
/****************************************************
 * DOM Elements
 ****************************************************/
const computer1 = document.getElementById("computer1");
const computer2 = document.getElementById("computer2");
const computer3 = document.getElementById("computer3");
const computer4 = document.getElementById("computer4");
const computer5 = document.getElementById("computer5");
const scoreDiv = document.getElementById("score_div");
const edgeDiv = document.getElementById("time_div");
 
/****************************************************
 * Overlay Elements
 ****************************************************/
const deathOverlay = document.getElementById("deathOverlay");
const startOverlay = document.getElementById("startOverlay");
const pauseOverlay = document.getElementById("pauseOverlay");
 
/****************************************************
 * Overlay Controls
 ****************************************************/
const playAgainButton = document.getElementById("playAgain");
const playButton = document.getElementById("play_div");
let finalScore = document.getElementById("finalScore");
let finalEdge = document.getElementById("finalEdge");
 
/****************************************************
 * Audio Assets
 ****************************************************/
const minecraftAudio = new Audio("audio/background.mp3");
const click = new Audio("audio/minecraft_click.mp3");
const gameOverAudio1 = new Audio("audio/gameOver.mp3");
const gameOverAudio2 = new Audio("audio/gameOver2.mp3");
 
/****************************************************
 * Restart Button Handler
 ****************************************************/
playAgainButton.addEventListener("click", function (event) {
    deathOverlay.style = "display: none;";
    click.play();
    window.location.reload();
});
 
/****************************************************
 * Utility: Async Delay
 ****************************************************/
function wait(ms) {
    return new Promise(r => setTimeout(r, ms));
}
 
/****************************************************
 * Randomize Fake Student Images
 ****************************************************/
const fakeStudents = document.querySelectorAll(".student_fake");
fakeStudents.forEach(student => {
    const randomNumber = Math.floor(Math.random() * 16) + 1;
    student.src = "images/students/student" + randomNumber + ".png";
});
 
/****************************************************
 * Player Student Setup
 ****************************************************/
const student1 = document.getElementById("student1");
const student2 = document.getElementById("student2");
const student3 = document.getElementById("student3");
const student4 = document.getElementById("student4");
const student5 = document.getElementById("student5");
const randomNumber = Math.floor(Math.random() * 16) + 1;
student1.src = "images/students/student" + (Math.floor(Math.random() * 16) + 1) + ".png";
student2.src = "images/students/student" + (Math.floor(Math.random() * 16) + 1) + ".png";
student3.src = "images/students/student" + (Math.floor(Math.random() * 16) + 1) + ".png";
student4.src = "images/students/student" + (Math.floor(Math.random() * 16) + 1) + ".png";
student5.src = "images/students/student" + (Math.floor(Math.random() * 16) + 1) + ".png";
 
/****************************************************
 * Start Game Button
 ****************************************************/
playButton.addEventListener("click", function (event) {
    playing = true;
    overlay = !overlay;
 
    click.play();
    minecraftAudio.volume = 0.2;
    minecraftAudio.play();
 
    startOverlay.style = "display: none;";
});
 
/****************************************************
 * Keyboard Controls
 ****************************************************/
document.addEventListener("keypress", function (event) {
    const keyName = event.key;
 
    // Toggle gaming state (space bar)
    if (keyName == "1") {
            if (playing) {
                click.play();
                gaming1 = !gaming1;
                if (gaming1){
                    gamingCount++;
                }else{
                    gamingCount--
                }
 
                computer1.src = gaming1
                    ? "images/computer_minecraft.png"
                    : "images/computer_school.png";
 
                if (gaming) {
                    minecraftAudio.play();
                } else {
                    minecraftAudio.pause();
                }  
        }
    }
    if (keyName == "2") {
        if (playing) {
            click.play();
            gaming2 = !gaming2;

            if (gaming2){
                    gamingCount++;
            }else{
                gamingCount--
            }
 
            computer2.src = gaming2
                ? "images/computer_minecraft.png"
                : "images/computer_school.png";
 
            if (gaming) {
                minecraftAudio.play();
            } else {
                minecraftAudio.pause();
            }
        }
    }
    if (keyName == "3") {
        if (playing) {
            click.play();
            gaming3 = !gaming3;

            if (gaming3){
                    gamingCount++;
            }else{
                gamingCount--
            }
 
            computer3.src = gaming3
                ? "images/computer_minecraft.png"
                : "images/computer_school.png";
 
            if (gaming) {
                minecraftAudio.play();
            } else {
                minecraftAudio.pause();
            }
        }
    }
    if (keyName == "4") {
        if (playing) {
            click.play();
            gaming4 = !gaming4;

            if (gaming4){
                    gamingCount++;
            }else{
                gamingCount--
            }
 
            computer4.src = gaming4
                ? "images/computer_minecraft.png"
                : "images/computer_school.png";
 
            if (gaming) {
                minecraftAudio.play();
            } else {
                minecraftAudio.pause();
            }
        }
    }
    if (keyName == "5") {
        if (playing) {
            click.play();
            gaming5 = !gaming5;

            if (gaming5){
                    gamingCount++;
            }else{
                gamingCount--
            }
 
            computer5.src = gaming5
                ? "images/computer_minecraft.png"
                : "images/computer_school.png";
 
            if (gaming) {
                minecraftAudio.play();
            } else {
                minecraftAudio.pause();
            }
        }
    }

    if (gamingCount > 0){
        gaming = true;
    }else{
        gaming = false;
    }
 
    // Pause toggle (P key)
    if (keyName == "p" || keyName == "P") {
        if (!died && !overlay) {
            click.play();
            pause = !pause;
 
            if (pause) {
                minecraftAudio.pause();
                pauseOverlay.style = "display: flex;";
            } else if (!gaming && !pause) {
                pauseOverlay.style = "display: none;";
            } else {
                minecraftAudio.play();
                pauseOverlay.style = "display: none;";
            }
            playing = !playing
        }
    }
});
 
/****************************************************
 * Score & Edge Time Handler
 ****************************************************/
async function handleScore() {
    while (true) {
        await wait(1000);
 
        if (playing) {
            if (gamingCount == 0){
                score -= 0.5;
            }
            else if (gamingCount == 1){
                score -= 0;
            }
            else if (gamingCount == 2){
                score += 0.5;
            }
            else if (gamingCount == 3){
                score += 1;
            }
            else if (gamingCount == 4){
                score += 1.5;
            }
            else if (gamingCount == 5){
                score += 1.5;
            }

 
            if (gaming) {
                edgeTime += 1;
                edgeDiv.textContent = "Edge: " + edgeTime;
            }
 
            if (score > highestScore) {
                highestScore = score;
            }
 
            scoreDiv.textContent = "Aura: " + score.toFixed(1);
        }
    }
}
 
/****************************************************
 * Character Management
 ****************************************************/
const allPeople = [];
 
/**
 * Spawns a student or teacher character
 */
function summonCharacter(isStudent) {
    const person = document.createElement("img");
    const randomNumber = Math.floor(Math.random() * 16) + 1;
 
    if (isStudent) {
        person.src = "images/students/student" + randomNumber + ".png";
        person.classList.add("student");
    } else {
        person.src = "images/teachers/teacher" + randomNumber + ".png";
        person.classList.add("teacher");
    }
 
    document.body.appendChild(person);
 
    const startsLeft = Math.random() < 0.5;
    const currentX = startsLeft ? -10.5 : 100;
 
    person.style.left = `calc(${currentX}% - 20px)`;
 
    allPeople.push({
        p: person,
        isPositive: startsLeft,   // Current movement direction
        x: currentX,              // X position
        isStudent: isStudent,
        pauseTimer: 0,            // Time paused so far
        pauseDuration: 0,         // Total pause duration
        isPaused: false,          // Currently paused
        hasPaused: false          // Has paused before
    });
}
 
/****************************************************
 * Move All Characters & Handle Collisions
 ****************************************************/
function movePeople() {
    const deadPeople = [];
 
    for (let i = 0; i < allPeople.length; i++) {
        const person = allPeople[i];
 
        // Mid-screen interaction logic
        if (person.x >= 35 && person.x <= 55) {
            if (person.isStudent) {
                if (gaming3) {
                    score += 0.02;
 
                    if (score > highestScore) {
                        highestScore = score;
                    }
 
                    scoreDiv.textContent = "Aura: " + score.toFixed(1);
                }
            } else {
                if (gaming3) {
                    died = true;
                    playing = false;
 
                    minecraftAudio.pause();
 
                    finalScore.innerHTML = "High Score: " + highestScore.toFixed(1);
                    finalEdge.innerHTML = "Edge Time: " + edgeTime;
 
                    deathOverlay.style = "display: flex;";
                    gameOverAudio1.play();
                    gameOverAudio2.play();
                }
            }
        }
        if (person.x >= 15 && person.x <= 35) {
            if (person.isStudent) {
                if (gaming2) {
                    score += 0.02;
 
                    if (score > highestScore) {
                        highestScore = score;
                    }
 
                    scoreDiv.textContent = "Aura: " + score.toFixed(1);
                }
            } else {
                if (gaming2) {
                    died = true;
                    playing = false;
 
                    minecraftAudio.pause();
 
                    finalScore.innerHTML = "High Score: " + highestScore.toFixed(1);
                    finalEdge.innerHTML = "Edge Time: " + edgeTime;
 
                    deathOverlay.style = "display: flex;";
                    gameOverAudio1.play();
                    gameOverAudio2.play();
                }
            }
        }
        if (person.x >= 0 && person.x <= 15) {
            if (person.isStudent) {
                if (gaming1) {
                    score += 0.02;
 
                    if (score > highestScore) {
                        highestScore = score;
                    }
 
                    scoreDiv.textContent = "Aura: " + score.toFixed(1);
                }
            } else {
                if (gaming1) {
                    died = true;
                    playing = false;
 
                    minecraftAudio.pause();
 
                    finalScore.innerHTML = "High Score: " + highestScore.toFixed(1);
                    finalEdge.innerHTML = "Edge Time: " + edgeTime;
 
                    deathOverlay.style = "display: flex;";
                    gameOverAudio1.play();
                    gameOverAudio2.play();
                }
            }
        }
            if (person.x >= 55 && person.x <= 75) {
            if (person.isStudent) {
                if (gaming4) {
                    score += 0.02;
 
                    if (score > highestScore) {
                        highestScore = score;
                    }
 
                    scoreDiv.textContent = "Aura: " + score.toFixed(1);
                }
            } else {
                if (gaming4) {
                    died = true;
                    playing = false;
 
                    minecraftAudio.pause();
 
                    finalScore.innerHTML = "High Score: " + highestScore.toFixed(1);
                    finalEdge.innerHTML = "Edge Time: " + edgeTime;
 
                    deathOverlay.style = "display: flex;";
                    gameOverAudio1.play();
                    gameOverAudio2.play();
                }
            }
        }
        if (person.x >= 75 && person.x <= 90) {
            if (person.isStudent) {
                if (gaming5) {
                    score += 0.02;
 
                    if (score > highestScore) {
                        highestScore = score;
                    }
 
                    scoreDiv.textContent = "Aura: " + score.toFixed(1);
                }
            } else {
                if (gaming5) {
                    died = true;
                    playing = false;
 
                    minecraftAudio.pause();
 
                    finalScore.innerHTML = "High Score: " + highestScore.toFixed(1);
                    finalEdge.innerHTML = "Edge Time: " + edgeTime;
 
                    deathOverlay.style = "display: flex;";
                    gameOverAudio1.play();
                    gameOverAudio2.play();
                }
            }
        }
 
        // Pause behavior
        if (person.isPaused) {
            person.pauseTimer++;
 
            if (person.pauseTimer >= person.pauseDuration) {
                person.isPositive = Math.random() < 0.5;
                person.isPaused = false;
                person.pauseTimer = 0;
                person.hasPaused = true;
            }
        } else {
            if (!person.hasPaused && Math.random() < 0.003) {
                person.isPaused = true;
                person.pauseDuration = Math.floor(Math.random() * 100) + 50;
            }
        }
 
        // Movement
        if (!person.isPaused) {
            const x = person.x + movementSpeed * (person.isPositive ? 1 : -1);
            person.x = x;
            person.p.style.left = `calc(${x}% - 20px)`;
        }
 
        // Off-screen cleanup
        if (person.x <= -30 || person.x >= 100.5) {
            deadPeople.push(i);
        }
    }
 
    // Remove dead characters
    for (let i = deadPeople.length - 1; i >= 0; i--) {
        const deadI = deadPeople[i];
        allPeople[deadI].p.remove();
        allPeople.splice(deadI, 1);
    }
}
 
/****************************************************
 * Spawn Logic Loop
 ****************************************************/
async function handlePeople() {
    let ticks = 0;
    let spawnOdds = 0.12;
    let teacherChance = 0.05;
 
    while (true) {
        await wait(25);
 
        if (playing) {
            ticks++;
            movePeople();
 
            if (ticks === 40) {
                ticks = 0;
 
                spawnOdds = Math.min(spawnOdds + 0.002, MAX_SPAWN_ODDS);
                teacherChance = Math.min(teacherChance + 0.0025, MAX_TEACHER_CHANCE);
 
                const roll = Math.random();
 
                if (roll < spawnOdds) {
                    const isStudent = Math.random() > teacherChance;
                    summonCharacter(isStudent);
                }
            }
        }
    }
}
 
/****************************************************
 * Player Animation
 ****************************************************/
let bounceTime1 = 0;
let bounceTime2 = 0;
let bounceTime3 = 0;
let bounceTime4 = 0;
let bounceTime5 = 0;
 
function animateStudent() {
    if (gaming1 && playing && !pause && !died) {
        bounceTime1 += 0.15;
        const bounce1 = Math.sin(bounceTime1) * 25;
        student1.style.transform = `translateY(${bounce1}px)`;
    }
    else if (!(!gaming1 && (gaming2 || gaming3 || gaming4 || gaming5))){
        student1.style.transform = "translateY(0px)";
        bounceTime1 = 0;
    }
    if (gaming2 && playing && !pause && !died) {
        bounceTime2 += 0.15;
        const bounce2 = Math.sin(bounceTime2) * 25;
        student2.style.transform = `translateY(${bounce2}px)`;
    }
    else if (!(!gaming2 && (gaming1 || gaming3 || gaming4 || gaming5))){
        student2.style.transform = "translateY(0px)";
        bounceTime2 = 0;
    }
    if (gaming3 && playing && !pause && !died) {
        bounceTime3 += 0.15;
        const bounce3 = Math.sin(bounceTime3) * 25;
        student3.style.transform = `translateY(${bounce3}px)`;
    }
    else if (!(!gaming3 && (gaming2 || gaming1 || gaming4 || gaming5))){
        student3.style.transform = "translateY(0px)";
        bounceTime3 = 0;
    }
    if (gaming4 && playing && !pause && !died) {
        bounceTime4 += 0.15;
        const bounce4 = Math.sin(bounceTime4) * 25;
        student4.style.transform = `translateY(${bounce4}px)`;
    }
    else if (!(!gaming4 && (gaming2 || gaming3 || gaming1 || gaming5))){
        student4.style.transform = "translateY(0px)";
        bounceTime4 = 0;
    }
    if (gaming5 && playing && !pause && !died) {
        bounceTime5 += 0.15;
        const bounce5 = Math.sin(bounceTime5) * 25;
        student5.style.transform = `translateY(${bounce5}px)`;
    }
    else if (!(!gaming5 && (gaming2 || gaming3 || gaming4 || gaming1))){
        student5.style.transform = "translateY(0px)";
        bounceTime5 = 0;
    }
 
    requestAnimationFrame(animateStudent);
}
 
/****************************************************
 * Start Game Loops
 ****************************************************/
animateStudent();
handleScore();
handlePeople();