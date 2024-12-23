# xnat/xnat_file_reports

- image: xnat/xnat_file_reports
- Docker Repository: https://hub.docker.com/repository/docker/xnat/xnat_file_reports/general
- Code Repository: https://bitbucket.org/xnat-containers/xnat_file_reports/src/main/
- Code Author: Steve Moore (WUSTL/MIR)
- Support: moore.stephen.m@wustl.edu


## Overview
The *xnat/xnat_file_reports* image is a wrapper around the
[dcm4che Toolkit and Library](https://web.dcm4che.org/dcm4che-library)
and is intended to generate simple reports from the DICOM files stored in an XNAT archive.
Output is written to a file in the XNAT Build Directory that is created by the Container Service.
You will need to navigate to and download that directory to extract the output.

A design decision was made to write the output there rather than storing it back in XNAT as an assessment.
This could be visited again.
1. The reports are likely of short term use and do not need to be recorded for time.
2. We did not want to write to STDOUT as that would get messy. We wanted to maintain STDOUT for status and other debugging information.

## Details

These commands are available and rely on the *xnat/xnat_file_reports* image:

### Dump Project
This operates at the project level.
It dumps DICOM metadata from files in the project (per scope) the Container Service build folder.
You can download the build folder and review the output after the container completes the process. 
The user specifies values for Scope and Output Format.

* Scope: The user will select one of
  * all: Review all files in the project.
  * scan_instance: Review one file in each scan in the project. File selection is not deterministic.
  * session_instance: Review one file in each session. File selection is not deterministic.
* Output Format:
  * dcm4che_dump: Full output from the (dcm4che) dcmdump program.
  * csv: CSV file of selected DICOM elements. The list of elements is hard coded in the software.

### Grep Project
This operates at the project level and is closely related to the Dump Project command.
This command dumps DICOM metadata for files identified by Scope (see Dump Project) to a temporary file.
The command then executes the *grep* command against that file using an argument provided by the user.
The full grep output is recorded in the build folder.

A second process is applied to the grep output to reduce the size of the output.
That process strips the file names but retains folder information from each output line.
It then sorts the output by folder and retains only the unique values.
This has the effect of keeping unique values at the scan level.

Both the full grep output and reduced output are stored in the build folder.

#### Notes on *grep* regular expression

The string specified by the user is passed to the grep command without change.
Please note that the hexadecimal values for DICOM tags are expressed as **gggg,eeee**; the group and element values are separated by a comma. Here are some examples:

 * 0010,00[1-2]0
   * This expression will extract the Patient Name (0010,0010) and Patient ID (0010,0020) elements
*  -e 0010,00[1-2]0 -e 0008,002[0-1]
   * Note the use of -e. This is direct input to the grep command and instructs grep to scan for both arguments.
   * This pattern will extract: Patient Name (0010,0010), Patient ID (0010,0020), Study Date (0008,0020), Series Date (0008,0021)
* -e PatientName -e PatientID
   * This is equivalent to the first pattern (0010,00[1-2]0). It relies on the DICOM names of the elements rather than the DICOM tag values.
* ).DA.#
   * This is an obscure pattern, but can be an example of a powerful operator. It relies on the formatted output produced by the dcmdump program. This pattern picks up the right ) at the end of the DICOM tag and the DA value representation. The # further helps with specifying the pattern. The two periods are used to match a single character. We use this because the software does not yet handle " " characters in the pattern.

### Dump Session
This operates at the session level. The user selects values for Scope and Output Format.

* Scope: The user will select one of
  * all: Review all files in the session.
  * scan_instance: Review one file in each scan in the sessiosn. File selection is not deterministic.
  * session_instance: Review one file in the selected session. File selection is not deterministic.
* Output Format: Same as *Dump Project*

### Project Manifest
This operates at the session level. It generates a list of files in the project by running the Linux *find* command. The user selects a value for Scope:

* file: Simple list of all files.
* file-verbose: List of all files using *ls -l*.
* folder: Simple list of all folders.
* folder-verbose: List of all folders using *ls -ld*.

In the current version, timestamps are based on UTC time. They will be offset from the time in your timezone.