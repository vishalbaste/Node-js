const http = require('http');
const nodemailer = require('nodemailer');

let transport = nodemailer.createTransport({
    service :   'gmail',
    auth    :   {
                    user    :   'vishalonlineworks@gmail.com',
                    pass    :   '@149GTVNBs'
                }
});

transport.sendMail({
    from    :   'vishalonlineworks@gmail.com',
    to      :   'vishalbaste726@mail.com',
    subject :   'Node JS Test Mail',
    text    :   'Node JS Test Mail Body Test Here',
},(error,info)=>
{
    if(error)
        console.log(error)
    else
        console.log('Mail Send : '+ info.response)
});