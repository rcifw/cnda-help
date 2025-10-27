# XNAT Desktop Client Upload Troubleshooting

## **Symptom**

Your uploads in the XNAT Desktop Client appear *stuck*.
The progress bar does not move, and the uploaded session never appears in CNDA.

---

## **Step 1 – Confirm You Can Log In to CNDA**

1. Open your browser and go to [https://cnda.wustl.edu](https://cnda.wustl.edu).
2. Sign in using the same username and password used in XNAT Desktop Client.
3. **If login works →** proceed to Step 2.
4. **If login fails →** reset or confirm your CNDA password first.

---

## **Step 2 – Check that the Client Loads Configurations**

1. Open XNAT Desktop Client.
2. Confirm that you can:

   * Log in successfully
   * View your list of projects
   * See configuration options load without errors
   * Reach the upload screen, even if the progress bar is stuck
3. The server address must be **exactly**:

   ```
   cnda.wustl.edu
   ```

   There should be nothing after `.edu` (no slashes or sub-URLs).
4. **If you can browse projects normally →** proceed to Step 3.
5. **If you get connection errors →** check your internet or VPN and ensure you’re targeting the correct URL.

---

## **Step 3 – Verify the Upload Actually Starts**

One way to verify if your process has reached the beginning of uploading is to check if an empty Subject was made on the CNDA website.

1. Open your browser and go to [https://cnda.wustl.edu](https://cnda.wustl.edu).
2. Sign in using the same username and password used in XNAT Desktop Client.
3. Search for your project in the top right and open it.
4. If your XNAT Desktop app upload included making a new Subject, the new Subject should be visible with nothing in it.
5. If the new subject is visible, that means you got to the point where the uploading should begin, via **POST** request.
6. But your uploading is stuck, so you don't see anything in the subject.

If an upload never progresses past the loading screen, your computer may not be able to send **POST** requests (used for file transfers).
You can test this easily in the next step.

---

## **Step 4 – Test POST Requests**

1. Press **⊞ Win + R** → type `cmd` → press **Enter**.
2. In the Command Prompt window, type:

   ```bash
   curl -X POST -u yourusername https://cnda.wustl.edu/data/JSESSION
   ```
3. Enter your CNDA password when prompted (password input is invisible).
4. Press Enter.
5. Results:

   * If you receive a response containing a `JSESSIONID` → POST works → go to Step 5.
   * If you get a network or permission error → POST requests are being blocked → skip to Step 7.

### **Identifying POST Request Blocking**

When testing POST requests using the following command:

```bash
curl -X POST -u yourusername https://cnda.wustl.edu/data/JSESSION
```

certain error messages may indicate that your institution or network is blocking outbound POST traffic.

**Common error patterns:**

* `curl: (7) Failed to connect to cnda.wustl.edu port 443: Connection timed out` – The network is dropping or filtering HTTPS POST packets.
* `curl: (7) Couldn't connect to server` – The firewall is blocking the outbound connection.
* `curl: (35) SSL connect error` – HTTPS handshake failed due to SSL inspection or proxy interference.
* `curl: (56) Recv failure: Connection was reset` – The request was terminated mid-transfer, often by a content filter.
* `curl: (60) SSL certificate problem: unable to get local issuer certificate` – A proxy has replaced CNDA’s certificate, indicating SSL inspection.
* `curl: (22) The requested URL returned error: 403 Forbidden` – The proxy or gateway is explicitly rejecting POST requests.
* **HTML error page (e.g., “Access Denied” or “403 Forbidden”)** – A web security gateway returned a blocked-request page instead of JSON, confirming POST blocking.

**Normal (working) response:**

```json
{"JSESSIONID":"ABC1234567890XYZ"}
```
## **Step 5 – If POST Requests Work, Clear Cached Data**

1. Press **⊞ Win + R** → type `%AppData%` → press **Enter**.
2. Open the **Roaming** folder → delete the folder named **XNAT Desktop Client** which is inside of Roaming.
3. Restart XNAT Desktop Client.
4. On the home screen, delete any saved servers.
5. Click Add New XNAT Server and enter:

   ```
   https://cnda.wustl.edu
   ```
6. Log in again.
7. *(Optional)* Click the blue **Home** button → **Flush XNAT User Access Cache**.
8. Retry your upload.

   * If uploads now work → problem solved.
   * If not → continue to Step 6.

---

## **Step 6 – Confirm the CNDA Certificate is Valid**

1. Open [https://cnda.wustl.edu](https://cnda.wustl.edu) in a browser.
2. Do NOT log in yet.
3. Click the padlock 🔒 → **Connection is Secure** or **View Certificate**.
4. Depending on your browser, here you may need to click on something that looks like a certificate or **Certificate is Valid**
5. It should say:

   * **Valid** and **Trusted**
   * **Issued to:** *InCommon RSA Server CA 2*
6. Log in to CNDA now and after login check the lock/certificate again.

   * **If certificate stays the same →** that is good, skip ahead.
   * **If certificate changes after login →** contact IT to whitelist `cnda.wustl.edu` so its certificate is not replaced by that of your institution.

---

## **Step 7 – If POST Requests Fail Everywhere**

If the `curl POST` test fails, your **network firewall** is blocking POST traffic.
Contact your institutional IT team and provide this message:

> “Outbound HTTPS POST requests to `https://cnda.wustl.edu` are being blocked.
> Please whitelist this endpoint so uploads from XNAT Desktop Client can succeed.”

---

## **Final Notes**

* Always connect to **exactly**:

  ```
  cnda.wustl.edu
  ```
* The most common fix: delete the **XNAT Desktop Client** folder under
  `%AppData%\Roaming`.
* If that doesn’t help, it’s almost always a **network POST blocking** issue.
* Once POST requests are allowed, uploads typically resume immediately.


