import mongoose from 'mongoose'

const contactSchema = mongoose.Schema(
    {
        firstName: {
            type: String,
            require: true,
            minLength: 1
        },

        lastName: {
            type: String,
            require: true,
            minLength: 1
        },

        birthDate: {
            type: String,
            require: true,
            minLength: 1
        },

        mobileNumber: {
            type: String,
            require: true,
            minLength: 1
        }, 

        emailAdress: {
            type: String,
            require: true,
            minLength: 1
        },

        job: {
            type: String,
            require: true,
            minLength: 1
        },

        salary: {
            type: String,
            require: true,
            minLength: 1
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