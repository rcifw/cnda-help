# Troubleshooting XNAT Desktop Uploader

This guide explains how to troubleshoot common connection, authentication, certificate, and upload problems when using XNAT Desktop Uploader with CNDA.

## General Prerequisites to Upload Images

### Account Activity Requirement

You must have an active CNDA account. CNDA accounts are automatically disabled after **12 months (1 year) of inactivity**.

If your account becomes disabled, email cnda-help@wustl.edu to request reactivation. To keep your account active, log in regularly at https://cnda.wustl.edu.

### Alias Token Authentication

XNAT Desktop Uploader requires **alias token credentials** for authentication.

- Alias tokens are valid for **90 days**.
- Regular CNDA usernames and passwords cannot be used to authenticate in XNAT Desktop Uploader.
- If your alias token expires, generate a new token and reconnect.
- CNDA website authentication uses WashU Key SSO.

Do not share your alias token password with other users or CNDA support.

### Correct CNDA Server Address

The server address in XNAT Desktop Uploader must be exactly:

```text
cnda.wustl.edu
```

There should be nothing after `.edu`, including slashes or additional URL paths.

### Seeing Your CNDA Projects in the Application

If you cannot see your CNDA projects, or your permissions were recently updated, clearing your access cache may resolve the issue.

#### Clear Cache in the CNDA Website

1. Log in to https://cnda.wustl.edu using WashU Key SSO.
2. Click **Logged in as <your username>** in the top-right corner.
3. Select **Manage Cached Resources**.
4. Click **Reset Access Cache**.

#### Clear Cache in XNAT Desktop Uploader

1. Open XNAT Desktop Uploader.
2. Log in using your alias token credentials.
3. Click the large blue **MENU** button in the top-left corner.
4. Click **Flush XNAT User Access Cache**.

After clearing the cache, log out and back in before attempting another upload. If projects remain missing, contact CNDA support to verify permissions.

## Main Symptoms of Upload Problems

Common symptoms include:

- The upload progress bar does not move.
- The application appears stuck while uploading or archiving.
- The uploaded session never appears in CNDA.
- The application cannot connect to CNDA.
- The application reports `SELF_SIGNED_CERT_IN_CHAIN` or another certificate error.
- The application rejects alias token credentials.
- CNDA projects do not appear in the application.

## Step 0 - Ensure Data Is Saved Locally

1. Copy the imaging files to a local folder on your laptop or desktop.
2. Avoid uploading directly from cloud-synchronized folders, network drives, or external hard drives when troubleshooting.
3. Confirm the files are fully downloaded and accessible.
4. Retry from the local folder.

External storage does not always fail, but local storage eliminates potential file access and performance issues.

## Step 1 - Confirm You Can Log In to CNDA

1. Open https://cnda.wustl.edu in your browser.
2. Sign in using WashU Key SSO.
3. Confirm that you can access your account and projects.

**If login works:** Proceed to Step 2.

**If login fails:** Resolve the website authentication or account issue first.

Successful website login does not guarantee that your Desktop Uploader alias token is valid.

## Step 2 - Check XNAT Desktop Uploader Authentication and Configuration

1. Open XNAT Desktop Uploader normally.
2. Confirm that the server address is `cnda.wustl.edu`.
3. Log in using your current alias token credentials.
4. Confirm that you can:
   - Log in successfully.
   - View your CNDA projects.
   - Load application configuration options.
   - Reach the upload screen.
5. A message that no anonymization configuration is available may be normal for projects without custom anonymization settings.

### If Authentication Fails

- Are you using alias token credentials rather than your regular CNDA password?
- Has your alias token expired after 90 days?
- Is your CNDA account still active?
- Is the server address correct?

If the alias token expired, generate a new one and reconnect.

**If you can browse projects normally:** Proceed to Step 3.

**If you receive certificate or connection errors:** Proceed to Step 4.

## Step 3 - Verify Whether the Upload Reaches CNDA

If the upload involves creating a new Subject:

1. Open https://cnda.wustl.edu in your browser.
2. Sign in using WashU Key SSO.
3. Open the destination project.
4. Look for the new Subject created by XNAT Desktop Uploader.
5. Check whether the Subject exists and whether any imaging sessions are present.

### Understanding the Results

**New Subject exists, but no imaging session appears:** Subject creation succeeded. This does not prove that the imaging ZIP transfer started or completed.

**No new Subject exists:** The application may have failed before Subject creation, or the upload may be using an existing Subject.

**Session appears in CNDA:** Verify that the expected imaging data is present before considering the upload successful.

A missing session does not automatically mean the network blocks POST requests.

## Step 4 - Test HTTPS Connectivity and Certificate Trust

Before testing POST requests, verify that your computer can establish a trusted HTTPS connection to CNDA. These tests require no credentials.

### Windows (PowerShell)

```powershell
curl.exe -sS -o NUL https://cnda.wustl.edu/; if ($LASTEXITCODE -eq 0) { "`nCERTIFICATE TRUSTED`n" } else { "`nCERTIFICATE CHECK FAILED`n" }
```

