const { SingleBar, HorizentalBar, MultipleBar, SimpleLine, DualLine } = require("../models/Graphi");

/* ============ SingleBar  start =============== */
exports.Graphi_servics_post = async (req) => {
    const data = { label: req.body.label, yValue: req.body.yValue, user: req.query.user }
    const result = await SingleBar.create(data)
    return result;
}
exports.Graphi_servics_get = async (data) => {
    const userData = data.user
    var result = await SingleBar.find()
    const userresult = result.filter(ud => ud?.user === userData)
    if (userresult?.length >= 1) {
        return userresult;
    }


}

exports.Graphi_servics_Update = async (id, yValue) => {
    const data = { "yValue": yValue }
    if (id) {
        const result = await SingleBar.updateMany({ _id: id }, { $set: data }, {
            runValidators: true,
        })
        return result;
    }

}

exports.Graphi_servics_Delete = async ({ id }) => {
    const result = await SingleBar.deleteOne({ _id: id })
    return result;
}





/* ============ HorizentalBar =============== */
exports.Graphi_servics_post_Horizental = async (req) => {
    const data = { label: req.body.label, yValue: req.body.yValue, user: req.query.user }
    const result = await HorizentalBar.create(data)
    return result;
}
exports.Graphi_servics_get_Horizental = async (data) => {
    const userData = data.user
    const result = await HorizentalBar.find()
    const userresult = result.filter(ud => ud?.user === userData)
    if (userresult?.length >= 1) {
        return userresult;
    }
}
exports.Graphi_servics_Delete_Horizental = async ({ id }) => {
    const result = await HorizentalBar.deleteOne({ _id: id })
    return result;
}
exports.Graphi_servics_Update_Horizental = async (id, yValue) => {
    const data = { "yValue": yValue }
    if (id) {
        const result = await HorizentalBar.updateMany({ _id: id }, { $set: data }, {
            runValidators: true,
        })
        return result;
    }

}




/* ============ MultipleBar =============== */
exports.Graphi_servics_post_MultipleBar = async (req) => {
    const data = { label: req.body.label, yValue: req.body.yValue, xValue: req.body.xValue, user: req.query.user }
    const result = await MultipleBar.create(data)
    return result;
}
exports.Graphi_servics_get_MultipleBar = async (data) => {
    const userData = data?.user
    console.log(userData)
    const result = await MultipleBar.find()
    const userresult = result.filter(ud => ud?.user === userData)
    console.log(userresult)
    if (userresult?.length >= 1) {
        return userresult;
    }
}
exports.Graphi_servics_Delete_MultipleBar = async ({ id }) => {
    const result = await MultipleBar.deleteOne({ _id: id })
    return result;
}
exports.Graphi_servics_Update_MultipleBar = async (id, yValue, datasetIndex) => {
    let data;
    if (datasetIndex === 0) {
        data = { "yValue": yValue }
    } else {
        data = { "xValue": yValue }
    }

    if (id) {
        const result = await MultipleBar.updateMany({ _id: id }, { $set: data }, {
            runValidators: true,
        })
        return result;
    }

}




/* ============ SimpleLine =============== */
exports.Graphi_servics_post_SimpleLine = async (req) => {
    const data = { label: req.body.label, yValue: req.body.yValue, user: req.query.user }
    const result = await SimpleLine.create(data)
    return result;
}
exports.Graphi_servics_get_SimpleLine = async (data) => {
    const userData = data.user
    const result = await SimpleLine.find()
    const userresult = result.filter(ud => ud?.user === userData)
    if (userresult?.length >= 1) {
        return userresult;
    }
}
exports.Graphi_servics_Delete_SimpleLine = async ({ id }) => {
    const result = await SimpleLine.deleteOne({ _id: id })
    return result;
}
exports.Graphi_servics_Update_SimpleLine = async (id, yValue) => {
    const data = { "yValue": yValue }
    if (id) {
        const result = await SimpleLine.updateMany({ _id: id }, { $set: data }, {
            runValidators: true,
        })
        return result;
    }

}

/* ============ DualLine =============== */
exports.Graphi_servics_post_DualLine = async (req) => {
    const data = { label: req.body.label, yValue: req.body.yValue, user: req.query.user }
    const result = await DualLine.create(data)
    return result;
}
exports.Graphi_servics_get_DualLine = async (data) => {
    const userData = data.user
    const result = await DualLine.find()
    const userresult = result.filter(ud => ud?.user === userData)
    if (userresult?.length >= 1) {
        return userresult;
    }
}
exports.Graphi_servics_Delete_DualLine = async ({ id }) => {
    const result = await DualLine.deleteOne({ _id: id })
    return result;
}
exports.Graphi_servics_Update_DualLine = async (id, yValue) => {
    const data = { "yValue": yValue }
    if (id) {
        const result = await DualLine.updateMany({ _id: id }, { $set: data }, {
            runValidators: true,
        })
        return result;
    }

}