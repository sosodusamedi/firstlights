// fetch data from the api
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import config from './config';
import axios from 'axios';
import App from './src/components/App';
import data from './testData';


const getApiUrl = userId => {
  if (userId) {
    return `${config.serverUrl}/api/users/${userId}`;
  }
  return `${config.serverUrl}/api/users`;
};

const getInitialData = (userId, apiData) => {
  if(userId){
    return {
      currentUserId: apiData.id,
      users: {
        [apiData.id]: apiData
      }
    };
  }
  return {
    users: apiData.users
  };
};

const serverRender = (contestId) => {
  axios.get(getApiUrl(contestId))
    .then(resp => {
      const initialData = getInitialData(contestId, resp.data);
      return {
        initialMarkup: ReactDOMServer.renderToString(
          <App initialData={initialData}/>
        ),
        initialData
      };
    });
};

export default serverRender;
