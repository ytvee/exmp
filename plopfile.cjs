module.exports = function (plop) {
  // Компонент
  plop.setGenerator('component', {
    description: 'Create a new component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Component name (PascalCase):',
        validate: (input) => {
          if (!input) return 'Component name is required';
          if (!/^[A-Z][a-zA-Z]*$/.test(input)) {
            return 'Component name must be in PascalCase';
          }
          return true;
        },
      },
      {
        type: 'list',
        name: 'type',
        message: 'Component type:',
        choices: [
          { name: 'Atom (базовый элемент)', value: 'atoms' },
          { name: 'Molecule (простая композиция)', value: 'molecules' },
          { name: 'Organism (сложная композиция)', value: 'organisms' },
          { name: 'Template (макет)', value: 'templates' },
        ],
      },
      {
        type: 'confirm',
        name: 'withStory',
        message: 'Create Storybook story?',
        default: true,
      },
      {
        type: 'confirm',
        name: 'withTest',
        message: 'Create test file?',
        default: true,
      },
    ],
    actions: (answers) => {
      const actions = [
      {
        type: 'add',
        path: 'src/packages/ui/{{type}}/{{name}}/{{name}}.tsx',
        templateFile: 'plop-templates/component/component.tsx.hbs',
      },
      {
        type: 'add',
        path: 'src/packages/ui/{{type}}/{{name}}/{{name}}.module.css',
        templateFile: 'plop-templates/component/component.module.css.hbs',
      },
      {
        type: 'add',
        path: 'src/packages/ui/{{type}}/{{name}}/{{name}}.types.ts',
        templateFile: 'plop-templates/component/component.types.ts.hbs',
      },
      {
        type: 'add',
        path: 'src/packages/ui/{{type}}/{{name}}/index.ts',
        templateFile: 'plop-templates/component/index.ts.hbs',
      },
      ];

      if (answers.withStory) {
        actions.push({
            type: 'add',
            path: 'src/packages/ui/{{type}}/{{name}}/{{name}}.stories.tsx',
            templateFile: 'plop-templates/component/component.stories.tsx.hbs',
        });
      }

      if (answers.withTest) {
        actions.push({
            type: 'add',
            path: 'src/packages/ui/{{type}}/{{name}}/__tests__/{{name}}.test.tsx',
            templateFile: 'plop-templates/component/component.test.tsx.hbs',
        });
      }

      return actions;
          },
  });

  // Хук
  plop.setGenerator('hook', {
    description: 'Create a new React hook',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Hook name (camelCase):',
        validate: (input) => {
          if (!input) return 'Hook name is required';
          if (!/^[a-z][a-zA-Z]*$/.test(input)) {
            return 'Hook name must be in camelCase';
          }
          return true;
        },
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/hooks/{{name}}.ts',
        templateFile: 'plop-templates/hook/hook.ts.hbs',
      },
      {
        type: 'add',
        path: 'src/hooks/__tests__/{{name}}.test.ts',
        templateFile: 'plop-templates/hook/hook.test.ts.hbs',
      },
    ],
  });

  // Утилита
  plop.setGenerator('util', {
    description: 'Create a new utility function',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Utility name (camelCase):',
        validate: (input) => {
          if (!input) return 'Utility name is required';
          if (!/^[a-z][a-zA-Z]*$/.test(input)) {
            return 'Utility name must be in camelCase';
          }
          return true;
        },
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/packages/utils/{{name}}.ts',
        templateFile: 'plop-templates/util/util.ts.hbs',
      },
      {
        type: 'add',
        path: 'src/packages/utils/__tests__/{{name}}.test.ts',
        templateFile: 'plop-templates/util/util.test.ts.hbs',
      },
    ],
  });
}; 