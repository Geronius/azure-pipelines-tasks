export let TestEnvVars = {
    operatingSystem: "__operating_system__",
    hostType: "__hostType__",
    containerRegistry: "__containerRegistry__",
    repository: "__repository__",
    command: "__command__",
    dockerFile: "__dockerFile__",
    buildContext: "__buildContext__",
    tags: "__tags__",
    arguments: "__arguments__"
};

export let OperatingSystems = {
    Windows: "Windows",
    Other: "Other"
};

export let HostTypes ={
    build: "build",
    release: "release"
}

export let CommandTypes = {
    buildAndPush: "buildAndPush",
    build: "build",
    push: "push",
    images: "images"
};

export let SharedValues = {
    SYSTEM_TEAMFOUNDATIONCOLLECTIONURI: "https://dev.azure.com/abc",
    SYSTEM_TEAMPROJECT: "testproj",
    BUILD_REPOSITORY_NAME: "testrepo",
    BUILD_REPOSITORY_URI: "https://dev.azure.com/abc/testrepo",
    BUILD_SOURCEBRANCHNAME: "master",
    BUILD_SOURCEVERSION: "521747298a3790fde1710f3aa2d03b55020575aa",
    BUILD_DEFINITIONNAME: "testBD",
    BUILD_BUILDNUMBER: "11",
    BUILD_BUILDURI: "vstfs:///Build/Build/11",
    RELEASE_DEFINITIONNAME: "testRD",
    RELEASE_RELEASEID: "21",
    RELEASE_RELEASEWEBURL: "https://dev.azure.com/abc/testrepo/_release?releaseId=21&_a=release-summary",
    containerRegistry: "dockerhubendpoint"
}

export let DockerCommandArgs = {
    BuildLabels: `--label com.azure.dev.image.system.teamfoundationcollectionuri=${SharedValues.SYSTEM_TEAMFOUNDATIONCOLLECTIONURI} --label com.azure.dev.image.system.teamproject=${SharedValues.SYSTEM_TEAMPROJECT} --label com.azure.dev.image.build.repository.name=${SharedValues.BUILD_REPOSITORY_NAME} --label com.azure.dev.image.build.repository.uri=${SharedValues.BUILD_REPOSITORY_URI} --label com.azure.dev.image.build.sourcebranchname=${SharedValues.BUILD_SOURCEBRANCHNAME} --label com.azure.dev.image.build.sourceversion=${SharedValues.BUILD_SOURCEVERSION} --label com.azure.dev.image.build.definitionname=${SharedValues.BUILD_DEFINITIONNAME} --label com.azure.dev.image.build.buildnumber=${SharedValues.BUILD_BUILDNUMBER} --label com.azure.dev.image.build.builduri=${SharedValues.BUILD_BUILDURI}`,
    ReleaseLabels: `--label com.azure.dev.image.system.teamfoundationcollectionuri=${SharedValues.SYSTEM_TEAMFOUNDATIONCOLLECTIONURI} --label com.azure.dev.image.system.teamproject=${SharedValues.SYSTEM_TEAMPROJECT} --label com.azure.dev.image.release.definitionname=${SharedValues.RELEASE_DEFINITIONNAME} --label com.azure.dev.image.release.releaseid=${SharedValues.RELEASE_RELEASEID} --label com.azure.dev.image.release.releaseweburl=${SharedValues.RELEASE_RELEASEWEBURL}`
}

/**
 * Formats the given path to be appropriate for the operating system.
 * @param canonicalPath A non-rooted path using a forward slash (/) as a directory separator.
 */
export function formatPath(canonicalPath: string) {
    if (process.env[TestEnvVars.operatingSystem] === OperatingSystems.Windows) {
        return "F:\\" + canonicalPath.replace(/\//g, '\\');
    } else {
        return "/" + canonicalPath;
    }
};