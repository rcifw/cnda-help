# How the CNDA Anonymizes Sessions

## **Description**
As you know, **the CNDA is not meant for storing Protected Health Information**. However, this can be easier to establish as a policy than it is to enforce. After all, the kind of data that constitutes PHI -- names, initials, in some cases full dates of birth, perhaps even the existence of a facial surface in an image scan -- can be very difficult to programmatically root out of the database after the fact.

A much better practice is to ensure that this kind of information is not in your image data before you archive it. Typically, this boils down to three practices:

1. Make sure you set up and follow proper **labeling guides**, so that all image data uses Subject IDs rather than any identifying information (initials are a common no-no).

2. Use a tool such as **DICOM Browser** to inspect the metadata fields that are attached to your image data. This metadata is typically added at the scanner, and PHI can appear in an amazing variety of fields.

3. Installing a project-specific **anonymization script** that will systematically remove data from specified DICOM metadata fields.
   
If you are importing data from the clinical world into your research study, it is critically important that you follow these practices. If your project requires further anonymization, or a particular processing pipeline (such as a Face-Masking algorithm), contact the CNDA Help Desk.

## **Updated in CNDA 1.6**
The current version of the CNDA includes some changes to when Anonymization is done.

Anonymization now occurs (whenever a Project has anonymization script in place):

 - When a session is moved from one Prearchive to another.
 - When a session is uploaded via Uploader Applet or DICOM Browser.
 - When Session label, Project, Subject are changed for a session.
   
   What this means: if these things are changed in the CNDA, then they will also change in the DICOM.
   
If the project does not have an Anonymization Script of its own, there is a global script, but it is only applied when uploading a session using the Uploader Applet.

## **Additional Information**
**Articles**
 - Install Dicom Browser
 - Run DICOM Browser from CNDA
 - Using DICOM Browser
   
**Scripts**

 - CNDA BJCPULL_Anonymizer_13AUG2013.script
 - CNDA_DIANDF_Anonymizer_16Sep2014.script
 - CNDA_DIANDF_Philips_MR_Anon_16Sep14.script
 - CNDA_DIANDF_SIEMENS_MR_Anon_16Sep14.script
   
**Videos**
 - Kevin Archie - Thoughts on Dicom Anonymization

As part of the 2012 XNAT Workshop, senior developer Kevin Archie talked about the evolving practice of anonymization, and shares some techniques.

