# 2025.03.13 Upcoming CNDA Split

The RCIF is in the process of splitting CNDA into separate systems.
Many older projects are no longer used by the original investigator or collaborators.
These projects and associated data contribute to performance issues.

## Definitions
 - Inactive Projects: Projects that have not been accessed by project members over the last five years.
 - Active Projects: Any project on CNDA that is not on the Inactive Project list.
 We will get any project created just prior to the split.

## Create a Readonly CNDA With Inactive Projects
We will create a separate instance of CNDA with a different URL.
This will be a snapshot in time.
You will be able to login with your existing credentials to see older projects, but you will not be able to make any changes.
 - No new data uploads will be possible.
 - No containers will be available.

## Carry Forward Active Projects With New File System (CNDA 1.0)
We will activate new virtual machines that will use a new file system with only the active projects.
These new machines will appear at the standard CNDA URL: https://cnda.wustl.edu
Your existing credentials will work.
You will see your active projects, but you will not see inactive projects.
This step moves us from an older storage system but does not address the performance issues.

## Stand Up CNDA 2.0
We are using the term "CNDA 2.0" to refer to the version of CNDA where we have removed the unused data that we believe is one contributing factor to performance issues.
We will activate new virtual machines that use the "new file system" and a new database with only the data from the active projects.
When we make this transition,
- We will disable the CNDA 1.0 system mentioned above. It is intended as an interim step.
- We will configure the system to use the standard CNDA URL.

# Anticipated Schedule
1. Readonly CNDA: Available during the week of 2025.03.17.
2. CNDA 1.0: Cutover the weekend of 2025.04.05
3. CNDA 2.0: TBD

