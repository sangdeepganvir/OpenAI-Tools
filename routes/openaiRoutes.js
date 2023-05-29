const express = require("express");
const {
    summaryController,
    paragraphController,
    chatbotController,
    jsconverterController,
    scifiImageController,
    cppConverterController,
    englishToMarathiTranslatorController,
    textSentimentController,
    grammarCorrectionController,
    nerController
} = require("../controllers/openaiController");

const router = express.Router();

//route
router.post("/summary", summaryController);
router.post("/paragraph", paragraphController);
router.post("/chatbot", chatbotController);
router.post("/js-converter", jsconverterController);
router.post("/scifi-image", scifiImageController);
router.post("/cppConverter", cppConverterController);
router.post("/EngtoMarathi", englishToMarathiTranslatorController);
router.post("/SentimentAnalysis", textSentimentController);
router.post("/grammerCorrection", grammarCorrectionController);
router.post("/ner", nerController);

module.exports = router;