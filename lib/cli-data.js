const definitions = [
  {
    name: 'output',
    alias: 'o',
    type: String,
    typeLabel: '<file>',
    description:
      'path to an .md file that you want your documentation to be saved there. The default template is .github/workflows/README.md.',
  },
];

module.exports = {
  definitions: definitions,
  usageSections: [
    {
      header: 'workflows-to-markdown',
      content: 'Generates markdown documentation of your workflows.',
    },
  ],
};
