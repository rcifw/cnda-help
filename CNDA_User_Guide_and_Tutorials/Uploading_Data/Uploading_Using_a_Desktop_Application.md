#  Uploading Using a Desktop Application

### Uploading Using XNAT Desktop Client 

The XNAT Desktop Client, or "Data Transfer Manager" (DXM), is a full-featured upload and download application that integrates with XNAT 1.7.5 and later.  It can easily be installed and launched from the user’s desktop.  It is a stand-alone tool, purpose-built to anonymize and upload image session data to your CNDA powered by XNAT.  

### Downloading the XNAT Desktop Client 
To download the XNAT Desktop Client (DXM), please visit the XNAT downloads page:  https://download.xnat.org/desktop-client/ where the most recent packages can be found under “XNAT Desktop Client”.  The download options will appear as shown in the image to the right, under “Get the XNAT Desktop Client”.

There are three operating system versions of the XNAT Desktop Client listed; “Mac OS”, “Windows” and “Linux”.  Most users will probably need to use the “Windows” or “Max OS” link.  If you are unsure of which tool to download, please contact your IT department to confirm your operating system version. 


![get xnat desktop client](images/UploadUsingDesktopClient1.jpg)

### Installing the XNAT Desktop Client
The XNAT Desktop Client is available for use on modern Mac, Windows and Linux operating systems, though the installation methods and requirements differ for each system.  Please visit Installing the XNAT Desktop Client page:  https://wiki.xnat.org/xnat-tools/xnat-desktop-client-dxm/installing-the-xnat-desktop-client

### Installing the XNAT Desktop Client Windows Version
The XNAT Desktop Client for Windows includes an embedded Java Runtime Environment. There have been known issues accessing this bundled resource in virtualized Windows environments, so we strongly recommend only installing the client on a native Windows OS.  Installing the application will install file-handling support for all your browsers so that image session download requests from the XNAT web app will open in your desktop client. Installation is very straightforward.  
1.	As indicated above, download the .exe file from download.xnat.org/desktop-client
2.	Go to your Downloads folder and Open the XNAT-Desktop-Client-Setup file, which launches the one-step installer.
3.	Please click Yes or OK for pop-up: "Do you want to allow the following programs to make changes to this computer?” 
4.	Completing XNAT-Desktop-Client Setup dialog box displays.
5.	Click the Finish button.

![xnat desktop client setup](images/UploadUsingDesktopClient2.jpg)

6. XNAT Desktop Client page displays.

![xnat desktop client page](images/UploadUsingDesktopClient3a.jpg)

### Running XNAT Desktop Client for the First Time

The first time XNAT Desktop Client opens, you will need to enter some information into the tool.  This information will be saved so that when you open the tool in the future, you won’t need to complete this step again.

1.	Click the Add New XNAT Server button.
   
![add new server](images/UploadUsingDesktopClient3b.jpg)


2.	User login dialog box displays.
3.	Please enter the following values:

    **Server**:  cnda.wustl.edu
  
    **Username**:  your CNDA user id
  
    **Password**: your CNDA password

4.	Click Login button.

![xnat desktop client logon](images/UploadUsingDesktopClient4.jpg)


### Important: Configuring Settings so that this upload does not freeze on you

**VERY IMPORTANT**: This application runs the best when it is being run as an Administator. 
Therefore, the best way to launch this application is to right click on it's Desktop icon, and click on the **Run As Administrator** button. While we fully understand that not everyone may have this level of access at their institution, this admin method of logging in is higly recommended for anyone who can.

If the XNAT Desktop Client is not already running at this point, launch it (ideally as Administrator) from the shortcut created during installation and pinned to your desktop and log in with your username and password. 

1.	On the top right, you will see a settings icon that looks like a cog wheel. Click on that icon to open up settings.
2.	In the center, you will see a button that says User Settings. Click on that button.
3.	At the bottom you will see Upload Concurrency and a text box which has a number greater than one in it (usually a 6).
4.	Click in that text box, delete the number, and type in a 1 and click Save.
5.	You will now be uploading from one stream instead of multiple at the same time. This should help keep your upload from freezing.


![adjust_the concurrency](images/Concurrency.jpg)


**Proxy Heavy Systems**: This application uploads data to CNDA via a POST request to https://cnda.wustl.edu. Ideally, this request should be made directly. However, if your institution uses proxies or other intermediaries, these can sometimes interfere with the request, potentially causing the upload to freeze or fail. If you encounter such issues regularly, we recommend checking with your IT team to ensure that requests to cnda.wustl.edu can bypass the proxy and be made directly if possible.

