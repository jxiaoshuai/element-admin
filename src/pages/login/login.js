export default {
    data: function() {
        return {
            param: {
                username: 'admin',
                password: '123123',
            },
            rules: {
                username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
                password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
            },
        };
    },
    methods: {
        submitForm() {
            this.$refs.login.validate(valid => { 
                if (valid) {
                    this.$message.success('登录成功');
                    sessionStorage.setItem('username', this.param.username);
                    this.$router.push('/homeList');
                } else {
                    this.$message.error('请输入账号和密码');
                    return false;
                }
            });
        },
    }
};