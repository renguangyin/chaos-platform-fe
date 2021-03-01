/*
 * Copyright 1999-2021 Alibaba Group Holding Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

export const en = {
    'button.text.search': 'Search',
    'button.text.clear': 'Clear',
    'button.text.on': 'On',
    'button.text.off': 'Off',

    'select.option.true': 'Yes',
    'select.option.false': 'No',

    'menu.overview': "Overview",
    'menu.machine': 'Machine',
    'menu.machine.list': 'MachineList',
    'menu.machine.register': 'MachineRegister',
    'menu.machine.probe': 'ProbeManager',
    'menu.scenario': 'Scenario',
    'menu.scenario.list': 'ScenarioList',
    'menu.scenario.category': 'ScenarioCategory',
    'menu.experiment': 'Experiment',
    'menu.experiment.list': 'ExperimentList',
    'menu.experiment.task': 'ExperimentTask',
    'menu.experiment.creating': "ExperimentCreating",
    'menu.experiment.detail': 'ExperimentDetail',
    'menu.chaostools': 'ChaosTools',
    'menu.chaostools.deployed': 'ChaosToolsDeployed',
    'menu.chaostools.market': 'ChaosToolsMarket',
    'menu.chaostools.detail': 'ChaosToolsDetail',

    'page.pagination.total': 'Total: {total}',
    'page.popconfirm.ok': 'Yes',
    'page.popconfirm.cancel': 'No',

    'page.machine.tab.host': 'Host',
    'page.machine.tab.host.tooltip.hostList': 'List all the registered machines, Goto ',
    'page.machine.tab.host.tooltip.machineRegister': 'MachineRegister',
    'page.machine.tab.host.tooltip.probeInstall': ' page, to install probe for machine register.',
    'page.machine.tab.application': 'Application',
    'page.machine.tab.application.tooltip.identity': 'To view Related Machines, Pods and Nodes, Goto ',
    'page.machine.tab.application.tooltip.appRegister': ' Page to Register Related Machines. ',
    'page.machine.tab.application.tooltip.click': 'Click',
    'page.machine.tab.application.tooltip.appIntroduction': 'Application Introduction',
    'page.machine.tab.application.tooltip.appDimensionInfo': ' to learn more detail about application.',
    'page.machine.tab.kubernetes': 'Kubernetes',
    'page.machine.tab.kubernetes.tooltip.resources': 'To view collected Cluster resources data, Goto ',
    'page.machine.tab.kubernetes.tooltip.probe': ' Page to install probe for collection.',

    'page.machine.search.select.yes.no': 'Yes / No',

    'page.machine.register.tab.host': 'HostRegister',
    'page.machine.register.tab.kubernetes': 'KubernetesRegister',
    'page.machine.register.tab.application': 'ApplicationRegister',
    'page.machine.register.tab.probe': 'ProbeList',
    'page.machine.register.ansible': 'Ansible',
    'page.machine.register.ssh': 'SSH',
    'page.machine.register.manual': 'Manual',
    'page.machine.register.helm': 'Helm',
    'page.machine.register.info.waiting': 'Coming soon...',
    'page.machine.register.noMachine': 'No Machine',
    'page.machine.register.redirect.installPage': 'Goto Install Instruction',
    'page.machine.register.redirect.installInstruction': 'Install Instruction',
    'page.machine.register.install.title': 'Select Machines to Install',
    'page.machine.register.install.info.trigger': 'Will trigger during installing',
    'page.machine.register.install.info.moreDetail': 'you can switch application detail on or off, more info please check instruction: ',
    'page.machine.register.install.info.defaultStatus': 'Selected machine will ',
    'page.machine.register.install.info.chaosBlade': 'ChaosBlade Tool deployment, sure, yon can also decide to turn it on or off.',

    'page.machine.register.host.tooltip.intro': 'Register Machines to Platform to execute Chaos Experiment, mainly for non-cluster, it need to deploy a Probe, features as below:',
    'page.machine.register.host.tooltip.li1': 'Upload host info;',
    'page.machine.register.host.tooltip.li2': 'Upload heartbeat info',
    'page.machine.register.host.tooltip.li3': 'Deploy Chaos Tools',
    'page.machine.register.host.tooltip.li4': 'Execute Chaos Commands',
    'page.machine.register.host.tooltip.support': 'Probe Mode Support: Via Ansible or Via SSH install by remote, install Probe direct manually',

    'page.machine.register.k8s.tooltip.intro': 'Register Kubernetes which means to collect Pods、Nodes data, we use these data to execute Chaos Experiments on targets, this way is for Cluster Mode. We deploy Probe onto Cluster, to collect Pods、Nodes basic info.',
    'page.machine.register.k8s.tooltip.support': 'Kubernetes Mode support installing via Helm only.',

    'page.machine.ansible.configuration': 'Configure Ansible',
    'page.machine.ansible.configuration.info1': 'You can goto console service hosted machine to configure',
    'page.machine.ansible.configuration.info2': ', then, please click the Sync button. ',
    'page.machine.ansible.machine.sync': 'Sync Machine Info',
    'page.machine.ansible.view.install.info': 'View Installation Detail',
    'page.machine.ansible.info.notice': 'Refresh Automatically, You Can Goto ProbeManager Also.',

    'page.machine.status.wait': 'WaitForInstallation',
    'page.machine.status.installing': 'Installing',
    'page.machine.status.install.failed': 'InstallFailed',
    'page.machine.status.online': 'Online',
    'page.machine.status.offline': 'Offline',
    'page.machine.status.uninstalling': 'Uninstalling',
    'page.machine.status.uninstall.failed': 'UninstallFailed',
    'page.machine.status.baning': 'Baning',

    'page.machine.host.count': 'Machine Count',
    'page.machine.host.activeCount': 'Online Machine Count',
    'page.machine.host.machineStatus': 'MachineStatus',
    'page.machine.host.machineStatus.placeholder': 'Select Machine Status',
    'page.machine.host.everChaosed': 'EverChaosed',
    'page.machine.host.lastChaosedTime': 'LastChaosedTime',

    'page.machine.host.column.title.status': 'Status',
    'page.machine.host.column.title.index': 'Index',
    'page.machine.host.column.title.machineId': 'MachineId',
    'page.machine.host.column.title.hostname': 'MachineName',
    'page.machine.host.column.title.hostname.placeholder': 'Please Input MachineName',
    'page.machine.host.column.title.ip': 'IP',
    'page.machine.host.column.title.ip.placeholder': 'Please Input IP',
    'page.machine.host.column.title.version': 'OsVersion',

    'page.machine.host.column.title.agentStatus': 'ProbeStatus',
    'page.machine.host.column.title.agentStatus.placeholder': 'Select Probe Status',
    'page.machine.host.column.title.agentVersion': 'ProbeVersion',
    'page.machine.host.column.title.agentType': 'ProbeType',
    'page.machine.host.column.title.agentType.placeholder': 'Select Probe Type',
    'page.machine.host.column.title.agentId': 'ProbeId',
    'page.machine.host.column.title.installTime': 'InstallTime',
    'page.machine.host.column.title.heartbeatTime': 'HeartbeatTime',
    'page.machine.host.column.title.relatedMachine': 'RelatedMachine',
    'page.machine.host.column.title.chaosTool': 'ChaosTool',
    'page.machine.host.column.title.chaosed': 'Chaosed',
    'page.machine.host.column.title.chaosTime': 'ChaosTime',
    'page.machine.host.column.title.operation': 'Operation',
    'page.machine.host.column.title.chaosRunning': 'ChaosRunning',
    'page.machine.host.column.operation.reinstall': 'Reinstall',
    'page.machine.host.column.operation.install': 'Install',
    'page.machine.host.column.operation.uninstall': 'Uninstall',
    'page.machine.host.column.operation.ban.name': 'Disable',
    'page.machine.host.column.operation.unban.name': 'Enable',
    'page.machine.host.column.operation.ban.pop.title': 'Are you sure you want to disable it?',
    'page.machine.host.column.operation.unban.pop.title': 'Are you sure you want to enable it?',
    'page.machine.host.column.operation.experiment.creating': 'CreateExperiment',
    'page.machine.host.column.operation.experiment.running': 'ExperimentRunning...',
    'page.machine.host.column.detail': 'Detail',
    'page.machine.host.agent.not.found': 'NoProbeFound',
    'page.machine.host.agent.not.found.guide': 'No Probe Found, Please ',

    'page.machine.host.list.empty.info1': 'No Machine Found, Please Goto',
    'page.machine.host.list.empty.info2': 'Page to Register',
    'page.machine.host.list.register.machine': 'RegisterMachine',
    'page.machine.host.list.search.empty': 'No Machine Found',
    'page.machine.host.info': 'MachineDetail',
    'page.machine.host.register.status.title': 'RegisterStatus',
    'page.machine.host.register.install': 'Install',
    'page.machine.host.register.status.option.uninstall': 'Uninstall',
    'page.machine.host.register.status.option.installing': 'Installing',
    'page.machine.host.register.status.option.installFailed': 'InstallFailed',
    'page.machine.host.register.status.option.installed': 'Installed',
    'page.machine.host.register.status.option.offline': 'Offline',
    'page.machine.host.register.status.disabled': 'Disabled',
    'page.machine.host.errorMessage': 'ErrorMessage',
    'page.machine.host.noResults': 'No Probe',
    'page.machine.host.bottom.click': 'You Can Click ',
    'page.machine.host.bottom.detail': 'Detail',
    'page.machine.host.bottom.listAll': ' to List All',

    'page.machine.k8s.info.nodeCount': 'Node Count',
    'page.machine.k8s.info.namespaceCount': 'Namespace Count',
    'page.machine.k8s.info.podCount': 'Pod Count',
    'page.machine.k8s.tab.node': 'NodeList',
    'page.machine.k8s.tab.pod': 'PodList',
    'page.machine.k8s.node.name': "NodeName",
    'page.machine.k8s.node.name.placeholder': "Please Input NodeName",
    'page.machine.k8s.node.ip': "NodeIp",
    'page.machine.k8s.node.ip.placeholder': "Please Input NodeIp",
    'page.machine.k8s.node.status': "NodeStatus",
    'page.machine.k8s.node.status.placeholder': "Please Select",
    'page.machine.k8s.pod.name': "PodName",
    'page.machine.k8s.pod.name.placeholder': "Please Input Pod Name",
    'page.machine.k8s.pod.ip': "PodIp",
    'page.machine.k8s.pod.ip.placeholder': "Please Input Pod IP",
    'page.machine.k8s.pod.status': "PodStatus",
    'page.machine.k8s.pod.status.placeholder': "Please Select Pod Status",
    'page.machine.k8s.pod.containerList': "ContainerList",
    'page.machine.k8s.namespace.name': "Namespace",
    'page.machine.k8s.namespace.name.placeholder': "Please Input Namespace",

    'page.machine.app.name': "ApplicationName",
    'page.machine.app.name.placeholder': "Please Input Application Name",
    'page.machine.app.count': "Application Count",
    'page.machine.app.group': "ApplicationGroup",
    'page.machine.app.group.placeholder': "Please Input Group Name",
    'page.machine.app.groupCount': "Group Count",
    'page.machine.app.machineType': "MachineType",
    'page.machine.app.machineType.placeholder': "Please Select MachineType",
    'page.machine.app.machineStatus': "MachineStatus",
    'page.machine.app.machineStatus.placeholder': "Please Select MachineStatus",

    'page.experiment.creating.host.dimension.name': 'HostDimension',
    'page.experiment.creating.application.dimension.name': 'ApplicationDimension',
    'page.experiment.creating.kubernetes.dimension.name': 'KubernetesDimension',

}
