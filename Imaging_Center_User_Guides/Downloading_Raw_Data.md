# Downloading Raw Data

Some CCIR studies request that their raw scanner data (usually a .bf file, not DICOM) be attached to their imaging sessions in the CNDA. The raw data files are uploaded to something called the session resources. They are placed in a directory called RawData. Several methods can be used to download these files.

Several standard download options exist through the website:

 - [Downloading Multiple Images From Project Page](../CNDA_User_Guide_and_Tutorials/Downloading_Data/Downloading_Multiple_Images_From_Project_Page.md)
 - [Downloading One Image from Session](../CNDA_User_Guide_and_Tutorials/Downloading_Data/Downloading_One_Image_From_Session.md)
 - [Using Manage Files to Download](../CNDA_User_Guide_and_Tutorials/Downloading_Data/Using_Manage_Files_to_Download.md)

However, raw data can be quite large, and sometimes individual wish to script the download for efficiency. In this case, the XNAT Restful Services (REST) interface can be used. Below are some examples for how to download your raw scanner data via REST using a Linux utility called curl.

This command will download all resources found in the RawData directory. You will be prompted for your CNDA password by curl. This REST path is specified using the project, subject and session labels. The *format=zip* instructs CNDA (XNAT) to zip the data before sending it.


    curl -u cndaUserId "https://cnda.wustl.edu/data/archive/projects/YOURPROJ/subjects/YOURSUBJ/experiments/YOURSESSION/resources/RawData/files/*?format=zip"> FILENAME.zip

You can also use a much shorter URL by specifying the session "Accession #" found on the session report page or in a listing.

    curl -u cndaUserId "https://cnda.wustl.edu/data/archive/experiments/CNDA_??????/resources/RawData/files/*?format=zip"> FILENAME.zip

The XNAT team maintains [XNAT API Documentation](https://wiki.xnat.org/xnat-api) as part of the overall [XNAT Documentation](https://wiki.xnat.org/documentation)
