'use strict';

define("recipe-book/tests/helpers/index", ["exports", "ember-qunit"], function (_exports, _emberQunit) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.setupApplicationTest = setupApplicationTest;
  _exports.setupRenderingTest = setupRenderingTest;
  _exports.setupTest = setupTest;
  0; //eaimeta@70e063a35619d71f0,"ember-qunit"eaimeta@70e063a35619d71f
  // This file exists to provide wrappers around ember-qunit's
  // test setup functions. This way, you can easily extend the setup that is
  // needed per test type.

  function setupApplicationTest(hooks, options) {
    (0, _emberQunit.setupApplicationTest)(hooks, options);

    // Additional setup for application tests can be done here.
    //
    // For example, if you need an authenticated session for each
    // application test, you could do:
    //
    // hooks.beforeEach(async function () {
    //   await authenticateSession(); // ember-simple-auth
    // });
    //
    // This is also a good place to call test setup functions coming
    // from other addons:
    //
    // setupIntl(hooks); // ember-intl
    // setupMirage(hooks); // ember-cli-mirage
  }
  function setupRenderingTest(hooks, options) {
    (0, _emberQunit.setupRenderingTest)(hooks, options);

    // Additional setup for rendering tests can be done here.
  }
  function setupTest(hooks, options) {
    (0, _emberQunit.setupTest)(hooks, options);

    // Additional setup for unit tests can be done here.
  }
});
define("recipe-book/tests/integration/components/recipe-short-overview-test", ["qunit", "recipe-book/tests/helpers", "@ember/test-helpers", "@ember/template-factory"], function (_qunit, _helpers, _testHelpers, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"recipe-book/tests/helpers",0,"@ember/test-helpers",0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | recipe-short-overview', function (hooks) {
    (0, _helpers.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <RecipeShortOverview />
      */
      {
        "id": "kjgz1jY6",
        "block": "[[[8,[39,0],null,null,null]],[],false,[\"recipe-short-overview\"]]",
        "moduleName": "/Users/goktm/Desktop/recipe-book/recipe-book/tests/integration/components/recipe-short-overview-test.js",
        "isStrictMode": false
      }));
      assert.dom().hasText('');

      // Template block usage:
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <RecipeShortOverview>
              template block text
            </RecipeShortOverview>
          
      */
      {
        "id": "k/B219ds",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        template block text\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"recipe-short-overview\"]]",
        "moduleName": "/Users/goktm/Desktop/recipe-book/recipe-book/tests/integration/components/recipe-short-overview-test.js",
        "isStrictMode": false
      }));
      assert.dom().hasText('template block text');
    });
  });
});
define("recipe-book/tests/test-helper", ["recipe-book/app", "recipe-book/config/environment", "qunit", "@ember/test-helpers", "qunit-dom", "ember-qunit"], function (_app, _environment, QUnit, _testHelpers, _qunitDom, _emberQunit) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"recipe-book/app",0,"recipe-book/config/environment",0,"qunit",0,"@ember/test-helpers",0,"qunit-dom",0,"ember-qunit"eaimeta@70e063a35619d71f
  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));
  (0, _qunitDom.setup)(QUnit.assert);
  (0, _emberQunit.start)();
});
define("recipe-book/tests/unit/controllers/create-recipe-test", ["qunit", "recipe-book/tests/helpers"], function (_qunit, _helpers) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"recipe-book/tests/helpers"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Unit | Controller | create-recipe', function (hooks) {
    (0, _helpers.setupTest)(hooks);

    // TODO: Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      let controller = this.owner.lookup('controller:create-recipe');
      assert.ok(controller);
    });
  });
});
define("recipe-book/tests/unit/models/recipe-test", ["qunit", "recipe-book/tests/helpers"], function (_qunit, _helpers) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"recipe-book/tests/helpers"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Unit | Model | recipe', function (hooks) {
    (0, _helpers.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      let store = this.owner.lookup('service:store');
      let model = store.createRecord('recipe', {});
      assert.ok(model);
    });
  });
});
define("recipe-book/tests/unit/routes/create-recipe-test", ["qunit", "recipe-book/tests/helpers"], function (_qunit, _helpers) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"recipe-book/tests/helpers"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Unit | Route | create-recipe', function (hooks) {
    (0, _helpers.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:create-recipe');
      assert.ok(route);
    });
  });
});
define("recipe-book/tests/unit/routes/favorites-test", ["qunit", "recipe-book/tests/helpers"], function (_qunit, _helpers) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"recipe-book/tests/helpers"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Unit | Route | favorites', function (hooks) {
    (0, _helpers.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:favorites');
      assert.ok(route);
    });
  });
});
define("recipe-book/tests/unit/routes/recipes-test", ["qunit", "recipe-book/tests/helpers"], function (_qunit, _helpers) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"recipe-book/tests/helpers"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Unit | Route | recipes', function (hooks) {
    (0, _helpers.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:recipes');
      assert.ok(route);
    });
  });
});
define("recipe-book/tests/unit/routes/recipes/details-test", ["qunit", "recipe-book/tests/helpers"], function (_qunit, _helpers) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"recipe-book/tests/helpers"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Unit | Route | recipes/details', function (hooks) {
    (0, _helpers.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:recipes/details');
      assert.ok(route);
    });
  });
});
define("recipe-book/tests/unit/services/recipe-data-test", ["qunit", "recipe-book/tests/helpers"], function (_qunit, _helpers) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"recipe-book/tests/helpers"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Unit | Service | recipe-data', function (hooks) {
    (0, _helpers.setupTest)(hooks);

    // TODO: Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      let service = this.owner.lookup('service:recipe-data');
      assert.ok(service);
    });
  });
});
define('recipe-book/config/environment', [], function() {
  var prefix = 'recipe-book';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

require('recipe-book/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
