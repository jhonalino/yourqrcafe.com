console.log('helper called')

const QRC = window.qrcodegen.QrCode;
const encodeToSvgString = (text, border = 4) => {
    let qr0 = QRC.encodeText(text, QRC.Ecc.HIGH);
    let svgString = qr0.toSvgString(border);
    return svgString;
}

const QREncoder = (data) => {
    switch (data.type.toLowerCase()) {
        case 'url':
            return data.url
        case 'text':
            return data.text
        case 'email':
            return `mailto:${data.email}?subject=${data.subject}&body=${data.message}`
        case 'sms':
            return `smsto:${data.number}:${data.message}`
        case 'vcard':
            return `BEGIN:VCARD
VERSION:3.0
N:${data.firstName} ${data.lastName}
ORG:${data.company}
TITLE:${data.title}
TEL:${data.phone}
URL:${data.website}
EMAIL:${data.email}
ADR:${data.street} ${data.city}, ${data.state} ${data.country}
NOTE:${data.note}
END:VCARD`
        case 'event':
            return `BEGIN:VEVENT
SUMMARY:${data.title}
DTSTART:20180412T235455
DTEND:20180412T135455
LOCATION: ${data.location}
DESCRIPTION: ${data.description}`
        default:
            break;
    }
}

const encodeDataToSvgUri = (data) => {
    const encodedString = QREncoder(data)
    return encodeURIComponent(encodeToSvgString(encodedString));
}


export default {
    encodeToSvgString,
    QREncoder,
    encodeDataToSvgUri
}