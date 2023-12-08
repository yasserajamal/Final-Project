StudAudio
Description: Allowing Users to School On-The-Go with Audio. 
Style Guide:
For headings, we used Georgia and for actual screen contents we used: Arial. For titles, the font is 50, for other text 15-20

Features:
1. Full Authentication using firebase: StuAudio allows users to sign up for an account, sign in/out and reset password using their email.
2.  StuAudio has four bottom tabs which the user can use to quickly 

Tasks 
1. Complete Sign in: In Progress YJ
    a. this includes username/password, forgot password, 
    b. canvas page
    c. sign up page
    d. Apple page (stretch goal)
2. Home Screen: List of all classes, top and bottom navigation bar (YJ)
3. Class Screen: this includes the profile pic,  bottom buttons (help, quick record, classes)and options of Assignments, Notes, Recordings, and Readings
4. Simple Task: Submitting Assignments
    1. 

5. Moderate Task: Convert Reading
    a. List of Notes screen + Button to create a new note
    b. rename feature for notes
6. Complex Task: Create and share a note
   1. Share screen (similar to sign in includes messages, gmail slack etc)
   2. sharing messages, can make a screen of what it looks like. 
   3. add a STOP screen. 

Installation Guide: 

Install Node.js and npm:
    Ensure you have Node.js and npm installed on your machine. You can download them from Node.js official website.
Install Expo CLI:
Install Expo CLI globally using npm by running npm install -g expo-cli in your terminal.
Install Xcode (for iOS Simulator):
    Download and install Xcode from the Mac App Store if you plan to use the iOS simulator.
Open Xcode and accept the license agreement.
    Install Xcode Command Line Tools by running xcode-select --install in the terminal.

Clone the App Repository:
    Clone the app's repository to your local machine.
Install Dependencies:
    Navigate to the project's root directory in the terminal and run npm install.
Running the App in Simulator
Start Expo:
    In the project's root directory, run expo start.
    This will start the Expo development server and open a new tab in your web browser with the Expo developer tools.
Open the Simulator:
    In the Expo developer tools in your browser, click on "Run on iOS simulator" 
    This should open the respective simulator and start building the app.

Common Issues: 

Invariant Violation - Native Module Doesn't Exist:
If you encounter an error about a missing native module, ensure that all dependencies are properly installed. Run npm install again in the project root.
Build Issues:
If the build fails, try cleaning the project in Xcode (Product -> Clean Build Folder) and rebuild it.
Simulator Doesn't Launch:
Make sure Xcode is correctly installed with all necessary components.
If the simulator doesn't start automatically, open it manually from Xcode (Xcode -> Open Developer Tool -> Simulator).

Ejecting from Expo:
If needed, you can eject from Expo to a bare workflow for more control over native code. Use expo eject and follow the prompts.

Check for Detailed Errors in Xcode:

For more specific build errors, open the .xcworkspace file in Xcode and try running the app to get detailed error logs.
Additional Notes

Always ensure that your local environment matches the app's required versions for Node.js, npm, Expo CLI, and Xcode.
For any specific errors or issues, refer to the error logs in the terminal or Xcode for more details.


Resources

1. The Ultimate Guide to the Hamburger Menu and Its Alternatives (https://uxplanet.org/the-ultimate-guide-to-the-hamburger-menu-and-its-alternatives-e2da8dc7f1db)
2. Custom Bottom Tab Navigator in React Native (https://www.youtube.com/watch?v=gPaBicMaib4)
3. Authentication using FireBase (https://www.youtube.com/watch?v=ONAVmsGW6-M)
4. Options for building React Native collapsible accordions(https://blog.logrocket.com/building-react-native-collapsible-accordions/)

5. REACT NAVIGATION GUIDE (https://reactnavigation.org/docs)
6. How to Build React Native Swipe Cards Inspired by Tinder (https://instamobile.io/react-native-controls/react-native-swipe-cards-tinder/)
7. react-native-deck-swiper (https://www.npmjs.com/package/react-native-deck-swiper)
8. Expo Audio (https://docs.expo.dev/versions/latest/sdk/audio/)
9. React Native Voice (https://www.npmjs.com/package/@react-native-voice/voice?activeTab=readme)
10. Expo-Speech https://docs.expo.dev/versions/latest/sdk/speech/





