# Download Sessions via Script

If you need to download many sessions at once — a whole project, or a long
list of specific sessions — the **Download Images** button on the Project
page works, but it's built for downloading a handful of sessions at a time
through your browser. For dozens or hundreds of sessions, use the **CNDA
Bulk Download script** instead. It logs into CNDA for you, downloads each
session as a `.zip`, skips anything it already downloaded, retries a failed
download once automatically, and keeps a log of everything it did.

This page walks Windows users all the way from "I have nothing installed"
to a finished download. Mac and Linux users already have everything the
script needs and can skip to [step 4](#_4-open-a-command-line).

## Instructions

1. If you only need a few sessions, use [Downloading Sessions From CNDA]
   (Downloading_Sessions_From_CNDA.md) instead — it's faster for a small
   number of sessions and doesn't require any of the setup below.

2. Download the script file: [cndaBulkDownload.sh](cndaBulkDownload.sh).
   Right-click the link and choose **Save link as...**, then save it
   somewhere you'll remember — your Desktop or Documents folder works well.
   **Note:** your browser may warn you that `.sh` files can be harmful.
   This is a standard warning for any script file, not specific to this
   one — click **Keep** if prompted.

3. Install Git Bash (Windows only, one-time setup). This gives Windows the
   command-line tools (`bash`, `curl`) the script needs, which aren't
   included by default.
   1. Go to <https://git-scm.com/download/win> — the download starts
      automatically. If it doesn't, click the "Click here to download"
      link on that page.
   2. Once downloaded, double-click the installer file (something like
      `Git-2.xx.x-64-bit.exe`) to run it.
   3. Windows may show a "Do you want to allow this app to make changes to
      your device?" prompt — click **Yes**.
   4. Click through the installer screens. The default settings on every
      screen are fine for this script — just click **Next** on each one,
      then **Install** on the final screen.
   5. When it finishes, click **Finish**.
   **Note:** if your team already has WSL (Windows Subsystem for Linux)
   set up on your machine, you can use that instead of Git Bash — open
   your Linux distro from the Start menu and follow the same steps below.
   If you're not sure whether you have WSL, Git Bash is faster to get
   running and is all this script needs.

4. Open a command line.
   - **Windows:** click the Start menu, type `Git Bash`, and click **Git
     Bash** in the results. A dark window with a text prompt opens — this
     is your command line for every step below.
   - **Mac:** press **Cmd + Space**, type `Terminal`, and press Enter.
   - **Linux:** open your distro's terminal application from your
     applications menu.

5. Go to the folder where you saved the script. Type `cd` followed by the
   folder path. For example, if you saved it to your Desktop:
   ```bash
   cd ~/Desktop
   ```
   or if you saved it to Documents:
   ```bash
   cd ~/Documents
   ```
   **Note:** in Git Bash, `~` always means your Windows user folder
   (`C:\Users\yourname`), so `~/Desktop` and `~/Documents` work the same
   way they do on Mac and Linux. If you saved the script somewhere else,
   like a Downloads folder or a specific project folder, use that path
   instead — for example `cd ~/Downloads` or `cd "/c/Users/yourname/My Folder"`.
   **Tip:** you can also type `cd ` (with a trailing space) and then drag
   the folder from File Explorer directly into the Git Bash window — it
   will fill in the correct path for you automatically.

6. Confirm the script is actually there before continuing:
   ```bash
   ls cndaBulkDownload.sh
   ```
   If it prints back `cndaBulkDownload.sh`, you're in the right folder.
   If you instead see `No such file or directory`, you're either in the
   wrong folder or the file didn't save with that exact name — check
   step 5 and step 2 again.

7. Make the script runnable. This is a one-time step per computer:
   ```bash
   chmod +x cndaBulkDownload.sh
   ```
   You won't see any output from this — that's expected. It only needs to
   be done once; you don't need to repeat it the next time you use the
   script on the same computer.

8. Run the script. **You have two ways to tell it what to download:**

   **Download an entire project**
   ```bash
   ./cndaBulkDownload.sh -u yourNetID -p MRF_1234
   ```
   Replace `yourNetID` with your CNDA username and `MRF_1234` with the
   actual project ID. You'll be prompted to type your CNDA password — it
   won't show anything on screen as you type, not even dots. This is
   normal terminal behavior, not a freeze. Type it and press Enter.

   **Download a specific list of sessions**

   Create a CSV file listing the sessions first — see
   [Session List CSV Format](#session-list-csv-format) below — then run:
   ```bash
   ./cndaBulkDownload.sh -u yourNetID -s mysessions.csv
   ```
   **Note:** use one or the other, not both — the script will stop with
   an error if you pass `-p` and `-s` together.

9. (Optional) Choose where files are saved. By default, downloads go into
   a new folder named after the project (or `cnda_downloads` if you used
   a session list), created inside whatever folder you were in when you
   ran the script. To pick your own folder instead, add `-d`:
   ```bash
   ./cndaBulkDownload.sh -u yourNetID -p MRF_1234 -d /path/to/my/folder
   ```

10. (Optional) Avoid typing your password every time. For a long-running
    download, or if you're downloading several projects back to back, you
    can save your credentials to a file instead of using `-u`:
    1. In the same folder as the script, create a plain text file named
       `creds.json` containing exactly this, with your own NetID and
       password:
       ```json
       {"user": "yourNetID", "password": "yourPassword"}
       ```
    2. Run the script with `-c` instead of `-u`:
       ```bash
       ./cndaBulkDownload.sh -c creds.json -p MRF_1234
       ```
    **Note:** this file holds your password in plain text. Restrict who
    can read it (`chmod 600 creds.json`), never commit it to Git, never
    email it, and delete it when you're done with it. Do not use `-u` and
    `-c` together — the username comes from the file.

## Session List CSV Format

If you're downloading specific sessions instead of a whole project, create
a plain CSV file — you can build this in Excel and use **Save As → CSV**,
or write it directly in a plain text editor. **No header row** — just one
session per line, in this order: `Project,Subject,Session`

```
MRF_1234,Subj001,Subj001_MR1
MRF_1234,Subj002,Subj002_MR1
CCIR_5678,Subj010,Subj010_MR2
```

## What Happens While It Runs

You'll see output scroll by that looks like this:

```
[1]
Downloading Subj001_MR1 (MRF_1234/Subj001)...
[2]
Subj002_MR1.zip already exists, skipping
```

When it finishes, you'll see a summary line:

```
Done. OK=42  FAIL=1  SKIP=3
See /path/to/logs/cndaBulkDownload_20260803_143000.log for details.
```

- **OK** — successfully downloaded.
- **SKIP** — already downloaded in a previous run; left alone.
- **FAIL** — something went wrong with that specific session. Open the log
  file named in that line for details on exactly which session and why.

**Note:** if anything fails, it's almost always safe to just run the exact
same command again. The script automatically skips everything it already
downloaded successfully, so a rerun only retries what actually failed.

## Troubleshooting

- **`command not found: ./cndaBulkDownload.sh`** — you're either not in
  the same folder as the script, or you forgot step 7 (`chmod +x`). Run
  `ls cndaBulkDownload.sh` to check you're in the right place.
- **"Your id is probably not enabled for this project, or the project id
  is wrong."** — double-check the project ID is typed exactly as it
  appears in CNDA, and confirm you have access to that project.
- **"CNDA login failed. Check your credentials and retry."** — your
  username or password was entered incorrectly. Just run the command
  again.
- **A session fails every time, even after rerunning** — check the log
  file named in the "Done." summary line for the specific reason next to
  that session.
- **You're not sure if you're signed in for too long** — CNDA sessions
  expire automatically after a period of inactivity. The script detects
  this on its own and re-logs in for you mid-run; you don't need to do
  anything.
