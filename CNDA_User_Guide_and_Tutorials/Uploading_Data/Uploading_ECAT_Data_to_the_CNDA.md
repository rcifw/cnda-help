#  Uploading ECAT Data to the CNDA

## Instructions
### SITE_TIMEZONES
(complete list is here: http://tutorials.jenkov.com/java-date-time/java-util-timezone.html)



In ECAT you have to know the timezone in which the scan was acquired in order to extract the correct time and date of the scan. You will need to know in which timezone each ECAT was scanned if possible.

This is just an example properties file, ${SITE_TIMEZONES}, I use to figure out which timezone the ecat is from. I get the acquisition site (not always the same as the site in which subject is enrolled), and then I get the timezone.

DIAN_011:America/Chicago

DIAN_024:America/New_York

DIAN_035:America/Los_Angeles

DIAN_037:America/New_York

DIAN_094:America/New_York

DIAN_953:Europe/London

timezone=`cat ${SITE_TIMEZONES} | grep ${acqSite} | cut -d: -f2`
echo timezone $timezone

### TIMESTAMP
You need a timestamp simply to provide a unique directory name for the CNDA ADNI_PROC prearchive space.

Below is how I get timestamp in the right format.

timestamp=`date +%Y%m%e_%k%M%S`
echo timestamp $timestamp

### REST UPLOAD
**Step 1**: Upload each scan in the session as a zip to your timestamp directory.



for each $scannum in $cndaSessionLabel

curl -k -b JSESSIONID=$JSESSION -F "${ecatScanFiles}.zip=@${ecatScanFiles}.zip" -X POST "https://cnda.wustl.edu/data/services/import?dest=/prearchive/projects/A_PROJECT/${timestamp}/${cndaSessionLabel}&TIMEZONE=${timezone}&SOURCE=scriptName&SUBJECT_ID=${cndaSubjectLabel}&label=ECAT&format=ECAT&content=RAW&overwrite=append&xnat:petSessionData/scans/scan/ID=${scannum}&extract=true"


**Step 2**: Tell CNDA you're finished uploading for this session and to do a build to create metadata in prearchive for session.

curl -k -b JSESSIONID=$JSESSION -X POST "https://cnda.wustl.edu/data/prearchive/projects/A_PROJECT
/${timestamp}/${cndaSessionLabel}?action=commit&SOURCE=scriptName&TIMEZONE=${timezone}"
