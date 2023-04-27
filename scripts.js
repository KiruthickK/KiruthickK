function GitDisplay() {
    hheeight();
    document.getElementById("logo").src = "Images/git-logo.png"
    document.getElementById("logo").style.visibility = 'visible';
}

function GitDisplayBack() {
    document.getElementById("logo").style.visibility = 'hidden';
    contruction();
}

function HackerRankDisplay() {
    hheeight();
    document.getElementById("logo").src = "Images/Hackerrank-logo.png"
    document.getElementById("logo").style.visibility = 'visible';
}

function HackerRankDisplayBack() {
    document.getElementById("logo").style.visibility = 'hidden';
    contruction();
}

function LeetcodeDisplay() {
    document.getElementById("logo").src = "Images/leetcode-logo.png"
    document.getElementById("logo").style.height = "150px";
    document.getElementById("logo").style.width = "250px";
    document.getElementById("logo").style.visibility = 'visible';
}

function LeetcodeDisplayBack() {
    document.getElementById("logo").style.height = "250px";
    document.getElementById("logo").style.width = "250px";
    document.getElementById("logo").style.visibility = 'hidden';
    contruction()
}

function hheeight() {
    document.getElementById("logo").style.height = "250px";
    document.getElementById("logo").style.width = "250px";
}

function contruction() {
    document.getElementById("logo").style.visibility = 'visible';
    // document.getElementById("logo").style.height = "400px";
    // document.getElementById("logo").style.width = "400px";
    document.getElementById("logo").src = "Images/construction.png";
}