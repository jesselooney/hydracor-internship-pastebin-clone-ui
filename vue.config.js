module.exports = {
    pages: {
        index: {
            entry: 'src/index/main.js',
            template: 'public/index.html',
            filename: 'index.html',
            title: 'Your Pastes',
            chunks: ['chunk-vendors', 'chunk-common', 'index']
        },
        login: {
            entry: 'src/login/main.js',
            template: 'public/index.html',
            filename: 'login.html',
            title: 'Log In',
            chunks: ['chunk-vendors', 'chunk-common', 'login']
        },
        signup: {
            entry: 'src/signup/main.js',
            template: 'public/index.html',
            filename: 'signup.html',
            title: 'Sign Up',
            chunks: ['chunk-vendors', 'chunk-common', 'signup'] 
        },
        new: {
            entry: 'src/new/main.js',
            template: 'public/index.html',
            filename: 'new.html',
            title: 'New Paste',
            chunks: ['chunk-vendors', 'chunk-common', 'new'] 
        },
        edit: {
            entry: 'src/edit/main.js',
            template: 'public/index.html',
            filename: 'edit.html',
            title: 'Edit Paste',
            chunks: ['chunk-vendors', 'chunk-common', 'edit'] 
        },
    }
}