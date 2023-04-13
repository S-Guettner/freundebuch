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
            type: String,
            require: true
        },

        mobileNumber: {
            type: String,
            require: true
        }, 

        emailAdress: {
            type: String,
            require: true
        },

        job: {
            type: String,
            require: true
        },

        salary: {
            type: String,
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