# Sohui UI Component Library

**Sohui** is a React UI component library built with Tailwind CSS. It provides reusable components like dropdowns and tables to help you quickly build modern web applications.

## Table of Contents

-  [Installation](#installation)
-  [Usage](#usage)
-  [Components](#components)
   -  [Dropdown](#dropdown)
   -  [Table](#table)
-  [Contributing](#contributing)
-  [License](#license)

## Installation

To install the Sohui UI Component Library, run the following command:

```bash
npm install sohui
```

## Example

```bash
import React from 'react';
import { Dropdown } from 'sohui';

function App() {
  const handleSelect = (option) => {
    alert(`Selected: ${option}`);
  };

  return (
    <div className="p-4">
      <Dropdown
        options={['Option 1', 'Option 2', 'Option 3']}
        onSelect={handleSelect}
        placeholder="Select an option"
        className="w-64"
      />
    </div>
  );
}

export default App;

```

### Key Points:

-  **Installation**: Instructions for installing the library.
-  **Usage**: How to import and use the components.
-  **Components**: Detailed information and code examples for `Dropdown` and `Table`.
-  **Contributing**: Guidelines for contributing to the project.
-  **License**: Licensing information.

You can copy and paste this into your `README.md` file.
