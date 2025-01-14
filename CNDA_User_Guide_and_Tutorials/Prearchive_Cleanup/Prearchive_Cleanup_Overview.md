# What Exactly Is A Prearchive Cleanup?

## What Is the CNDA Prearchive?

The CNDA prearchive is a staging area where images are uploaded and stored temporarily before being formally archived into the main archive. It serves as a temporary holding space, allowing researchers to review, organize, and manage their data before archiving. This ensures that only relevant and properly vetted data is moved into the main archive.  
  
The prearchive was designed as a temporary holding area for researchers to review sessions before archiving them. However, sessions are often left unreviewed, with some remaining in the prearchive for months or even years. To address this issue, we are now undertaking a cleanup of the prearchive.  

---

## Why Have I Never Heard of the CNDA Prearchive?

Some researchers love to review everything before it is archived in CNDA. Others may choose in their settings to archive the scans immediatley without any review. More information on prearchive settings and where they are located can be found in part 2 of this document below.   
  
---

## What Is the CNDA Archive?

The CNDA archive is the normal place in CNDA where you see your image data online and available. Images are not stored in a separate system that requires extra steps to retrieve the data. "Archive" simply refers to the standard location for managing and processing your image data.

---

## Why Are We Cleaning Up the Prearchive?

We are cleaning up the prearchive to:

- Improve system performance for prearchive reviews.
- Ensure imaging data acquired at CCIR, MR Facility, or NRB—or pulled from BJC PACS—is properly stored in your project.

---

## What Does It Mean to Clean Up the Prearchive?

Cleaning up the prearchive involves reviewing sessions stored in the prearchive section of your projects to determine their relevance. After reviewing, you can:

- **Review session details.**
- **Archive sessions** to move them into the main archive for active use.
- **Delete sessions** that are no longer needed.

This process ensures the prearchive remains organized and avoids accumulating outdated or redundant data.

---

## Is CNDA Deleting All Sessions in the Prearchive by a Specific Date?

We have not selected a date yet, but older data will eventually be moved to a different storage area not managed by CNDA. This will be maintained temporarily in case investigators need the data.

The CNDA prearchive will continue to serve as a staging area for new data.

---

## What Does It Mean to Archive a Session?

Archiving a session means transferring it from the prearchive to the main archive within your CNDA project. Once archived, the session becomes part of the primary dataset and is fully visible alongside other archived sessions. 

**Note:** The term "archive" has connotations about a storage area that is designed for cheap, long-term storage and is difficult to access. That is not the case with the CNDA archive; It provides the standard mechanism for managing and processing your image data.

---

## What Is the Unassigned Area in the Prearchive?

The Unassigned area contains sessions uploaded to CNDA but not automatically matched to a specific project. These sessions remain "Unassigned" until their project affiliation is clarified.

---

## Why Do Sessions End Up in the Unassigned Area?

### **For CCIR Sessions:**
Sessions are assigned to a project based on a text string in the Study Description DICOM Tag, which includes the CCIR Project Number (e.g., `CCIR_00123`). The string for each project is entered and saved by CCIR staff at the console, often during the initial creation of the project. Errors like missing project numbers in the Study Description DICOM Tag or typos can cause sessions to end up in the Unassigned area. We have seen cases where the CCIR project number was not communicated to the CCIR staff before scanning. Notes in the Study Description element help us understand that case.

### **For MR Facility Sessions:**
Assignment is managed via RIIS, where scan operators log in and associate a project number with the scanning session. Communication failures between RIIS and CNDA can lead to unassigned sessions.

### **For NRB Sessions:**
Similar to CCIR, data entry errors at the console or missing project numbers in the Study Description DICOM Tag can result in unassigned sessions.

---

## Why Are Sessions in My Project in the Prearchive and Not in the Archive?

Sessions end up in the prearchive due to the project’s prearchive settings, which can be adjusted under the **Manage Tab** → **Define Prearchive Settings**. These settings determine how new sessions are handled:

1. Send all uploads to the prearchive.
2. Send uploads directly to the archive, except for duplicates.
3. Send all uploads directly to the archive, overwriting older versions.

If CNDA cannot determine a session's project, it defaults to the prearchive with "Unassigned" listed as the project.

---

## How Does CNDA Staff Determine Where to Place an Unassigned Session?

CNDA staff review Unassigned sessions by examining:

1. Specific DICOM tags like:
   - **Study Description (0008,1030)**
   - **Study Comments (0032,4000)**
   - **Patient Comments (0010,4000)**

2. Investigator names or project IDs in other DICOM Tags or comments.

3. The CNDA system using similar session labels for additional clues.

For example, if the label is XX12345_4mo (for a 4 month follow up), we might search for XX12345. This prefix might yield a match that takes us to the proper project/subject.

If no clear assignment is found, further manual checks are conducted to place the session correctly.

---

## Can There Be Duplicates in the Prearchive and Archive?

- In the **prearchive**, duplicates can exist because sessions are not yet officially archived.
- In the **archive**, each session label must be unique. If a duplicate session from the prearchive conflicts with one in the archive, the system will report a "Conflict" and prevent duplication.

---

## How Do I Manage Duplicates?

To manage duplicates:

1. Review the sessions to identify the correct and most up-to-date image data.
2. Delete any unnecessary duplicate sessions.

---

## What Are Merge Conflicts?

Merge conflicts occur when:

- **Duplicate Session Labels**: Sessions in the prearchive share labels with archived sessions.
- **New DICOM Series**: Sessions are sent a second time with additional series that were not included in the first transmission. We have also seen cases where the scanner only sends new series and does not resend the previously sent images.
- **Inconsistent Files**: Files with the same name but different data.
- **Overlapping Metadata**: Two sessions have the same key identifiers (e.g., session label, project ID) but differ in other metadata, such as acquisition time or subject information.
- **Manual Edits**: Users manually edit session attributes or attempt to upload a new session that conflicts with existing data in the archive.

### Resolving Merge Conflicts:

- Rename session labels to ensure uniqueness.
- Verify and align metadata.
- Merge or delete conflicting sessions/files as appropriate.

---

## What Data Do I See in the Prearchive?

In the prearchive, users can view image data from all projects they have access to. Data from other investigators' projects is not visible without explicit access.

---

## What If the CNDA Staff Places a Session in the Wrong Project?

If this happens in the **prearchive**, contact CNDA staff via email at **cnda-help@wustl.edu** to move it to the correct project.  

## What If a Session Ends Up In the Wrong Project in the Archive?

If this happens in the **archive**, contact CNDA staff via email at **cnda-help@wustl.edu** to move it to the correct project.

---

## Next Steps

[Continue to PART 2: How Do I Perform A Prearchive Cleanup?](Prearchive_Cleanup_Instructions.md)
