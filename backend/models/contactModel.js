import mongoose from 'mongoose'

const contactSchema = mongoose.Schema(
    {
        firstName: {
            type: String,
            require: true
        },

        lastName: {
            type: String,
            require: true
        },

        birthDate: {
            type: Number,
            require: true
        },

        mobileNumber: {
            type: Number,
            require: true
        }, 

        emailAdress: {
            type: String,
            require: true
        },

        job: {
            type: Boolean,
            require: true
        },

        salary: {
            type: Number,
            require: true
        },

        selfEmployed: {
            type: Boolean,
            require: true
        },

        customer: {
            type: Boolean,
            require: true
        }
    },

    {
        timestamps: true
    }
)


const contactSet = mongoose.model('contactSet',contactSchema )

export default contactSet