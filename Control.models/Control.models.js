const { Graphi_servics_post, Graphi_servics_get, Graphi_servics_Delete, Graphi_servics_post_Horizental, Graphi_servics_get_Horizental, Graphi_servics_Delete_Horizental, Graphi_servics_post_MultipleBar, Graphi_servics_get_MultipleBar, Graphi_servics_Delete_MultipleBar, Graphi_servics_post_SimpleLine, Graphi_servics_get_SimpleLine, Graphi_servics_Delete_SimpleLine, Graphi_servics_post_DualLine, Graphi_servics_get_DualLine, Graphi_servics_Delete_DualLine, Graphi_servics_Update, Graphi_servics_Update_Horizental, Graphi_servics_Update_MultipleBar, Graphi_servics_Update_SimpleLine, Graphi_servics_Update_DualLine } = require("../servics/Graphi.servics");


/* ========== singleBar ==============*/

exports.Graphi_post = async (req, res) => {
    try {
        const result = await Graphi_servics_post(req);
        res.status(200).json({
            status: "suscces full post",
            data: result,
        })

    } catch (error) {
        res.status(400).json({
            status: "Fale",
            data: error,
        })
    }
}
exports.Graphi_get = async (req, res) => {
    try {
        const result = await Graphi_servics_get(req.query);
        res.status(200).json({
            status: "suscces full get",
            data: result,
        })

    } catch (error) {
        res.status(400).json({
            status: "Fale",
            data: error,
        })
    }
}
exports.Graphi_Delete = async (req, res) => {
    try {
        const result = await Graphi_servics_Delete(req.params);
        res.status(200).json({
            status: "suscces full Delet",
            data: result,
        })

    } catch (error) {
        res.status(400).json({
            status: "Fale",
            data: error,
        })
    }
}
exports.Graphi_Update = async (req, res) => {
    try {
        const id = req.params.id;
        const yValue = req.body.value;
        const result = await Graphi_servics_Update(id, yValue);
        res.status(200).json({
            status: "suscces full Delet",
            data: result,
        })

    } catch (error) {
        res.status(400).json({
            status: "Fale",
            data: error,
        })
    }
}

/* ========== HorizontalBarChart Graphi_Update_Horizental==============*/

exports.Graphi_post_Horizental = async (req, res) => {
    try {
        const result = await Graphi_servics_post_Horizental(req);
        res.status(200).json({
            status: "suscces full post",
            data: result,
        })

    } catch (error) {
        res.status(400).json({
            status: "Fale",
            data: error,
        })
    }
}
exports.Graphi_get_Horizental = async (req, res) => {
    try {
        const result = await Graphi_servics_get_Horizental(req.query);
        res.status(200).json({
            status: "suscces full get",
            data: result,
        })

    } catch (error) {
        res.status(400).json({
            status: "Fale",
            data: error,
        })
    }
}
exports.Graphi_Delete_Horizental = async (req, res) => {
    try {
        const result = await Graphi_servics_Delete_Horizental(req.params);
        res.status(200).json({
            status: "suscces full Delet",
            data: result,
        })

    } catch (error) {
        res.status(400).json({
            status: "Fale",
            data: error,
        })
    }
}
exports.Graphi_Update_Horizental = async (req, res) => {
    try {
        const id = req.params.id;
        const yValue = req.body.value;
        const result = await Graphi_servics_Update_Horizental(id, yValue);
        res.status(200).json({
            status: "suscces full Delet",
            data: result,
        })

    } catch (error) {
        res.status(400).json({
            status: "Fale",
            data: error,
        })
    }
}

