import './plugins/assets';

import { createApp } from 'vue';
import { printPlugin } from 'vue-print-next';
import { inject } from '@vercel/analytics'
import { setupGlobDirectives } from '@/directives';

import App from './App.vue';
import { setupI18n } from './locales';
import { setupAppVersionNotification, setupDayjs, setupIconifyOffline, setupLoading, setupNProgress } from './plugins';
import { setupRouter } from './router';
import { setupStore } from './store';

async function setupApp() {

  // Vercel 统计
  inject();

  setupLoading();

  setupNProgress();

  setupIconifyOffline();

  setupDayjs();

  const app = createApp(App);

  setupStore(app);

  await setupRouter(app);
  // 打印插件
  app.use(printPlugin);

  // 自定义指令
  setupGlobDirectives(app);

  setupI18n(app);

  setupAppVersionNotification();

  app.mount('#app');
}

setupApp();
