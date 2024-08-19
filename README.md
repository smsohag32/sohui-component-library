# Sohui UI Component Library

**Sohui** is a React UI component library built with Tailwind CSS. It provides reusable components like dropdowns and tables to help you quickly build modern web applications.

## Table of Contents

-  [Installation](#installation)
-  [Usage](#usage)
-  [Components](#components)
   -  [Dropdown](#dropdown)
   -  [Table](#table)

## Installation

To install the Sohui UI Component Library, run the following command:

```bash
npm i sohui-component-library
```

## Example

```bash
import React from 'react';
import { Dropdown, Table } from 'sohui-component-library';

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
