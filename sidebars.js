module.exports = {
  docs: [
    {
      type: 'category',
      label: 'Documentation',
      items: [
        'welcome',
        {
          type: 'category',
          label: 'Vision',
          items: [
            'vision/overview',
            'vision/accounts',
            'vision/authorities',
            'vision/chat',
            'vision/tokens',
            'vision/problems',
          ],
        },
        {
          type: 'category',
          label: 'Specifications',
          items: [
            'specs/overview',
            'specs/native_token',
          ],
        },
      ],
    },
  ],
};
