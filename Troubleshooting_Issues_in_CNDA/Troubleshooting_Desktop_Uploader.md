# Troubleshooting XNAT Desktop Uploader

## General prerequisites to be able to upload imagees

The following conditions must be met by everyone in order to upload images to CNDA.

### Account Activity Requirement

You must have an active CNDA account.

CNDA accounts require activity at least once every 6 months.

Accounts that remain inactive for 6 months are automatically disabled and uploads will not be allowed with an inactive account.

If your account becomes disabled, email cnda-help@wustl.edu to request reactivation.

### Seeing your CNDA Projects in the Application

Some people say I cannot see my CNDA projects inside this application.

If you are missing project access, or recently had permissions updated, clearing your CNDA cache often resolves the issue.

#### Clear cache in the CNDA website

1. Log in to CNDA: https://cnda.wustl.edu
2. Click the link in the top-right corner that says **Logged in as \<your username\>**.
3. Select the **Manage Cached Resources** tab.
4. Click **Reset Access Cache**.

#### Clear cache in the XNAT Desktop Client

1. Open the XNAT Desktop Client.  
2. Log in using your CNDA username and password.  
3. In the top left corner, click the large blue **MENU** button.  
4. Click **Flush XNAT User Access Cache**.

After clearing the cache, log out and back in to XNAT Desktop Uploader before trying your upload again.

## **Main Symptom of Upload Problems**

Your uploads in the XNAT Desktop Client appear *stuck*.
The progress bar does not move, and the uploaded session never appears in CNDA.

## **Step 1 – Confirm You Can Log In to CNDA**

