class files
{
    constructor()
    {
        //Inclide File Package
        this.fs = require('fs');
    }

    getFileData(file,callback)
    {
        //Read File Data
        this.fs.readFile(file,(err,data)=>
        {
            console.error(err);
            callback(data.toString());
        });
    }

    witeFileData(content)
    {
        //Write File Data
        this.fs.writeFile('file.txt',content,err=>console.log(err));
    }

    appendFileData(content)
    {
        //Add Data in Existing File
        this.fs.appendFile('file.txt',content,err => console.log(err));
    }

    deleteFile(file)
    {
        //Delete File
        this.fs.unlink(file,err => console.log(err));
    }
}

const files_class =new files();


files_class.getFileData('index.html',data => console.log(data));

files_class.witeFileData('Create Text File');

files_class.appendFileData('Add Data in Current Text File');

files_class.deleteFile('file.txt');