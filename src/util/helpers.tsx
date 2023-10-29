export function openUrlInNewTab(url: string | null) {
    if (url){
        const newTab = window.open(url, "_blank");
        if (newTab){
            newTab.focus();
        }

    }
}



export const vcardLink = () => {
        const contactData = `
BEGIN:VCARD
VERSION:3.0
FN:Andreas Espelund
TEL:004799125338
EMAIL:andreres@gmail.com
END:VCARD
        `;

        const blob = new Blob([contactData], { type: 'text/vcard' });
        const href = URL.createObjectURL(blob);

        return href
    };
