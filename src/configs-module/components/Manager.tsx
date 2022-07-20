import { useState } from 'react';
import CreateForm from './CreateForm';
import SearchForm from './SearchForm';
import TabList from './TabList';
import Fields from './Fields';
import { v4 as uuidv4 } from 'uuid';
import './style/Manager.css';

const Manager = (props: any) => {
  const { config } = props;
  const [tabs, setTabs] = useState(config.sections);
  const [tabValue, setTabValue] = useState(0);
  const [term, setTerm] = useState('');
  const [fields, setFields] = useState(tabs.map((t: any) => t.fields));

  console.log(fields);

  const deleteField = (_id: string) => {
    setFields(fields.filter((f: any) => f._id !== _id))
  }

  const addField = (name: string, value: any, type: string) => {
    const newItem = {
      _id: uuidv4(),
      name,
      value,
      type
    }
    const newArr = [...fields, newItem]
    setFields(newArr);
  }

  const handleUpdateSearch = (term: string) => {
    setTerm(term);
  }

  const onChangeProp = (_id: string, prop: any, value: any) => {
    setFields(
      fields.map((f: any) => {
        if (f._id === _id) {
          return { ...f, [prop]: value }
        }
        return f;
      }))
  }

  const searchConfig = (items: any, term: any) => {
    if (term.length === 0) {
      return items;
    }

    return items.filter((item: any) => {
      return item.name.indexOf(term) > -1
    })
  }

  const visibleData = searchConfig(fields, term);

  return (
    <div className="App">
      <SearchForm handleUpdateSearch={handleUpdateSearch} />
      <CreateForm onAdd={addField} />
      <TabList
        tabValue={tabValue}
        setTabValue={setTabValue}
        config={config}
        tabs={tabs}
        setTabs={setTabs}

      />
      <Fields
        fields={fields}
        data={visibleData}
        tabValue={tabValue}
        onDelete={deleteField}
        onChangeProp={onChangeProp}
        tabs={tabs}
      />
    </div>
  );
}

export default Manager;
