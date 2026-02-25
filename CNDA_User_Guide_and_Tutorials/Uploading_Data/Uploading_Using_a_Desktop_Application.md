# Uploading Using the XNAT Desktop Client (DXM)

## Overview

The XNAT Desktop Client, also known as the Data Transfer Manager (DXM), is a standalone application used to upload and download imaging session data to CNDA (powered by XNAT).

It supports XNAT 1.7.5 and later and is available for:

- Windows  
- Mac OS  
- Linux  

The client is designed to anonymize and securely upload imaging sessions directly to CNDA.

---

## Downloading the Client

Download the latest version from:

https://download.xnat.org/desktop-client/

Under **Get the XNAT Desktop Client**, choose the version that matches your operating system.

If you are unsure which version to install, contact your IT department.

![Download Page](images/UploadUsingDesktopClient1.jpg)

---

## Installing the Client

Installation steps vary by operating system.  
You can read the official installation guide here in case needed:

https://wiki.xnat.org/xnat-tools/xnat-desktop-client-dxm/installing-the-xnat-desktop-client

---

## Installing on Windows

The Windows version includes an embedded Java Runtime Environment.

For best results, install on a native Windows system rather than a virtual environment.

### Installation Steps

1. Download the `.exe` installer.
2. Open the installer from your Downloads folder.
3. Click **Yes** if prompted to allow changes.
4. Complete the setup wizard.
5. Click **Finish**.

![Windows Setup](images/UploadUsingDesktopClient2.jpg)

After installation, the client will launch.

![Client Landing Page](images/UploadUsingDesktopClient3a.jpg)

---

## First-Time Setup

When launching the client for the first time, you must add the CNDA server.

1. Click **Add New XNAT Server**.

![Add Server](images/UploadUsingDesktopClient3b.jpg)

2. Enter:

    ```
    Server:   cnda.wustl.edu
    Username: your CNDA username
    Password: your CNDA password
    ```
    Note: server should always be exactly cnda.wustl.edu

3. Click **Login**.

![Login Screen](images/UploadUsingDesktopClient4.jpg)

Your connection settings will be saved for future sessions.

---

## Recommended Configuration

### Run as Administrator (Windows)

For improved stability:

- Right-click the desktop icon  
- Select **Run as Administrator**

If administrator access is not available, continue normally.

---

### Adjust Upload Concurrency

Reducing concurrency can prevent freezing during upload.

1. Click the **Settings (gear icon)** in the top right.
2. Select **User Settings**.
3. Locate **Upload Concurrency**.
4. Change the value to `1`.
5. Click **Save**.

![Concurrency Setting](images/Concurrency.jpg)

This forces uploads to run as a single stream.

---

### Proxy or Network Issues

The client uploads data via HTTPS to:

    ```
    https://cnda.wustl.edu
    ```

### If Uploads Freeze or Fail

If your upload freezes or fails to start:

- Ask your IT team to whitelist `cnda.wustl.edu`
- Ensure outbound HTTPS traffic is not blocked or routed through a restrictive proxy
- Review troubleshooting steps here:  
  [Desktop Uploader Troubleshooting Guide](https://cnda-help.wustl.edu/Troubleshooting_Issues_in_CNDA/Troubleshooting_Desktop_Uploader.html)
- If issues persist, contact: cnda-help@wustl.edu

---

# Uploading an Imaging Session

## Launch the Client

Open the XNAT Desktop Client and log in.

![Client Icon](images/UploadUsingDesktopClient5.jpg)

The Home page will display.

![Home Menu](images/UploadUsingDesktopClient6.jpg)

---

## Start Upload

1. Click **Upload Files**.

![Upload Button](images/UploadUsingDesktopClient7.jpg)

2. Select the destination **Project**.  
   Only projects you have access to will appear.

![Select Project](images/UploadUsingDesktopClient8.jpg)

### Message About Missing Anonymization Script

When selecting your project during upload, you may see this warning:

      ```
      Warning: No anonymization scripts found!
      Anonymization scripts are not set for this site or this project. Do you want to continue?
      ```

For most users, this message is **expected and not an error**.

It simply means that a server-side anonymization script is not configured for that project.  
This does **not** prevent uploading and does **not** indicate a problem.

You may safely click **Continue** and proceed with the upload.

Note:
If you are unsure whether your project should have an anonymization script, contact the CNDA team.

3. Click **Browse** and select the directory containing your image files.

![Browse Directory](images/UploadUsingDesktopClient9.jpg)

4. If prompted with anonymization options, select the file and click **Upload**.

![Upload Dialog](images/UploadUsingDesktopClient10.jpg)

---

## Subject and Session Setup

### If Subject Already Exists

- Select the subject from the dropdown menu.

### If Subject is New

1. Click **Create New Subject**.
2. Enter the **Subject ID**.
3. Click **Add New Subject**.

![Create Subject](images/UploadUsingDesktopClient12.jpg)

---

### Session Label

The session label auto-fills. You may modify it if needed.

> The session label must be unique within the project.

Review:

- Listed image series  
- Session summary  

Click **Next**.

![Session Review](images/UploadUsingDesktopClient13.jpg)

---

## PHI Visual Inspection

All images must be reviewed for burned-in PHI.

PHI includes:

- Patient names  
- Initials  
- Medical record numbers  
- Any identifying text  

### Review Steps

1. Select a series from the left panel.
2. Drag it into the viewer.
3. Scroll through all images.
4. Repeat for every series.
5. Click **Finish and Upload** when complete.

![Visual Inspection](images/UploadUsingDesktopClient14.jpg)

---

## Removing Burned-In PHI

If PHI is found:

1. Click the **Select Area** tool.
2. Draw a box around the PHI.
3. Apply to the series.
4. Click **Save Scan**.
5. Repeat for all affected series.
6. Click **Finish and Upload**.

![Remove PHI 1](images/UploadUsingDesktopClient15.jpg)
![Remove PHI 2](images/UploadUsingDesktopClient16.jpg)

---

## Monitor Upload Progress

The **Monitor Transfers** page displays upload status.

![Monitor Transfers](images/UploadUsingDesktopClient17.jpg)

When the **Status** column shows `Completed`, the upload is finished.

Click **Upload Another Session** to upload another session or close the client.

![Upload Another](images/UploadUsingDesktopClient18.jpg)

---

# Verifying Upload in CNDA

After upload completes:

1. Log in to CNDA.
2. Navigate to your project.
3. Select the subject.
4. Open the session.

![Subject Page](images/UploadUsingDesktopClient19.jpg)

Confirm:

- All expected series are present  
- Total file counts are correct  

![Session Top](images/UploadUsingDesktopClient20.jpg)
![Session Bottom](images/UploadUsingDesktopClient21.jpg)

---

Upload process complete.
