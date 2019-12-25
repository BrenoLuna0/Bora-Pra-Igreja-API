const mongoose = require('mongoose');

const igrejaSchema = mongoose.Schema({
    nome : {
        type : String,
        require : true,
    },

    localizacao : {
        type : String,
        require : true,
    },

    cultos : {
        type : [Object],
        require : true,
    },

    eventos : {
        type : [Object]
    },
    imagem : {
        type : String
    }
});

mongoose.model('Igreja', igrejaSchema);