### Linux (Terminal)

```bash
curl -sS -o /dev/null https://cnda.wustl.edu/ && printf '\nCERTIFICATE TRUSTED\n\n' || printf '\nCERTIFICATE CHECK FAILED\n\n'
```

### macOS (Terminal)

```bash
curl -sS -o /dev/null https://cnda.wustl.edu/ && printf '\nCERTIFICATE TRUSTED\n\n' || printf '\nCERTIFICATE CHECK FAILED\n\n'
```

### Understanding the Results

**CERTIFICATE TRUSTED:** curl established a trusted HTTPS connection to CNDA. This does not necessarily mean XNAT Desktop Uploader uses the same trust store.

**CERTIFICATE CHECK FAILED:** The request failed. Read the error message to distinguish certificate validation from DNS, VPN, firewall, or other connectivity problems.

### Common Curl Error Codes

| Error | Meaning |
|---|---|
| `curl: (6)` | DNS resolution failed |
| `curl: (7)` | Connection could not be established |
| `curl: (28)` | Connection timed out |
| `curl: (35)` | SSL/TLS handshake failed |
| `curl: (56)` | Connection interrupted or reset |
| `curl: (60)` | Certificate verification failed |

If you receive `curl: (60)`, investigate the certificate chain and trusted certificate authorities. If curl succeeds but the Uploader fails, investigate the application's certificate trust configuration.

## Step 5 - Check the CNDA Certificate in Your Browser

Some institutional networks use HTTPS inspection, which can replace certificates presented to applications.

### Check Before Logging In

1. Open https://cnda.wustl.edu.
2. Do not log in yet.
3. Click the padlock or connection information icon next to the website address.
4. Open the certificate details.
5. Confirm that the browser reports a secure connection.
6. Record the website hostname, certificate issuer, certificate subject, and validity dates.

The certificate should be valid for `cnda.wustl.edu`, and its chain should be trusted. CNDA certificates may be issued through InCommon or another trusted CA; do not assume one issuer name must always appear.

### Check After Logging In

1. Sign in using WashU Key SSO.
2. Return to `https://cnda.wustl.edu` after authentication.
3. Open the certificate details again.
4. Compare the issuer and subject with the values recorded before login.

### Understanding the Results

**Certificate trusted and consistent:** Expected behavior.

**Issuer changes while the hostname remains cnda.wustl.edu:** Different proxies, network paths, or security systems may be presenting different certificates. Contact institutional IT.

**Certificate changes while visiting another hostname:** This may be normal because WashU Key SSO redirects to other authentication services. Compare only the same hostname.

**Browser reports an untrusted certificate:** Contact institutional IT with the certificate details.

## Step 6 - Troubleshoot SELF_SIGNED_CERT_IN_CHAIN

The error `SELF_SIGNED_CERT_IN_CHAIN` means XNAT Desktop Uploader cannot establish a trusted certificate chain for an HTTPS connection. It does not necessarily mean CNDA uses an invalid or self-signed server certificate.

### Common Causes

1. An institutional firewall or proxy performs HTTPS inspection.
2. The application does not trust the CA used by the institution.
3. An intermediate certificate is missing or not trusted.
4. The application's certificate trust store differs from the operating system or browser.

### Recommended Troubleshooting

1. Run the HTTPS test from Step 4.
2. Inspect the certificate in the browser using Step 5.
3. Confirm the Uploader version is current.
4. Ask whether the institution uses HTTPS inspection.
5. Contact institutional IT if necessary.

If the browser and curl trust the certificate but the Uploader still fails, investigate the application's certificate trust configuration. Do not disable SSL verification as a permanent workaround.

## Step 7 - Test HTTPS POST Requests

If HTTPS connectivity and certificate validation work, test whether authenticated POST requests can reach CNDA. A POST failure does not automatically mean POST traffic is blocked.

### Windows (Command Prompt)

1. Press **Win + R**, type `cmd`, and press Enter.
2. Replace `YOUR_ALIAS_USERNAME` with the username from your current alias token:

   ```cmd
   curl.exe -i -X POST -u YOUR_ALIAS_USERNAME https://cnda.wustl.edu/data/JSESSION
   ```

3. When prompted, enter the password associated with your alias token. The password will not appear as you type.

### Linux / macOS (Terminal)

```bash
curl -i -X POST -u YOUR_ALIAS_USERNAME https://cnda.wustl.edu/data/JSESSION
```

Enter your alias token password when prompted. Do not include the password directly in the command.

### Understanding the Response

A successful response may include a session identifier, depending on supported authentication behavior, for example:

```json
{"JSESSIONID":"ABC1234567890XYZ"}
```

**Important:** CNDA support should confirm that `/data/JSESSION` accepts alias token credentials and what response it returns before using this as a definitive success test.

