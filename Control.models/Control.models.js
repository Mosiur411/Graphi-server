const { Graphi_servics_post, Graphi_servics_get, Graphi_servics_Delete, Graphi_servics_post_Horizental, Graphi_servics_get_Horizental, Graphi_servics_Delete_Horizental, Graphi_servics_post_MultipleBar, Graphi_servics_get_MultipleBar, Graphi_servics_Delete_MultipleBar, Graphi_servics_post_SimpleLine, Graphi_servics_get_SimpleLine, Graphi_servics_Delete_SimpleLine } = require("../servics/Graphi.servics");


/* ========== singleBar ==============*/

exports.Graphi_post = async (req, res) => {
    try {
        const result = await Graphi_servics_post(req.body);
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
        const result = await Graphi_servics_get();
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

/* ========== HorizontalBarChart ==============*/
exports.Graphi_post_Horizental = async (req, res) => {
    try {
        const result = await Graphi_servics_post_Horizental(req.body);
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
        const result = await Graphi_servics_get_Horizental();
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

/* ========== MultipleBar ==============*/
exports.Graphi_post_MultipleBar = async (req, res) => {
    try {
        const result = await Graphi_servics_post_MultipleBar(req.body);
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
    try {
        const result = await Graphi_servics_get_MultipleBar();
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



/* ========== SimpleLine ==============*/
exports.Graphi_post_SimpleLine = async (req, res) => {
    try {
        const result = await Graphi_servics_post_SimpleLine(req.body);
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
        const result = await Graphi_servics_get_SimpleLine();
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