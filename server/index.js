const express = require('express');
const app = express();

app.use(require('cors')());
app.use(express.json());
app.use('/uploads', express.static(__dirname + '/uploads'));//托管静态文件，使得项目中的这个地址的文件可以通过/uploads来访问
require('./plugins/db')(app);
require('./routes/admin/index')(app);

app.listen(3000, () => {
    console.log("3000");
})