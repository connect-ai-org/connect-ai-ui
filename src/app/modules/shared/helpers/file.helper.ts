const fileDefault = 'assets/images/files/blank-file.png';
const fileCSS = 'assets/images/files/css-file.png';
const filePdf = 'assets/images/files/pdf-file.png';
const filePng = 'assets/images/files/png-file.png';
const fileJpg = 'assets/images/files/jpg-file.png';
const fileJpeg = 'assets/images/files/jpeg-file.png';

export const getImageConfig = (type: string) => {
  switch(type) {
    case 'pdf': 
      return filePdf;
    case 'css':
      return fileCSS;
    case 'png':
      return filePng;
    case 'jpg':
      return fileJpg;
    case 'jpeg':
      return fileJpeg;
    default:
      return fileDefault;
  }
}