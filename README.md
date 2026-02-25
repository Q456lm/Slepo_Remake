# **Not WECIB Minecraft Simulator**!
## Members:
- Angel
- Afton
- Christopher
- Marcus
 
# 🎮 How the Game Works
You gotta **play Minecraft in class** to gain **Aura**.  
And trust me—**Aura is everything**. Stack as much of it as you can.
## Play browser
- Click: [htpss://x68gh5zdjt-lab.github.io/Slepo/](https://x68gh5zdjt-lab.github.io/Slepo/)

# Games type
Arcade / simulation
 
# ✨ Gaining (and Losing) Aura
 
You can gain Aura by:
- 🟩 Playing Minecraft, the more students playing the more aura.  
- 😎 Playing **Minecraft in front of your classmates** (they respect the grind)
 
You **lose Aura** if:
- 😬 You play lowkey (Not playing at all)
 
⚠️ **Warning:**  
Your teachers **do NOT understand us**.  
If they catch you playing Minecraft, they will **KILL you** 💀 (in-game, obviously).
 
# 🏆 Objective
 
Your goal in this **Cool game** is simple:
 
> **Get as much Aura as possible before getting caught.**
 
Can you do it?  
Or are you **lame =/**
 
# Prerequisites
- Browser to play on

# Example Play Session
<img width="1550" height="736" alt="Screenshot 2026-02-09 090838" src="https://github.com/user-attachments/assets/ffb68f52-34b2-4fce-b28f-d44328a31168" />

# Win & Lose Conditions
- Win:
  - Get the highest score
- Lose:
  - Get caught by the teacher

# ⌨️ Controls 
- **Use Numbers 1-5** — Switch between:
  - Playing Minecraft
  - “Doing school work”
- **P** — Pause the game (if you’re playing IRL)
 
# ❗ Important
**PS:**  
To start the game, press the **“Start Button”**, you big idiot.
 
# Why We Chose [This Game Type]
- It reflect who we are as individuals and us as WECIB. Thank you for the happiest years of my life.
 
# Not Included
[Upgrades]: lack of time, Complete in next sprint if time permits <br>
[Tutorial]: Not implemented because of readme, low priority
 
# Recommendations for QA
- Test all player inputs
- Look for errors in game loop
- Check win/lose conditions under weird circumstances
 
# File Structure
. <br>        
├── README.md            - This file <br>
├── STANDUP_NOTES.md     - Daily standup's <br>
├── BLOCKERS.md          - Issues encountered & resolutions <br>
├── CODE_STYLE.md        - Coding guidelines <br>
├── DEMO.txt             - how to run the code <br>
├── index.html           - Webpage to show the game <br>
├── main.css             - Game styling <br>
├── main.js              - Main game code <br>
├── audio                - Folder for all the game music <br>
├── images               - Folder for all the game images <br>
├── Fonts                - Folder for all the game fonts <br>
└── KNOWN_ISSUES.md      - Detailed bug list <br>

# Technologies Used
- .md
- .js
- .css
- .html
 
# TimeLine
- Day 1: Spec design
- Day 2: Core development
- Day 3: Polish & testing
- Day 4: Make bugs
 
## Lessons Learned
- Afton learned how to do JavaScript. We learned to work together as a group.
 
## Contact
Questions about this game? Ask Angel, Afton, Christopher, or Marcus or check STANDUP_NOTES.md for context.
____________________________________________________________________________________________________________________________________________

# QA Fix Verification Report

**Game Tested:** Not WECIB Minecraft Simulator  
**Dev Team:** Christopher, Afton, Angel, Marcus P.  
**Date:** 2/16/26  

## Summary
- **Total Bugs from Week 6:** 4  
- **Bugs Verified as Fixed:** 3  
- **Bugs Still Present:** 1
- **Regressions Found:** 0  

## Bug Verification Details
For each bug reported in Week 6, document whether the fix worked.

### 1. Reset Mechanic Not Working
- **Original Issue:** After losing, the play again button doesn’t work  
- **Severity:** **Critical** / High / Medium / Low  
- **Status:** ☐ **Fixed** ☐ Still Present ☐ Partially Fixed  

**Verification Notes:** When you lose it does not allow a loop so the user can play again. Instead, it just goes to the screen the user saw before they lost. Put the location too the start of the game so the user starts there.

### 2. Pause Mechanic Not Actually Pausing Game
- **Original Issue:** Pause does not actually pause the game  
- **Severity:** Critical / **High** / Medium / Low  
- **Status:** ☐ **Fixed** ☐ Still Present ☐ Partially Fixed

 **Verification Notes:** Pausing just doesn't work intended while having the pause overlay on. Fixed by toggling overlay on and pausing on and vice versa when unpausing.

### 3. Sound Effects Not Properly Playing When Intended

- **Original Issue:** New bug reported by QA team  
- **Severity:** Critical / High / Medium / **Low**  
- **Status:** ☐ Fixed ☐ **Still Present** ☐ Partially Fixed  

**Verification Notes:**  When not playing Minecraft, the Minecraft music still plays. Changed the conditional when pausing to include checking if the user was playing Minecraft before pausing.

### 4. People Appearing Multiple Times

- **Original Issue:** Students walking and sitting on desks appear multiple times  
- **Severity:** Critical / High / **Medium** / Low  
- **Status:** ☐ Fixed ☐ **Still Present** ☐ Partially Fixed  

**Verification Notes:**  When playing the game the same character shows multiple times. Unable to fix since we can’t find the root cause.

### 5. Play Time Called Edge Instead of Play Time
- **Original Issue:** Not originally found  
- **Severity:** Critical / High / Medium / **Low**  
- **Status:** ☐ **Fixed** ☐ Still Present ☐ Partially Fixed

**Verification Notes:** Had to change within the .js file because it was continuously getting re

## Overall Assessment
**Game Status After Fixes:** We have our MVP and fixed the bugs found by QA Team. 
 
**Recommendation for Dev Team:** Fix multiple people appearing if needed

## Sign-Off
**QA Team:** Christopher, Afton, Angel, Marcus P.

**Verification completed:** 2/16/26

