import dva from 'dva';
import { createBrowserHistory as createHistory } from 'history';
import './index.css';
// import './sass/all.scss';


// 1. Initialize 有帶#號
// const app = dva();

// 1. Initialize 不帶#號
const app = dva({
    history: createHistory()
});

// 2. Plugins
// app.use({});

// 3. Model
app.model(require('./models/auth').default);
// app.model(require('./models/example').default);

// 4. Router
app.router(require('./router').default);
// app.router(require('./../config/router.config').default);

// 5. Start
app.start('#root');
