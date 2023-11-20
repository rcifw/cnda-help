# At the Scanner

In CNDA, your data is labeled according to values you provide in the [Procedure Assessment Form (PAF)](images/CCIR-XXXX_PI_TEMPLATE_v31_08.2023.pdf).
Generally this form is handed by the study coordinator to the scanner technician just before the scan begins.
The CCIR and the CNDA’s ability to properly label and archive your data relies on the correctness of the information provided in this form.
 - The PDF linked above was published 2023.08.31. We recommend you check with the CCIR to obtain their most recent PAF.


We suggest that you print out and complete the PAF in advance of your CCIR visit so that you will be able to focus on the subject and not this form.

**What’s Important for the CNDA**


**CCIR #** : This number should match the CCIR protocol number used at the scanner. The CCIR number determines into which CNDA project your session will be sent. This value will be saved in the DICOM header (0008,1030) “StudyDescription” in all your images.


**Subject ID** : This field will be entered into the scanner’s Patient Name field. Accordingly, the value will then be saved in the DICOM header (0010,0010) “PatientName” in all your images.

 - No PHI : The CNDA is not considered a PACS or PHI repository. In the Subject ID, please do not use any portion of the following identifiers: patient name, patient initials, patient date of birth, patient social security number or any other element explicitly prohibited by [HIPAA](https://www.hipaa.com/2009/09/01/hipaa-protected-health-information-what-does-phi-include).


**Scan ID and Visit** : This field will be entered into the scanner’s Patient ID field. Accordingly, the value will then be saved in the DICOM header (0010,0020) “PatientID” in all your images.

 - **Longitudinal Study Labels** : CNDA architecture requires that each imaging session label within a project be unique. Therefore, a study which collects, for example, a DAY1 session and a DAY2 session may not make the Scan IDs DAY1 and DAY2 for all subjects. We suggest that you instead create the Scan ID by joining the DAY1 and DAY2 to the Subject ID, for example: subj1001_DAY1, subj001_DAY2.
 - **Also No PHI** : The same restrictions mentioned above for Subject ID also apply for Scan ID and Visit.

