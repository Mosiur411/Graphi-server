const express = require('express');
const { Graphi_post, Graphi_get, Graphi_Delete, Graphi_post_Horizental, Graphi_get_Horizental, Graphi_Delete_Horizental, Graphi_post_MultipleBar, Graphi_get_MultipleBar, Graphi_Delete_MultipleBar, Graphi_post_SimpleLine, Graphi_get_SimpleLine, Graphi_Delete_SimpleLine, Graphi_Delete_DualLine, Graphi_get_DualLine, Graphi_post_DualLine, Graphi_Update, Graphi_Update_Horizental, Graphi_Update_MultipleBar, Graphi_Update_SimpleLine, Graphi_Update_DualLine } = require('../Control.models/Control.models');
const router = express.Router()

/* ========== singleBar ==============*/
router.route('/singleBar')
    .post(Graphi_post)
    .get(Graphi_get)


/* ========== HorizontalBarChart ==============*/
router.route('/horizentalBar')
    .post(Graphi_post_Horizental)
    .get(Graphi_get_Horizental)

/* ========== MultipleBar ==============*/
router.route('/multipleBar')
    .post(Graphi_post_MultipleBar)
    .get(Graphi_get_MultipleBar)

/* ========== SimpleLine ==============*/
router.route('/simpleLine')
    .post(Graphi_post_SimpleLine)
    .get(Graphi_get_SimpleLine)

/* ========== dualLine ==============*/
router.route('/dualLine')
    .post(Graphi_post_DualLine)
    .get(Graphi_get_DualLine)

router.route('/singleBar/:id')
    .delete(Graphi_Delete)
    .patch(Graphi_Update)
router.route('/horizentalBar/:id')
    .delete(Graphi_Delete_Horizental)
    .patch(Graphi_Update_Horizental)
router.route('/multipleBar/:id')
    .delete(Graphi_Delete_MultipleBar)
    .patch(Graphi_Update_MultipleBar)
router.route('/simpleLine/:id')
    .delete(Graphi_Delete_SimpleLine)
    .patch(Graphi_Update_SimpleLine)
router.route('/dualLine/:id')
    .delete(Graphi_Delete_DualLine)
    .patch(Graphi_Update_DualLine)


module.exports = router;