const cloudinary = require("cloudinary").v2; //! Cloudinary is being required
exports.cloudinaryConnect = () => {
try {
cloudinary.config({
cloud_name: "decsz2x5a",
api_key: "236586514612889",
api_secret: "a86GVh1QGNdFNSinxRxqwUNHhQE",
});
} catch (error) {
console.log(error);
}
};