/* ========== MultipleBar ==============*/
exports.Graphi_post_MultipleBar = async (req, res) => {
    try {
        const result = await Graphi_servics_post_MultipleBar(req);
        res.status(200).json({
            status: "suscces full post",
            data: result,
        })

    } catch (error) {
        res.status(400).json({
            status: "Fale",
            data: error,
        })
    }
}
exports.Graphi_get_MultipleBar = async (req, res) => {
    console.log(req.query)
    try {
        const result = await Graphi_servics_get_MultipleBar(req.query);
        res.status(200).json({
            status: "suscces full get",
            data: result,
        })

    } catch (error) {
        res.status(400).json({
            status: "Fale",
            data: error,
        })
    }
}
exports.Graphi_Delete_MultipleBar = async (req, res) => {
    try {
        const result = await Graphi_servics_Delete_MultipleBar(req.params);
        res.status(200).json({
            status: "suscces full Delet",
            data: result,
        })

    } catch (error) {
        res.status(400).json({
            status: "Fale",
            data: error,
        })
    }
}
exports.Graphi_Update_MultipleBar = async (req, res) => {
    try {
        const id = req.params.id;
        const yValue = req.body.value;
        const datasetIndex = req.body.datasetIndex;
        const result = await Graphi_servics_Update_MultipleBar(id, yValue,datasetIndex);
        res.status(200).json({
            status: "suscces full Delet",
            data: result,
        })

    } catch (error) {
        res.status(400).json({
            status: "Fale",
            data: error,
        })
    }
}



/* ========== SimpleLine ==============*/
exports.Graphi_post_SimpleLine = async (req, res) => {
    try {
        const result = await Graphi_servics_post_SimpleLine(req);
        res.status(200).json({
            status: "suscces full post",
            data: result,
        })

    } catch (error) {
        res.status(400).json({
            status: "Fale",
            data: error,
        })
    }
}
exports.Graphi_get_SimpleLine = async (req, res) => {
    try {
        const result = await Graphi_servics_get_SimpleLine(req.query);
        res.status(200).json({
            status: "suscces full get",
            data: result,
        })

    } catch (error) {
        res.status(400).json({
            status: "Fale",
            data: error,
        })
    }
}
exports.Graphi_Delete_SimpleLine = async (req, res) => {
    try {
        const result = await Graphi_servics_Delete_SimpleLine(req.params);
        res.status(200).json({
            status: "suscces full Delet",
            data: result,
        })

    } catch (error) {
        res.status(400).json({
            status: "Fale",
            data: error,
        })
    }
}
exports.Graphi_Update_SimpleLine = async (req, res) => {
    try {
        const id = req.params.id;
        const yValue = req.body.value;
        const result = await Graphi_servics_Update_SimpleLine(id, yValue);
        res.status(200).json({
            status: "suscces full Delet",
            data: result,
        })

    } catch (error) {
        res.status(400).json({
            status: "Fale",
            data: error,
        })
    }
}




/* ========== DualLine ==============*/
exports.Graphi_post_DualLine = async (req, res) => {
    try {
        const result = await Graphi_servics_post_DualLine(req);
        res.status(200).json({
            status: "suscces full post",
            data: result,
        })

    } catch (error) {
        res.status(400).json({
            status: "Fale",
            data: error,
        })
    }
}
exports.Graphi_get_DualLine = async (req, res) => {
    try {
        const result = await Graphi_servics_get_DualLine(req.query);
        res.status(200).json({
            status: "suscces full get",
            data: result,
        })

    } catch (error) {
        res.status(400).json({
            status: "Fale",
            data: error,
        })
    }
}
exports.Graphi_Delete_DualLine = async (req, res) => {
    try {
        const result = await Graphi_servics_Delete_DualLine(req.params);
        res.status(200).json({
            status: "suscces full Delet",
            data: result,
        })

    } catch (error) {
        res.status(400).json({
            status: "Fale",
            data: error,
        })
    }
}
exports.Graphi_Update_DualLine = async (req, res) => {
    try {
        const id = req.params.id;
        const yValue = req.body.value;
        const result = await Graphi_servics_Update_DualLine(id, yValue);
        res.status(200).json({
            status: "suscces full Delet",
            data: result,
        })

    } catch (error) {
        res.status(400).json({
            status: "Fale",
            data: error,
        })
    }
}