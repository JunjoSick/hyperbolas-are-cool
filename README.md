# 🌍 HYPERBOLAS ARE COOL 🌍

**(Also known as the Seismic Epicenter Localization Simulator)**

Ever wondered how scientists pinpoint where the Earth decided to throw a wobbly? Wonder no more! This interactive gizmo lets you play seismologist by clicking on a map to place "seismic stations" and watch the magic of hyperbolas (mostly) triangulate an earthquake's epicenter.

It's educational! It's interactive! It's... got some quirks!

## How it (Mostly) Works 🤓

1.  **Clicky Stations:** You click, a station appears. Science!
2.  **Secret Quake:** We hide an earthquake epicenter somewhere. Shhh, it's a secret (until you find it).
3.  **Wave Math (Simplified):** Each station "detects" P-waves and S-waves (you don't see them, just trust us). The time difference helps draw:
    *   **1 Station:** A "Circle of Maybe It's Here?"
    *   **2 Stations:** A "Hyperbola of Getting Warmer!"
    *   **3 Stations:** Two hyperbolas that *should* cross right on the money. We even use fancy Turf.js to find that exact spot for the marker!
4.  **Optional Chaos:** Toggle a third hyperbola if you like your maps extra spicy.
5.  **Speak My Language:** Available in English and Italiano because earthquakes are a global concern (and so is good UI).

## Limitations & Quirks (aka "Vibecoded™️ Features") 😵‍💫

This project was built with enthusiasm, a sprinkle of caffeine, and a healthy dose of "vibecoding." This means while it demonstrates the core principles, it's not quite ready to predict the next Big One.

*   **2D World Problems:** We're finding the *epicenter* (surface point). The actual earthquake *hypocenter* is 3D. We don't do 3D. Too many dimensions.
*   **Perfect Data Fantasy:** Real seismic data is noisy. Our data is pristine, like a freshly wiped whiteboard. This makes finding the epicenter suspiciously easy.
*   **Hyperbola Hiccups:**
    *   Sometimes, if your stations are in a weird line or too close to the (secret) epicenter, the math for drawing a hyperbola arm gets a bit shy and might not draw perfectly or at all. It's not you, it's the geometry.
    *   The "True Epicenter" marker is placed at the *geometric intersection* of the drawn lines. If the lines themselves are slightly off due to map projection or our drawing math, the marker will be at *their* intersection, which might be a pixel or two off the *actual* mathematical ideal. We call this "artistic license."
*   **Label Acrobatics:** Permanent hyperbola labels try their best to stay on the line. Sometimes they do a little dance.
*   **"Near First Point" Spawning:** The epicenter spawns "near" your first click. "Near" is a relative term, defined by a random number generator that's had its morning coffee.
*   **Vibecoded™️ Precision:** Some calculations and visual alignments were achieved through a process of "does it look right? Yeah, mostly. Ship it!" This is a feature, not a bug. It adds character.

## How to Run 🚀

1.  Clone this repo (or just download the `index.html`, `style.css`, and `script.js`).
2.  Open `index.html` in your favorite web browser.
3.  Click on the map.
4.  Marvel at the hyperbolas.
5.  Toggle options. Switch languages. Have fun!

## Future Tremors (Maybe... If the Vibes Are Right) ✨

*   Depth calculation for hypocenter? (Probably not, that's like, actual work).
*   More stations? (The UI might cry).
*   Actual seismic wave animations? (Fancy!)
*   Make hyperbola labels zoom-responsive? (CSS is hard sometimes).

---

Enjoy your journey into the slightly wobbly world of epicenter localization!
