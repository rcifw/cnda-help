# Computation

You have stored image data in a CNDA project or you are considering using the CNDA to manage your image data.
The articles indexed below will help you determine the best mechanism
to run analysis software on your images.

  - [Direct SSH Access to Center for High Performance Computing](#direct-ssh-access-to-center-for-high-performance-computing-chpc)
  - [Container Jobs from CNDA Web UI](#container-jobs-from-cnda-web-ui)
  - [Web Download to Your Desktop](#web-download-to-your-desktop)
  - [Script Download to Your Desktop or Server](#script-download-to-your-desktop-or-server)
  - [High Speed Transfer Using Globus](#high-speed-transfer-using-globus)
  - [Brief History of CNDA Computational Job Support](./Brief_Computation_History.md)

## Direct SSH Access to Center for High Performance Computing (CHPC)
The Research Computing and Informatics Facility (RCIF) supports a [High Performance Computing](https://www.mir.wustl.edu/research/core-resources/research-computing-and-informatics-facility/services-equipment/) environment.
The RCIF will mount your CNDA project data in read-only mode to CHPC servers.
You can run your HPC jobs directly from those data mounts or copy the files
to another location on the CHPC storage system.

Notes:
1. Files are mounted read only to protect the integrity of the data on the CNDA. Mechanisms exist to programatically write results back to your CNDA project.
2. Send an email to support@rcif.wustl.edu to request this service. There is no fee involved.
3. The CHPC has both free and subscription services.
Find out more about the charges at the [CHPC Accounting FAQs](https://docs.chpc.wustl.edu/rates/), or you can contact support@rcif.wustl.edu with specific questions.

## Container Jobs from CNDA Web UI
The CNDA offers a limited set of Docker Containers that can be launched
from the CNDA web UI.
A *Container Service* on CNDA
 * Makes your project files available to the selected container
 * Launches the container
 * Optionally writes data back to your project if the container provides that data

More details on the CNDA containers is found in [Docker Containers on CNDA](../CNDA_User_Guide_and_Tutorials/Docker_Containers_on_CNDA/Docker_Containers_on_CNDA.md).

The current list of containers available through the web UI is found in [Container Images and Commands](../Containers/Images_and_Commands.md)

## Web Download to Your Desktop
Web UI download is most appropriate for smaller amounts of data, on the order of a few imaging sessions.
After you have logged in to the CNDA system, you can use one of the download mechanisms listed in [Downloading Data](../CNDA_User_Guide_and_Tutorials/Downloading_Data/Downloading_Data.md).

## Script Download to Your Desktop or Server
The CNDA software supports a RESTful API that can be used to retrieve
large amounts of data to your desktop or a server under your control.
The script mechanism with example scripts is described in Scripts for CNDA Data Download.

Notes:
1. The CNDA Data Download page is a placeholder.

## High Speed Transfer Using Globus
The RCIF manages a [Globus](https://www.globus.org/data-transfer) system that
is suited for transferring large amounts of data from the RCIF servers.
This can be leveraged by those that have access to a Globus system.
Please see [our documentation](https://docs.chpc.wustl.edu/getting-started/globus/) or specific questions can be emailed to support@rcif.wustl.edu.

