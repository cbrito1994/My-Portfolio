require('dotenv').config();

document.addEventListener("adobe_dc_view_sdk.ready", function()
{
    let adobeDCView = new AdobeDC.View({clientId: process.env.CLIENT_ID, divId: "adobe-dc-view"});
    adobeDCView.previewFile(
{
    content:   {location: {url: "Assets/Resume-Carlos-Brito-English.pdf"}},
    metaData: {fileName: "Carlos Brito Resume.pdf"}
});
});