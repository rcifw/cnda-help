# Container Images and Commands

We have organized the containers by the categories listed below.
We are open to suggestions for better organization.

 * [FreeSurfer](#freesurfer)
 * [Quantitivate Imaging (e.g., Free Surfer)](#quantitative-imaging)
 * [Classification](#classification)
 * [Transforms (e.g., DICOM to NIFTI)](#transforms)
 * [Metadata Analysis (flavors of DICOM header dumps)](#metadata-analysis)
 * Other

## FreeSurfer
FreeSurfer rates a separate section because CNDA hosts several versions of the FreeSurfer container,
and it is used extensively by the Benzinger Lab and others.
The CNDA Help Desk does not have an opinion on which version of the FreeSurfer container is approriate
for your work.
This [Free Surfer Tutorial](./FreeSurfer_Summer_2022.pdf) from the
[Benzinger Lab](https://www.mir.wustl.edu/research/research-centers/neuroimaging-labs-research-center-nil-rc/labs/benzinger-lab/) provides instructions on how to run FreeSurfer from the command line as well as from an XNAT container.

### registry.nrg.wustl.edu/docker/nrg-repo/freesurfer741-xnat:1.2
| Command | Data Type | Actions | Version  |
|---------|-----------|---------|----------|
| freesurfer-7-4-1 | xnat:imageSessionData | Run Freesurfer 7.4.1 on a session | 1.2 |
| freesurfer-7-4-1-relaunch | fs:fsData | Relaunch Freesurfer 7.4.1 after editing | 1.2 |

### registry.nrg.wustl.edu/docker/nrg-repo/freesurfer732-xnat:1.2

| Command | Data Type | Actions | Version  |
|---------|-----------|---------|----------|
| freesurfer-7-3-2 | xnat:imageSessionData | Run Freesurfer 7.3.2 on a session | 1.2 |
| freesurfer-7-3-2-relaunch | fs:fsData | Relaunch Freesurfer 7.3.2 after editing | 1.2 |


### registry.nrg.wustl.edu/docker/nrg-repo/freesurfer711-xnat:1.0

| Command | Data Type | Actions | Version  |
|---------|-----------|---------|----------|
| freesurfer-7-1-1 | xnat:imageSessionData | 7.1.1 on a session | 1.0 |
| freesurfer-7-1-1-relaunch | fs:fsData | Relaunch Freesurfer 7.1.1 after editing | 1.0 |

### registry.nrg.wustl.edu/docker/nrg-repo/freesurfer53-hcp-patch-xnat:1.0
| Command | Data Type | Actions | Version  |
|---------|-----------|---------|----------|
| freesurfer-5-3-0-hcp-patch-relaunch | fs:fsData | Relaunch Freesurfer 5.3.0-HCP-patch after editing | 1.0 |
| freesurfer-5-3-0-hcp-patch | xnat:imageSessionData | Run Freesurfer 5.3.0-HCP-patch on a session | 1.0 |

### registry.nrg.wustl.edu/docker/nrg-repo/freesurfer-snapshots-xnat:1.0
| Command | Data Type | Actions | Version  |
|---------|-----------|---------|----------|
| freesurfer-snapshots | fs:fsData |  Generate snapshots for FreeSurfer output | 1.0 |

## Quantitative Imaging

### registry.nrg.wustl.edu/docker/nrg-repo/adcortsig-roi-xnat:1.1
| Command | Data Type | Actions | Version  |
|---------|-----------|---------|----------|
| adcortsig-roi-xnat | fs:fsData | AD Cortical Signature ROIs | 1.0 |

### registry.nrg.wustl.edu/docker/nrg-repo/benice_docker:1.31
| Command | Data Type | Actions | Version  |
|---------|-----------|---------|----------|
| benice | xnat:imageSessionData | Run BENICE v1.31 | 1.31 |

### registry.nrg.wustl.edu/docker/nrg-repo/ilp-v2-xnat:2.1
| Command | Data Type | Actions | Version  |
|---------|-----------|---------|----------|
| ilp-v2-xnat | fs:fsData | ILP v2.1 | 1.0 |

### registry.nrg.wustl.edu/docker/nrg-repo/man-wmh-xnat:1.0
| Command | Data Type | Actions | Version  |
|---------|-----------|---------|----------|
| manual-wmh-calcs | manwmh:manwmhData | Run Manual WMH Thresholding final calculations on a Manual WMH assessor | 1.0 |
| manual-wmh-preproc | xnat:imageSessionData | Run Manual WMH Thresholding preprocessing on a session that has a FLAIR scan in it | 1.0 |

### registry.nrg.wustl.edu/docker/nrg-repo/mrfree-pet-xnat:1.0.5

| Command | Data Type | Actions | Version  |
|---------|-----------|---------|----------|
| mrfree-pet | xnat:imageSessionData | Run Jagust MR-Free PET processing workflow | 1.0.5 |

### registry.nrg.wustl.edu/docker/nrg-repo/pup-fs-xnat:1.4

| Command | Data Type | Actions | Version  |
|---------|-----------|---------|----------|
| pet-unified-pipeline-fs | xnat:imageSessionData | Run PET Unified Pipeline (PUP) based on Freesurfer ROIs | 1.4 |

### registry.nrg.wustl.edu/docker/nrg-repo/pup-manual-xnat:1.2.1

| Command | Data Type | Actions | Version  |
|---------|-----------|---------|----------|
| pet-unified-pipeline-manual | xnat:imageSessionData | Run PET Unified Pipeline (PUP) based on Manual (hand-drawn) ROIs | 1.2 |

### registry.nrg.wustl.edu/docker/nrg-repo/nrg_ai_neuroonco_preproc:v0

| Command | Data Type | Actions | Version  |
|---------|-----------|---------|----------|
| 1-Scan-type Classifier |  |  |  |
| 2-Registration | xnat:imageSessionData |  Perform registration | 1.0 |
| 3-Skullstrip | xnat:imageSessionData |  Perform skullstrip | 1.0 |
| 5-Prediction to patient-space | xnat:imageSessionData: | Convert prediction to patient_space | 1.0 |
| 6-Patient-space to dcmseg | xnat:imageSessionData | Convert Patient-space nifti to dcmseg | 1.0 |
| 7-Dcmseg to ROI-Assessor | xnat:imageSessionData | Upload prediction-DICOMSEG as ASSESSOR/ROI_COLLECTION | 1.0 |

### registry.nrg.wustl.edu/docker/nrg-repo/register-mr-xnat:1.0
| Command | Data Type | Actions | Version  |
|---------|-----------|---------|----------|
| register-mr | xnat:imageScanData | Run the RegisterMRToAtlas script on a scan | 1.0 |

### registry.nrg.wustl.edu/docker/nrg-repo/tau-spatial-spread-xnat:1.0
| Command | Data Type | Actions | Version  |
|---------|-----------|---------|----------|
| tau-spatial-spread-xnat | pup:pupTimeCourseData | Tau Spatial Spread calculation | 1.0 |


## Classification

### sharmaatul11/hosseinclassifier1_prod:latest
| Command | Data Type | Actions | Version  |
|---------|-----------|---------|----------|
| ct_scan_classifier_usinggithub | xnat:imageSessionData | ct_scan_classifier_usinggithub | 1.0 |

## Transforms

### registry.nrg.wustl.edu/docker/nrg-repo/dcm2niix-xnat:20Jul2022
| Command | Data Type | Actions | Version  |
|---------|-----------|---------|----------|
| dcm2niix-20Jul2022 | xnat:imageScanData | Run dcm2niix 20-Jul-2022 on a Scan | 20Jul2022 |

### registry.nrg.wustl.edu/docker/nrg-repo/dcm2niix-xnat:25Nov18
| Command | Data Type | Actions | Version  |
|---------|-----------|---------|----------|
| dcm2niix | xnat:imageScanData | Run dcm2niix 25-Nov-2018 on a Scan | 25Nov18 |


### registry.nrg.wustl.edu/docker/nrg-repo/pup-4dfp-to-nifti-xnat:1.0
| Command | Data Type | Actions | Version  |
|---------|-----------|---------|----------|
| pup-4dfp-to-nifti-xnat | pup:pupTimeCourseData | PUP 4dfp to NIFTI conversion | 1.0 |


## Metadata Analysis

### xnat/xnat_file_reports:0.1

| Command | Data Type | Actions | Version  | Other |
|---------|-----------|---------|----------|-------|
| Dump Project | xnat:projectData | Run (dcm4che) dcmdump on a Project | 2024.12.23 | [Documentation](xnat_file_reports) |
| Grep Project | xnat:projectData | Run grep after dcmdump on a Project | 2024.12.23 | [Documentation](xnat_file_reports) |
| Dump Session | xnat:imageSessionData | Run dcmdump on a Session | 2024.12.23 | [Documentation](xnat_file_reports) |
| Project Manifest | xnat:projectData | List files or folders in a Project folder | 2024.12.23 | [Documentation](xnat_file_reports) |
