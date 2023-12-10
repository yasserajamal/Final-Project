StudAudio
Allowing Users to School On-The-Go with Audio.

StudAudio strives to alleviate stress for older adult students by providing them the flexibility to engage in readings and assignments using our app, even during commutes or while attending to family responsibilities. With this app, adult learners can conveniently accomplish tasks during their commutes, such as listening to readings in the form of podcasts, submitting assignments through audio, and taking and sharing notes with others.

Key Pages:
1. Sign in: Users can log in with their username/password, and includes options to sign up or reset forgotten password
2. Home Screen: Contains the list of all classes a user is currently enrolled in
3. Class Screen: This includes the options of reaching the assignments, notes, and reading tasks
   - Simple Task: Submitting assignments (user can listen or read the question, and submit an answer through speech)
   - Moderate Task: Read or listen to readings
   - Complex Task: Create and share a note (user can create a note, edit the note content and name, and share it with others through messages, gmail, slack, etc)
5. Connect Screen: Classmates taking the same courses are recommended, and users have the option to swipe right and send a connection request
6. FAQ Screen: List of frequently asked questions and answers

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

Audio not working:
Try refreshing the app, or testing on a simulator with iOS 15.x or less

Ejecting from Expo:
If needed, you can eject from Expo to a bare workflow for more control over native code. Use expo eject and follow the prompts.

Check for Detailed Errors in Xcode:

For more specific build errors, open the .xcworkspace file in Xcode and try running the app to get detailed error logs.
Additional Notes

Always ensure that your local environment matches the app's required versions for Node.js, npm, Expo CLI, and Xcode.
For any specific errors or issues, refer to the error logs in the terminal or Xcode for more details.

Wizard of Oz Items:
1. Connection Profiles:
   - Profiles will be suggested to the user based on preferences for proximity and if taking the same courses.
2. Course List:
   - Ideally, users will be able to add the courses they are enrolled in. Our app simulates the experience of being enrolled in courses.
3. Assignments:
   - Generally, assignments will be provided to the user based on their course enrollment.

Hard-Coded Aspects:
1. Names of the courses
2. Connection profiles recommend
3. User Profile
4. List of Readings
5. List of Assignments 

Style Guide: 
- For headings, we used Georgia and for actual screen contents we used: Arial. For titles, the font is 50, for other text 15-20

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





