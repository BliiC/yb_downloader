const express = require("express");
const cors = require("cors");
const ytdl = require("ytdl-core");
const app = express();
import {PORT} from './config';

app.use(cors());

app.listen(PORT, ()=> {
    console.log("El servidor esta en el puerto", PORT)
});

app.get('/download', (req, res)=>{
    var URL = req.query.URL;

    res.header('Content-Disposition', 'attachment; filename="video.mp4');

    ytdl(URL, {
        format: 'mp4'
    }).pipe(res);
});