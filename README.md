# Real Time Bus Tracker
This project tracks buses on bus line 1 in boston using the MBTA API. Each bus will be a different color. The map updates every 15 seconds so that you can follow along with where the buses are.

## How To Run
In order to mapbox.com and create an account. Once you have the account, go into your account settings and find the box that says **Default Public Token**. Copy the token, open mapanimation.js and insert it on line 1 next to `const accessToken = ` after the equals sign (make sure to surround key with quotation marks).

Once the setup above is complete, to run the project, open your favorite internet browser and find the index.html file in your file browser. Then click-and-drag the index.html file onto your browser. You should see a map pop-up with a button that says **Start Bus Tracker**. Hit the button and you should see all the buses currently running come up. The map will automatically update every 15 seconds and you should see the buses moving.

## Future Improvements
In the future I would like to add:
- ID numbers of the buses on mouse hover
- Lines showing where the buses have been
- A line showing the bus route
- Switching on/off of different lines

## MIT License
Copyright (c) 2022 Cody Ciaschi

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
