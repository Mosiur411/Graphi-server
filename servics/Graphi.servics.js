const { SingleBar, HorizentalBar, MultipleBar, SimpleLine } = require("../models/Graphi");

/* ============ SingleBar  start =============== */
exports.Graphi_servics_post = async (data) => {
    const result = await SingleBar.create(data)
    return result;
}
exports.Graphi_servics_get = async () => {
    const result = await SingleBar.find()
    return result;
}
exports.Graphi_servics_Delete = async ({ id }) => {
    const result = await SingleBar.deleteOne({ _id: id })
    return result;
}






/* ============ HorizentalBar =============== */
exports.Graphi_servics_post_Horizental = async (data) => {
    const result = await HorizentalBar.create(data)
    return result;
}
exports.Graphi_servics_get_Horizental = async () => {
    const result = await HorizentalBar.find()
    return result;
}
exports.Graphi_servics_Delete_Horizental = async ({ id }) => {
    const result = await HorizentalBar.deleteOne({ _id: id })
    return result;
}




/* ============ MultipleBar =============== */
exports.Graphi_servics_post_MultipleBar = async (data) => {
    const result = await MultipleBar.create(data)
    return result;
}
exports.Graphi_servics_get_MultipleBar = async () => {
    const result = await MultipleBar.find()
    return result;
}
exports.Graphi_servics_Delete_MultipleBar = async ({ id }) => {
    const result = await MultipleBar.deleteOne({ _id: id })
    return result;
}





/* ============ SimpleLine =============== */
exports.Graphi_servics_post_SimpleLine = async (data) => {
    const result = await SimpleLine.create(data)
    return result;
}
exports.Graphi_servics_get_SimpleLine = async () => {
    const result = await SimpleLine.find()
    return result;
}
exports.Graphi_servics_Delete_SimpleLine = async ({ id }) => {
    const result = await SimpleLine.deleteOne({ _id: id })
    return result;
}