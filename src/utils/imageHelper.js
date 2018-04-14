
const JPEG = 'image/jpeg'
const PNG = 'image/png'

const generateSvgUrl = (svgUri) => {
    return `data:image/svg+xml;charset=utf-8,${svgUri}`
}

const generateRasterUrl = (svgUri, mimeType) => {
    const canvas = document.createElement('canvas');
    canvas.width = 1000;
    canvas.height = 1000;
    const ctx = canvas.getContext('2d');
    const img = new Image();
    let imageUrl = ''
    img.onload = () => {
        ctx.drawImage(img, 0, 0);
        canvas.toBlob((blob) => {
            imageUrl = URL.createObjectURL(blob)
            downloadImage(imageUrl, 'your-qr-code', imageUrl)
        }, mimeType)
    }
    img.src = generateSvgUrl(svgUri)

}

const downloadImage = (src, fileName, imgUrl) => {
    const a = document.createElement('a');
    a.href = src;
    a.download = fileName;
    a.click();
    imgUrl && URL.revokeObjectURL(imgUrl)
}

const downloadHandler = (fileType, svgUri) => {
    switch (fileType) {
        case 'png':
            generateRasterUrl(svgUri, PNG)
            break;
        case 'jpeg':
            generateRasterUrl(svgUri, JPEG)
            break;
        case 'svg':
            downloadImage(generateSvgUrl(svgUri), 'your-qr-code')
            break;
        default:
            break;
    }
}

export default {
    generateRasterUrl,
    generateSvgUrl,
    downloadImage,
    downloadHandler
}