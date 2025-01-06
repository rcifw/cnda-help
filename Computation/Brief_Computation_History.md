# Brief History of CNDA Computational Job Support

It is not the goal of this page to document all forms of computational software that has been or is currently supported by CNDA.
We want to provide some background and context.

## XNAT Processing Pipelines
The CNDA is based on the [XNAT](https://xnat.org/) software platform.
The CNDA used the [XNAT Pipeline Engine](https://wiki.xnat.org/xnat-tools/xnat-pipeline-engine-plugin) to launch pipeline jobs that operated on CNDA data files.
CNDA leveraged the [Sun Grid Engine](https://en.wikipedia.org/wiki/Oracle_Grid_Engine) to
manage the pipeline environment.

## Docker Containers
[Docker](https://www.docker.com/) provides an environment for developing and running software in small packages (containers) that can remain consistent and stable over time.
The XNAT software team transitioned from the XNAT Pipeline Engine to Docker Containers
as a way to better support computational tasks using this newer and robust technology.
The CNDA replaced the Pipline Engine (Sun Grid Engine) with the XNAT Container Service
running on a [Docker Swarm](https://docs.docker.com/engine/swarm/).
Users launch Docker images as single containers or in batch mode using the XNAT Web UI
at different levels in the XNAT data hierarchy (project, subject, session, scan).
Container jobs are managed by the CNDA swarm and are executed as resources become available.

## Direct CHPC Access (2024)
RCIF infrastructure work allows users (late 2024) to have direct mount access to
CNDA project data.
A manual process is used to map CNDA project folders into the usable space on CHPC servers.
Users SSH into the CHPC servers and have readonly access to those files.
Users can copy the files to another area (e.g., scratch space) or process the files directly.

Further work is needed to support a self-service mechanism where a CNDA user will designate a project for a CHPC mount.

