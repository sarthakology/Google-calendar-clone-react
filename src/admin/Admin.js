import React from 'react';
import useProfile from '../profileDataBackend/ProfileData';
import LanguagesAdmin from './LanguagesAdmin';
import CountriesAdmin from './CountriesAdmin';
import TimezonesAdmin from './TimezonesAdmin';
import FormatsAdmin from './FormatsAdmin';

import RoleUpdateAdmin from './RoleUpdateAdmin';
import {useTranslation} from "react-i18next";
import DeleteUsersAdmin from './DeleteUsersAdmin';


export default function Admin() {
  const {t} = useTranslation();  
  const profile = useProfile() || { role: 'Error' };

  // If the user's role is not "admin", return a message denying access
  if (profile.role !== 'admin') {
    return (
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-2xl font-bold text-red-500">{t("noadminaccess")}</h1>
      </div>
    );
  }

  // If the user is an admin, render the admin content
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold mb-4 text-green-500">{t("adminDashboard")}</h1>
      <LanguagesAdmin />
      <CountriesAdmin />
      <TimezonesAdmin />
      <FormatsAdmin />
      <RoleUpdateAdmin/>
      <DeleteUsersAdmin/>
    </div>
  );
}
