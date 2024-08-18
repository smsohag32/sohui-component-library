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
npm i sohui-component-library
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

```bash
import React from 'react';
import { Dropdown, Table } from 'my-ui-library';

function App() {
  const dropdownOptions = ['Option 1', 'Option 2', 'Option 3'];
  const tableColumns = ['Name', 'Age', 'Occupation'];
  const tableData = [
    { Name: 'John Doe', Age: 28, Occupation: 'Developer' },
    { Name: 'Jane Doe', Age: 32, Occupation: 'Designer' },
    { Name: 'Sam Smith', Age: 24, Occupation: 'Product Manager' },
  ];

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">My App</h1>
      <h2 className="text-lg font-semibold mb-2">Dropdown Example</h2>
      <Dropdown options={dropdownOptions} label="Select an option" />
      <h2 className="text-lg font-semibold mt-6 mb-2">Table Example</h2>
      <Table columns={tableColumns} data={tableData} />
    </div>
  );
}

export default App

```

### Key Points:

-  **Installation**: Instructions for installing the library.
-  **Usage**: How to import and use the components.
-  **Components**: Detailed information and code examples for `Dropdown` and `Table`.
-  **Contributing**: Guidelines for contributing to the project.
-  **License**: Licensing information.

You can copy and paste this into your `README.md` file.
