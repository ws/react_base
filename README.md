# React Base
### An opinionated starter structure for React projects

---

#### Problem: I really love the simplicity of [create-react-app](https://github.com/facebookincubator/create-react-app), but I hate the default directory structure

#### Solution: Create my own

---

Changes between the standard setup and mine:
- Clean up the index.html file (make it as minimal as humanly possible- I can add Android support and all that fun stuff if I decide I need it)
- Create a components directory (personal preference)
- Every JS file except index.js and registerServiceWorker.js has a .jsx extension (this is helpful when dealing with editors that choose syntax based on file extension)
- Move CSS to it's own directory (because obviously)
- registerServiceWorker.js is moved to /lib (not a CLUE why it's in root in the first place)
