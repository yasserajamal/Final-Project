import { Platform } from "react-native";
// ***** TODO: Fill in your constants here ***** //
const CLIENT_ID = "TODO";
const REDIRECT_URI = "exp://10.34.98.49:8081"; 
// any other constants?
// ********************************************* //

const redirectUri = (uri) => {
    if (!uri) {
      const err = new Error(
        "No redirect URI provided.\nPlease provide a redirect URI in env.js.\n You can find the file in utils/env.js."
      );
      console.error(err);
      alert(err);
    }
    return Platform.OS === "web" ? "http://localhost:19006/" : uri;
  };
  const ENV = {
    CLIENT_ID: CLIENT_ID,
    SCOPES: [
      "user-read-currently-playing",
      "user-read-recently-played",
      "user-read-playback-state",
      "user-top-read",
      "user-modify-playback-state",
      "streaming",
      "user-read-email",
      "user-read-private",
    ],
    REDIRECT_URI: redirectUri(REDIRECT_URI),
    CANVAS_API: {
      // Endpoints for auth & token flow
      DISCOVERY: {
        authorizationEndpoint: "https://canvas.stanford.edu/login/oauth2/auth",
        tokenEndpoint: "https://canvas.stanford.edu/login/oauth2/token",
      },
    },
  };
  
  const getEnv = () => ENV;
  export default getEnv;
  // ^ use this type of exporting to ensure compliance with webpack and expo-web