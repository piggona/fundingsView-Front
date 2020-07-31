import Vue from "vue";
import Router from "vue-router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/search",
      component: () =>
        import(/* webpackChunkName: "patent" */ "./layout/BasicLayout"),
      children: [
        {
          path: "/search/basic",
          name: "search",
          component: () =>
            import(/* webpackChunkName: "patent" */ "./views/Search/Basic")
        },
        {
          path: "/search/multi",
          name: "multiSearch",
          component: () =>
            import(/* webpackChunkName: "patent" */ "./views/Search/Multi")
        }
      ]
    },
    {
      path: "/",
      component: () =>
        import(/* webpackChunkName: "patent" */ "./layout/BasicLayout"),
      children: [
        {
          path: "/",
          redirect: "/search/basic"
        },
        {
          path: "/analysis",
          component: { render: h => h("router-view") },
          children: [
            {
              path: "/analysis/fundings",
              name: "fundingsAnalysis",
              component: () =>
                import(
                  /* webpackChunkName: "patent" */ "./views/Analysis/Fundings"
                )
            },
            {
              path: "/analysis/category",
              name: "categoryAnalysis",
              component: () => 
                import(
                  /* webpackChunkName: "patent" */ "./views/Analysis/Category"
                )
            },
            {
              path: "/analysis/tech",
              name: "techAnalysis",
              component: () => 
                import(
                  /* webpackChunkName: "patent" */ "./views/Analysis/Tech"
                )
            },
            {
              path: "/analysis/org",
              name: "techAnalysis",
              component: () => 
                import(
                  /* webpackChunkName: "patent" */ "./views/Analysis/Org"
                )
            },
            {
              path: "/analysis/industry",
              name: "techAnalysis",
              component: () => 
                import(
                  /* webpackChunkName: "patent" */ "./views/Analysis/Industry"
                )
            }
          ]
        },
        {
          path: "*",
          name: "404",
          component: () => import(/* webpackChunkName: "ipc" */ "./views/404")
        }
      ]
    }
  ]
});

router.beforeEach((to, from, next) => {
  NProgress.start();
  next();
});

router.afterEach(() => {
  NProgress.done();
});

export default router;
