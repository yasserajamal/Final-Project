import { useState, useEffect } from "react";
import {
  ResponseType,
  useAuthRequest,
  makeRedirectUri,
} from "expo-auth-session";

import * as WebBrowser from "expo-web-browser";
import getEnv from "../env";

const {
    REDIRECT_URI,
    SCOPES,
    CLIENT_ID,
    ALBUM_ID,
    CANVAS_API: { DISCOVERY },
  } = getEnv();
  
  // needed so that the browser closes the modal after auth token
  WebBrowser.maybeCompleteAuthSession();
  
  const useCanvasAuth = () => {
    const [token, setToken] = useState(null);
    const [request, response, promptAsync] = useAuthRequest(
        {
          responseType: ResponseType.Token,
          clientId: CLIENT_ID, //
          scopes: SCOPES,
          // In order to follow the "Authorization Code Flow" to fetch token after authorizationEndpoint
          // this must be set to false
          usePKCE: false, //true to sign in to a different account
          // makeRedirectUri
          redirectUri: REDIRECT_URI, //'exp://10.34.99.44:8081'
        },
        DISCOVERY
      );
  }

  export default useCanvasAuth;