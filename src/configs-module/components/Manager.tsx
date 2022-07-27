import { useState } from 'react';
import CreateForm from './CreateForm';
import SearchForm from './SearchForm';
import TabList from './TabList';
import Section from './Section';
import { v4 as uuidv4 } from 'uuid';
import './style/Manager.css';
import { Typography, styled } from '@mui/material';
import { Container } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const NoSectionsContainer = styled(Container)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '125ch',
  height: '50ch',
  borderRadius: '15px',
  margin: '0 10px',
  boxShadow: 'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;'
}))

const NoSectionsText = styled(Typography)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}))

const MiniAddIcon = styled(AddIcon)(({ theme }) => ({
  fontSize: 23,
  padding: '3px',
  backgroundColor: theme.palette.primary.main,
  color: 'white',
  borderRadius: 20,
  margin: '0 6px'
}))

const Manager = (props: any) => {
  const { config } = props;
  const [tabValue, setTabValue] = useState(0);
  const [term, setTerm] = useState('');
  const [configure, setConfigure] = useState(config);

  const addField = (name: string, value: any, type: string) => {
    const newItem = {
      _id: uuidv4(),
      name,
      value,
      type
    }
    const newArr = [...configure.sections[tabValue].fields, newItem]

    setConfigure((prevState: any) => {
      const newState = { ...prevState };
      newState.sections[tabValue] = newArr;
      return newState
    });
  }

  const handleUpdateSearch = (term: string) => {
    setTerm(term);
  }

  return (
    <div className="App">
      <SearchForm handleUpdateSearch={handleUpdateSearch} />
      <CreateForm onAdd={addField} />
      <TabList
        tabValue={tabValue}
        setTabValue={setTabValue}
        configure={configure}
        setConfigure={setConfigure}
      />
      {configure.sections.length !== 0 ? configure.sections.map((s: any, i: any) => {
        return (
          <>
            {tabValue === i && <Section
              {...s}
              term={term}
              tabValue={tabValue}
              configure={configure}
              setConfigure={setConfigure}
            />}
          </>
        )
      }) : <NoSectionsContainer>
        <NoSectionsText variant="overline">
          Click on the {<MiniAddIcon />} button to add the first section
        </NoSectionsText>
      </NoSectionsContainer>}

    </div>
  );
}

export default Manager;
