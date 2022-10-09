// routes/profile.js
const express = require("express");
const router = express.Router();

const {
    getAllProfile,
    postCreateProfile,
    putUpdateProfile,
    deleteProfile,
} = require("../controllers/profile");

/**
 * @route GET api/profile
 * @description get all profile
 * @access public
 */
router.get("/", getAllProfile);

/**
 * @route POST api/profile
 * @description add a new profile
 * @access public
 */
router.post("/", postCreateProfile);

/**
 * @route PUT api/profile/:id
 * @description update profile
 * @access public
 */
router.put("/:id", putUpdateProfile);

/**
 * @route DELETE api/profile/:id
 * @description delete profile
 * @access public
 */
router.delete("/:id", deleteProfile);

module.exports = router;