1. Open your browser and go to [https://cnda.wustl.edu](https://cnda.wustl.edu).
2. Sign in using the same username and password used in XNAT Desktop Client.
3. **If login works →** proceed to Step 2.
4. **If login fails →** reset or confirm your CNDA password first.

## **Step 2 – Check that the Client Loads Configurations**

1. Open XNAT Desktop Client, ideally by right clicking the app and pressing Run as Administrator.
2. If you can not run as administrator, just open it normally by double clicking the app.
3. Confirm that you can:

   * Log in successfully
   * View your list of projects
   * See configuration options load without errors
   * Do not worry about the no anonymization popup message - that is only for people with custom anonymization set up
   * Reach the upload screen, even if the progress bar is stuck
4. Note: The server address when logging in to the server must be **exactly**:

   ```
   cnda.wustl.edu
   ```

   There should be nothing after `.edu` (no slashes or sub-URLs).
5. **If you can browse projects normally →** proceed to Step 3.
6. **If you get connection errors →** check your internet or VPN and ensure you’re targeting the correct URL. Also consider clearing cache as mentioned above.

## **Step 3 – Verify the Upload Actually Starts**

If your upload process includes making a new Subject, one way to verify if your attempt has reached the beginning of uploading is to check if an empty Subject was made on the CNDA website.

1. Open your browser and go to [https://cnda.wustl.edu](https://cnda.wustl.edu).
2. Sign in using the same username and password used in XNAT Desktop Client.
3. Search for your project in the top right and open it.
4. If your XNAT Desktop app made a new Subject, the new Subject should be visible in CNDA with nothing in it.
5. If the new Subject is visible, that means you got to the point where the uploading should begin, via **POST** request.
6. But your uploading is stuck, so you don't see anything uploaded in the Subject.

If an upload never progresses past the loading screen, your network may be blocking **POST** requests (used for file transfers).
You can test this easily in the next step.

## **Step 4 – Test POST Requests**

1. Press **⊞ Win + R** → type `cmd` → press **Enter**.
2. In the Command Prompt window, type or copy over:

   ```bash
   curl -X POST -u yourusername https://cnda.wustl.edu/data/JSESSION
   ```
3. In the command above replace yourusername with your CNDA username and press Enter to run it.
4. Enter your CNDA password when prompted (password input is invisible).
5. Press Enter.

**Normal (Post request is working) response:**

```json
{"JSESSIONID":"ABC1234567890XYZ"}
```
   
6. What to do:

   **If you receive a good response containing a `JSESSIONID`** → POST request works → go to Step 5.
   **If you specifically get a network or permission error** → POST requests are being blocked → skip to Step 7.

## Common error messages

These errors may appear when testing POST requests with the `curl` command given above. Not all of them mean that POST traffic is blocked. Pay attention to which category the error falls into.

#### Connection-level failures (network connectivity issues)

* `curl: (7) Failed to connect to cnda.wustl.edu port 443: Connection timed out`  
  The network is blocking or dropping outbound HTTPS connections entirely.

* `curl: (7) Couldn't connect to server`  
  A firewall or network rule is preventing the connection from being established.

These errors indicate basic network connection problems, not application-level blocking.

#### TLS / certificate-related failures (SSL inspection or trust issues)

* `curl: (35) SSL connect error`  
  The TLS handshake failed. This often occurs due to SSL inspection, proxy interference, or certificate validation issues. This does not, by itself, indicate POST blocking.

* `curl: (35) schannel: CRYPT_E_NO_REVOCATION_CHECK`  
  Windows could not complete certificate revocation checking. The TLS handshake failed before the POST request was sent. This indicates a certificate validation or network restriction issue, not blocked POST traffic.

* `curl: (60) SSL certificate problem: unable to get local issuer certificate`  
  The certificate chain cannot be validated. This commonly means a proxy or security appliance has replaced the server certificate.

These errors occur before any POST request is processed by CNDA. They have to do with the security certificate.

#### Connection termination during transfer

* `curl: (56) Recv failure: Connection was reset`  
  The connection was forcibly closed mid-request, often by a firewall, proxy, or content filter. This may indicate filtering of upload traffic but is not definitive on its own.

#### Application-level blocking (true POST rejection)

* `curl: (22) The requested URL returned error: 403 Forbidden`  
  The request reached the server or gateway, but POST requests are explicitly being denied.

* HTML error page (e.g., “Access Denied” or “403 Forbidden”)  
  A security gateway intercepted the request and returned a blocking page instead of JSON. This strongly indicates POST blocking.


## **Step 5 – If POST Requests Work, you may have to clear your Cached Data**

1. Press **⊞ Win + R** → type `%AppData%` → press **Enter**.
2. Open the **Roaming** folder
3. Delete the folder named **XNAT Desktop Client** which is located inside of the Roaming folder.
4. Completely Close and Restart XNAT Desktop Uploader.
5. On the home screen, remove any saved server connections by clicking on the connection and then **Remove** in the pop up window.
6. Click **Add New XNAT Server** and enter:

   ```
   cnda.wustl.edu
   ```
7. Log in again and see if uploading works.

## **Step 6 – Confirm the CNDA Certificate is Valid**

Some institutional networks replace SSL security certificates after login.

1. Open [https://cnda.wustl.edu](https://cnda.wustl.edu) in a browser.
2. Do NOT log in yet.
3. Click the padlock 🔒 or button right to the left of website url → **Connection is Secure** or **View Certificate**.
4. Depending on your browser, here you may need to click on something that looks like a certificate or **Certificate is Valid**
5. It should say:

   * **Valid** and **Trusted**
   * **Issued to:** *InCommon RSA Server CA 2*
6. Log in to CNDA now and after login check the lock/certificate again.

   * **If certificate stays the same →** that is good, skip ahead.
   * **If certificate changes after login →** contact IT to whitelist `cnda.wustl.edu` so its certificate is not replaced by that of your institution.

## **Step 7 – If POST Requests Fail Everywhere**

If the `curl POST` test fails, your **network firewall** is blocking POST traffic.
Contact your institutional IT team and provide this message:

> “Outbound HTTPS POST requests to `https://cnda.wustl.edu` are being blocked when using their uploading application.
> Please whitelist this endpoint so uploads from XNAT Desktop Client can succeed.”

## **Final Notes**

* Always connect to **exactly**:

  ```
  cnda.wustl.edu
  ```
* The most common error is that institutions have strict security software that blocks POST requests.
* Once POST requests are allowed by institution, uploads typically resume immediately.
* Some people also have cache issues and need to clear their cache.


