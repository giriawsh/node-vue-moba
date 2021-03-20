module.exports = app => {
    const express = require('express');
    const AdminUser = require('../../models/AdminUser');
    const jwt = require('jsonwebtoken');
    const assert = require('http-assert');
    const router = express.Router({
        mergeParams: true//合并URL参数 要不然无法在${req.params.resource}中获取
    });//子路由
    //创建资源
    router.post('/', async (req, res) => {
        const model = await req.Model.create(req.body);
        res.send(model);
    })
    //资源列表
    router.get('/', async (req, res) => {
        let queryOptions = {};
        if (req.Model.modelName === 'Category') {
            queryOptions.populate = 'parent';
        }
        const items = await req.Model.find().setOptions(queryOptions).limit(10);
        res.send(items);
    })
    //资源详情
    router.get('/:id', async (req, res) => {
        const model = await req.Model.findById(req.params.id)
        res.send(model);
    })
    //更新资源
    router.put('/:id', async (req, res) => {
        const model = await req.Model.findByIdAndUpdate(req.params.id, req.body);
        res.send(model);
    })
    //删除资源
    router.delete('/:id', async (req, res) => {
        await req.Model.findByIdAndDelete(req.params.id, req.body);
        res.send({
            success: true
        });
    })
    //登录校验中间件
    const authMiddleware = require('../../middleware/auth');
    const resourceMiddleware = require('../../middleware/resource');
    app.use('/admin/api/rest/:resource', authMiddleware(), resourceMiddleware(), router);


    const multer = require('multer');
    const upload = multer({dest: __dirname + '/../../uploads'});//上传地址
    app.post('/admin/api/upload', authMiddleware(), upload.single('file'), async (req, res) => {
        const file = req.file;
        file.url = `http://localhost:3000/uploads/${file.filename}`;
        res.send(file);
    });
    app.post('/admin/api/login', async (req, res) => {
        //校验 返回token
        const {username, password} = req.body;
        // res.send('ok');
        //1. 根据用户名找用户
        const user = await AdminUser.findOne({
            username: username
        }).select('+password');//把password取出来
        // if (!user) {
        //     return res.status(422).send({
        //         message: '用户不存在'
        //     })
        // }
        assert(user, 422, '用户不存在')
        //2. 校验密码
        const isValid = require('bcryptjs').compareSync(password, user.password);
        // if (!isValid) {
        //     return res.status(422).send({
        //         message: '密码错误'
        //     })
        // }
        assert(isValid, 422, '密码错误')

        //3. 返回token
        const token = jwt.sign({
            id: user._id
        }, app.get('secret'));
        res.send({token});
    })

    //错误处理
    app.use(async (err, req, res, next) => {
        // console.log(err);
        res.status(err.statusCode || 500).send({
            message: err.message
        })
    })
}