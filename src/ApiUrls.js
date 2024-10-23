const API_BASE_URL = 'http://localhost:8083';

const API_URLS = {

    //login register
  LOGIN: `${API_BASE_URL}/auth/token`,
  REGISTER: `${API_BASE_URL}/auth/register`,

  //refresh token
  REFRESH_TOKEN: `${API_BASE_URL}/auth/refreshToken`,

// user
  GET_USER_PROFILE: `${API_BASE_URL}/auth/get/user`,
  UPDATE_USER_PROFILE: `${API_BASE_URL}/auth/update/user`,
  SEARCH_USER_PROFILE: (email) => `${API_BASE_URL}/search/${email}`,
  
  //get events/task
  GET_USER_EVENTS: `${API_BASE_URL}/auth/event`,
  GET_USER_TASKS: `${API_BASE_URL}/auth/task`,

  //Update event/task
  UPDATE_USER_EVENTS: `${API_BASE_URL}/auth/save-event`,
  UPDATE_USER_TASKS: `${API_BASE_URL}/auth/save-task`,
  
  // delete event/task
  DELETE_EVENT: (eventId) => `${API_BASE_URL}/event/delete/${eventId}`,
  DELETE_TASK: (taskId) => `${API_BASE_URL}/Task/delete/${taskId}`,

  //                      admin only 


  //CRUD on masters of countries
  GET_MASTER_COUNTRIES: `${API_BASE_URL}/masters/countries`,
  CREATE_MASTER_COUNTRIES: `${API_BASE_URL}/masters/country/create`,
  DELETE_MASTER_COUNTRIES: (Id) => `${API_BASE_URL}/masters/country/delete/${Id}`,
  UPDATE_MASTER_COUNTRIES: (Id) => `${API_BASE_URL}/masters/country/update/${Id}`,
  
  
  //CRUD on masters of dateformat
  GET_MASTER_DATEFORMAT: `${API_BASE_URL}/masters/date-formats`,
  CREATE_MASTER_DATEFORMAT: `${API_BASE_URL}/masters/date-format/create`,
  DELETE_MASTER_DATEFORMAT: (Id) => `${API_BASE_URL}/masters/date-format/delete/${Id}`,
  UPDATE_MASTER_DATEFORMAT: (Id) => `${API_BASE_URL}/masters/date-format/update/${Id}`,

  //CRUD on masters of language
  GET_MASTER_LANGUAGE: `${API_BASE_URL}/masters/languages`,
  CREATE_MASTER_LANGUAGE: `${API_BASE_URL}/masters/language/create`,
  DELETE_MASTER_LANGUAGE: (Id) => `${API_BASE_URL}/masters/language/delete/${Id}`,
  UPDATE_MASTER_LANGUAGE: (Id) => `${API_BASE_URL}/masters/language/update/${Id}`,

  //CRUD on masters of timezone
  GET_MASTER_TIMEZONE: `${API_BASE_URL}/masters/timezones`,
  CREATE_MASTER_TIMEZONE: `${API_BASE_URL}/masters/timezone/create`,
  DELETE_MASTER_TIMEZONE: (Id) => `${API_BASE_URL}/masters/timezone/delete/${Id}`,
  UPDATE_MASTER_TIMEZONE: (Id) => `${API_BASE_URL}/masters/timezone/update/${Id}`,
};

export default API_URLS;
