import { ProfileDetail } from "../models/profileDetail.js";


//////////////CREATE PROFILE DETAILS////////////////
function create(req, res) {
    req.body.owner = req.user.profile
    ProfileDetail.create(req.body)
        .then(profileDetail => {
            ProfileDetail.findById(profileDetail._id)
                .populate('owner')
                .then(populatedProfileDetail => {
                    res.json(populatedProfileDetail)
                    console.log(populatedProfileDetail)
                })
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ err: err.errmsg })
        })
}
///////////////GET PROFILE DETAILS////////////////
function index(req, res) {
    ProfileDetail.find({})
        .populate('owner')
        .then(profileDetails => {
            res.json(profileDetails)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ err: err.errmsg })
        })
}

export {
    create,
    index
}

