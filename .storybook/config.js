import { configure, addDecorator } from '@storybook/react';
import { withInfo } from "@storybook/addon-info"

// automatically import all files ending in *.stories.js

function loadStories() {
  const req = require.context('../src', true, /\.stories\.tsx$/)
  req.keys().forEach(req);
}

addDecorator(withInfo)
configure(loadStories, module);