### Uploading Images

If the XNAT Desktop Client is for any reason no longer running, launch it from the shortcut created during installation and pinned to your desktop. 

![xnat desktop client icon](images/UploadUsingDesktopClient5.jpg)

1.	Log in using your CNDA username and password same as above.

2.	The XNAT Desktop Client Home page displays.

**Note**: You can select the drop down Menu, to navigate to the Home, Upload, Download, Monitor Transfers, Flush XNAT User Access Cache, Documentation and About pages.

![home page menu](images/UploadUsingDesktopClient6.jpg)


3.	Click the Upload files button.

![upload files button](images/UploadUsingDesktopClient7.jpg)


4.	The Upload Image session to [cnda.wustl.edu] page displays.
   
**Note**: You will only see the projects in CNDA for which you have been granted access.
 
5.	Select the project to upload the files to.

![select project](images/UploadUsingDesktopClient8.jpg)


6.  The Project Setting will display.
7.	Click the Browse button and select the **directory where the files are stored**.

![browse button](images/UploadUsingDesktopClient9.jpg)


8.	Your project has an anonymization script set up, so the follow dialog box displays.

9.	Click the radio button to the left of the file.

10.	Click the Upload button.

![upload button](images/UploadUsingDesktopClient10.jpg)


11.	The page to Confirm Details displays.
12.	If the subject has been scanned before, click the “Select subject” drop down menu and select the subject.
13.	If this is the first time a subject was scanned, please select the “Create new subject” button.

![select subject](images/UploadUsingDesktopClient11.jpg)


14.	Create new subject dialog box displays.
15.	Enter subject id. (Subject’s research group within this project box may be left blank.)
16.	Click Add New Subject button.

![create new subject](images/UploadUsingDesktopClient12.jpg)


17.	Once the subject is selected or created, the Experiment Label (session label) is auto filled.
18.	You may change it to what your site uses.  

**Note**: The session label must be unique!  No other session in your project can have the same label. 

a.	Review the series listed to confirm this is the correct session.

b.	Scroll down and review the Session summary, confirm all is correct.

c.	Click Next button.

![session label](images/UploadUsingDesktopClient13.jpg)


19.	The next page is for visual inspection of the images to check for burned-in PHI.

**Note**: No Protected Health Information (PHI) also known as Patient Personal Information (PPI) should be stored on the CNDA.  This includes patient initials.

20.	Select an image series from the left and drag into the larger window on the right.
21.	Use the mouse wheel and Scroll through the series dragged into the window on right to confirm none contain PHI. 
22.	Use the blue scroll bar to scroll down to the next series of images.
23.	Do the above for each series of images.
24.	Once all images have been reviewed, click the Finish and Upload button.

![visual imspect images](images/UploadUsingDesktopClient14.jpg)


25.	If burned-in PHI is found:
    
a.	Click on the Select Area icon. 

b.	Click on the image and draw a box around unwanted PHI. 

c.	As you draw these, they are highlighted with orange boxes, and you will also see an orange circle in the thumbnail view to indicate you have started the process. 

d.	The boxes you draw are applied to all images in the current series. 

e.	When you are done, click the Save scan icon. 

f.	The application will turn the circle that appears on the thumbnail image to green to indicate confirmation. (Note: See 2nd group of images below to see the green.)

g.	 Perform the same procedure on each series. 

h.	After all images haven been reviewed, click Finish and Upload button.

![remove phi part 1](images/UploadUsingDesktopClient15.jpg)

![remove phi part 2](images/UploadUsingDesktopClient16.jpg)

26.	The Monitor Transfers: Upload page displays.

![monitor transfer](images/UploadUsingDesktopClient17.jpg)

27.	The Status column will display Completed once file has finished uploading. 
28.	Click the “Upload Another Session” button to upload another session or close the page.

![upload another session](images/UploadUsingDesktopClient18.jpg)

29.	Once your files have completed uploading, Log in to CNDA.
30.	Go to your project.
31.	Select the subject.
32.	The Subject Details page displays.
33.	Click the Experiment (MR Session) link.


![cnda subject page](images/UploadUsingDesktopClient19.jpg)

34.	The Session page displays.
35.	Confirm the series uploaded are all there.
36.	Scroll down and confirm the Total number of files are the correct.

![cnda top of session page](images/UploadUsingDesktopClient20.jpg)

![cnda bottom of session page](images/UploadUsingDesktopClient21.jpg)


	















