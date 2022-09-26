import mongoose from "mongoose";

const Schema = mongoose.Schema

const profileDetailSchema = new Schema({
    name: { type: String, required: true },
    age: { type: Number, required: false },
    gender: {
        type: String,
        required: false,
        default: false,
        enum: [
            'male', 'female', 'prefer not to say'
        ]
    },
    marital_status: {
        type: String,
        required: false,
        default: 'single',
        enum: [
            "single", "separated", "divorced", "windowed", "other", "prefer not to say"
        ]
    },

    relationship_you_are_looking_for: {
        type: String,
        required: false,
        default: false,
        enum: [
            'any', 'sex', 'romance/dating', 'friendship', 'long term relationship', 'marriage'
        ]
    },

    religion: {
        type: String,
        required: false,
        default: '',
        enum: [
            "islam", "christian-orthodox", "christian-catholic", "no-religion ", "prefer not to say"
        ]
    },
    are_you_religious: {
        type: String,
        required: false,
        default: false,
        enum: [
            'yes', 'no', "prefer not to say"
        ]
    },
    ethnicity: {
        type: String,
        required: false,
        default: '',
        enum: [
            "saho", "tigrinya", "jeberti", "tigre", "bilen", "other", "prefer not to say"
        ]
    },
    language_spoken: { type: String, required: false },


    nationality_country: {
        type: String,
        required: true
    },
    nationality_state_or_zone: {
        type: String,
        required: true
    },
    nationality_city: {
        type: String,
        required: true
    },

    live_in_country: {
        type: String,
        required: true
    },
    live_in_state_or_zone: {
        type: String,
        required: true
    },
    live_in_city: {
        type: String,
        required: true
    },
    // test: [testSchema],

    owner: { type: mongoose.Schema.Types.ObjectId, ref: "Profile" },
},
    {
        timestamps: true
    })

const ProfileDetail = mongoose.model("ProfileDetail", profileDetailSchema)
export {
    ProfileDetail
}