export function openUrlInNewTab(url: string | null) {
    if (url){
        const newTab = window.open(url, "_blank");
        if (newTab){
            newTab.focus();
        }

    }
}