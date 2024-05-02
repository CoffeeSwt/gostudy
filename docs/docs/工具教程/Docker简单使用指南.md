# Docker简单使用指南

## 简介

Docker 是一种容器化平台，允许开发者打包他们的应用程序及其所有依赖项到一个统一的可移植容器中。这些容器可以在任何支持 Docker 的环境中运行，而不需要额外的设置或修改。与传统的虚拟机相比，Docker 容器更加轻量级，因为它们共享操作系统内核，而不是像虚拟机那样每个实例都有自己的操作系统。
![docker简介](/docker简介.png)
- 轻量级性能： Docker 容器共享主机操作系统的内核，因此比传统虚拟机更轻量级。这使得容器启动更快、占用更少的资源，并提供更高的性能。
- 可移植性： 由于 Docker 容器包含应用程序及其所有依赖项，因此它们可以在任何支持 Docker 的环境中轻松部署和运行，而不用担心环境配置的差异。
- 隔离性： Docker 使用了 Linux 内核中的命名空间和控制组技术，提供了与虚拟机相似的隔离性。每个容器都有自己的文件系统、进程空间和网络空间，使得它们可以独立运行，互不干扰。
- 快速部署： Docker 容器可以在几秒钟内启动，而传统虚拟机通常需要几分钟才能启动。这使得开发人员能够更快地部署新的应用程序或更新。
- 资源利用率： 由于 Docker 容器共享主机操作系统的内核，因此它们可以更有效地利用系统资源，提高硬件利用率。

## 安装
### Windows
windows平台安装docker需要先安装WSL2，参考[微软WSL安装指南](https://learn.microsoft.com/zh-cn/windows/wsl/install)
:::tip
WSL2 是 Windows Subsystem for Linux 2 的简称。它是微软在 Windows 10 操作系统中引入的一个功能，旨在为用户提供一个完整的 Linux 内核环境，使他们能够在 Windows 上运行 Linux 应用程序。
:::
之后下载Docker Desktop安装
### Linux(Ubuntu)
在 Ubuntu 上安装 Docker 可以通过几个简单的步骤完成。以下是在 Ubuntu 上安装 Docker 的一般步骤：

1. 更新包管理器： 打开终端，首先确保您的系统已更新到最新状态。使用以下命令：
```bash
sudo apt update
sudo apt upgrade
```
2. 安装依赖项： Docker 需要一些依赖项才能正确运行。运行以下命令安装这些依赖项：
```bash
sudo apt install apt-transport-https ca-certificates curl software-properties-common
```
3. 添加 Docker 官方 GPG 密钥： 这将确保下载的软件包是由 Docker 官方签名的。运行以下命令：
```bash
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
```
4. 添加 Docker APT 仓库： 添加 Docker 的 APT 仓库，以便系统知道从哪里获取 Docker 软件包。运行以下命令：
```bash
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
```
5. 更新 APT 软件包索引： 运行以下命令以更新 APT 软件包索引：
```bash
sudo apt update
```
6. 安装 Docker： 最后，通过运行以下命令来安装 Docker：
```bash
sudo apt install docker-ce
```
7. 启动 Docker 服务： 安装完成后，Docker 服务应该已自动启动。您可以使用以下命令来检查 Docker 服务的状态：
```bash
sudo systemctl status docker
```
8. （可选）将当前用户添加到 docker 用户组： 这将允许您在不使用 sudo 的情况下运行 Docker 命令。运行以下命令：
```bash
sudo usermod -aG docker ${USER}
```
在执行这个命令后，需要注销并重新登录您的用户才能使更改生效。
### MacOS

## 基本概念

### 镜像(Docker Image)
Docker 镜像是一个只读的文件，其中包含了用于运行应用程序所需的所有代码、运行时、库、环境变量和配置文件等。简单来说，Docker 镜像就是一个打包好的应用程序运行环境。镜像可以作为模板用于创建 Docker 容器。Docker 镜像通常是通过 Dockerfile 文件定义的，该文件描述了如何构建该镜像。镜像可以保存在本地或者上传至 Docker Hub 或其他镜像仓库供他人使用。
### 容器(Docker Container)
Docker 容器是由 Docker 镜像创建的运行实例。它是一个独立、轻量级的运行环境，其中包含了应用程序及其所有依赖项。容器可以被启动、停止、删除，并且可以在不同的环境中移植。每个容器都是相互隔离的，拥有自己独立的文件系统、进程空间和网络空间。容器可以运行在同一个主机上的多个实例，每个容器都是相互独立的。
### 仓库
仓库类似git，用于存储不同镜像，公共仓库为docker hub

##