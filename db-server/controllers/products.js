const { Product } = require("../models");
const { cookieNames, clientMessages } = require("../config/app-config");

const products = {
    get: {
        all: async function (req, res) {
            const items = await Product.find();
            res.status(200).send(items);
        },
        honey: async function (req, res) {
            const items = await Product.find().where("type").equals("honey");
            res.status(200).send(items);
        },
        propolis: async function (req, res) {
            const items = await Product.find().where("type").equals("propolis");
            res.status(200).send(items);
        },
        beeswax: async function (req, res) {
            const items = await Product.find().where("type").equals("beeswax");
            res.status(200).send(items);
        },
        pollen: async function (req, res) {
            const items = await Product.find().where("type").equals("pollen");
            res.status(200).send(items);
        }
    } 
}

// function createCube (req, res) {
//     const method = req.method;
//     const user = req.user;

//     switch (method) {
//         case "GET":
//             res.render("create", { user });
//             break;
//         case "POST":
//             const formData = req.body;
//             addCube(user, formData)
//                 .then(() => {
//                     setClientCookie(res, cookieNames.message, clientMessages.cubeCreated, { maxAge: 2000 })
//                         .redirect("/");
//                 })
//                 .catch(error => {
//                     clientErrorHandler(res, "create", error, { user });
//                 });
//             break;
//     }
// }

// async function deleteCube (req, res, next) {
//     const method = req.method;
//     const cubeID = req.params.cubeID;
//     const user = req.user;

//     switch (method) {
//         case "GET":
//             let cube;
//             try {
//                 cube = await getCubeDetails(cubeID);
//             } catch (error) {
//                 next(error);
//             }
//             res.render("delete-cube", { user, cube });
//             break;
//         case "POST":
//             removeCube(cubeID)
//                 .then(() => {
//                     setClientCookie(res, cookieNames.message, clientMessages.cubeDeleted, { maxAge: 2000 })
//                         .redirect("/");
//                 })
//                 .catch(error => {
//                     clientErrorHandler(res, null, error, { user });
//                 })
//     }
// }

// async function cubeDetails (req, res, next) {
//     const cubeID = req.params.cubeID;
//     const user = req.user;
//     let cube;
//     try {
//         cube = await getCubeDetails(cubeID);
//     } catch (error) {
//         next(error);
//     }
//     const creator = cube.creatorID.equals(req.user._id) ? true : false;
//     const message = req.cookies[cookieNames.message];
//     res.render("details", { user, cube, creator, message });
// }

// async function editCube (req, res, next) {
//     const method = req.method;
//     const user = req.user;
//     const cubeID = req.params.cubeID;
//     let cube;
//     try {
//         cube = await getCubeDetails(cubeID);
//     } catch (error) {
//         next(error);
//     }

//     switch (method) {
//         case "GET":
//             res.render("edit-cube", { cube, user });
//             break;
//         case "POST":
//             const formData = req.body;
//             updateCube(cubeID, formData, next)
//                 .then(() => {
//                     setClientCookie(res, cookieNames.message, clientMessages.cubeEdited, { maxAge: 2000 })
//                         .redirect(`/details/${cubeID}`);
//                 })
//                 .catch(error => {
//                     clientErrorHandler(res, "edit-cube", error, { cube, user });
//                     return;
//                 })
//             break;
//     }
// }

module.exports = products;