export function openUrlInNewTab(url: string) {
    const newTab = window.open(url, "_blank");
    newTab.focus();
}