| Result | Interpretation |
|---|---|
| Successful authenticated response | The tested HTTPS POST was accepted |
| `401 Unauthorized` | Authentication failed or credentials rejected |
| `403 Forbidden` | Server or intermediary denied access |
| `404 Not Found` | Endpoint not found |
| `curl: (35)` | TLS handshake problem |
| `curl: (56)` | Connection interrupted or reset |
| `curl: (60)` | Certificate verification failed |
| HTML security-blocking page | Proxy or gateway may have intercepted the request |

A successful POST to this endpoint does not prove large imaging uploads will work. Examine failed responses before concluding that an institutional firewall blocks POST traffic.

## Step 8 - Clear XNAT Desktop Uploader Application Cache

If authentication and connectivity tests succeed but uploading still fails, clearing the cache may help.

### Simple Method

1. Open XNAT Desktop Uploader.
2. Click the **Settings Cogwheel** in the top-right corner.
3. Select **Debug**.
4. Click **Clear Application Cache**.
5. Completely close the application.
6. Reopen it and retry the upload.

### Alternative Method for Windows

Use this only if clearing the cache in the application does not resolve the issue.

1. Completely close XNAT Desktop Uploader.
2. Press **Win + R**.
3. Enter `%AppData%`.
4. Locate the folder `XNAT Desktop Client`.
5. Rename it to `XNAT Desktop Client.backup`.
6. Reopen XNAT Desktop Uploader.
7. Remove outdated saved server connections if they remain.
8. Add a new server: `cnda.wustl.edu`.
9. Log in using your current alias token credentials.
10. Retry the upload.

Renaming preserves a backup but may reset saved connections and preferences. Have your alias token credentials available.

## Step 9 - If Uploads Still Fail

Gather the following before contacting CNDA support:

1. Operating system: Windows, macOS, or Linux.
2. XNAT Desktop Uploader version.
3. Exact error message or screenshot.
4. Whether the CNDA website works in a browser.
5. Whether the alias token is current.
6. Whether CNDA projects are visible.
7. HTTPS certificate test result.
8. POST test result, if performed.
9. Whether connected through VPN, institutional network, or home network.
10. Whether an empty Subject or partial session appears in CNDA.

Do not include passwords, alias token secrets, or session identifiers in screenshots or support messages.

### If the Network Appears to Be Blocking Traffic

Contact institutional IT with the following message:

> We are experiencing connectivity or upload problems with XNAT Desktop Uploader when connecting to https://cnda.wustl.edu.
>
> Please investigate whether institutional firewall rules, HTTPS inspection, proxy filtering, or security software are interfering with connections or file uploads to this endpoint.
>
> If HTTPS inspection is causing certificate validation failures, please evaluate whether an appropriate exemption can be configured for cnda.wustl.edu.

### If the Problem Appears Specific to XNAT Desktop Uploader

If browser access and curl certificate validation succeed but the application fails, contact **cnda-help@wustl.edu**. Include the error, operating system, application version, and troubleshooting results.

## Common Error Messages

### Authentication Errors

**Invalid username or password:** Confirm that you are using alias token credentials rather than regular CNDA login credentials.

**Authentication fails after previously working:** The alias token may have expired. Tokens are valid for 90 days. Generate a new one and reconnect.

### Certificate Errors

**SELF_SIGNED_CERT_IN_CHAIN:** The application cannot establish a trusted certificate chain. Check for HTTPS inspection or differences between the application and operating system trust stores.

**curl: (60) SSL certificate problem:** Certificate verification failed; the CA or certificate chain may not be trusted.

**schannel: CRYPT_E_NO_REVOCATION_CHECK:** Windows could not complete a certificate revocation check, possibly because revocation information is inaccessible. This does not establish that POST traffic is blocked.

### Connection Errors

**curl: (6) Could not resolve host:** DNS could not resolve the server hostname.

**curl: (7) Failed to connect:** The connection could not be established.

**curl: (28) Operation timed out:** Network restrictions, connectivity problems, or an unresponsive server may be responsible.

**curl: (35) SSL connect error:** The TLS handshake failed.

**curl: (56) Recv failure: Connection was reset:** The connection was interrupted or closed by a proxy, firewall, server, or another network component.

### HTTP Errors

**401 Unauthorized:** Authentication was not accepted.

**403 Forbidden:** Access was denied by the application or an intermediary. This does not prove all POST requests are blocked.

**HTML Access Denied page:** A security gateway may have intercepted the request. Record details and contact institutional IT or CNDA support.

## Final Notes

- Always connect to `cnda.wustl.edu`.
- Use alias token credentials for Desktop Uploader authentication.
- Alias tokens expire after 90 days.
- CNDA accounts are disabled after 12 months of inactivity.
- Use WashU Key SSO for the CNDA website.
- Keep imaging files on local storage when troubleshooting.
- Test HTTPS connectivity and certificate trust before investigating POST requests.
- A successful browser connection does not guarantee the Uploader trusts the same certificate.
- A failed POST does not automatically mean POST traffic is blocked.
- Clear application cache after checking basic connectivity and authentication.
- Never disable SSL verification as a permanent workaround.
- Never share alias token passwords or session identifiers.

For assistance, contact **cnda-help@wustl.edu**.
